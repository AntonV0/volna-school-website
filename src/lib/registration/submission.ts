import { createClient } from "@/lib/supabase/server";
import type { TrialRegistrationFields } from "@/lib/registration/validation";

export type TrialRegistrationSubmissionResult =
  | { status: "success" }
  | { status: "config-error" }
  | { status: "submit-error" };

export async function saveTrialRegistration(
  fields: TrialRegistrationFields,
): Promise<TrialRegistrationSubmissionResult> {
  try {
    const supabase = await createClient();

    // Expected table: trial_registrations configured as lead intake, not student records.
    // Keep RLS enabled and allow constrained inserts through the anon key for public forms.
    const { error } = await supabase.from("trial_registrations").insert({
      consent_to_contact: fields.consent,
      course_interest: fields.courseInterest,
      email: fields.email,
      learner_age_year_group: fields.learnerAge || null,
      learner_name: fields.learnerName,
      locale: fields.locale,
      message: fields.message || null,
      parent_guardian_name: fields.parentName || null,
      phone: fields.phone || null,
      preferred_contact_method: fields.preferredContact,
      source_path: fields.sourcePath || null,
    });

    if (error) {
      return { status: "submit-error" };
    }

    return { status: "success" };
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("Missing Supabase public environment variables")
    ) {
      return { status: "config-error" };
    }

    return { status: "submit-error" };
  }
}
