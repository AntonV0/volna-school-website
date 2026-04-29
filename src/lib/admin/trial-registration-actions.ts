"use server";

import { revalidatePath } from "next/cache";

import { getRequiredAdminUser } from "@/lib/admin/auth";
import { isManualTrialLeadStatus } from "@/lib/admin/trial-registration-status";
import { createClient } from "@/lib/supabase/server";

export async function updateTrialRegistrationLeadStatus(formData: FormData) {
  await getRequiredAdminUser();

  const leadId = formData.get("lead_id");
  const leadStatus = formData.get("lead_status");

  if (typeof leadId !== "string" || !leadId || !isManualTrialLeadStatus(leadStatus)) {
    revalidatePath("/admin/trial-registrations");
    return;
  }

  const supabase = await createClient();

  await supabase
    .from("trial_registrations")
    .update({ lead_status: leadStatus })
    .eq("id", leadId);

  revalidatePath("/admin/trial-registrations");
}
