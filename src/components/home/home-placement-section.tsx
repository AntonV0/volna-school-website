import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";

export function PlacementSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const placement = content.courseChooser.placement;

  return (
    <SectionContainer className="bg-white" id="placement">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow={locale === "en" ? "Free first lesson" : content.hero.primaryCtaLabel}
            level={2}
            title={locale === "en" ? "A calm route into the right class" : placement.title}
          >
            <p>
              {locale === "en"
                ? "The first conversation is practical: understand the learner, check the level, and choose a route that feels realistic."
                : placement.title}
            </p>
          </SectionHeading>
          <ButtonLink
            className="mt-6 w-full sm:w-auto"
            href={getLocalizedPath(locale, "registration")}
          >
            {content.hero.primaryCtaLabel}
          </ButtonLink>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {placement.steps.map((step, index) => (
            <article
              className="rounded-lg border border-border-soft border-t-4 border-t-accent bg-white p-5 shadow-sm"
              key={step.title}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
