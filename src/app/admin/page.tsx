import { AdminDashboardShell } from "@/components/admin/admin-dashboard-shell";
import { getRequiredAdminUser } from "@/lib/admin/auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await getRequiredAdminUser();

  return <AdminDashboardShell user={user} />;
}
