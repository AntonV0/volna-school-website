import { useEffect, useRef, useState } from "react";
import { TRIAL_NOTES_LIMIT } from "@/lib/registration/constraints";
import type { RegistrationContent } from "@/content/registration-content";
import type { TrialRegistrationFieldErrors } from "@/lib/registration/validation";
import type { RegistrationSupportText } from "@/components/registration/trial-registration-form-config";
import {
  FieldShell,
  FormSection,
  errorProps,
  inputClassName,
} from "@/components/registration/trial-registration-form-ui";
import { cn } from "@/lib/classnames";

type NotesSectionProps = {
  locale: string;
  content: RegistrationContent["form"];
  errors: TrialRegistrationFieldErrors;
  optionalLabel?: string;
  supportText: RegistrationSupportText;
};

export function TrialRegistrationNotesSection({
  locale,
  content,
  errors,
  optionalLabel,
  supportText,
}: NotesSectionProps) {
  const [length, setLength] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const form = textareaRef.current?.form;
    const resetCount = () => setLength(0);
    form?.addEventListener("reset", resetCount);
    return () => form?.removeEventListener("reset", resetCount);
  }, []);
  return (
    <FormSection
      description={supportText.notesIntro}
      title={supportText.notesTitle || content.fields.message}
    >
      <FieldShell
        error={errors.message}
        hint={`${content.fieldHints.message} ${locale === "en" ? `Up to ${TRIAL_NOTES_LIMIT} characters.` : `До ${TRIAL_NOTES_LIMIT} символов.`}`}
        htmlFor="message"
        label={content.fields.message}
        optionalLabel={optionalLabel}
      >
        <textarea
          ref={textareaRef}
          className={cn(inputClassName, "min-h-32 resize-y")}
          id="message"
          maxLength={TRIAL_NOTES_LIMIT}
          onChange={(event) => setLength(event.target.value.length)}
          name="message"
          placeholder={content.placeholders.message}
          {...errorProps(errors, "message")}
        />
        <p className="mt-2 text-xs text-muted-foreground">
          {locale === "en"
            ? `${TRIAL_NOTES_LIMIT - length} characters remaining`
            : `${TRIAL_NOTES_LIMIT - length} символов осталось`}
        </p>
        <span className="sr-only" role="status" aria-atomic="true">
          {length >= TRIAL_NOTES_LIMIT
            ? locale === "en"
              ? "Character limit reached."
              : "Достигнут лимит символов."
            : length >= TRIAL_NOTES_LIMIT - 50
              ? locale === "en"
                ? "Fewer than 50 characters remaining."
                : "Осталось не более 50 символов."
              : ""}
        </span>
      </FieldShell>
    </FormSection>
  );
}
