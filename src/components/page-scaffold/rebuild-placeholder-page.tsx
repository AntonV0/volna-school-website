import { CourseCard } from "@/components/ui/course-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent, type PageScaffoldContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/config";
import {
  courseRouteKeys,
  getLocalizedPath,
  type RouteKey,
} from "@/lib/i18n/routing";

type RebuildPlaceholderPageProps = {
  content: PageScaffoldContent;
  locale: Locale;
};

export function RebuildPlaceholderPage({
  content,
  locale,
}: RebuildPlaceholderPageProps) {
  const site = siteContent[locale];
  const isHome = content.routeKey === "home";

  return (
    <>
      <SectionContainer className="bg-brand-teal-soft">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <SectionHeading eyebrow={content.eyebrow} title={content.title}>
            <p>{content.description}</p>
          </SectionHeading>

          <div className="rounded-lg border border-brand-teal/15 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-foreground">
              {content.statusLabel}
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              {content.statusItems.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span
                    aria-hidden="true"
                    className="mt-2 size-2 rounded-full bg-brand-red"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="section-plan">
        <div className="space-y-8">
          <SectionHeading
            eyebrow={locale === "en" ? "Content slots" : "Места для контента"}
            title={
              locale === "en"
                ? "Reusable page architecture"
                : "Переиспользуемая структура страниц"
            }
          >
            <p>
              {locale === "en"
                ? "The route is intentionally minimal while reviewed copy, imagery, forms, pricing, and calendars are prepared."
                : "Маршрут намеренно минимальный, пока готовятся проверенные тексты, изображения, формы, цены и календари."}
            </p>
          </SectionHeading>

          {isHome ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {courseRouteKeys.map((routeKey) => (
                <CourseCard
                  actionLabel={
                    locale === "en" ? "View scaffold" : "Открыть каркас"
                  }
                  description={site.pages[routeKey].description}
                  href={getLocalizedPath(locale, routeKey)}
                  key={routeKey}
                  title={site.routeLabels[routeKey]}
                />
              ))}
            </div>
          ) : null}
        </div>
      </SectionContainer>
    </>
  );
}

export function LocalizedScaffoldPage({
  locale,
  routeKey,
}: {
  locale: Locale;
  routeKey: RouteKey;
}) {
  return (
    <RebuildPlaceholderPage
      content={siteContent[locale].pages[routeKey]}
      locale={locale}
    />
  );
}

export function createScaffoldMetadata(locale: Locale, routeKey: RouteKey) {
  const page = siteContent[locale].pages[routeKey];

  return {
    title: `${page.title} | Volna School`,
    description: page.description,
  };
}
