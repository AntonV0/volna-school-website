import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";
import {
  getCourseDetailContent,
  getCourseDetailKeysForParent,
} from "@/content/course-detail-content";
import type { Locale } from "@/lib/i18n/config";
import { getCourseDetailPath, type PageRouteKey } from "@/lib/i18n/routing";

type CourseRelatedLinksProps = {
  locale: Locale;
  parentKey: Extract<PageRouteKey, "children" | "gcse" | "alevel" | "adults">;
};

const labels = {
  en: {
    eyebrow: "Course details",
    title: "Compare focused course routes",
    intro:
      "Use these pages to check who each route is for, what lessons focus on, and what to discuss during the free trial.",
    stage: "Good fit",
    focus: "Focus",
    cta: "View details",
  },
  ru: {
    eyebrow: "Подробности курса",
    title: "Сравнить отдельные маршруты",
    intro:
      "Эти страницы помогают понять, кому подходит каждый маршрут, на чем строятся уроки и что обсудить на пробном занятии.",
    stage: "Кому подходит",
    focus: "Фокус",
    cta: "Подробнее",
  },
} as const;

export function CourseRelatedLinks({
  locale,
  parentKey,
}: CourseRelatedLinksProps) {
  const detailKeys = getCourseDetailKeysForParent(parentKey);

  if (detailKeys.length === 0) {
    return null;
  }

  const copy = labels[locale];

  return (
    <SectionContainer className="bg-white">
      <div className="border-t border-brand-teal/10 pt-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-brand-red">
            {copy.eyebrow}
          </p>
          <h2
            className="mt-2 text-2xl font-semibold text-foreground"
            id={`${parentKey}-details-heading`}
          >
            {copy.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            {copy.intro}
          </p>
        </div>

        <div
          aria-labelledby={`${parentKey}-details-heading`}
          className="mt-6 grid gap-4 md:grid-cols-3"
        >
          {detailKeys.map((detailKey) => {
            const detail = getCourseDetailContent(locale, detailKey);
            const path = getCourseDetailPath(locale, detailKey);
            const stage = detail.summary.items[0]?.value;
            const focus = detail.summary.items[1]?.value;

            return (
              <article
                className="flex min-h-full flex-col rounded-lg border border-brand-teal/15 bg-background p-5 shadow-sm transition hover:border-brand-teal/35 hover:shadow-[var(--shadow-soft)]"
                key={detailKey}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-teal">
                  {detail.hero.eyebrow}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  <Link
                    className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
                    href={path}
                  >
                    {detail.hero.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {detail.hero.summary}
                </p>

                <dl className="mt-5 grid gap-3 border-t border-brand-teal/10 pt-4 text-sm">
                  {stage ? (
                    <div>
                      <dt className="font-semibold text-foreground">
                        {copy.stage}
                      </dt>
                      <dd className="mt-1 leading-6 text-muted-foreground">
                        {stage}
                      </dd>
                    </div>
                  ) : null}
                  {focus ? (
                    <div>
                      <dt className="font-semibold text-foreground">
                        {copy.focus}
                      </dt>
                      <dd className="mt-1 leading-6 text-muted-foreground">
                        {focus}
                      </dd>
                    </div>
                  ) : null}
                </dl>

                <ButtonLink
                  className="mt-5 w-full sm:w-auto"
                  href={path}
                  variant="secondary"
                >
                  {copy.cta}
                </ButtonLink>
              </article>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
