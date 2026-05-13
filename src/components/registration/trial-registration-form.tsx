"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { usePathname } from "next/navigation";

import type { RegistrationContent } from "@/content/registration-content";
import { submitTrialRegistration } from "@/lib/registration/actions";
import {
  initialTrialRegistrationState,
  type TrialRegistrationFieldErrors,
} from "@/lib/registration/validation";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/classnames";
import {
  conversionEvents,
  trackConversionEvent,
} from "@/lib/analytics/conversions";
import { TurnstileWidget } from "@/components/registration/turnstile-widget";

type TrialRegistrationFormProps = {
  content: RegistrationContent["form"];
  initialCourseInterest?: string;
  locale: Locale;
};

type FieldShellProps = {
  children: ReactNode;
  error?: string;
  hint?: string;
  htmlFor: string;
  label: string;
  optionalLabel?: string;
  requiredLabel?: string;
};

const formSectionLabels = {
  en: {
    contact: "Learner and contact",
    course: "Course fit",
    confidence: "Confidence snapshot",
  },
  ru: {
    contact: "Ученик и контакт",
    course: "Подбор курса",
    confidence: "Уровень уверенности",
  },
} as const;

const formSupportText = {
  en: {
    contactIntro:
      "Use the parent or guardian name for children and exam learners. Adult learners can leave it blank.",
    courseIntro:
      "These answers help the school suggest a group, private route, or exam pathway before the trial.",
    confidenceIntro:
      "Approximate answers are enough. This is for placement, not assessment.",
    learnerAge:
      "Age or school year helps match the right group; adults can note a rough level or goal.",
    parentNameRequired: "Required for children's and exam enquiries.",
    parentNameOptional: "Optional for adult learners.",
    phone: "Optional, but useful if lesson times are easier to confirm by phone.",
    preferredContact: "Choose how you would like the school to follow up.",
    russianAtHome:
      "This helps distinguish bilingual, heritage, and beginner routes.",
    notesTitle: "Trial notes",
    notesIntro:
      "Add anything that would help the school arrange a useful first conversation.",
    optionalLabel: "Optional",
    submitNote:
      "No payment details are requested here. The school will confirm timing and fit before lessons continue.",
  },
  ru: {
    contactIntro: "",
    courseIntro: "",
    confidenceIntro: "",
    learnerAge: "",
    parentNameRequired: "",
    parentNameOptional: "",
    phone: "",
    preferredContact: "",
    russianAtHome: "",
    notesTitle: "",
    notesIntro: "",
    optionalLabel: "",
    submitNote: "",
  },
} as const;

function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      aria-live="polite"
      className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-brand-red px-5 py-3 text-center text-sm font-semibold leading-5 text-white shadow-[0_12px_24px_rgba(239,50,50,0.22)] transition hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-72 sm:w-auto"
      disabled={pending}
      type="submit"
    >
      {pending ? pendingLabel : label}
    </button>
  );
}

