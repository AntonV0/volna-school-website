import {
  requiredLessonFormat,
  TRIAL_NOTES_LIMIT,
} from "@/lib/registration/constraints";
import type { Locale } from "@/lib/i18n/config";
import { safeAdultFocus } from "@/lib/registration/adult-focus";
import { safeChildrenFocus } from "@/lib/registration/children-focus";

export type TrialRegistrationFields = {
  mockInterest?: string;
  adultFocus: string;
  enquiryFor: string;
  childrenFocus: string;
  examYear: string;
  classPreference: string;
  consent: boolean;
  courseInterest: string;
  email: string;
  learnerAge: string;
  learnerName: string;
  locale: Locale;
  message: string;
  parentName: string;
  phone: string;
  preferredContact: string;
  readingAbility: string;
  russianAtHome: string;
  sourcePath: string;
  speakingAbility: string;
  turnstileToken: string;
  website: string;
  writingAbility: string;
};

export type TrialRegistrationFieldErrors = Partial<
  Record<keyof TrialRegistrationFields, string>
>;

export type TrialRegistrationActionState = {
  errors: TrialRegistrationFieldErrors;
  message: string;
  status:
    | "idle"
    | "success"
    | "validation-error"
    | "config-error"
    | "submit-error";
};

export const initialTrialRegistrationState: TrialRegistrationActionState = {
  errors: {},
  message: "",
  status: "idle",
};

type ValidationMessages = {
  consent: string;
  email: string;
  maxLength: string;
  phone: string;
  required: string;
};

const courseValues = new Set([
  "children",
  "gcse",
  "alevel",
  "adults",
  "not_sure",
]);
const parentRequiredCourseValues = new Set(["children", "gcse", "alevel"]);
const contactValues = new Set(["email", "phone", "either"]);
const classPreferenceValues = new Set(["", "group", "private", "not_sure"]);
const abilityValues = new Set(["", "beginner", "some", "confident", "native"]);
const yesNoValues = new Set(["", "yes", "no", "sometimes"]);

function readText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function readLocale(formData: FormData): Locale {
  return readText(formData, "locale") === "ru" ? "ru" : "en";
}

function hasValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function hasValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return (
    /^\+?[\d\s().-]+$/.test(value) && digits.length >= 7 && digits.length <= 15
  );
}

export function parseTrialRegistrationForm(formData: FormData) {
  return {
    mockInterest: readText(formData, "mockInterest"),
    enquiryFor:
      readLocale(formData) === "en" &&
      ["gcse", "alevel"].includes(readText(formData, "courseInterest"))
        ? readText(formData, "enquiryFor") || "child"
        : "",
    childrenFocus:
      readText(formData, "courseInterest") === "children"
        ? readText(formData, "childrenFocus")
        : "",
    examYear: ["gcse", "alevel"].includes(readText(formData, "courseInterest"))
      ? readText(formData, "examYear")
      : "",
    adultFocus:
      readText(formData, "courseInterest") === "adults"
        ? readText(formData, "adultFocus")
        : "",
    classPreference: readText(formData, "classPreference"),
    consent: formData.get("consent") === "on",
    courseInterest: readText(formData, "courseInterest"),
    email: readText(formData, "email").toLowerCase(),
    learnerAge: readText(formData, "learnerAge"),
    learnerName: readText(formData, "learnerName"),
    locale: readLocale(formData),
    message: readText(formData, "message"),
    parentName: readText(formData, "parentName"),
    phone: readText(formData, "phone"),
    preferredContact: readText(formData, "preferredContact"),
    readingAbility: readText(formData, "readingAbility"),
    russianAtHome: readText(formData, "russianAtHome"),
    sourcePath: readText(formData, "sourcePath"),
    speakingAbility: readText(formData, "speakingAbility"),
    turnstileToken: readText(formData, "cf-turnstile-response"),
    website: readText(formData, "website"),
    writingAbility: readText(formData, "writingAbility"),
  } satisfies TrialRegistrationFields;
}

