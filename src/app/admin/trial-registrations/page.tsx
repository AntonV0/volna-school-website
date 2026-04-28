import { TrialRegistrationsInbox } from "@/components/admin/trial-registrations-inbox";
import type { AdminAuthUser } from "@/lib/admin/auth";
import { getRequiredAdminUser } from "@/lib/admin/auth";
import { getTrialRegistrationLeads } from "@/lib/admin/trial-registrations";

export const dynamic = "force-dynamic";

export default async function TrialRegistrationsPage() {
  let user: AdminAuthUser;

  try {
    user = await getRequiredAdminUser();
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("Missing Supabase public environment variables")
    ) {
      return (
        <TrialRegistrationsInbox
          result={{
            message:
              "Supabase environment variables are not configured, so the private admin inbox cannot check a session or read registrations yet.",
            status: "config-error",
          }}
          user={{ email: undefined, id: "unconfigured" }}
        />
      );
    }

    throw error;
  }

  const result = await getTrialRegistrationLeads();

  return <TrialRegistrationsInbox result={result} user={user} />;
}
