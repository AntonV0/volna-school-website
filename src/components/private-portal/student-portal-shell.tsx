import Link from "next/link";

import type { PrivatePortalUser } from "@/lib/private-portal/auth";
import { signOutPrivatePortalUser } from "@/lib/private-portal/actions";
import { privatePortalRoleLabels } from "@/lib/private-portal/config";

type StudentPortalFeature = {
  description: string;
  label: string;
};

type StudentPortalShellProps = {
  features: readonly StudentPortalFeature[];
  intro: string;
  setupNeeded?: boolean;
  statusLabel: string;
  title: string;
  user: PrivatePortalUser | null;
};

const studentNavigation = [
  {
    href: "/student",
    label: "Overview",
  },
  {
    href: "/student/homework",
    label: "Homework",
  },
  {
    href: "/student/lessons",
    label: "Lessons",
  },
] as const;

export function StudentPortalShell({
  features,
  intro,
  setupNeeded = false,
  statusLabel,
  title,
  user,
}: StudentPortalShellProps) {
  return (
    <main className="min-h-screen bg-[#0f1720] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="border-b border-white/10 pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#72d7df]">
                Volna School Student
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
                {setupNeeded ? "Student portal setup needed" : title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#c3d7df]">
                {setupNeeded
                  ? "Supabase authentication environment variables are not configured, so this private student area is closed and no student content is shown."
                  : intro}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:justify-end">
              {user ? (
                <form action={signOutPrivatePortalUser}>
                  <button
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-[#d8f7f9] transition hover:border-white/30 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-[#72d7df] focus:ring-offset-2 focus:ring-offset-[#0f1720]"
                    type="submit"
                  >
                    Sign out
                  </button>
                </form>
              ) : null}
              <Link
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#72d7df]/35 bg-[#15303b] px-4 py-2 text-sm font-semibold text-[#d8f7f9] transition hover:border-[#72d7df]/60 hover:bg-[#1a3b48] focus:outline-none focus:ring-2 focus:ring-[#72d7df] focus:ring-offset-2 focus:ring-offset-[#0f1720]"
                href="/"
              >
                Back to website
              </Link>
            </div>
          </div>

          <nav aria-label="Student portal" className="mt-6">
            <ul className="flex flex-wrap gap-2">
              {studentNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="inline-flex min-h-10 items-center rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm font-semibold text-[#d8f7f9] transition hover:border-[#72d7df]/45 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#72d7df] focus:ring-offset-2 focus:ring-offset-[#0f1720]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <section
          aria-labelledby="student-portal-boundary"
          className="grid gap-5 py-8 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <article className="rounded-md border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f1c66b]">
              {statusLabel}
            </p>
            <h2
              className="mt-3 text-2xl font-semibold tracking-normal"
              id="student-portal-boundary"
            >
              Public-safe scaffold
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#c3d7df]">
              This page defines the protected student portal surface without
              exposing real homework, private learning resources, meeting URLs,
              or student information.
            </p>
          </article>

          <aside
            aria-label="Session and access boundary"
            className="rounded-md border border-white/10 bg-[#122734] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
          >
            <h2 className="text-lg font-semibold tracking-normal">
              Access boundary
            </h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[#b9cdd5]">Allowed role</dt>
                <dd className="text-right font-medium text-white">
                  {privatePortalRoleLabels.student}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[#b9cdd5]">Session</dt>
                <dd className="break-all text-right font-medium text-white">
                  {user?.email ?? "Not available"}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[#b9cdd5]">Data status</dt>
                <dd className="text-right font-medium text-white">
                  Owner approval required
                </dd>
              </div>
            </dl>
          </aside>
        </section>

        <section aria-labelledby="student-portal-scope" className="pb-10">
          <h2
            className="text-lg font-semibold tracking-normal"
            id="student-portal-scope"
          >
            Future student scope
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {features.map((feature) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.035] p-4"
                key={feature.label}
              >
                <h3 className="text-base font-semibold tracking-normal">
                  {feature.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#b9cdd5]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
