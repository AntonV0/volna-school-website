import { TrialRegistrationsInbox } from "@/components/admin/trial-registrations-inbox";
import type { AdminAuthUser } from "@/lib/admin/auth";
import {
  getRequiredAdminUser,
  isAdminAuthConfigurationError,
} from "@/lib/admin/auth";
import { getTrialRegistrationLeads } from "@/lib/admin/trial-registrations";
import { isMissingSupabasePublicEnv } from "@/lib/private-portal/auth";

export const dynamic = "force-dynamic";

export default async function TrialRegistrationsPage() {
  let user: AdminAuthUser | null = null;
  let setupNeeded = false;

  try {
    user = await getRequiredAdminUser();
  } catch (error) {
    if (
      isAdminAuthConfigurationError(error) ||
      isMissingSupabasePublicEnv(error)
    ) {
      setupNeeded = true;
    } else {
      throw error;
    }
  }

  if (setupNeeded) {
    return (
      <TrialRegistrationsInbox
        result={{
          message:
            "Supabase Auth, owner/admin role claims, or the temporary ADMIN_ALLOWED_EMAILS fallback must be configured before the private admin inbox can check access or read registrations.",
          status: "config-error",
        }}
        user={{ email: undefined, id: "unconfigured", role: "owner" }}
      />
    );
  }

  if (!user) {
    throw new Error("Admin authentication did not return a user.");
  }

  const result = await getTrialRegistrationLeads();

  return <TrialRegistrationsInbox result={result} user={user} />;
}
