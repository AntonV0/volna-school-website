import type { Locale } from "@/lib/i18n/config";

export type TrialRegistrationFields = {
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
  sourcePath: string;
  turnstileToken: string;
  website: string;
};

export type TrialRegistrationFieldErrors = Partial<
  Record<keyof TrialRegistrationFields, string>
>;

export type TrialRegistrationActionState = {
  errors: TrialRegistrationFieldErrors;
  message: string;
  status: "idle" | "success" | "validation-error" | "config-error" | "submit-error";
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

const courseValues = new Set(["children", "gcse", "alevel", "adults", "not_sure"]);
const contactValues = new Set(["email", "phone", "either"]);

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
  return /^[+\d][+\d\s().-]{6,}$/.test(value);
}

export function parseTrialRegistrationForm(formData: FormData) {
  return {
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
    sourcePath: readText(formData, "sourcePath"),
    turnstileToken: readText(formData, "cf-turnstile-response"),
    website: readText(formData, "website"),
  } satisfies TrialRegistrationFields;
}

export function validateTrialRegistration(
  fields: TrialRegistrationFields,
  messages: ValidationMessages,
) {
  const errors: TrialRegistrationFieldErrors = {};

  if (!fields.learnerName) {
    errors.learnerName = messages.required;
  }

  if (!fields.email) {
    errors.email = messages.required;
  } else if (!hasValidEmail(fields.email)) {
    errors.email = messages.email;
  }

  if (fields.phone && !hasValidPhone(fields.phone)) {
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

  if (!fields.consent) {
    errors.consent = messages.consent;
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

  if (fields.message.length > 1000) {
    errors.message = messages.maxLength;
  }

  if (fields.sourcePath.length > 240) {
    errors.sourcePath = messages.maxLength;
  }

  return errors;
}
