import Link from "next/link";

import { signOutPrivatePortalUser } from "@/lib/private-portal/actions";
import type { PrivatePortalUser } from "@/lib/private-portal/auth";
import { privatePortalRoleLabels } from "@/lib/private-portal/config";

type TeacherWorkspaceSection = "classes" | "homework";

type TeacherWorkspaceShellProps = {
  activeSection: TeacherWorkspaceSection;
  setupNeeded?: boolean;
  user: PrivatePortalUser | null;
};

const sections: Record<
  TeacherWorkspaceSection,
  {
    cards: readonly { label: string; text: string }[];
    description: string;
    eyebrow: string;
    title: string;
  }
> = {
  classes: {
    cards: [
      {
        label: "Assigned class overview",
        text: "Reserved for classes explicitly assigned to the signed-in teacher after the assignment model is approved.",
      },
      {
        label: "Scoped teaching context",
        text: "Designed for public-safe planning only; no student names, lesson links, attendance records, or private notes are shown.",
      },
      {
        label: "Permission decision pending",
        text: "Future access should come from server-side role checks plus assignment-scoped records, not broad school-wide visibility.",
      },
    ],
    description:
      "This page frames a future assigned-class workspace. It does not grant broad school access or expose operational records.",
    eyebrow: "Teacher Classes",
    title: "Assigned class workspace foundation",
  },
  homework: {
    cards: [
      {
        label: "Draft creation",
        text: "A future space for preparing homework drafts inside the teacher's approved class scope.",
      },
      {
        label: "Review workflow",
        text: "Reserved for review states and admin-approved publishing rules before anything becomes visible to families or students.",
      },
      {
        label: "No live publishing",
        text: "This scaffold contains no private homework content, class links, submissions, or automatic publication controls.",
      },
    ],
    description:
      "This page frames a future homework creation and review workflow. It is not a live publishing surface.",
    eyebrow: "Teacher Homework",
    title: "Homework workflow foundation",
  },
};

export function TeacherWorkspaceShell({
  activeSection,
  setupNeeded = false,
  user,
}: TeacherWorkspaceShellProps) {
  const content = sections[activeSection];
  const roleLabel = user ? privatePortalRoleLabels[user.role] : "Not available";

  return (
    <main className="min-h-screen bg-[#0f1720] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="border-b border-white/10 pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#72d7df]">
                Volna School Teacher
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
                {setupNeeded ? "Portal setup needed" : content.title}
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {user ? (
                <form action={signOutPrivatePortalUser}>
                  <button
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-[#d8f7f9] transition hover:border-white/30 hover:bg-white/[0.06]"
                    type="submit"
                  >
                    Sign out
                  </button>
                </form>
              ) : null}
              <Link
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#72d7df]/35 bg-[#15303b] px-4 py-2 text-sm font-semibold text-[#d8f7f9] transition hover:border-[#72d7df]/60 hover:bg-[#1a3b48]"
                href="/teacher"
              >
                Teacher home
              </Link>
            </div>
          </div>

          <nav aria-label="Teacher workspace" className="mt-6 flex flex-wrap gap-2">
            {(
              [
                ["classes", "/teacher/classes", "Classes"],
                ["homework", "/teacher/homework", "Homework"],
              ] as const
            ).map(([section, href, label]) => {
              const isActive = section === activeSection;

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex min-h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "border-[#f1c66b]/60 bg-[#3a2f17] text-[#ffe4a0]"
                      : "border-white/10 bg-white/[0.035] text-[#c3d7df] hover:border-white/25 hover:bg-white/[0.06]"
                  }`}
                  href={href}
                  key={href}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </header>

        <section className="grid gap-5 py-8 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-md border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f1c66b]">
              {content.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal">
              Protected scaffold only
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#c3d7df]">
              {setupNeeded
                ? "Supabase authentication environment variables are not configured, so this private teacher area is closed and no operational data is shown."
                : content.description}
            </p>
          </article>

          <aside
            aria-labelledby="teacher-access-boundary"
            className="rounded-md border border-white/10 bg-[#122734] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
          >
            <h2
              className="text-lg font-semibold tracking-normal"
              id="teacher-access-boundary"
            >
              Access boundary
            </h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[#b9cdd5]">Route</dt>
                <dd className="text-right font-medium text-white">
                  /teacher/{activeSection}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[#b9cdd5]">Required portal</dt>
                <dd className="text-right font-medium text-white">Teacher</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[#b9cdd5]">Signed-in role</dt>
                <dd className="text-right font-medium text-white">
                  {roleLabel}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[#b9cdd5]">Session</dt>
                <dd className="break-all text-right font-medium text-white">
                  {user?.email ?? "Not available"}
                </dd>
              </div>
            </dl>
          </aside>
        </section>

        <section aria-labelledby="teacher-workspace-scope" className="pb-10">
          <h2
            className="text-lg font-semibold tracking-normal"
            id="teacher-workspace-scope"
          >
            Scope placeholders
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {content.cards.map((card) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.035] p-4"
                key={card.label}
              >
                <h3 className="text-base font-semibold tracking-normal">
                  {card.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#b9cdd5]">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
