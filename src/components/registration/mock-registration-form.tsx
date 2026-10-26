"use client";

import { startTransition, useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { registrationContent } from "@/content/registration-content";
import { submitTrialRegistration } from "@/lib/registration/actions";
import { initialTrialRegistrationState } from "@/lib/registration/validation";
import { TRIAL_NOTES_LIMIT } from "@/lib/registration/constraints";
import { TrialRegistrationConsentField } from "./trial-registration-consent-field";
import { TrialRegistrationStatusAlert } from "./trial-registration-status-alert";
import { TurnstileWidget } from "./turnstile-widget";
import { FieldShell, errorProps, inputClassName, SubmitButton } from "./trial-registration-form-ui";

export function MockRegistrationForm({ initialMockInterest = "written" }: { initialMockInterest?: "written" | "speaking" }) {
  const [enquiryFor, setEnquiryFor] = useState("child");
  const [preferredContact, setPreferredContact] = useState("email");
  const [phone, setPhone] = useState("");
  const [ready, setReady] = useState(!process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY);
  const [attempt, setAttempt] = useState(0);
  const [state, action, pending] = useActionState(async (previous: typeof initialTrialRegistrationState, data: FormData) => {
    try {
      const result = await submitTrialRegistration(previous, data);
      if (result.status !== "success") {
        setReady(!process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY);
        setAttempt(value => value + 1);
      }
      return result;
    } catch {
      setReady(!process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY);
      setAttempt(value => value + 1);
      return {
        errors: {},
        message: "Your enquiry could not be sent. Please try again or email info@volnaschool.com. Your entered details are still here.",
        status: "submit-error" as const,
      };
    }
  }, initialTrialRegistrationState);
  const content = {
    ...registrationContent.en.form,
    successTitle: "Mock-exam enquiry received",
    fields: { ...registrationContent.en.form.fields, consent: "I agree that Volna School may contact me about this mock-exam enquiry." },
  };
  const success = state.status === "success";
  // A parent is no longer required when the student is enquiring for themselves.
  // Keep server validation intact, but omit the now-inapplicable summary link.
  const visibleErrors = { ...state.errors };
  if (enquiryFor === "self") delete visibleErrors.parentName;
  if (preferredContact !== "phone" && !phone.trim()) delete visibleErrors.phone;
  const visibleState = { ...state, errors: visibleErrors };
  useEffect(() => {
    if (state.status === "idle") return;
    document.getElementById("registration-status")?.focus();
  }, [state]);
  return (
    <SectionContainer className="bg-[linear-gradient(180deg,var(--section-wash),white)]">
      <div className="mx-auto max-w-3xl">
        <Link href="/gcse-courses/exam-guide#mock-exams" className="inline-flex min-h-11 items-center font-semibold text-brand-teal underline underline-offset-4">Back to GCSE mock exams</Link>
        <header className="mb-8 mt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-route-exam">GCSE Russian mock exams</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-brand-teal-deep sm:text-5xl">Register interest in mock exams.</h1>
          <p className="mt-4 leading-7 text-muted-foreground">Tell us which mock exams you’re interested in. We’ll contact you about the available options and next steps. This is an enquiry, not a confirmed booking; no payment details are needed.</p>
        </header>
        <div className="rounded-xl border border-brand-teal/15 bg-white p-5 shadow-sm sm:p-8">
          <TrialRegistrationStatusAlert content={content} isError={!success && state.status !== "idle"} isSuccess={success} state={visibleState} />
          {!success && <form action={action} onSubmit={event => {
            event.preventDefault();
            if (!ready || pending) return;
            const data = new FormData(event.currentTarget);
            startTransition(() => action(data));
          }} aria-busy={pending} className="space-y-6" noValidate>
            <input type="hidden" name="locale" value="en" />
            <input type="hidden" name="courseInterest" value="gcse" />
            <input type="hidden" name="sourcePath" value="/registration?course=gcse&enquiry=mock" />
            <div hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
            <noscript><p>Please email info@volnaschool.com to enquire about mock exams if JavaScript is unavailable.</p></noscript>
            <fieldset disabled={pending} className="min-w-0 space-y-6">
              <FieldShell htmlFor="mockInterest" label="Mock exams or speaking support" requiredLabel="Required" error={state.errors.mockInterest}>
                <select id="mockInterest" name="mockInterest" defaultValue={initialMockInterest} className={inputClassName} {...errorProps(state.errors, "mockInterest")}>
                  <option value="written">Listening, reading and writing</option>
                  <option value="speaking">Speaking mock or preparation</option>
                  <option value="both">Both options</option>
                  <option value="not_sure">Not sure yet</option>
                </select>
              </FieldShell>
              <FieldShell htmlFor="enquiryFor" label="Who is this enquiry for?">
                <select id="enquiryFor" name="enquiryFor" value={enquiryFor} onChange={e => setEnquiryFor(e.target.value)} className={inputClassName}>
                  <option value="child">My child</option><option value="self">Myself</option>
                </select>
              </FieldShell>
              <div className="grid gap-5 sm:grid-cols-2">
                <FieldShell htmlFor="learnerName" label="Student’s name" requiredLabel="Required" error={state.errors.learnerName}>
                  <input id="learnerName" name="learnerName" autoComplete="section-learner name" maxLength={120} aria-required="true" className={inputClassName} {...errorProps(state.errors, "learnerName")} />
                </FieldShell>
                {enquiryFor === "child" && <FieldShell htmlFor="parentName" label="Parent or guardian’s name" requiredLabel="Required" error={state.errors.parentName}>
                  <input id="parentName" name="parentName" autoComplete="section-contact name" maxLength={120} aria-required="true" className={inputClassName} {...errorProps(state.errors, "parentName")} />
                </FieldShell>}
                <FieldShell htmlFor="email" label="Contact email" requiredLabel="Required" error={state.errors.email}>
                  <input id="email" name="email" type="email" autoComplete="email" maxLength={160} aria-required="true" className={inputClassName} {...errorProps(state.errors, "email")} />
                </FieldShell>
                <FieldShell htmlFor="phone" label="Phone number" requiredLabel={preferredContact === "phone" ? "Required" : undefined} optionalLabel={preferredContact !== "phone" ? "Optional" : undefined} error={visibleErrors.phone}>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" value={phone} onChange={event => setPhone(event.target.value)} maxLength={60} aria-required={preferredContact === "phone"} className={inputClassName} {...errorProps(visibleErrors, "phone")} />
                </FieldShell>
                <FieldShell htmlFor="examYear" label="Intended GCSE exam year" optionalLabel="Optional" error={state.errors.examYear}>
                  <input id="examYear" name="examYear" inputMode="numeric" maxLength={4} placeholder="For example, 2027" className={inputClassName} {...errorProps(state.errors, "examYear")} />
                </FieldShell>
                <FieldShell htmlFor="preferredContact" label="How should we contact you?" requiredLabel="Required" error={state.errors.preferredContact}>
                  <select id="preferredContact" name="preferredContact" value={preferredContact} onChange={e => setPreferredContact(e.target.value)} className={inputClassName} {...errorProps(state.errors, "preferredContact")}>
                    <option value="email">Email</option><option value="phone">Phone</option><option value="either">Either</option>
                  </select>
                </FieldShell>
              </div>
              <FieldShell htmlFor="message" label="Anything else we should know?" optionalLabel="Optional" error={state.errors.message}>
                <textarea id="message" name="message" rows={3} maxLength={TRIAL_NOTES_LIMIT} className={inputClassName} {...errorProps(state.errors, "message")} />
              </FieldShell>
              <TrialRegistrationConsentField content={content} errors={state.errors} />
              <p className="text-sm text-muted-foreground">Read how we use your information in our <Link href="/privacy-policy" className="underline underline-offset-4">Privacy Policy</Link>.</p>
              <TurnstileWidget key={attempt} attempt={attempt} onReadyChange={setReady} />
              <SubmitButton isPending={pending} disabled={!ready || pending} label="Send mock-exam enquiry" pendingLabel="Sending enquiry…" />
            </fieldset>
          </form>}
        </div>
      </div>
    </SectionContainer>
  );
}
