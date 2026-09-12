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
      label: "From first words to lasting fluency",
      value: "Learn Russian at every stage",
    },
    {
      label: "Delivered through Microsoft Teams and Zoom",
      value: "Live, teacher-led lessons",
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
            "min-w-0",
            variant === "dark"
              ? "border-t border-white/15 py-4 first:border-t-0 sm:shrink-0 sm:border-l sm:border-t-0 sm:px-[clamp(1rem,2vw,2rem)] sm:py-0 sm:first:border-l-0 sm:first:pl-0 sm:last:pr-0"
              : "sm:shrink-0 sm:border-l sm:border-brand-teal/14 sm:px-8 sm:first:border-l-0 sm:first:pl-0 sm:last:pr-0",
          )}
          key={fact.label}
        >
          <dt
            className={cn(
              "text-base font-semibold leading-6 sm:text-[1.05rem]",
              variant === "dark"
                ? "text-white lg:text-[clamp(0.95rem,calc(0.42rem_+_0.82vw),1.25rem)]"
                : "text-brand-teal lg:text-[clamp(0.82rem,calc(0.275rem_+_0.85vw),1.125rem)]",
            )}
          >
            {fact.value}
          </dt>
          <span
            aria-hidden="true"
            className={cn(
              "mt-1.5 h-0.5 w-8 rounded-full lg:w-[clamp(1.5rem,2.5vw,2.5rem)]",
              variant === "dark"
                ? "bg-accent-on-dark"
                : "hidden bg-accent lg:block",
            )}
          />
          <dd
            className={cn(
              "mt-1 text-sm font-medium leading-5 sm:text-[0.95rem] lg:mt-2 lg:font-normal",
              variant === "dark"
                ? "text-white/72 lg:text-[clamp(0.82rem,calc(0.45rem_+_0.57vw),1rem)]"
                : "text-foreground/72 lg:text-[clamp(0.78rem,calc(0.39rem_+_0.61vw),1rem)] lg:text-muted-foreground",
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
    <section data-trust-strip="" className="bg-brand-teal-deep px-5 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <HomeTrustSignals
          className="grid py-2 sm:grid-cols-3 sm:gap-0 sm:px-6 sm:py-[clamp(1.75rem,2vw,2.25rem)] xl:px-4"
          locale={locale}
          variant="dark"
        />
      </div>
    </section>
  );
}
