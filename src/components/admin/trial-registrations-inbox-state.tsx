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
