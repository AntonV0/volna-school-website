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
        className="-mx-2 flex min-h-11 gap-3 rounded-md p-2 text-sm leading-6 text-foreground transition focus-within:ring-3 focus-within:ring-brand-teal/15"
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
          <span className="ml-2 text-xs text-muted-foreground">
            {content.requiredLabel}
          </span>
        </span>
      </label>
      {errors.consent ? (
        <p
          className="text-sm font-medium leading-5 text-brand-red"
          id="consent-error"
        >
          {errors.consent}
        </p>
      ) : null}
    </div>
  );
}
