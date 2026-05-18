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
      <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
        <p className="text-sm text-[#8fb3bf]">Open leads</p>
        <p className="mt-2 text-3xl font-semibold">{openLeadCount}</p>
      </div>
      <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
        <p className="text-sm text-[#8fb3bf]">Total shown</p>
        <p className="mt-2 text-base font-semibold leading-6">
          {totalLeadCount} recent registrations
        </p>
      </div>
      <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
        <p className="text-sm text-[#8fb3bf]">Next workflow</p>
        <p className="mt-2 text-base font-semibold leading-6">
          Convert lead to student
        </p>
      </div>
    </section>
  );
}
