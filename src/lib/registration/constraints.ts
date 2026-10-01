// Reserve space for placement answers within the saved enquiry's 1,000 characters.
export const TRIAL_NOTES_LIMIT = 600;

export function requiredLessonFormat(fields: {
  locale: string;
  courseInterest: string;
  enquiryFor?: string;
  childrenFocus?: string;
}): "private" | "group" | undefined {
  if (fields.locale !== "en") return undefined;
  if (
    fields.courseInterest === "adults" ||
    (["gcse", "alevel"].includes(fields.courseInterest) &&
      fields.enquiryFor === "self")
  )
    return "private";
  if (fields.courseInterest === "children") {
    if (fields.childrenFocus === "private-tuition") return "private";
    if (
      ["bilingual-classes", "russian-for-beginners", "early-years"].includes(
        fields.childrenFocus ?? "",
      )
    )
      return "group";
  }
  return undefined;
}
