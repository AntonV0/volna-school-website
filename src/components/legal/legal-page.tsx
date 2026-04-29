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
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow={content.eyebrow} title={content.title}>
            <p>{content.summary}</p>
          </SectionHeading>
          <div className="mt-8 rounded-lg border border-brand-teal/15 bg-brand-teal-soft p-4 text-sm leading-6 text-muted-foreground">
            {content.reviewNotice}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-blue">
        <div className="mx-auto grid max-w-3xl gap-4">
          {content.sections.map((section) => (
            <article
              className="rounded-lg border border-border-soft bg-white p-6 shadow-sm"
              key={section.title}
            >
              <h2 className="text-xl font-semibold text-foreground">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
