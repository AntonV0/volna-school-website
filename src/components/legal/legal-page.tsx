import { BrandCard } from "@/components/ui/brand-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { legalContent } from "@/content/legal-content";
import type { Locale } from "@/lib/i18n/config";

type LegalPageProps = {
  locale: Locale;
  routeKey: "privacy" | "refund";
};

export function LegalPage({ locale, routeKey }: LegalPageProps) {
  const content = legalContent[locale][routeKey];

  return (
    <>
      <SectionContainer className="bg-section-wash">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] lg:items-start">
          <div className="space-y-8">
            <SectionHeading eyebrow={content.eyebrow} title={content.title}>
              <p>{content.summary}</p>
            </SectionHeading>
            <BrandCard
              accent="left"
              accentClassName="border-l-accent"
              as="div"
              className="border-accent-border text-sm leading-6 text-muted-foreground"
            >
              <p className="font-semibold text-foreground">
                {locale === "en" ? "Review status" : "Статус проверки"}
              </p>
              <p className="mt-2">{content.reviewNotice}</p>
            </BrandCard>
          </div>

          <BrandCard as="aside" shadow="soft">
            <dl className="grid gap-4">
              {content.metadata.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </BrandCard>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white">
        <div className="mx-auto max-w-6xl">
          <ul className="grid gap-4 md:grid-cols-3">
            {content.highlights.map((highlight) => (
              <BrandCard
                accent="top"
                as="li"
                className="text-sm leading-6 text-muted-foreground"
                key={highlight}
              >
                {highlight}
              </BrandCard>
            ))}
          </ul>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-section-wash">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2">
          {content.sections.map((section) => (
            <BrandCard
              key={section.title}
              padding="lg"
            >
              <h2 className="text-xl font-semibold text-foreground">
                {section.title}
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-5 space-y-2 text-sm leading-6 text-foreground">
                  {section.bullets.map((bullet) => (
                    <li className="flex gap-2" key={bullet}>
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </BrandCard>
          ))}

          <BrandCard
            className="border-brand-teal/20 bg-brand-teal-deep text-white lg:col-span-2"
            padding="lg"
            shadow="soft"
            tone="plain"
          >
            <h2 className="text-xl font-semibold">
              {content.contact.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              {content.contact.body}
            </p>
          </BrandCard>
        </div>
      </SectionContainer>
    </>
  );
}
