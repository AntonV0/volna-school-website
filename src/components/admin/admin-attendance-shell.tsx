import type { AdminAuthUser } from "@/lib/admin/auth";
import { AdminNavigation } from "@/components/admin/admin-navigation";
import { signOutPrivatePortalUser } from "@/lib/private-portal/actions";

const attendanceStates = [
  {
    label: "Scheduled",
    status: "Policy pending",
  },
  {
    label: "Present",
    status: "Billable by default",
  },
  {
    label: "Absent unexcused",
    status: "Billable by default",
  },
  {
    label: "Absent excused",
    status: "Owner decision needed",
  },
  {
    label: "Cancelled",
    status: "Owner decision needed",
  },
  {
    label: "Notes",
    status: "Retention rules first",
  },
] as const;

const workflowBoundaries = [
  "Attendance should attach to a lesson and a student enrolment.",
  "Billable status must be derived from an approved policy, not free text.",
  "Teacher-facing writes should wait for exact permissions and audit rules.",
  "Invoice generation should only use confirmed billable attendance records.",
] as const;

type AdminAttendanceShellProps = {
  setupNeeded?: boolean;
  user: AdminAuthUser;
};

export function AdminAttendanceShell({
  setupNeeded = false,
  user,
}: AdminAttendanceShellProps) {
  const signedInLabel = user.email ? "Signed in" : "Authenticated session";

  return (
    <main className="min-h-screen bg-[var(--portal-bg)] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--portal-accent)]">
              Volna School Admin
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Attendance
            </h1>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <div className="break-all rounded-md border border-[var(--portal-accent)]/35 bg-[var(--portal-panel-raised)] px-4 py-3 text-sm text-[var(--portal-accent-soft)]">
              {signedInLabel}
            </div>
            {setupNeeded ? null : (
              <form action={signOutPrivatePortalUser}>
                <button
                  className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-[var(--portal-accent-soft)] transition hover:border-white/30 hover:bg-[var(--portal-surface-hover)]"
                  type="submit"
                >
                  Sign out
                </button>
              </form>
            )}
          </div>
        </header>

        <AdminNavigation activePath="/admin/attendance" />

        <section className="grid gap-5 py-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-md border border-white/10 bg-[var(--portal-surface)] p-6 shadow-[var(--portal-shadow)]">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--portal-accent)]">
              Protected placeholder
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal">
              Lesson-based attendance model
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--portal-muted)]">
              {setupNeeded
                ? "Supabase Auth and admin access are not configured, so attendance operations are closed and no private lesson data is shown."
                : "This shell reserves the attendance area for a future lesson and enrolment workflow. It intentionally avoids live attendance writes until lesson scope, billing policy, teacher permissions, and retention rules are approved."}
            </p>
          </div>

          <div className="rounded-md border border-[var(--portal-accent)]/25 bg-[var(--portal-panel)] p-6 shadow-[var(--portal-shadow-soft)]">
            <h2 className="text-lg font-semibold tracking-normal text-[var(--portal-accent-soft)]">
              Writes disabled
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--portal-muted)]">
              No attendance marks are created, edited, imported, exported, or
              linked to invoices from this page. Billable status remains a
              policy design note until the live workflow is implemented.
            </p>
          </div>
        </section>

        <section className="grid gap-5 pb-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-lg font-semibold tracking-normal">
              Attendance state policy
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {attendanceStates.map((item) => (
                <article
                  className="rounded-md border border-white/10 bg-[var(--portal-surface-subtle)] p-4"
                  key={item.label}
                >
                  <h3 className="text-base font-semibold tracking-normal">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--portal-subtle)]">{item.status}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-white/10 bg-[var(--portal-panel)] p-6">
            <h2 className="text-lg font-semibold tracking-normal">
              Workflow boundary
            </h2>
            <ol className="mt-5 space-y-3 text-sm leading-6 text-[var(--portal-muted)]">
              {workflowBoundaries.map((item, index) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--portal-accent)]/14 text-xs font-semibold text-[var(--portal-accent)]">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
