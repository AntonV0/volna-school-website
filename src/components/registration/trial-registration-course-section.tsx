import type { RegistrationContent } from "@/content/registration-content";
import type { TrialRegistrationFieldErrors } from "@/lib/registration/validation";
import type { RegistrationSupportText } from "@/components/registration/trial-registration-form-config";
import { FieldShell, FormSection, errorProps, inputClassName } from "@/components/registration/trial-registration-form-ui";

type CourseSectionProps = {
  content: RegistrationContent["form"];
  errors: TrialRegistrationFieldErrors;
  initialCourseInterest: string;
  optionalLabel?: string;
  setCourseInterest: (courseInterest: string) => void;
  supportText: RegistrationSupportText;
  title: string;
};

export function TrialRegistrationCourseSection({
  content,
  errors,
  initialCourseInterest,
  optionalLabel,
  setCourseInterest,
  supportText,
  title,
}: CourseSectionProps) {
  return (
    <FormSection
      description={supportText.courseIntro}
      title={title}
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <FieldShell
          error={errors.learnerAge}
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
            {...errorProps(errors, "learnerAge")}
          />
        </FieldShell>

        <FieldShell
          error={errors.courseInterest}
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
            {...errorProps(errors, "courseInterest")}
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
          error={errors.classPreference}
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
            {...errorProps(errors, "classPreference")}
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
  );
}
