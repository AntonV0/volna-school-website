import { RegistrationSelect } from "./registration-select";
import { useState } from "react";
import { requiredLessonFormat } from "@/lib/registration/constraints";
import type { RegistrationContent } from "@/content/registration-content";
import {
  childrenFocusOptions,
  safeChildrenFocus,
} from "@/lib/registration/children-focus";
import {
  adultFocusOptions,
  safeAdultFocus,
} from "@/lib/registration/adult-focus";
import type { TrialRegistrationFieldErrors } from "@/lib/registration/validation";
import type { RegistrationSupportText } from "@/components/registration/trial-registration-form-config";
import {
  FieldShell,
  FormSection,
  errorProps,
  inputClassName,
} from "@/components/registration/trial-registration-form-ui";

type CourseSectionProps = {
  courseInterest: string;
  enquiryFor: string;
  setEnquiryFor: (value: string) => void;
  isSelfEnquiry: boolean;
  locale: string;
  content: RegistrationContent["form"];
  errors: TrialRegistrationFieldErrors;
  initialCourseInterest: string;
  initialClassPreference?: string;
  isAdultEnquiry?: boolean;
  initialAdultFocus?: string;
  isChildrenEnquiry?: boolean;
  isExamEnquiry?: boolean;
  initialChildrenFocus?: string;
  optionalLabel?: string;
  setCourseInterest: (courseInterest: string) => void;
  supportText: Omit<RegistrationSupportText, "courseIntro"> & {
    courseIntro: string;
  };
  title: string;
};

