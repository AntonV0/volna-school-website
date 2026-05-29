import Link from "next/link";

import type { AdminAuthUser } from "@/lib/admin/auth";
import { AdminNavigation } from "@/components/admin/admin-navigation";
import { signOutPrivatePortalUser } from "@/lib/private-portal/actions";

const readinessItems = [
  {
    href: "/admin/trial-registrations",
    label: "Student records",
    status: "Start from reviewed trial leads",
  },
  {
    href: "/admin/attendance",
    label: "Attendance",
    status: "Lesson policy pending",
  },
  {
    href: "/admin/invoices",
    label: "Invoices",
    status: "Draft shell ready",
  },
  {
    href: "/admin/invoices",
    label: "Payment tracking",
    status: "Manual reconciliation first",
  },
  {
    href: "/admin/students",
    label: "Notes",
    status: "Needs retention rules",
  },
  {
    href: "/admin/students",
    label: "Import workflow",
    status: "Private mapping needed",
  },
] as const;

const quickActions = [
  {
    description: "Review new trial requests and update follow-up status.",
    href: "/admin/trial-registrations",
    label: "Manage trial leads",
  },
  {
    description: "Prepare the model-first student and guardian workflow.",
    href: "/admin/students",
    label: "Open student records",
  },
  {
    description: "Review attendance policy before teacher-facing writes.",
    href: "/admin/attendance",
    label: "Open attendance",
  },
  {
    description: "Shape invoice drafts before live billing is enabled.",
    href: "/admin/invoices",
    label: "Open invoice creator",
  },
] as const;

type AdminDashboardShellProps = {
  user: AdminAuthUser;
};

export function AdminDashboardShell({ user }: AdminDashboardShellProps) {
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
              Operations dashboard
            </h1>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <div className="break-all rounded-md border border-[var(--portal-accent)]/35 bg-[var(--portal-panel-raised)] px-4 py-3 text-sm text-[var(--portal-accent-soft)]">
              {signedInLabel}
            </div>
            <form action={signOutPrivatePortalUser}>
              <button
                className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-[var(--portal-accent-soft)] transition hover:border-white/30 hover:bg-[var(--portal-surface-hover)]"
                type="submit"
              >
                Sign out
              </button>
            </form>
          </div>
        </header>

        <AdminNavigation activePath="/admin" />

        <section className="grid gap-5 py-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-md border border-white/10 bg-[var(--portal-surface)] p-6 shadow-[var(--portal-shadow)]">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--portal-accent)]">
              First safe slice
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal">
              Private shell only
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--portal-muted)]">
              This route is reserved for authenticated administration work. It
              intentionally contains no imported spreadsheet rows, student
              records, invoice history, staff notes, or business-sensitive copy.
            </p>
          </div>

          <div className="rounded-md border border-white/10 bg-[var(--portal-panel)] p-6 shadow-[var(--portal-shadow-soft)]">
            <h2 className="text-lg font-semibold tracking-normal">
              Implementation boundary
            </h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[var(--portal-subtle)]">Auth gate</dt>
                <dd className="text-right font-medium text-white">
                  Supabase session
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[var(--portal-subtle)]">Role policy</dt>
                <dd className="text-right font-medium text-white">
                  Owner/admin role
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[var(--portal-subtle)]">Data source</dt>
                <dd className="text-right font-medium text-white">Trial leads</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="pb-8">
          <h2 className="text-lg font-semibold tracking-normal">
            Priority actions
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((item) => (
              <Link
                className="group rounded-md border border-white/10 bg-[var(--portal-surface-subtle)] p-4 transition hover:border-[var(--portal-accent)]/40 hover:bg-[var(--portal-surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--portal-accent)]"
                href={item.href}
                key={item.href}
              >
                <h3 className="text-base font-semibold tracking-normal text-white">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--portal-subtle)]">
                  {item.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-[var(--portal-accent)]">
                  Open section
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-10">
          <h2 className="text-lg font-semibold tracking-normal">
            Admin capability map
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {readinessItems.map((item) => (
              <Link
                className="rounded-md border border-white/10 bg-[var(--portal-surface-subtle)] p-4 transition hover:border-white/25 hover:bg-[var(--portal-surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--portal-accent)]"
                href={item.href}
                key={item.label}
              >
                <h3 className="text-base font-semibold tracking-normal">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-[var(--portal-subtle)]">{item.status}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
