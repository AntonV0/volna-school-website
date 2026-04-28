import type { AdminAuthUser } from "@/lib/admin/auth";
import { AdminNavigation } from "@/components/admin/admin-navigation";
import { signOutPrivatePortalUser } from "@/lib/private-portal/actions";

const readinessItems = [
  {
    label: "Student records",
    status: "Model drafted",
  },
  {
    label: "Attendance",
    status: "Model drafted",
  },
  {
    label: "Invoices",
    status: "Model drafted",
  },
  {
    label: "Payment tracking",
    status: "Model drafted",
  },
  {
    label: "Notes",
    status: "Needs retention rules",
  },
  {
    label: "Import workflow",
    status: "Not started",
  },
];

type AdminDashboardShellProps = {
  user: AdminAuthUser;
};

export function AdminDashboardShell({ user }: AdminDashboardShellProps) {
  const signedInLabel = user.email ? "Signed in" : "Authenticated session";

  return (
    <main className="min-h-screen bg-[#0f1720] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#72d7df]">
              Volna School Admin
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Operations dashboard
            </h1>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <div className="break-all rounded-md border border-[#72d7df]/35 bg-[#15303b] px-4 py-3 text-sm text-[#d8f7f9]">
              {signedInLabel}
            </div>
            <form action={signOutPrivatePortalUser}>
              <button
                className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-[#d8f7f9] transition hover:border-white/30 hover:bg-white/[0.06]"
                type="submit"
              >
                Sign out
              </button>
            </form>
          </div>
        </header>

        <AdminNavigation activePath="/admin" />

        <section className="grid gap-5 py-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#72d7df]">
              First safe slice
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal">
              Private shell only
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#c3d7df]">
              This route is reserved for authenticated administration work. It
              intentionally contains no imported spreadsheet rows, student
              records, invoice history, staff notes, or business-sensitive copy.
            </p>
          </div>

          <div className="rounded-md border border-white/10 bg-[#122734] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
            <h2 className="text-lg font-semibold tracking-normal">
              Implementation boundary
            </h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[#b9cdd5]">Auth gate</dt>
                <dd className="text-right font-medium text-white">
                  Supabase session
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[#b9cdd5]">Role policy</dt>
                <dd className="text-right font-medium text-white">
                  Owner/admin role
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[#b9cdd5]">Data source</dt>
                <dd className="text-right font-medium text-white">Trial leads</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="pb-10">
          <h2 className="text-lg font-semibold tracking-normal">
            Admin capability map
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {readinessItems.map((item) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.035] p-4"
                key={item.label}
              >
                <h3 className="text-base font-semibold tracking-normal">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-[#b9cdd5]">{item.status}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
