import { AdminNavigation } from "@/components/admin/admin-navigation";
import { TrialRegistrationLeadCard } from "@/components/admin/trial-registration-lead-card";
import { TrialRegistrationsInboxState } from "@/components/admin/trial-registrations-inbox-state";
import { TrialRegistrationsSummary } from "@/components/admin/trial-registrations-summary";
import { isOpenTrialLeadStatus } from "@/lib/admin/trial-registration-status";
import type { AdminAuthUser } from "@/lib/admin/auth";
import type { TrialRegistrationsInboxResult } from "@/lib/admin/trial-registrations";

type TrialRegistrationsInboxProps = {
  result: TrialRegistrationsInboxResult;
  user: AdminAuthUser;
};

export function TrialRegistrationsInbox({
  result,
  user,
}: TrialRegistrationsInboxProps) {
  const signedInLabel = user.email ? user.email : "Authenticated session";
  const leads = result.status === "success" ? result.leads : [];
  const openLeadCount = leads.filter((lead) =>
    isOpenTrialLeadStatus(lead.status),
  ).length;

  return (
    <main className="min-h-screen bg-[var(--portal-bg)] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--portal-accent)]">
              Volna School Admin
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Trial registrations
            </h1>
          </div>
          <div className="break-all rounded-md border border-[var(--portal-accent)]/35 bg-[var(--portal-panel-raised)] px-4 py-3 text-sm text-[var(--portal-accent-soft)]">
            {signedInLabel}
          </div>
        </header>

        <AdminNavigation activePath="/admin/trial-registrations" />

        <TrialRegistrationsSummary
          openLeadCount={openLeadCount}
          totalLeadCount={leads.length}
        />

        {result.status === "success" && leads.length === 0 ? (
          <TrialRegistrationsInboxState
            eyebrow="No leads yet"
            message="New free trial lesson requests will appear here after the public registration form saves them to Supabase. No placeholder people or imported spreadsheet data are shown."
            title="The inbox is ready"
          />
        ) : null}

        {result.status !== "success" ? (
          <TrialRegistrationsInboxState
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
              <TrialRegistrationLeadCard key={lead.id} lead={lead} />
            ))}
          </section>
        ) : null}
      </div>
    </main>
  );
}
