import type { RegistrationContent } from "@/content/registration-content";
import type { TrialRegistrationFieldErrors } from "@/lib/registration/validation";
import type { RegistrationSupportText } from "@/components/registration/trial-registration-form-config";
import { FieldShell, FormSection, errorProps, inputClassName } from "@/components/registration/trial-registration-form-ui";
import { cn } from "@/lib/classnames";

type NotesSectionProps = {
  content: RegistrationContent["form"];
  errors: TrialRegistrationFieldErrors;
  optionalLabel?: string;
  supportText: RegistrationSupportText;
};

export function TrialRegistrationNotesSection({
  content,
  errors,
  optionalLabel,
  supportText,
}: NotesSectionProps) {
  return (
    <FormSection
      description={supportText.notesIntro}
      title={supportText.notesTitle || content.fields.message}
    >
      <FieldShell
        error={errors.message}
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
          {...errorProps(errors, "message")}
        />
      </FieldShell>
    </FormSection>
  );
}
