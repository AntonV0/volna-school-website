import { RegistrationSelect } from "./registration-select";
import { useState } from "react";
import type { RegistrationContent } from "@/content/registration-content";
import type { TrialRegistrationFieldErrors } from "@/lib/registration/validation";
import type { RegistrationSupportText } from "@/components/registration/trial-registration-form-config";
import {
  FieldShell,
  FormSection,
  errorProps,
  inputClassName,
} from "@/components/registration/trial-registration-form-ui";

type ContactSectionProps = {
  content: RegistrationContent["form"];
  errors: TrialRegistrationFieldErrors;
  isParentNameRequired: boolean;
  hideParentName?: boolean;
  optionalLabel?: string;
  requiredLabel: string;
  supportText: Omit<RegistrationSupportText, "contactIntro"> & {
    contactIntro: string;
  };
  title: string;
};

export function TrialRegistrationContactSection({
  content,
  errors,
  isParentNameRequired,
  hideParentName = false,
  optionalLabel,
  requiredLabel,
  supportText,
  title,
}: ContactSectionProps) {
  const [parentName, setParentName] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const phoneRequired = preferredContact === "phone";
  return (
    <FormSection description={supportText.contactIntro} title={title}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FieldShell
          error={errors.learnerName}
          htmlFor="learnerName"
          label={content.fields.learnerName}
          requiredLabel={requiredLabel}
        >
          <input
            aria-required="true"
            autoComplete="section-learner name"
            className={inputClassName}
            id="learnerName"
            maxLength={120}
            name="learnerName"
            placeholder={content.placeholders.learnerName}
            type="text"
            {...errorProps(errors, "learnerName")}
          />
        </FieldShell>

        {!hideParentName && (
          <FieldShell
            error={errors.parentName}
            hint={
              isParentNameRequired
                ? requiredLabel === "Required"
                  ? undefined
                  : supportText.parentNameRequired
                : supportText.parentNameOptional
            }
            htmlFor="parentName"
            label={content.fields.parentName}
            optionalLabel={!isParentNameRequired ? optionalLabel : undefined}
            requiredLabel={isParentNameRequired ? requiredLabel : undefined}
          >
            <input
              aria-required={isParentNameRequired}
              autoComplete="section-contact name"
              className={inputClassName}
              id="parentName"
              value={parentName}
              onChange={(event) => setParentName(event.target.value)}
              maxLength={120}
              name="parentName"
              placeholder={content.placeholders.parentName}
              type="text"
              {...errorProps(errors, "parentName")}
            />
          </FieldShell>
        )}

        <FieldShell
          error={errors.email}
          htmlFor="email"
          label={content.fields.email}
          requiredLabel={requiredLabel}
        >
          <input
            aria-required="true"
            autoComplete="section-contact email"
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
          error={errors.preferredContact}
          hint={
            requiredLabel === "Required"
              ? undefined
              : supportText.preferredContact
          }
          htmlFor="preferredContact"
          label={content.fields.preferredContact}
          requiredLabel={requiredLabel}
        >
          <RegistrationSelect
            aria-required="true"
            className={inputClassName}
            defaultValue=""
            onChange={(event) => setPreferredContact(event.target.value)}
            choices={requiredLabel === "Required"}
            id="preferredContact"
            name="preferredContact"
            {...errorProps(errors, "preferredContact")}
          >
            <option disabled value="">
              {content.requiredLabel === "Required"
                ? "Choose a contact method"
                : "Выберите вариант"}
            </option>
            {content.contactOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </RegistrationSelect>
        </FieldShell>

        <FieldShell
          error={errors.phone}
          hint={
            phoneRequired
              ? "Enter the number we should call."
              : supportText.phone
          }
          htmlFor="phone"
          label={content.fields.phone}
          requiredLabel={phoneRequired ? requiredLabel : undefined}
          optionalLabel={phoneRequired ? undefined : optionalLabel}
        >
          <input
            aria-required={phoneRequired}
            autoComplete="section-contact tel"
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
      </div>
    </FormSection>
  );
}
