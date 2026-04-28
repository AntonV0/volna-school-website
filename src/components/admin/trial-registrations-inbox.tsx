import { AdminNavigation } from "@/components/admin/admin-navigation";
import type { AdminAuthUser } from "@/lib/admin/auth";
import {
  getCourseInterestLabel,
  getPreferredContactLabel,
  type TrialRegistrationsInboxResult,
} from "@/lib/admin/trial-registrations";
import type { AdminTrialRegistrationLead } from "@/types/admin";

type TrialRegistrationsInboxProps = {
  result: TrialRegistrationsInboxResult;
  user: AdminAuthUser;
};

const statusLabels: Record<AdminTrialRegistrationLead["status"], string> = {
  closed: "Closed",
  contacted: "Contacted",
  converted: "Converted",
  new: "New",
  trial_completed: "Trial completed",
  trial_scheduled: "Trial scheduled",
};

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime()) || date.getTime() === 0) {
    return "Date unavailable";
  }

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function InboxState({
  eyebrow,
  message,
  title,
}: {
  eyebrow: string;
  message: string;
  title: string;
}) {
  return (
    <section className="rounded-md border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#72d7df]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-normal">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[#c3d7df]">
        {message}
      </p>
    </section>
  );
}

function LeadCard({ lead }: { lead: AdminTrialRegistrationLead }) {
  return (
    <article className="overflow-hidden rounded-md border border-white/10 bg-white/[0.035] p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="break-words text-xl font-semibold tracking-normal text-white">
              {lead.studentDisplayName}
            </h2>
            <span className="rounded-sm bg-[#72d7df]/14 px-2 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#d8f7f9]">
              {statusLabels[lead.status]}
            </span>
          </div>
          <p className="mt-2 text-sm text-[#b9cdd5]">
            Received {formatDate(lead.createdAt)}
          </p>
        </div>

        <div className="grid gap-2 text-sm text-[#d8f7f9] sm:grid-cols-2 lg:min-w-80">
          <span className="rounded-md border border-white/10 bg-[#122734] px-3 py-2 leading-5">
            {getCourseInterestLabel(lead.courseInterest)}
          </span>
          <span className="rounded-md border border-white/10 bg-[#122734] px-3 py-2 leading-5">
            Contact by {getPreferredContactLabel(lead.preferredContact)}
          </span>
        </div>
      </div>

      <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="text-[#8fb3bf]">Parent or guardian</dt>
          <dd className="mt-1 font-medium text-white">
            {lead.guardianName || "Not provided"}
          </dd>
        </div>
        <div>
          <dt className="text-[#8fb3bf]">Learner age/year</dt>
          <dd className="mt-1 font-medium text-white">
            {lead.learnerAge || "Not provided"}
          </dd>
        </div>
        <div>
          <dt className="text-[#8fb3bf]">Email</dt>
          <dd className="mt-1 break-words font-medium text-white">
            {lead.email || "Not provided"}
          </dd>
        </div>
        <div>
          <dt className="text-[#8fb3bf]">Phone</dt>
          <dd className="mt-1 break-words font-medium text-white">
            {lead.phone || "Not provided"}
          </dd>
        </div>
      </dl>

      {lead.message ? (
        <div className="mt-5 rounded-md border border-white/10 bg-[#122734] p-4">
          <p className="text-sm font-semibold text-[#d8f7f9]">Message</p>
          <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-[#c3d7df]">
            {lead.message}
          </p>
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2 text-xs text-[#8fb3bf]">
        <span>Locale: {lead.locale.toUpperCase()}</span>
        <span aria-hidden="true">/</span>
        <span>
          Consent: {lead.consentToContact === true ? "recorded" : "not recorded"}
        </span>
        {lead.sourcePath ? (
          <>
            <span aria-hidden="true">/</span>
            <span className="break-all">Source: {lead.sourcePath}</span>
          </>
        ) : null}
      </div>

      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="text-sm text-[#f1c66b]">
          Lead-to-student conversion is intentionally not enabled yet.
        </p>
      </div>
    </article>
  );
}

export function TrialRegistrationsInbox({
  result,
  user,
}: TrialRegistrationsInboxProps) {
  const signedInLabel = user.email ? user.email : "Authenticated session";
  const leads = result.status === "success" ? result.leads : [];

  return (
    <main className="min-h-screen bg-[#0f1720] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#72d7df]">
              Volna School Admin
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Trial registrations
            </h1>
          </div>
          <div className="break-all rounded-md border border-[#72d7df]/35 bg-[#15303b] px-4 py-3 text-sm text-[#d8f7f9]">
            {signedInLabel}
          </div>
        </header>

        <AdminNavigation activePath="/admin/trial-registrations" />

        <section className="grid gap-4 py-6 sm:grid-cols-3">
          <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
            <p className="text-sm text-[#8fb3bf]">Open leads</p>
            <p className="mt-2 text-3xl font-semibold">{leads.length}</p>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
            <p className="text-sm text-[#8fb3bf]">Data source</p>
            <p className="mt-2 text-base font-semibold leading-6">
              Authenticated Supabase read
            </p>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
            <p className="text-sm text-[#8fb3bf]">Next workflow</p>
            <p className="mt-2 text-base font-semibold leading-6">
              Convert lead to student
            </p>
          </div>
        </section>

        {result.status === "success" && leads.length === 0 ? (
          <InboxState
            eyebrow="No leads yet"
            message="New free trial lesson requests will appear here after the public registration form saves them to Supabase. No placeholder people or imported spreadsheet data are shown."
            title="The inbox is ready"
          />
        ) : null}

        {result.status !== "success" ? (
          <InboxState
            eyebrow={
              result.status === "config-error"
                ? "Configuration needed"
                : "Read unavailable"
            }
            message={result.message}
            title="Trial registrations cannot be displayed yet"
          />
        ) : null}

        {leads.length > 0 ? (
          <section className="grid gap-4 pb-10">
            {leads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} />
            ))}
          </section>
        ) : null}
      </div>
    </main>
  );
}
