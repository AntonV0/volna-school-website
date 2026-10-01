import { createClient } from "@/lib/supabase/server";
import { adultFocusOptions } from "@/lib/registration/adult-focus";
import { childrenFocusOptions } from "@/lib/registration/children-focus";
import type { TrialRegistrationFields } from "@/lib/registration/validation";

export type TrialRegistrationSubmissionResult =
  | { status: "success" }
  | { status: "config-error" }
  | { status: "submit-error" };

export async function saveTrialRegistration(
  fields: TrialRegistrationFields,
): Promise<TrialRegistrationSubmissionResult> {
  try {
    const message = createLeadMessage(fields);
    if (message.length > 1000) return { status: "submit-error" };
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
      message: message || null,
      parent_guardian_name:
        fields.enquiryFor === "self" ? null : fields.parentName || null,
      phone: fields.phone || null,
      preferred_contact_method: fields.preferredContact,
      source_path: fields.sourcePath || null,
    });

    if (isDuplicateLeadPolicyError(error)) {
      return { status: "success" };
    }

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

function isDuplicateLeadPolicyError(error: { code?: string } | null) {
  // Unique indexes are the durable duplicate policy layer. Keep visitor feedback generic.
  return error?.code === "23505";
}

function createLeadMessage(fields: TrialRegistrationFields) {
  const placementLines = [
    fields.enquiryFor
      ? `Enquiry for: ${fields.enquiryFor === "self" ? "Adult learner (self)" : "Child"}`
      : null,
    fields.classPreference
      ? `Preferred format: ${fields.classPreference}`
      : null,
    fields.russianAtHome ? `Russian at home: ${fields.russianAtHome}` : null,
    fields.speakingAbility ? `Speaking: ${fields.speakingAbility}` : null,
    fields.writingAbility ? `Writing: ${fields.writingAbility}` : null,
    fields.readingAbility ? `Reading: ${fields.readingAbility}` : null,
  ].filter(Boolean);

  const sections = [
    fields.courseInterest === "children" && fields.childrenFocus
      ? `Preferred children's class: ${childrenFocusOptions.find((option) => option.value === fields.childrenFocus)?.label ?? "Not sure yet"}`
      : "",
    ["gcse", "alevel"].includes(fields.courseInterest) && fields.examYear
      ? `Intended exam year: ${fields.examYear}`
      : "",
    fields.courseInterest === "adults" && fields.adultFocus
      ? `Adult learning focus: ${adultFocusOptions.find((option) => option.value === fields.adultFocus)?.label ?? "Not sure yet"}`
      : "",
    placementLines.length > 0
      ? `Placement details:\n${placementLines.join("\n")}`
      : "",
  ].filter(Boolean);

  const details = sections.join("\n\n");
  return [details, fields.message].filter(Boolean).join("\n\n");
}
