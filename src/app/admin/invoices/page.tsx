import { AdminInvoiceCreatorShell } from "@/components/admin/admin-invoice-creator-shell";
import type { AdminAuthUser } from "@/lib/admin/auth";
import {
  getRequiredAdminUser,
  isAdminAuthConfigurationError,
} from "@/lib/admin/auth";
import { isMissingSupabasePublicEnv } from "@/lib/private-portal/auth";

export const dynamic = "force-dynamic";

export default async function AdminInvoicesPage() {
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
      <AdminInvoiceCreatorShell
        setupNeeded
        user={{ email: undefined, id: "unconfigured", role: "owner" }}
      />
    );
  }

  if (!user) {
    throw new Error("Admin authentication did not return a user.");
  }

  return <AdminInvoiceCreatorShell user={user} />;
}
