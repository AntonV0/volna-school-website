import { AdminDashboardShell } from "@/components/admin/admin-dashboard-shell";
import type { AdminAuthUser } from "@/lib/admin/auth";
import {
  getRequiredAdminUser,
  isAdminAuthConfigurationError,
} from "@/lib/admin/auth";

export const dynamic = "force-dynamic";

function isMissingSupabasePublicEnv(error: unknown) {
  return (
    error instanceof Error &&
    error.message.includes("Missing Supabase public environment variables")
  );
}

function AdminSetupNeeded() {
  return (
    <main className="min-h-screen bg-[#0f1720] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-5 py-10 sm:px-8">
        <section className="rounded-md border border-[#f1c66b]/35 bg-white/[0.04] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f1c66b]">
            Configuration needed
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal">
            Admin access is closed until the owner allowlist is configured
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#c3d7df]">
            Set the server-only ADMIN_ALLOWED_EMAILS environment variable with
            approved owner/admin email addresses. No admin data is shown while
            this guard is incomplete.
          </p>
        </section>
      </div>
    </main>
  );
}

export default async function AdminPage() {
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
    return <AdminSetupNeeded />;
  }

  if (!user) {
    throw new Error("Admin authentication did not return a user.");
  }

  return <AdminDashboardShell user={user} />;
}
