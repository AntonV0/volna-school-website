import type { RegistrationContent } from "@/content/registration-content";
import type { TrialRegistrationFieldErrors } from "@/lib/registration/validation";
import type { RegistrationSupportText } from "@/components/registration/trial-registration-form-config";
import { FieldShell, FormSection, errorProps, inputClassName } from "@/components/registration/trial-registration-form-ui";

type ContactSectionProps = {
  content: RegistrationContent["form"];
  errors: TrialRegistrationFieldErrors;
  isParentNameRequired: boolean;
  optionalLabel?: string;
  requiredLabel: string;
  supportText: RegistrationSupportText;
  title: string;
};

export function TrialRegistrationContactSection({
  content,
  errors,
  isParentNameRequired,
  optionalLabel,
  requiredLabel,
  supportText,
  title,
}: ContactSectionProps) {
  return (
    <FormSection
      description={supportText.contactIntro}
      title={title}
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <FieldShell
          error={errors.learnerName}
          htmlFor="learnerName"
          label={content.fields.learnerName}
          requiredLabel={requiredLabel}
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
            {...errorProps(errors, "learnerName")}
          />
        </FieldShell>

        <FieldShell
          error={errors.parentName}
          hint={
            isParentNameRequired
              ? supportText.parentNameRequired
              : supportText.parentNameOptional
          }
          htmlFor="parentName"
          label={content.fields.parentName}
          optionalLabel={!isParentNameRequired ? optionalLabel : undefined}
          requiredLabel={isParentNameRequired ? requiredLabel : undefined}
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
            {...errorProps(errors, "parentName")}
          />
        </FieldShell>

        <FieldShell
          error={errors.email}
          htmlFor="email"
          label={content.fields.email}
          requiredLabel={requiredLabel}
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
            {...errorProps(errors, "email")}
          />
        </FieldShell>

        <FieldShell
          error={errors.phone}
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
            {...errorProps(errors, "phone")}
          />
        </FieldShell>

        <FieldShell
          error={errors.preferredContact}
          hint={supportText.preferredContact}
          htmlFor="preferredContact"
          label={content.fields.preferredContact}
          requiredLabel={requiredLabel}
        >
          <select
            aria-required="true"
            className={inputClassName}
            defaultValue=""
            id="preferredContact"
            name="preferredContact"
            {...errorProps(errors, "preferredContact")}
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
  );
}
