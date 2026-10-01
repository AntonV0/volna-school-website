import type { TrialRegistrationFieldErrors } from "@/lib/registration/validation";

export const registrationSteps = [
  "Your lessons",
  "Contact details",
  "Review & send",
] as const;
const courseFields = new Set([
  "courseInterest",
  "enquiryFor",
  "learnerAge",
  "examYear",
  "classPreference",
  "childrenFocus",
  "adultFocus",
]);
const contactFields = new Set([
  "learnerName",
  "parentName",
  "email",
  "phone",
  "preferredContact",
]);
export function registrationFieldStep(name: string) {
  return courseFields.has(name) ? 0 : contactFields.has(name) ? 1 : 2;
}
export function registrationStepErrors(
  errors: TrialRegistrationFieldErrors,
  step: number,
) {
  return Object.fromEntries(
    Object.entries(errors).filter(
      ([name]) => registrationFieldStep(name) === step,
    ),
  );
}
export type RegistrationReviewRow = { label: string; value: string };
export function readRegistrationReview(
  form: HTMLFormElement,
  step: number,
): RegistrationReviewRow[] {
  const labels: Record<string, string> =
    step === 0
      ? {
          courseInterest: "Course",
          enquiryFor: "Lessons for",
          childrenFocus: "Class type",
          adultFocus: "Learning focus",
          learnerAge: "Age / year group",
          examYear: "Exam year",
          classPreference: "Lesson format",
        }
      : {
          learnerName: "Learner",
          parentName: "Parent / guardian",
          email: "Email",
          preferredContact: "Contact by",
          phone: "Phone",
        };
  return Object.entries(labels).flatMap(([name, label]) => {
    // Custom controls have a focus target with the original id; use the named
    // value control rather than matching both the trigger id and select name.
    const control = Array.from(form.elements).find(
      (element) =>
        (element instanceof HTMLInputElement ||
          element instanceof HTMLSelectElement) &&
        element.name === name,
    );
    if (
      !(
        control instanceof HTMLInputElement ||
        control instanceof HTMLSelectElement
      )
    )
      return [];
    const value = control.value.trim();
    if (!value) return [];
    const display =
      control instanceof HTMLSelectElement
        ? control.selectedOptions[0]?.textContent || value
        : name === "classPreference"
          ? { private: "Private tuition", group: "Group class" }[value] || value
          : value;
    return [
      {
        label:
          name === "learnerName" && !form.elements.namedItem("parentName")
            ? "Your name"
            : label,
        value: display,
      },
    ];
  });
}
