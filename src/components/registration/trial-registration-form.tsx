"use client";

import { RegistrationIcon } from "./registration-icon";

import {
  useActionState,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  startTransition,
} from "react";
import {
  RegistrationProgress,
  RegistrationReview,
} from "./registration-progress";
import {
  registrationFieldStep,
  registrationStepErrors,
  readRegistrationReview,
  type RegistrationReviewRow,
} from "./registration-steps";
import {
  buttonBaseClassName,
  buttonVariants,
} from "@/components/ui/button-link";
import type { FormEvent } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  registrationOrigin,
  safeCoursePath,
} from "@/components/analytics/course-journey-context";

import { TrialRegistrationConfidenceSection } from "@/components/registration/trial-registration-confidence-section";
import { TrialRegistrationConsentField } from "@/components/registration/trial-registration-consent-field";
import { TrialRegistrationContactSection } from "@/components/registration/trial-registration-contact-section";
import { TrialRegistrationCourseSection } from "@/components/registration/trial-registration-course-section";
import { TrialRegistrationNotesSection } from "@/components/registration/trial-registration-notes-section";
import { TrialRegistrationStatusAlert } from "@/components/registration/trial-registration-status-alert";
import { TrialRegistrationSubmitPanel } from "@/components/registration/trial-registration-submit-panel";
import type { RegistrationContent } from "@/content/registration-content";
import {
  conversionEvents,
  trackConversionEvent,
} from "@/lib/analytics/conversions";
import type { Locale } from "@/lib/i18n/config";
import { submitTrialRegistration } from "@/lib/registration/actions";
import {
  initialTrialRegistrationState,
  parseTrialRegistrationForm,
  validateTrialRegistration,
} from "@/lib/registration/validation";
import {
  analyticsContactMethods,
  analyticsCourseInterests,
  formSectionLabels,
  formSupportText,
  parentRequiredCourseInterests,
  safeAnalyticsOption,
} from "@/components/registration/trial-registration-form-config";

const subscribeHydration = () => () => {};
const clientHydrated = () => true;
const serverHydrated = () => false;

// Only known public course routes are eligible; never capture queries or external URLs.
function entryCoursePath() {
  const journeyOrigin = registrationOrigin();
  if (journeyOrigin) return journeyOrigin;
  const raw =
    new URLSearchParams(window.location.search).get("from") ||
    document.referrer;
  if (!raw) return undefined;
  try {
    const url = new URL(raw, window.location.origin);
    if (url.origin !== window.location.origin) return undefined;
    return safeCoursePath(url.pathname);
  } catch {
    return undefined;
  }
}

type TrialRegistrationFormProps = {
  content: RegistrationContent["form"];
  initialCourseInterest?: string;
  initialClassPreference?: string;
  initialAdultFocus?: string;
  initialChildrenFocus?: string;
  initialEnquiryFor?: string;
  onCourseChange?: (course: string) => void;
  locale: Locale;
};

