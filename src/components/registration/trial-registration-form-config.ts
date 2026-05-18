import type { Locale } from "@/lib/i18n/config";

export const formSectionLabels = {
  en: {
    contact: "Learner and contact",
    course: "Course fit",
    confidence: "Confidence snapshot",
  },
  ru: {
    contact: "Ученик и контакт",
    course: "Подбор курса",
    confidence: "Уровень уверенности",
  },
} as const;

export const formSupportText = {
  en: {
    contactIntro:
      "Use the parent or guardian name for children and exam learners. Adult learners can leave it blank.",
    courseIntro:
      "These answers help the school suggest a group, private route, or exam pathway before the trial.",
    confidenceIntro:
      "Approximate answers are enough. This is for placement, not assessment.",
    learnerAge:
      "Age or school year helps match the right group; adults can note a rough level or goal.",
    parentNameRequired: "Required for children's and exam enquiries.",
    parentNameOptional: "Optional for adult learners.",
    phone: "Optional, but useful if lesson times are easier to confirm by phone.",
    preferredContact: "Choose how you would like the school to follow up.",
    russianAtHome:
      "This helps distinguish bilingual, heritage, and beginner routes.",
    notesTitle: "Trial notes",
    notesIntro:
      "Add anything that would help the school arrange a useful first conversation.",
    optionalLabel: "Optional",
    submitNote:
      "No payment details are requested here. The school will confirm timing and fit before lessons continue.",
  },
  ru: {
    contactIntro: "",
    courseIntro: "",
    confidenceIntro: "",
    learnerAge: "",
    parentNameRequired: "",
    parentNameOptional: "",
    phone: "",
    preferredContact: "",
    russianAtHome: "",
    notesTitle: "",
    notesIntro: "",
    optionalLabel: "",
    submitNote: "",
  },
} as const;

export const analyticsCourseInterests = new Set([
  "children",
  "gcse",
  "alevel",
  "adults",
  "not_sure",
]);
export const parentRequiredCourseInterests = new Set(["children", "gcse", "alevel"]);
export const analyticsContactMethods = new Set(["email", "phone", "either"]);

export function safeAnalyticsOption(value: FormDataEntryValue | null, allowed: Set<string>) {
  if (typeof value !== "string" || !allowed.has(value)) {
    return undefined;
  }

  return value;
}

export type RegistrationSupportText = (typeof formSupportText)[Locale];
