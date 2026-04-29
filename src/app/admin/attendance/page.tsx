import { AdminAttendanceShell } from "@/components/admin/admin-attendance-shell";
import type { AdminAuthUser } from "@/lib/admin/auth";
import {
  getRequiredAdminUser,
  isAdminAuthConfigurationError,
} from "@/lib/admin/auth";
import { isMissingSupabasePublicEnv } from "@/lib/private-portal/auth";

export const dynamic = "force-dynamic";

export default async function AdminAttendancePage() {
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
      <AdminAttendanceShell
        setupNeeded
        user={{ email: undefined, id: "unconfigured", role: "owner" }}
      />
    );
  }

  if (!user) {
    throw new Error("Admin authentication did not return a user.");
  }

  return <AdminAttendanceShell user={user} />;
}
