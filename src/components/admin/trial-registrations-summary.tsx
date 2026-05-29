type TrialRegistrationsSummaryProps = {
  openLeadCount: number;
  totalLeadCount: number;
};

export function TrialRegistrationsSummary({
  openLeadCount,
  totalLeadCount,
}: TrialRegistrationsSummaryProps) {
  return (
    <section className="grid gap-4 py-6 sm:grid-cols-3">
      <div className="rounded-md border border-white/10 bg-[var(--portal-surface-subtle)] p-4">
        <p className="text-sm text-[var(--portal-label)]">Open leads</p>
        <p className="mt-2 text-3xl font-semibold">{openLeadCount}</p>
      </div>
      <div className="rounded-md border border-white/10 bg-[var(--portal-surface-subtle)] p-4">
        <p className="text-sm text-[var(--portal-label)]">Total shown</p>
        <p className="mt-2 text-base font-semibold leading-6">
          {totalLeadCount} recent registrations
        </p>
      </div>
      <div className="rounded-md border border-white/10 bg-[var(--portal-surface-subtle)] p-4">
        <p className="text-sm text-[var(--portal-label)]">Next workflow</p>
        <p className="mt-2 text-base font-semibold leading-6">
          Convert lead to student
        </p>
      </div>
    </section>
  );
}
