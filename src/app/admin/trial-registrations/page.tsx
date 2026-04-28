import { TrialRegistrationsInbox } from "@/components/admin/trial-registrations-inbox";
import type { AdminAuthUser } from "@/lib/admin/auth";
import {
  getRequiredAdminUser,
  isAdminAuthConfigurationError,
} from "@/lib/admin/auth";
import { getTrialRegistrationLeads } from "@/lib/admin/trial-registrations";

export const dynamic = "force-dynamic";

function isMissingSupabasePublicEnv(error: unknown) {
  return (
    error instanceof Error &&
    error.message.includes("Missing Supabase public environment variables")
  );
}

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
            "Supabase and the server-only ADMIN_ALLOWED_EMAILS owner allowlist must be configured before the private admin inbox can check access or read registrations.",
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
