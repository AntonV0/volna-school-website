import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/classnames";

const trustFacts: Record<
  Locale,
  Array<{ label: string; value: string }>
> = {
  en: [
    {
      label: "Teaching Russian since 2009",
      value: "15+ years of experience",
    },
    {
      label: "Lessons that build skills year after year",
      value: "From early years to A Level",
    },
    {
      label: "Real-time lessons on Teams and Zoom",
      value: "Live teacher-led learning",
    },
  ],
  ru: [
    { label: "Опыт школы", value: "с 2009" },
    { label: "Онлайн", value: "с 2020" },
    { label: "Курсы", value: "дети, экзамены, взрослые" },
  ],
};

export function HomeTrustSignals({
  className,
  locale,
  variant = "light",
}: {
  className: string;
  locale: Locale;
  variant?: "dark" | "light";
}) {
  return (
    <dl className={className}>
      {trustFacts[locale].map((fact) => (
        <div
          className={cn(
            "sm:shrink-0 sm:border-l sm:border-brand-teal/14 sm:px-8 sm:first:border-l-0 sm:first:pl-0 sm:last:pr-0 lg:min-w-0",
            variant === "dark"
              ? "lg:border-l lg:border-white/15 lg:px-[clamp(1rem,2vw,2rem)] lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
              : "lg:border-l-0 lg:px-0",
          )}
          key={fact.label}
        >
          <dt
            className={cn(
              "text-base font-semibold leading-6 text-brand-teal sm:text-[1.05rem] lg:whitespace-nowrap",
              variant === "dark"
                ? "lg:text-[clamp(0.95rem,calc(0.42rem_+_0.82vw),1.25rem)] lg:text-white"
                : "lg:text-[clamp(0.82rem,calc(0.275rem_+_0.85vw),1.125rem)]",
            )}
          >
            {fact.value}
          </dt>
          <span
            aria-hidden="true"
            className={cn(
              "mt-1.5 hidden h-0.5 rounded-full lg:block lg:w-[clamp(1.5rem,2.5vw,2.5rem)]",
              variant === "dark" ? "bg-accent-on-dark" : "bg-accent",
            )}
          />
          <dd
            className={cn(
              "mt-1 text-sm font-medium leading-5 text-foreground/72 sm:text-[0.95rem] lg:mt-2 lg:whitespace-nowrap lg:font-normal",
              variant === "dark"
                ? "lg:text-[clamp(0.82rem,calc(0.45rem_+_0.57vw),1rem)] lg:text-white/72"
                : "lg:text-[clamp(0.78rem,calc(0.39rem_+_0.61vw),1rem)] lg:text-muted-foreground",
            )}
          >
            {fact.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function HomeTrustStripSection({ locale }: { locale: Locale }) {
  return (
    <section className="hidden border-y border-brand-teal/35 bg-brand-teal-deep px-5 sm:px-8 lg:block lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <HomeTrustSignals
          className="grid grid-cols-3 gap-0 px-6 py-[clamp(1.75rem,2vw,2.25rem)] xl:px-4"
          locale={locale}
          variant="dark"
        />
      </div>
    </section>
  );
}