export function validateTrialRegistration(
  fields: TrialRegistrationFields,
  messages: ValidationMessages,
) {
  const errors: TrialRegistrationFieldErrors = {};
  if (fields.mockInterest &&
    (fields.locale !== "en" || fields.courseInterest !== "gcse" ||
      !["written", "speaking", "both", "not_sure"].includes(fields.mockInterest)))
    errors.mockInterest = messages.required;
  if (fields.enquiryFor && !["self", "child"].includes(fields.enquiryFor))
    errors.enquiryFor = messages.required;
  if (fields.childrenFocus && !safeChildrenFocus(fields.childrenFocus))
    errors.childrenFocus = messages.required;
  if (fields.examYear && !/^20\d{2}$/.test(fields.examYear))
    errors.examYear = "Enter a four-digit exam year, such as 2027.";
  if (fields.adultFocus && !safeAdultFocus(fields.adultFocus))
    errors.adultFocus = messages.required;
  const requiredFormat = fields.mockInterest ? undefined : requiredLessonFormat(fields);
  if (requiredFormat && fields.classPreference !== requiredFormat)
    errors.classPreference = `This course choice uses ${requiredFormat === "private" ? "private tuition" : "group lessons"}.`;

  if (!fields.learnerName) {
    errors.learnerName = messages.required;
  }

  if (!fields.email) {
    errors.email = messages.required;
  } else if (!hasValidEmail(fields.email)) {
    errors.email = messages.email;
  }

  if (fields.preferredContact === "phone" && !fields.phone) {
    errors.phone =
      fields.locale === "en"
        ? "Enter a phone number so we can call you."
        : messages.required;
  } else if (fields.phone && !hasValidPhone(fields.phone)) {
    errors.phone = messages.phone;
  }

  if (fields.email.length > 160) {
    errors.email = messages.maxLength;
  }

  if (fields.phone.length > 60) {
    errors.phone = messages.maxLength;
  }

  if (!fields.courseInterest || !courseValues.has(fields.courseInterest)) {
    errors.courseInterest = messages.required;
  }

  if (!fields.preferredContact || !contactValues.has(fields.preferredContact)) {
    errors.preferredContact = messages.required;
  }

  if (!classPreferenceValues.has(fields.classPreference)) {
    errors.classPreference = messages.required;
  }

  if (!abilityValues.has(fields.speakingAbility)) {
    errors.speakingAbility = messages.required;
  }

  if (!abilityValues.has(fields.writingAbility)) {
    errors.writingAbility = messages.required;
  }

  if (!abilityValues.has(fields.readingAbility)) {
    errors.readingAbility = messages.required;
  }

  if (!yesNoValues.has(fields.russianAtHome)) {
    errors.russianAtHome = messages.required;
  }

  if (!fields.consent) {
    errors.consent = messages.consent;
  }

  if (
    parentRequiredCourseValues.has(fields.courseInterest) &&
    !(
      fields.locale === "en" &&
      ["gcse", "alevel"].includes(fields.courseInterest) &&
      fields.enquiryFor === "self"
    ) &&
    !fields.parentName
  ) {
    errors.parentName = messages.required;
  }

  if (fields.parentName.length > 120) {
    errors.parentName = messages.maxLength;
  }

  if (fields.learnerName.length > 120) {
    errors.learnerName = messages.maxLength;
  }

  if (fields.learnerAge.length > 80) {
    errors.learnerAge = messages.maxLength;
  }

  if (fields.message.length > TRIAL_NOTES_LIMIT) {
    errors.message =
      fields.locale === "en"
        ? `Keep your notes to ${TRIAL_NOTES_LIMIT} characters or fewer.`
        : messages.maxLength;
  }

  if (fields.sourcePath.length > 240) {
    errors.sourcePath = messages.maxLength;
  }

  return errors;
}
