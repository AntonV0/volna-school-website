import { createClient } from "@/lib/supabase/server";
import type {
  AdminIsoDateTime,
  AdminTrialRegistrationLead,
  ContactPreference,
  LeadStatus,
} from "@/types/admin";

type TrialRegistrationRow = {
  id: string;
  created_at: string | null;
  learner_name: string | null;
  parent_guardian_name: string | null;
  email: string | null;
  phone: string | null;
  learner_age_year_group: string | null;
  course_interest: string | null;
  preferred_contact_method: string | null;
  message: string | null;
  locale: string | null;
  source_path: string | null;
  consent_to_contact: boolean | null;
};

export type TrialRegistrationsInboxResult =
  | {
      status: "success";
      leads: AdminTrialRegistrationLead[];
    }
  | {
      status: "config-error" | "query-error";
      message: string;
    };

const contactLabels: Record<ContactPreference | "unknown", string> = {
  either: "Either",
  email: "Email",
  phone: "Phone",
  unknown: "Unknown",
};

const courseLabels: Record<string, string> = {
  adults: "Adults",
  alevel: "A-Level",
  children: "Children",
  gcse: "GCSE",
  not_sure: "Not sure",
  unknown: "Unknown",
};

const knownContacts = new Set(["email", "phone", "either"]);

export function getCourseInterestLabel(value: string) {
  return courseLabels[value] ?? value;
}

export function getPreferredContactLabel(value: ContactPreference | "unknown") {
  return contactLabels[value];
}

function normalisePreferredContact(value: string | null) {
  if (value && knownContacts.has(value)) {
    return value as ContactPreference;
  }

  return "either";
}

function normaliseLeadStatus(value: string | null | undefined): LeadStatus {
  switch (value) {
    case "contacted":
    case "trial_scheduled":
    case "trial_completed":
    case "converted":
    case "closed":
      return value;
    default:
      return "new";
  }
}

function normaliseLocale(value: string | null) {
  if (value === "en" || value === "ru") {
    return value;
  }

  return "unknown";
}

function fallbackIsoDateTime(value: string | null): AdminIsoDateTime {
  return value ?? new Date(0).toISOString();
}

function mapTrialRegistrationLead(
  row: TrialRegistrationRow,
): AdminTrialRegistrationLead {
  const createdAt = fallbackIsoDateTime(row.created_at);

  return {
    closedAt: null,
    closedReason: null,
    consentToContact: row.consent_to_contact,
    convertedStudentId: null,
    courseInterest: row.course_interest ?? "unknown",
    createdAt,
    createdBy: null,
    email: row.email ?? "",
    guardianName: row.parent_guardian_name,
    id: row.id,
    learnerAge: row.learner_age_year_group,
    locale: normaliseLocale(row.locale),
    message: row.message,
    phone: row.phone,
    preferredContact: normalisePreferredContact(row.preferred_contact_method),
    retentionReviewAt: null,
    source: "trial_registration",
    sourcePath: row.source_path,
    status: normaliseLeadStatus(null),
    studentDisplayName: row.learner_name ?? "Unnamed lead",
    trialLessonId: null,
    updatedAt: createdAt,
    updatedBy: null,
  };
}

export async function getTrialRegistrationLeads(): Promise<TrialRegistrationsInboxResult> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("trial_registrations")
      .select(
        "id, created_at, learner_name, parent_guardian_name, email, phone, learner_age_year_group, course_interest, preferred_contact_method, message, locale, source_path, consent_to_contact",
      )
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) {
      return {
        message:
          "The inbox could not read trial registrations. Check that the table exists and that RLS allows authenticated admin reads.",
        status: "query-error",
      };
    }

    return {
      leads: ((data ?? []) as TrialRegistrationRow[]).map(
        mapTrialRegistrationLead,
      ),
      status: "success",
    };
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("Missing Supabase public environment variables")
    ) {
      return {
        message:
          "Supabase environment variables are not configured, so the admin inbox cannot connect yet.",
        status: "config-error",
      };
    }

    return {
      message:
        "The inbox is temporarily unavailable. The admin session is private, but the registration data could not be loaded.",
      status: "query-error",
    };
  }
}
