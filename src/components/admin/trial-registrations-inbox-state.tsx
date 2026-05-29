type TrialRegistrationsInboxStateProps = {
  eyebrow: string;
  message: string;
  title: string;
};

export function TrialRegistrationsInboxState({
  eyebrow,
  message,
  title,
}: TrialRegistrationsInboxStateProps) {
  return (
    <section className="rounded-md border border-white/10 bg-[var(--portal-surface)] p-8 shadow-[var(--portal-shadow)]">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--portal-accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-normal">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--portal-muted)]">
        {message}
      </p>
    </section>
  );
}