export function TrialRegistrationForm({
  content,
  initialCourseInterest = "",
  initialClassPreference,
  initialAdultFocus,
  initialChildrenFocus,
  initialEnquiryFor,
  onCourseChange,
  locale,
}: TrialRegistrationFormProps) {
  const pathname = usePathname();
  const isMultiStep = locale === "en";
  const [step, setStep] = useState(0);
  const [review, setReview] = useState<RegistrationReviewRow[][]>([]);
  const [localValidation, setLocalValidation] = useState<
    typeof initialTrialRegistrationState | null
  >(null);
  const navigationFrame = useRef(0);
  const hydrated = useSyncExternalStore(
    subscribeHydration,
    clientHydrated,
    serverHydrated,
  );
  const [verificationReady, setVerificationReady] = useState(
    !process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY,
  );
  const [verificationAttempt, setVerificationAttempt] = useState(0);
  const submittedCourse = useRef<string | undefined>(undefined);
  const originPath = useRef<string | undefined>(undefined);
  useEffect(() => {
    originPath.current = entryCoursePath();
  }, []);
  const [serverState, formAction, pending] = useActionState(
    async (previous: typeof initialTrialRegistrationState, data: FormData) => {
      const errors = validateTrialRegistration(
        parseTrialRegistrationForm(data),
        content.validation,
      );
      if (Object.keys(errors).length)
        return {
          errors,
          message:
            locale === "en"
              ? "Check the highlighted answers below."
              : content.errorTitle,
          status: "validation-error" as const,
        };
      try {
        const result = await submitTrialRegistration(previous, data);
        if (result.status !== "success") {
          setVerificationReady(
            !process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY,
          );
          setVerificationAttempt((value) => value + 1);
        }
        if (isMultiStep && result.status === "validation-error") {
          setStep(
            Math.min(...Object.keys(result.errors).map(registrationFieldStep)),
          );
        }
        return result;
      } catch {
        setVerificationReady(
          !process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY,
        );
        setVerificationAttempt((value) => value + 1);
        return {
          errors: {},
          message: content.submitError,
          status: "submit-error" as const,
        };
      }
    },
    initialTrialRegistrationState,
  );
  const state = localValidation ?? serverState;
  const formRef = useRef<HTMLFormElement>(null);
  const revalidationFrame = useRef(0);
  const [editedValidation, setEditedValidation] = useState<{
    source: typeof state;
    errors: typeof state.errors;
  } | null>(null);
  const allVisibleErrors =
    editedValidation?.source === state ? editedValidation.errors : state.errors;
  const visibleErrors = isMultiStep
    ? registrationStepErrors(allVisibleErrors, step)
    : allVisibleErrors;
  const displayState =
    state.status === "validation-error" &&
    Object.keys(visibleErrors).length === 0
      ? { ...state, errors: visibleErrors, message: "" }
      : { ...state, errors: visibleErrors };

  useEffect(
    () => () => {
      cancelAnimationFrame(revalidationFrame.current);
      cancelAnimationFrame(navigationFrame.current);
    },
    [],
  );

  function goToStep(next: number) {
    setVerificationReady(
      !process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY,
    );
    if (formRef.current && next === 2) {
      setReview([
        readRegistrationReview(formRef.current, 0),
        readRegistrationReview(formRef.current, 1),
      ]);
    }
    setLocalValidation(null);
    setEditedValidation(null);
    setStep(next);
    cancelAnimationFrame(navigationFrame.current);
    navigationFrame.current = requestAnimationFrame(() => {
      const heading = document.getElementById("registration-step-heading");
      if (!heading) return;
      heading.focus({ preventScroll: true });
      const bounds = heading.getBoundingClientRect();
      if (bounds.top < 112 || bounds.bottom > window.innerHeight - 24) {
        heading.scrollIntoView({
          block: "start",
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        });
      }
    });
  }

  function validateStep(data: FormData, currentStep?: number) {
    const all = validateTrialRegistration(
      parseTrialRegistrationForm(data),
      content.validation,
    );
    const errors =
      currentStep === undefined
        ? all
        : registrationStepErrors(all, currentStep);
    if (!Object.keys(errors).length) return true;
    if (isMultiStep)
      setStep(Math.min(...Object.keys(errors).map(registrationFieldStep)));
    setLocalValidation({
      status: "validation-error",
      errors,
      message: "Check the highlighted answers below.",
    });
    setEditedValidation(null);
    return false;
  }

  function refreshVisibleErrors() {
    if (!Object.keys(state.errors).length) return;
    cancelAnimationFrame(revalidationFrame.current);
    // Dependent fields must finish rendering before we validate their current values.
    revalidationFrame.current = requestAnimationFrame(() => {
      if (!formRef.current) return;
      const current = validateTrialRegistration(
        parseTrialRegistrationForm(new FormData(formRef.current)),
        content.validation,
      );
      const errors = Object.fromEntries(
        Object.entries(current).filter(([key]) => key in state.errors),
      );
      setEditedValidation({ source: state, errors });
    });
  }

  const [courseInterest, setCourseInterest] = useState(initialCourseInterest);
  const isAdultEnquiry = locale === "en" && courseInterest === "adults";
  const isEnglishExamEnquiry =
    locale === "en" &&
    (courseInterest === "gcse" || courseInterest === "alevel");
  const [enquiryFor, setEnquiryFor] = useState(
    initialEnquiryFor === "self" ? "self" : "child",
  );
  const isSelfEnquiry =
    isAdultEnquiry || (isEnglishExamEnquiry && enquiryFor === "self");
  const isSuccess = state.status === "success";
  const isError =
    state.status === "validation-error" ||
    state.status === "config-error" ||
    state.status === "submit-error";
  const isParentNameRequired =
    parentRequiredCourseInterests.has(courseInterest) && !isSelfEnquiry;
  const sectionLabels = formSectionLabels[locale];
  const supportText = formSupportText[locale];
  const optionalLabel = supportText.optionalLabel || undefined;
  const hasTrackedStart = useRef(false);
  const hasTrackedCompletion = useRef(false);

  useEffect(() => {
    if (state.status !== "success" || hasTrackedCompletion.current) {
      return;
    }

    hasTrackedCompletion.current = true;
    trackConversionEvent(conversionEvents.trialRegistrationCompleted, {
      course_interest: submittedCourse.current,
      locale,
      source_path: pathname,
      origin_path: originPath.current,
    });
  }, [locale, pathname, state.status]);

  function handleFormFocus() {
    if (hasTrackedStart.current) {
      return;
    }

    hasTrackedStart.current = true;
    trackConversionEvent(conversionEvents.trialRegistrationStarted, {
      course_interest: safeAnalyticsOption(
        initialCourseInterest,
        analyticsCourseInterests,
      ),
      locale,
      source_path: pathname,
      origin_path: originPath.current,
    });
  }

  useEffect(() => {
    if (state.status !== "idle") {
      const alert = document.getElementById("registration-status");
      alert?.focus();
      alert?.scrollIntoView({ block: "start", behavior: "instant" });
    }
  }, [state]);

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending || !hydrated) return;
    const formData = new FormData(event.currentTarget);
    if (isMultiStep && step < 2) {
      if (validateStep(formData, step)) goToStep(step + 1);
      return;
    }
    if (isMultiStep && !validateStep(formData)) return;
    if (!verificationReady) return;
    setLocalValidation(null);
    submittedCourse.current = safeAnalyticsOption(
      formData.get("courseInterest"),
      analyticsCourseInterests,
    );
    startTransition(() => formAction(formData));

    trackConversionEvent(conversionEvents.trialRegistrationAttempted, {
      course_interest: safeAnalyticsOption(
        formData.get("courseInterest"),
        analyticsCourseInterests,
      ),
      locale,
      preferred_contact: safeAnalyticsOption(
        formData.get("preferredContact"),
        analyticsContactMethods,
      ),
      source_path: pathname,
      origin_path: originPath.current,
    });
  }

  const notesSection = (
    <TrialRegistrationNotesSection
      locale={locale}
      content={
        isAdultEnquiry
          ? {
              ...content,
              placeholders: {
                ...content.placeholders,
                message:
                  "Previous Russian study, what you’d like to achieve, and days or times that work for you.",
              },
            }
          : isEnglishExamEnquiry
            ? {
                ...content,
                placeholders: {
                  ...content.placeholders,
                  message:
                    "Intended exam year, previous Russian study and areas you’d like help with.",
                },
              }
            : content
      }
      errors={visibleErrors}
      optionalLabel={optionalLabel}
      supportText={supportText}
    />
  );

  if (isSuccess)
    return (
      <section
        id="registration-status"
        tabIndex={-1}
        role="status"
        className="scroll-mt-28 rounded-lg bg-brand-teal-soft p-6 outline-none"
      >
        <RegistrationIcon
          name="check"
          className="mb-4 size-10 rounded-full bg-white p-2 text-brand-teal"
        />
        <h2 className="text-2xl font-semibold text-brand-teal-deep">
          {content.successTitle}
        </h2>
        <p className="mt-4 leading-7">{content.successMessage}</p>
        {locale === "en" && (
          <p className="mt-3 text-sm leading-6">
            Your request is sent. Your lesson time will be agreed with the
            school; you don’t need to submit this form again.
          </p>
        )}
      </section>
    );

  return (
    <form
      ref={formRef}
      aria-busy={pending}
      method="post"
      action={pathname}
      onChange={refreshVisibleErrors}
      className="space-y-6"
      noValidate
      onFocusCapture={handleFormFocus}
      onSubmit={handleFormSubmit}
    >
      <noscript>
        <p className="rounded-lg bg-brand-teal-soft p-4">
          This form needs JavaScript. Please email{" "}
          <a href="mailto:info@volnaschool.com" className="underline">
            info@volnaschool.com
          </a>{" "}
          to arrange your trial.
        </p>
      </noscript>
      <fieldset disabled={!hydrated || pending} className="min-w-0 space-y-6">
        <legend className="sr-only">Trial request details</legend>
        <input name="locale" type="hidden" value={locale} />
        <input name="sourcePath" type="hidden" value={pathname} />
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">{content.fields.website}</label>
          <input
            autoComplete="off"
            id="website"
            name="website"
            tabIndex={-1}
            type="text"
          />
        </div>

        {isMultiStep && <RegistrationProgress step={step} onBack={goToStep} />}
        <TrialRegistrationStatusAlert
          content={content}
          isError={isError}
          isSuccess={isSuccess}
          state={displayState}
        />
        <div
          hidden={isMultiStep && step !== 0}
          className={
            isMultiStep
              ? "registration-step [&>div]:border-0 [&>div]:pb-0 [&>div>h3]:hidden [&>div>p]:mt-0"
              : undefined
          }
        >
          <TrialRegistrationCourseSection
            courseInterest={courseInterest}
            enquiryFor={enquiryFor}
            setEnquiryFor={setEnquiryFor}
            isSelfEnquiry={isSelfEnquiry}
            locale={locale}
            isChildrenEnquiry={locale === "en" && courseInterest === "children"}
            isExamEnquiry={isEnglishExamEnquiry}
            initialChildrenFocus={initialChildrenFocus}
            isAdultEnquiry={isAdultEnquiry}
            initialAdultFocus={initialAdultFocus}
            initialClassPreference={initialClassPreference}
            content={
              isMultiStep
                ? {
                    ...content,
                    fieldHints: {
                      ...content.fieldHints,
                      courseInterest: "",
                      classPreference: "We can help you choose at your trial.",
                    },
                  }
                : content
            }
            errors={visibleErrors}
            initialCourseInterest={initialCourseInterest}
            optionalLabel={optionalLabel}
            setCourseInterest={(course) => {
              setCourseInterest(course);
              onCourseChange?.(course);
            }}
            supportText={
              isAdultEnquiry
                ? {
                    ...supportText,
                    courseIntro:
                      "Choose a focus, or let your teacher help you find a starting point.",
                  }
                : supportText
            }
            title={sectionLabels.course}
          />
        </div>
        <div
          hidden={isMultiStep && step !== 1}
          className={
            isMultiStep
              ? "registration-step [&>div]:border-0 [&>div]:pb-0 [&>div>h3]:hidden [&>div>p]:mt-0"
              : undefined
          }
        >
          <TrialRegistrationContactSection
            hideParentName={isSelfEnquiry}
            content={
              isSelfEnquiry
                ? {
                    ...content,
                    fields: { ...content.fields, learnerName: "Your name" },
                    placeholders: {
                      ...content.placeholders,
                      learnerName: "Your full name",
                    },
                  }
                : isEnglishExamEnquiry ||
                    (locale === "en" && courseInterest === "children")
                  ? {
                      ...content,
                      fields: {
                        ...content.fields,
                        parentName: "Parent or guardian name",
                      },
                      placeholders: {
                        ...content.placeholders,
                        parentName: "Name of the person we should contact",
                      },
                    }
                  : content
            }
            errors={visibleErrors}
            isParentNameRequired={isParentNameRequired}
            optionalLabel={optionalLabel}
            requiredLabel={content.requiredLabel}
            supportText={
              isSelfEnquiry
                ? {
                    ...supportText,
                    contactIntro:
                      "Enter your name and the contact details we should use to arrange your trial.",
                  }
                : isEnglishExamEnquiry ||
                    (locale === "en" && courseInterest === "children")
                  ? {
                      ...supportText,
                      contactIntro:
                        "Enter your child’s name and your contact details so we can arrange their trial.",
                    }
                  : supportText
            }
            title={sectionLabels.contact}
          />
        </div>
        <div
          hidden={isMultiStep && step !== 2}
          className="registration-step space-y-6"
        >
          {isMultiStep && (
            <RegistrationReview rows={review} onEdit={goToStep} />
          )}
          <details
            className="registration-disclosure rounded-lg bg-brand-teal-soft/25 p-4"
            open={
              Object.keys(visibleErrors).some((key) =>
                [
                  "russianAtHome",
                  "speakingAbility",
                  "writingAbility",
                  "readingAbility",
                  "message",
                ].includes(key),
              ) || undefined
            }
          >
            <summary className="registration-control w-full cursor-pointer p-1 text-left font-semibold text-brand-teal">
              {locale === "en"
                ? "Add learning background or availability (optional)"
                : sectionLabels.confidence}
              <RegistrationIcon
                name="chevron"
                className="registration-chevron ml-auto shrink-0"
              />
            </summary>
            <div className="registration-disclosure-content">
              {isMultiStep && <div className="mt-5">{notesSection}</div>}
              <div className="mt-5">
                <TrialRegistrationConfidenceSection
                  content={content}
                  errors={visibleErrors}
                  optionalLabel={optionalLabel}
                  supportText={supportText}
                  title={sectionLabels.confidence}
                />
              </div>
            </div>
          </details>
          {!isMultiStep && notesSection}
          <TrialRegistrationConsentField
            content={content}
            errors={visibleErrors}
          />
          {locale === "en" && (
            <p className="text-sm leading-6 text-muted-foreground">
              Read how we use your information in our{" "}
              <Link
                href="/privacy-policy"
                className="text-brand-teal underline underline-offset-4"
              >
                privacy policy
              </Link>
              .
            </p>
          )}
          {(!isMultiStep || step === 2) && (
            <TrialRegistrationSubmitPanel
              onBack={isMultiStep ? () => goToStep(1) : undefined}
              pending={pending}
              disabled={!hydrated || !verificationReady}
              verificationAttempt={verificationAttempt}
              onVerificationChange={setVerificationReady}
              content={content}
              supportText={supportText}
            />
          )}
        </div>
        {isMultiStep && step < 2 && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border-soft pt-5">
            {step > 0 ? (
              <button
                type="button"
                className={`registration-control ${buttonBaseClassName} ${buttonVariants.ghost}`}
                onClick={() => goToStep(step - 1)}
              >
                <RegistrationIcon name="back" /> Back
              </button>
            ) : (
              <a
                href="mailto:info@volnaschool.com"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-teal underline underline-offset-4"
              >
                Need help?
              </a>
            )}
            <button
              type="submit"
              className={`${buttonBaseClassName} ${buttonVariants.primary} min-h-12`}
            >
              {step === 0
                ? "Continue to contact details"
                : "Review your request"}
              <RegistrationIcon name="next" className="ml-2 shrink-0" />
            </button>
          </div>
        )}
      </fieldset>
    </form>
  );
}
