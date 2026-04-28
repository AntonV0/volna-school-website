import Link from "next/link";

import type { PrivatePortalUser } from "@/lib/private-portal/auth";
import {
  privatePortalAccess,
  type PrivatePortalKey,
  privatePortalLabels,
  privatePortalRoleLabels,
  privatePortalRoutes,
} from "@/lib/private-portal/config";

const portalCopy: Record<
  Exclude<PrivatePortalKey, "admin">,
  {
    capabilityItems: readonly { label: string; status: string }[];
    description: string;
    eyebrow: string;
    title: string;
  }
> = {
  student: {
    capabilityItems: [
      {
        label: "Lesson links",
        status: "Future integration",
      },
      {
        label: "Homework",
        status: "Permission model first",
      },
      {
        label: "Learning materials",
        status: "Scope pending",
      },
    ],
    description:
      "A future student area for approved lesson access, homework, and learning materials. It intentionally contains no student records or private class content yet.",
    eyebrow: "Volna School Student",
    title: "Student portal foundation",
  },
  teacher: {
    capabilityItems: [
      {
        label: "Class lists",
        status: "Role model first",
      },
      {
        label: "Homework",
        status: "Scope pending",
      },
      {
        label: "Attendance",
        status: "Admin policy needed",
      },
    ],
    description:
      "A future teacher workspace for teaching workflows such as class context, homework, attendance, and lesson notes. Exact permissions still need owner approval.",
    eyebrow: "Volna School Teacher",
    title: "Teacher workspace foundation",
  },
};

type PrivatePortalShellProps = {
  portal: Exclude<PrivatePortalKey, "admin">;
  setupNeeded?: boolean;
  user: PrivatePortalUser | null;
};

export function PrivatePortalShell({
  portal,
  setupNeeded = false,
  user,
}: PrivatePortalShellProps) {
  const content = portalCopy[portal];
  const allowedRoles = privatePortalAccess[portal]
    .map((role) => privatePortalRoleLabels[role])
    .join(", ");

  return (
    <main className="min-h-screen bg-[#0f1720] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#72d7df]">
              {content.eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              {setupNeeded ? "Portal setup needed" : content.title}
            </h1>
          </div>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#72d7df]/35 bg-[#15303b] px-4 py-2 text-sm font-semibold text-[#d8f7f9] transition hover:border-[#72d7df]/60 hover:bg-[#1a3b48]"
            href="/"
          >
            Back to website
          </Link>
        </header>

        <section className="grid gap-5 py-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f1c66b]">
              {privatePortalLabels[portal]} area
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal">
              Protected shell only
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#c3d7df]">
              {setupNeeded
                ? "Supabase authentication environment variables are not configured, so this private area is closed and no operational data is shown."
                : content.description}
            </p>
          </div>

          <div className="rounded-md border border-white/10 bg-[#122734] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
            <h2 className="text-lg font-semibold tracking-normal">
              Access boundary
            </h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[#b9cdd5]">Route</dt>
                <dd className="text-right font-medium text-white">
                  {privatePortalRoutes[portal]}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[#b9cdd5]">Allowed roles</dt>
                <dd className="text-right font-medium text-white">
                  {allowedRoles}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[#b9cdd5]">Session</dt>
                <dd className="break-all text-right font-medium text-white">
                  {user?.email ?? "Not available"}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="pb-10">
          <h2 className="text-lg font-semibold tracking-normal">
            Capability map
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {content.capabilityItems.map((item) => (
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
