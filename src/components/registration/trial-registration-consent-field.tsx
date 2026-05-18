import type { RegistrationContent } from "@/content/registration-content";
import type { TrialRegistrationFieldErrors } from "@/lib/registration/validation";
import { errorProps } from "@/components/registration/trial-registration-form-ui";

type ConsentFieldProps = {
  content: RegistrationContent["form"];
  errors: TrialRegistrationFieldErrors;
};

export function TrialRegistrationConsentField({
  content,
  errors,
}: ConsentFieldProps) {
  return (
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
          {...errorProps(errors, "consent")}
        />
        <span>
          {content.fields.consent}
          <span className="ml-2 rounded-sm bg-brand-red/10 px-2 py-0.5 text-xs font-semibold text-brand-red">
            {content.requiredLabel}
          </span>
        </span>
      </label>
      {errors.consent ? (
        <p className="text-sm font-medium leading-5 text-brand-red" id="consent-error">
          {errors.consent}
        </p>
      ) : null}
    </div>
  );
}
