"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { usePathname } from "next/navigation";

import { TrialRegistrationConfidenceSection } from "@/components/registration/trial-registration-confidence-section";
import { TrialRegistrationConsentField } from "@/components/registration/trial-registration-consent-field";
import { TrialRegistrationContactSection } from "@/components/registration/trial-registration-contact-section";
import { TrialRegistrationCourseSection } from "@/components/registration/trial-registration-course-section";
import { TrialRegistrationNotesSection } from "@/components/registration/trial-registration-notes-section";
import { TrialRegistrationStatusAlert } from "@/components/registration/trial-registration-status-alert";
import { TrialRegistrationSubmitPanel } from "@/components/registration/trial-registration-submit-panel";
import type { RegistrationContent } from "@/content/registration-content";
import { conversionEvents, trackConversionEvent } from "@/lib/analytics/conversions";
import type { Locale } from "@/lib/i18n/config";
import { submitTrialRegistration } from "@/lib/registration/actions";
import { initialTrialRegistrationState } from "@/lib/registration/validation";
import {
  analyticsContactMethods,
  analyticsCourseInterests,
  formSectionLabels,
  formSupportText,
  parentRequiredCourseInterests,
  safeAnalyticsOption,
} from "@/components/registration/trial-registration-form-config";

type TrialRegistrationFormProps = {
  content: RegistrationContent["form"];
  initialCourseInterest?: string;
  locale: Locale;
};

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

      <TrialRegistrationStatusAlert
        content={content}
        isError={isError}
        isSuccess={isSuccess}
        state={state}
      />
      <TrialRegistrationContactSection
        content={content}
        errors={state.errors}
        isParentNameRequired={isParentNameRequired}
        optionalLabel={optionalLabel}
        requiredLabel={content.requiredLabel}
        supportText={supportText}
        title={sectionLabels.contact}
      />
      <TrialRegistrationCourseSection
        content={content}
        errors={state.errors}
        initialCourseInterest={initialCourseInterest}
        optionalLabel={optionalLabel}
        setCourseInterest={setCourseInterest}
        supportText={supportText}
        title={sectionLabels.course}
      />
      <TrialRegistrationConfidenceSection
        content={content}
        errors={state.errors}
        optionalLabel={optionalLabel}
        supportText={supportText}
        title={sectionLabels.confidence}
      />
      <TrialRegistrationNotesSection
        content={content}
        errors={state.errors}
        optionalLabel={optionalLabel}
        supportText={supportText}
      />
      <TrialRegistrationConsentField
        content={content}
        errors={state.errors}
      />
      <TrialRegistrationSubmitPanel
        content={content}
        supportText={supportText}
      />
    </form>
  );
}
