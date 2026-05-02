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
      <SectionContainer className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] lg:items-start">
          <div className="space-y-8">
            <SectionHeading eyebrow={content.eyebrow} title={content.title}>
              <p>{content.summary}</p>
            </SectionHeading>
            <div className="rounded-lg border border-brand-gold/35 bg-brand-blue-soft p-5 text-sm leading-6 text-muted-foreground">
              <p className="font-semibold text-foreground">
                {locale === "en" ? "Review status" : "Статус проверки"}
              </p>
              <p className="mt-2">{content.reviewNotice}</p>
            </div>
          </div>

          <aside className="rounded-lg border border-border-soft bg-white p-5 shadow-sm">
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
          </aside>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-blue">
        <div className="mx-auto max-w-6xl">
          <ul className="grid gap-4 md:grid-cols-3">
            {content.highlights.map((highlight) => (
              <li
                className="rounded-lg border border-brand-teal/15 bg-white p-5 text-sm leading-6 text-muted-foreground shadow-sm"
                key={highlight}
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2">
          {content.sections.map((section) => (
            <article
              className="rounded-lg border border-border-soft bg-background p-6 shadow-sm"
              key={section.title}
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
                      <span aria-hidden="true" className="text-brand-red">
                        +
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}

          <article className="rounded-lg border border-brand-teal/20 bg-brand-teal-soft p-6 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-semibold text-foreground">
              {content.contact.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {content.contact.body}
            </p>
          </article>
        </div>
      </SectionContainer>
    </>
  );
}
