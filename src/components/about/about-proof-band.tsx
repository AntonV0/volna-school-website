import { SectionContainer } from "@/components/ui/section-container";
import { aboutContent } from "@/content/about-content";
import type { Locale } from "@/lib/i18n/config";

export function AboutProofBand({ locale }: { locale: Locale }) {
  const content = aboutContent[locale].proof;

  return (
    <SectionContainer className="bg-[#fffdf8]" id="proof">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-teal sm:text-4xl">
            {content.title}
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-1 w-16 bg-brand-teal" />
            <span className="h-1 w-8 bg-brand-gold" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {content.items.map((item) => (
            <article
              className="rounded-lg border border-brand-teal/15 bg-white p-5 shadow-sm"
              key={`${item.value}-${item.label}`}
            >
              <p className="text-3xl font-semibold leading-none text-brand-teal">
                {item.value}
              </p>
              <h3 className="mt-4 text-base font-semibold leading-6 text-foreground">
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