function FormSection({
  children,
  description,
  title,
}: {
  children: ReactNode;
  description?: string;
  title: string;
}) {
  return (
    <div className="rounded-lg border border-brand-teal/15 bg-surface-blue/55 p-4 sm:p-5">
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-teal">
        {title}
      </h3>
      {description ? (
        <p className="-mt-3 mb-5 max-w-2xl text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

function FieldShell({
  children,
  error,
  hint,
  htmlFor,
  label,
  optionalLabel,
  requiredLabel,
}: FieldShellProps) {
  const badgeLabel = requiredLabel ?? optionalLabel;

  return (
    <div className="grid min-w-0 gap-2">
      <label
        className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-foreground"
        htmlFor={htmlFor}
      >
        <span>{label}</span>
        {badgeLabel ? (
          <span
            className={cn(
              "rounded-sm px-2 py-0.5 text-xs font-semibold",
              requiredLabel
                ? "bg-brand-red/10 text-brand-red"
                : "bg-white text-muted-foreground ring-1 ring-border-soft",
            )}
          >
            {badgeLabel}
          </span>
        ) : null}
      </label>
      {hint ? (
        <p className="text-sm leading-5 text-muted-foreground">{hint}</p>
      ) : null}
      {children}
      {error ? (
        <p className="text-sm font-medium leading-5 text-brand-red" id={`${htmlFor}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

function errorProps(errors: TrialRegistrationFieldErrors, name: string) {
  const error = errors[name as keyof TrialRegistrationFieldErrors];

  return {
    "aria-describedby": error ? `${name}-error` : undefined,
    "aria-invalid": error ? true : undefined,
  };
}

const inputClassName =
  "min-h-12 w-full min-w-0 rounded-md border border-border-soft bg-white px-3 py-2 text-base text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-brand-teal focus:ring-3 focus:ring-brand-teal/15 aria-invalid:border-brand-red aria-invalid:ring-3 aria-invalid:ring-brand-red/10";

const analyticsCourseInterests = new Set([
  "children",
  "gcse",
  "alevel",
  "adults",
  "not_sure",
]);
const parentRequiredCourseInterests = new Set(["children", "gcse", "alevel"]);
const analyticsContactMethods = new Set(["email", "phone", "either"]);

function safeAnalyticsOption(value: FormDataEntryValue | null, allowed: Set<string>) {
  if (typeof value !== "string" || !allowed.has(value)) {
    return undefined;
  }

  return value;
}

export function TrialRegistrationForm({
  content,
  initialCourseInterest = "",
  locale,
}: TrialRegistrationFormProps) {
  const pathname = usePathname();
  const [state, formAction] = useActionState(
    submitTrialRegistration,
    initialTrialRegistrationState,
  );
  const [courseInterest, setCourseInterest] = useState(initialCourseInterest);
  const isSuccess = state.status === "success";
  const isError =
    state.status === "validation-error" ||
    state.status === "config-error" ||
    state.status === "submit-error";
  const isParentNameRequired =
    parentRequiredCourseInterests.has(courseInterest);
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
      locale,
      source_path: pathname,
    });
  }, [locale, pathname, state.status]);

  function handleFormFocus() {
    if (hasTrackedStart.current) {
      return;
    }

    hasTrackedStart.current = true;
    trackConversionEvent(conversionEvents.trialRegistrationStarted, {
      locale,
      source_path: pathname,
    });
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);

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
    });
  }

  return (
    <form
      action={formAction}
      className="space-y-6"
      noValidate
      onFocusCapture={handleFormFocus}
      onSubmit={handleFormSubmit}
    >
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

      {state.message ? (
        <div
          className={cn(
            "rounded-md border p-4 text-sm leading-6",
            isSuccess &&
              "border-brand-teal/30 bg-brand-teal-soft text-brand-teal-deep",
            isError && "border-brand-red/25 bg-red-50 text-brand-red-dark",
          )}
          aria-live="polite"
          role={isError ? "alert" : "status"}
        >
          <p className="font-semibold">
            {isSuccess ? content.successTitle : content.errorTitle}
          </p>
          <p>{state.message}</p>
        </div>
      ) : null}

      <FormSection
        description={supportText.contactIntro}
        title={sectionLabels.contact}
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <FieldShell
            error={state.errors.learnerName}
            htmlFor="learnerName"
            label={content.fields.learnerName}
            requiredLabel={content.requiredLabel}
          >
            <input
              aria-required="true"
              autoComplete="name"
              className={inputClassName}
              id="learnerName"
              maxLength={120}
              name="learnerName"
              placeholder={content.placeholders.learnerName}
              type="text"
              {...errorProps(state.errors, "learnerName")}
            />
          </FieldShell>

          <FieldShell
            error={state.errors.parentName}
            hint={
              isParentNameRequired
                ? supportText.parentNameRequired
                : supportText.parentNameOptional
            }
            htmlFor="parentName"
            label={content.fields.parentName}
            optionalLabel={!isParentNameRequired ? optionalLabel : undefined}
            requiredLabel={isParentNameRequired ? content.requiredLabel : undefined}
          >
            <input
              aria-required={isParentNameRequired}
              autoComplete="name"
              className={inputClassName}
              id="parentName"
              maxLength={120}
              name="parentName"
              placeholder={content.placeholders.parentName}
              type="text"
              {...errorProps(state.errors, "parentName")}
            />
          </FieldShell>

          <FieldShell
            error={state.errors.email}
            htmlFor="email"
            label={content.fields.email}
            requiredLabel={content.requiredLabel}
          >
            <input
              aria-required="true"
              autoComplete="email"
              className={inputClassName}
              id="email"
              maxLength={160}
              name="email"
              placeholder={content.placeholders.email}
              type="email"
              {...errorProps(state.errors, "email")}
            />
          </FieldShell>

          <FieldShell
            error={state.errors.phone}
            hint={supportText.phone}
            htmlFor="phone"
            label={content.fields.phone}
            optionalLabel={optionalLabel}
          >
            <input
              autoComplete="tel"
              className={inputClassName}
              id="phone"
              inputMode="tel"
              maxLength={60}
              name="phone"
              placeholder={content.placeholders.phone}
              type="tel"
              {...errorProps(state.errors, "phone")}
            />
          </FieldShell>

          <FieldShell
            error={state.errors.preferredContact}
            hint={supportText.preferredContact}
            htmlFor="preferredContact"
            label={content.fields.preferredContact}
            requiredLabel={content.requiredLabel}
          >
            <select
              aria-required="true"
              className={inputClassName}
              defaultValue=""
              id="preferredContact"
              name="preferredContact"
              {...errorProps(state.errors, "preferredContact")}
            >
              <option disabled value="" />
              {content.contactOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FieldShell>
        </div>
      </FormSection>

      <FormSection
        description={supportText.courseIntro}
        title={sectionLabels.course}
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <FieldShell
            error={state.errors.learnerAge}
            hint={supportText.learnerAge}
            htmlFor="learnerAge"
            label={content.fields.learnerAge}
            optionalLabel={optionalLabel}
          >
            <input
              className={inputClassName}
              id="learnerAge"
              maxLength={80}
              name="learnerAge"
              placeholder={content.placeholders.learnerAge}
              type="text"
              {...errorProps(state.errors, "learnerAge")}
            />
          </FieldShell>

          <FieldShell
            error={state.errors.courseInterest}
            hint={content.fieldHints.courseInterest}
            htmlFor="courseInterest"
            label={content.fields.courseInterest}
            requiredLabel={content.requiredLabel}
          >
            <select
              aria-required="true"
              className={inputClassName}
              defaultValue={initialCourseInterest}
              id="courseInterest"
              name="courseInterest"
              onChange={(event) => setCourseInterest(event.currentTarget.value)}
              {...errorProps(state.errors, "courseInterest")}
            >
              <option disabled value="" />
              {content.courseOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FieldShell>

          <FieldShell
            error={state.errors.classPreference}
            hint={content.fieldHints.classPreference}
            htmlFor="classPreference"
            label={content.fields.classPreference}
            optionalLabel={optionalLabel}
          >
            <select
              className={inputClassName}
              defaultValue=""
              id="classPreference"
              name="classPreference"
              {...errorProps(state.errors, "classPreference")}
            >
              <option value="" />
              {content.classPreferenceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FieldShell>
        </div>
      </FormSection>

      <FormSection
        description={supportText.confidenceIntro}
        title={sectionLabels.confidence}
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <FieldShell
            error={state.errors.russianAtHome}
            hint={supportText.russianAtHome}
            htmlFor="russianAtHome"
            label={content.fields.russianAtHome}
            optionalLabel={optionalLabel}
          >
            <select
              className={inputClassName}
              defaultValue=""
              id="russianAtHome"
              name="russianAtHome"
              {...errorProps(state.errors, "russianAtHome")}
            >
              <option value="" />
              {content.russianAtHomeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FieldShell>

          <FieldShell
            error={state.errors.speakingAbility}
            hint={content.fieldHints.ability}
            htmlFor="speakingAbility"
            label={content.fields.speakingAbility}
            optionalLabel={optionalLabel}
          >
            <select
              className={inputClassName}
              defaultValue=""
              id="speakingAbility"
              name="speakingAbility"
              {...errorProps(state.errors, "speakingAbility")}
            >
              <option value="" />
              {content.abilityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FieldShell>

          <FieldShell
            error={state.errors.writingAbility}
            hint={content.fieldHints.ability}
            htmlFor="writingAbility"
            label={content.fields.writingAbility}
            optionalLabel={optionalLabel}
          >
            <select
              className={inputClassName}
              defaultValue=""
              id="writingAbility"
              name="writingAbility"
              {...errorProps(state.errors, "writingAbility")}
            >
              <option value="" />
              {content.abilityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FieldShell>

          <FieldShell
            error={state.errors.readingAbility}
            hint={content.fieldHints.ability}
            htmlFor="readingAbility"
            label={content.fields.readingAbility}
            optionalLabel={optionalLabel}
          >
            <select
              className={inputClassName}
              defaultValue=""
              id="readingAbility"
              name="readingAbility"
              {...errorProps(state.errors, "readingAbility")}
            >
              <option value="" />
              {content.abilityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FieldShell>
        </div>
      </FormSection>

      <FormSection
        description={supportText.notesIntro}
        title={supportText.notesTitle || content.fields.message}
      >
        <FieldShell
          error={state.errors.message}
          hint={content.fieldHints.message}
          htmlFor="message"
          label={content.fields.message}
          optionalLabel={optionalLabel}
        >
          <textarea
            className={cn(inputClassName, "min-h-32 resize-y")}
            id="message"
            maxLength={1000}
            name="message"
            placeholder={content.placeholders.message}
            {...errorProps(state.errors, "message")}
          />
        </FieldShell>
      </FormSection>

      <div className="grid gap-2">
        <label
          className="flex gap-3 rounded-md border border-border-soft bg-brand-blue-soft/50 p-4 text-sm leading-6 text-foreground transition focus-within:border-brand-teal focus-within:ring-3 focus-within:ring-brand-teal/15"
          htmlFor="consent"
        >
          <input
            aria-required="true"
            className="mt-0.5 size-5 shrink-0 rounded border-border-soft text-brand-teal focus:ring-brand-teal"
            id="consent"
            name="consent"
            type="checkbox"
            {...errorProps(state.errors, "consent")}
          />
          <span>
            {content.fields.consent}
            <span className="ml-2 rounded-sm bg-brand-red/10 px-2 py-0.5 text-xs font-semibold text-brand-red">
              {content.requiredLabel}
            </span>
          </span>
        </label>
        {state.errors.consent ? (
          <p className="text-sm font-medium leading-5 text-brand-red" id="consent-error">
            {state.errors.consent}
          </p>
        ) : null}
      </div>

      <div className="rounded-lg border border-border-soft bg-white p-4 shadow-sm">
        <TurnstileWidget />
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <SubmitButton
            label={content.submitLabel}
            pendingLabel={content.pendingLabel}
          />
          {supportText.submitNote ? (
            <p className="text-sm leading-6 text-muted-foreground">
              {supportText.submitNote}
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
