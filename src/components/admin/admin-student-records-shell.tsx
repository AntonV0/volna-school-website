import type { AdminAuthUser } from "@/lib/admin/auth";
import { AdminNavigation } from "@/components/admin/admin-navigation";
import { signOutPrivatePortalUser } from "@/lib/private-portal/actions";

const recordBoundaries = [
  {
    label: "Student profile",
    status: "Schema-first design",
  },
  {
    label: "Guardian links",
    status: "Relationship rules needed",
  },
  {
    label: "Enrolments",
    status: "Course and billing context",
  },
  {
    label: "Billing links",
    status: "Decision gate",
  },
] as const;

const decisionGates = [
  "Approve which reviewed source fields can be imported into private records.",
  "Define retention and deletion rules before storing notes or legacy data.",
  "Confirm how multiple guardians, emergency contacts, and billing contacts differ.",
  "Decide how student records connect to billing accounts and invoice drafts.",
] as const;

type AdminStudentRecordsShellProps = {
  setupNeeded?: boolean;
  user: AdminAuthUser;
};

export function AdminStudentRecordsShell({
  setupNeeded = false,
  user,
}: AdminStudentRecordsShellProps) {
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
              Student records
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

        <AdminNavigation activePath="/admin/students" />

        <section className="grid gap-5 py-8 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="rounded-md border border-white/10 bg-[var(--portal-surface)] p-6 shadow-[var(--portal-shadow)]">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--portal-accent)]">
              Protected placeholder
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal">
              Model-first student operations
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--portal-muted)]">
              {setupNeeded
                ? "Supabase Auth and admin access are not configured, so student records are closed and no private learner data is shown."
                : "This shell reserves the student records area while the private model is agreed. Student, guardian, and enrolment records should be created from approved workflows, not copied into the site from unreviewed source material."}
            </p>
          </div>

          <div className="rounded-md border border-[var(--portal-accent)]/25 bg-[var(--portal-panel)] p-6 shadow-[var(--portal-shadow-soft)]">
            <h2 className="text-lg font-semibold tracking-normal text-[var(--portal-accent-soft)]">
              No live records
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--portal-muted)]">
              This page does not read, create, import, export, or display
              student, guardian, contact, billing, or enrolment data. It is only
              the protected UI boundary for the future records workflow.
            </p>
          </div>
        </section>

        <section className="grid gap-5 pb-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-lg font-semibold tracking-normal">
              Record model boundary
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {recordBoundaries.map((item) => (
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
              Decision gates before import
            </h2>
            <ol className="mt-5 space-y-3 text-sm leading-6 text-[var(--portal-muted)]">
              {decisionGates.map((item, index) => (
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