export function TrialRegistrationCourseSection({
  courseInterest,
  enquiryFor,
  setEnquiryFor,
  isSelfEnquiry,
  locale,
  content,
  errors,
  initialClassPreference = "",
  isAdultEnquiry = false,
  initialAdultFocus,
  isChildrenEnquiry = false,
  isExamEnquiry = false,
  initialChildrenFocus,
  optionalLabel,
  setCourseInterest,
  supportText,
  title,
}: CourseSectionProps) {
  const [childrenFocus, setChildrenFocus] = useState(
    safeChildrenFocus(initialChildrenFocus) || "",
  );
  const [formatPreference, setFormatPreference] = useState(
    initialClassPreference,
  );
  const [learnerAge, setLearnerAge] = useState("");
  const [examYear, setExamYear] = useState("");
  const [adultFocus, setAdultFocus] = useState(
    safeAdultFocus(initialAdultFocus) || "",
  );
  const fixedFormat = requiredLessonFormat({
    locale,
    courseInterest,
    enquiryFor,
    childrenFocus,
  });
  return (
    <FormSection description={supportText.courseIntro} title={title}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FieldShell
          error={errors.courseInterest}
          hint={content.fieldHints.courseInterest}
          htmlFor="courseInterest"
          label={content.fields.courseInterest}
          requiredLabel={content.requiredLabel}
        >
          <RegistrationSelect
            aria-required="true"
            className={inputClassName}
            value={courseInterest}
            id="courseInterest"
            name="courseInterest"
            onChange={(event) => setCourseInterest(event.currentTarget.value)}
            {...errorProps(errors, "courseInterest")}
          >
            <option disabled value="">
              {content.requiredLabel === "Required"
                ? "Choose a course"
                : "Выберите вариант"}
            </option>
            {content.courseOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </RegistrationSelect>
        </FieldShell>

        {isExamEnquiry && (
          <FieldShell
            reveal
            htmlFor="enquiryFor"
            label="Who are the lessons for?"
            error={errors.enquiryFor}
          >
            <RegistrationSelect
              choices
              id="enquiryFor"
              name="enquiryFor"
              value={enquiryFor}
              onChange={(event) => setEnquiryFor(event.target.value)}
              className={inputClassName}
              {...errorProps(errors, "enquiryFor")}
            >
              <option value="child">My child</option>
              <option value="self">Myself</option>
            </RegistrationSelect>
          </FieldShell>
        )}
        {!isSelfEnquiry && (
          <FieldShell
            error={errors.learnerAge}
            hint={locale === "en" ? undefined : supportText.learnerAge}
            htmlFor="learnerAge"
            label={
              locale === "en" ? "Age or school year" : content.fields.learnerAge
            }
            optionalLabel={optionalLabel}
          >
            <input
              className={inputClassName}
              id="learnerAge"
              value={learnerAge}
              onChange={(event) => setLearnerAge(event.target.value)}
              maxLength={80}
              name="learnerAge"
              placeholder={
                locale === "en"
                  ? isExamEnquiry
                    ? "e.g. 15 or Year 10"
                    : "e.g. 8 or Year 4"
                  : content.placeholders.learnerAge
              }
              type="text"
              {...errorProps(errors, "learnerAge")}
            />
          </FieldShell>
        )}

        {isChildrenEnquiry && (
          <FieldShell
            reveal
            htmlFor="childrenFocus"
            label="Preferred class type"
            optionalLabel={optionalLabel}
            error={errors.childrenFocus}
            hint="Not sure? We can help you choose."
          >
            <RegistrationSelect
              className={inputClassName}
              id="childrenFocus"
              name="childrenFocus"
              value={childrenFocus}
              onChange={(event) => setChildrenFocus(event.target.value)}
              {...errorProps(errors, "childrenFocus")}
            >
              <option value="">Choose a class type (optional)</option>
              {childrenFocusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </RegistrationSelect>
          </FieldShell>
        )}
        {isExamEnquiry && (
          <FieldShell
            reveal
            htmlFor="examYear"
            label="Intended exam year"
            optionalLabel={optionalLabel}
            error={errors.examYear}
            hint="Leave blank if you would like advice about timing."
          >
            <input
              className={inputClassName}
              id="examYear"
              value={examYear}
              onChange={(event) => setExamYear(event.target.value)}
              name="examYear"
              type="text"
              inputMode="numeric"
              maxLength={4}
              placeholder="e.g. 2027"
              {...errorProps(errors, "examYear")}
            />
          </FieldShell>
        )}
        {fixedFormat && (
          <div
            id="classPreference"
            tabIndex={-1}
            aria-labelledby="lesson-format-label"
            className="registration-reveal order-last rounded-lg bg-brand-teal-soft/50 p-4 text-sm leading-6 outline-none focus-visible:ring-2 focus-visible:ring-brand-teal sm:col-span-2"
          >
            <p
              id="lesson-format-label"
              className="font-semibold text-brand-teal-deep"
            >
              Lesson format
            </p>
            <p className="mt-1">
              {fixedFormat === "private" ? "Private tuition" : "Group lessons"}
            </p>
            <p className="mt-2 text-muted-foreground">
              {fixedFormat === "private"
                ? "One-to-one lessons, arranged around your availability."
                : "This class type is taught in a group. Select Private tuition above if you prefer individual lessons."}
            </p>
            <input name="classPreference" type="hidden" value={fixedFormat} />
          </div>
        )}
        {isAdultEnquiry ? (
          <FieldShell
            reveal
            htmlFor="adultFocus"
            label="Learning focus"
            optionalLabel={optionalLabel}
            error={errors.adultFocus}
          >
            <RegistrationSelect
              id="adultFocus"
              name="adultFocus"
              className={inputClassName}
              value={adultFocus}
              onChange={(event) => setAdultFocus(event.target.value)}
              {...errorProps(errors, "adultFocus")}
            >
              <option value="">Choose a learning focus (optional)</option>
              {adultFocusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </RegistrationSelect>
          </FieldShell>
        ) : !fixedFormat ? (
          <FieldShell
            error={errors.classPreference}
            hint={content.fieldHints.classPreference}
            htmlFor="classPreference"
            label={content.fields.classPreference}
            optionalLabel={optionalLabel}
          >
            <RegistrationSelect
              className={inputClassName}
              value={formatPreference}
              onChange={(event) => setFormatPreference(event.target.value)}
              id="classPreference"
              name="classPreference"
              {...errorProps(errors, "classPreference")}
            >
              <option value="">
                {content.requiredLabel === "Required"
                  ? "Choose a format (optional)"
                  : "Не указано"}
              </option>
              {content.classPreferenceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </RegistrationSelect>
          </FieldShell>
        ) : null}
      </div>
    </FormSection>
  );
}
