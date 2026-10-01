import { RegistrationSelect } from "./registration-select";
import type { RegistrationContent } from "@/content/registration-content";
import type { TrialRegistrationFieldErrors } from "@/lib/registration/validation";
import type { RegistrationSupportText } from "@/components/registration/trial-registration-form-config";
import {
  FieldShell,
  FormSection,
  errorProps,
  inputClassName,
} from "@/components/registration/trial-registration-form-ui";

type ConfidenceSectionProps = {
  content: RegistrationContent["form"];
  errors: TrialRegistrationFieldErrors;
  optionalLabel?: string;
  supportText: RegistrationSupportText;
  title: string;
};

export function TrialRegistrationConfidenceSection({
  content,
  errors,
  optionalLabel,
  supportText,
  title,
}: ConfidenceSectionProps) {
  return (
    <FormSection description={supportText.confidenceIntro} title={title}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FieldShell
          error={errors.russianAtHome}
          hint={supportText.russianAtHome}
          htmlFor="russianAtHome"
          label={content.fields.russianAtHome}
          optionalLabel={optionalLabel}
        >
          <RegistrationSelect
            className={inputClassName}
            defaultValue=""
            id="russianAtHome"
            name="russianAtHome"
            {...errorProps(errors, "russianAtHome")}
          >
            <option value="">
              {content.requiredLabel === "Required"
                ? "Choose an answer (optional)"
                : "Не указано"}
            </option>
            {content.russianAtHomeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </RegistrationSelect>
        </FieldShell>

        <FieldShell
          error={errors.speakingAbility}
          hint={
            content.requiredLabel === "Required"
              ? undefined
              : content.fieldHints.ability
          }
          htmlFor="speakingAbility"
          label={content.fields.speakingAbility}
          optionalLabel={optionalLabel}
        >
          <RegistrationSelect
            className={inputClassName}
            defaultValue=""
            id="speakingAbility"
            name="speakingAbility"
            {...errorProps(errors, "speakingAbility")}
          >
            <option value="">
              {content.requiredLabel === "Required"
                ? "Choose an answer (optional)"
                : "Не указано"}
            </option>
            {content.abilityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </RegistrationSelect>
        </FieldShell>

        <FieldShell
          error={errors.writingAbility}
          hint={
            content.requiredLabel === "Required"
              ? undefined
              : content.fieldHints.ability
          }
          htmlFor="writingAbility"
          label={content.fields.writingAbility}
          optionalLabel={optionalLabel}
        >
          <RegistrationSelect
            className={inputClassName}
            defaultValue=""
            id="writingAbility"
            name="writingAbility"
            {...errorProps(errors, "writingAbility")}
          >
            <option value="">
              {content.requiredLabel === "Required"
                ? "Choose an answer (optional)"
                : "Не указано"}
            </option>
            {content.abilityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </RegistrationSelect>
        </FieldShell>

        <FieldShell
          error={errors.readingAbility}
          hint={
            content.requiredLabel === "Required"
              ? undefined
              : content.fieldHints.ability
          }
          htmlFor="readingAbility"
          label={content.fields.readingAbility}
          optionalLabel={optionalLabel}
        >
          <RegistrationSelect
            className={inputClassName}
            defaultValue=""
            id="readingAbility"
            name="readingAbility"
            {...errorProps(errors, "readingAbility")}
          >
            <option value="">
              {content.requiredLabel === "Required"
                ? "Choose an answer (optional)"
                : "Не указано"}
            </option>
            {content.abilityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </RegistrationSelect>
        </FieldShell>
      </div>
    </FormSection>
  );
}
