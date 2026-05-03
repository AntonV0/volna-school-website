import { ButtonLink } from "@/components/ui/button-link";
import { StructuredData } from "@/components/seo/structured-data";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCourseContent } from "@/content/course-content";
import {
  getCourseDetailContent,
  getCourseDetailKeysForParent,
  type CourseDetailContent,
} from "@/content/course-detail-content";
import type { Locale } from "@/lib/i18n/config";
import { createCourseDetailStructuredData } from "@/lib/metadata";
import { getCourseDetailPath, getLocalizedPath } from "@/lib/i18n/routing";
import { getTrialRegistrationPath } from "@/lib/registration/routing";

type CourseDetailPageProps = {
  content: CourseDetailContent;
  locale: Locale;
};

const relatedLabels = {
  en: {
    eyebrow: "Related routes",
    title: "Compare nearby options",
    body:
      "Not sure this is the exact fit? Step back to the course overview or compare the closest related pages before registering.",
    overviewPrefix: "Back to",
    siblingCta: "Compare with",
  },
  ru: {
    eyebrow: "Похожие маршруты",
    title: "Сравнить соседние варианты",
    body:
      "Если этот маршрут не совсем подходит, вернитесь к общему обзору курса или сравните ближайшие страницы перед записью.",
    overviewPrefix: "Вернуться к",
    siblingCta: "Сравнить с",
  },
} as const;

export function CourseDetailPage({ content, locale }: CourseDetailPageProps) {
  const parentCourse = getCourseContent(locale, content.parentKey);
  const relatedCopy = relatedLabels[locale];
  const siblingDetails = getCourseDetailKeysForParent(content.parentKey)
    .filter((detailKey) => detailKey !== content.key)
    .map((detailKey) => getCourseDetailContent(locale, detailKey));

  return (
    <>
      <StructuredData
        data={createCourseDetailStructuredData(
          locale,
          content,
          parentCourse.hero.title,
        )}
      />
      <SectionContainer className="bg-brand-teal-soft">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8">
            <SectionHeading eyebrow={content.hero.eyebrow} title={content.hero.title}>
              <p>{content.hero.summary}</p>
            </SectionHeading>
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <ButtonLink
                className="w-full sm:w-auto"
                href={getTrialRegistrationPath(locale, content.parentKey)}
              >
                {content.hero.primaryCtaLabel}
              </ButtonLink>
              <ButtonLink className="w-full sm:w-auto" href="#summary" variant="secondary">
                {content.hero.secondaryCtaLabel}
              </ButtonLink>
            </div>
          </div>

          <aside
            aria-labelledby="course-summary-heading"
            className="scroll-mt-28 rounded-lg border border-brand-teal/15 bg-white p-5 shadow-sm"
            id="summary"
          >
            <p className="text-xs font-semibold uppercase text-brand-red">
              {content.summary.eyebrow}
            </p>
            <h2
              className="mt-3 text-xl font-semibold text-foreground"
              id="course-summary-heading"
            >
              {content.summary.title}
            </h2>
            <dl className="mt-5 grid gap-4">
              {content.summary.items.map((item) => (
                <div
                  className="border-t border-border-soft pt-4"
                  key={item.label}
                >
                  <dt className="text-sm font-semibold text-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-muted-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="grid gap-4 md:grid-cols-3">
          {content.sections.map((section) => (
            <article
              className="rounded-lg border border-brand-teal/15 bg-white p-5 shadow-sm"
              key={section.title}
            >
              <h2 className="text-lg font-semibold text-foreground">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white">
        <div className="grid gap-6 border-t border-brand-teal/10 pt-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <SectionHeading
            eyebrow={relatedCopy.eyebrow}
            level={2}
            title={relatedCopy.title}
          >
            <p>{relatedCopy.body}</p>
          </SectionHeading>

          <div className="grid gap-3">
            <ButtonLink
              className="w-full justify-start text-left"
              href={getLocalizedPath(locale, content.parentKey)}
              variant="secondary"
            >
              {relatedCopy.overviewPrefix} {parentCourse.hero.title}
            </ButtonLink>

            {siblingDetails.map((detail) => (
              <ButtonLink
                className="w-full justify-start text-left"
                href={getCourseDetailPath(locale, detail.key)}
                key={detail.key}
                variant="ghost"
              >
                {relatedCopy.siblingCta} {detail.hero.title}
              </ButtonLink>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white" id="trial">
        <div className="overflow-hidden rounded-lg border border-brand-red/20 bg-[linear-gradient(135deg,#ffffff,var(--brand-blue-soft))] shadow-[var(--shadow-soft)]">
          <div className="h-1.5 bg-brand-red" />
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <SectionHeading
              eyebrow={content.nextSteps.eyebrow}
              level={2}
              title={content.nextSteps.title}
            >
              <p>{content.nextSteps.body}</p>
            </SectionHeading>
            <ButtonLink
              className="w-full sm:w-auto"
              href={getTrialRegistrationPath(locale, content.parentKey)}
            >
              {content.nextSteps.ctaLabel}
            </ButtonLink>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
