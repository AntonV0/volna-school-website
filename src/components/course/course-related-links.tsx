import Link from "next/link";

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
    title: "Explore focused course pages",
    intro:
      "Short, review-ready detail pages help families compare the next step without reading a long overview.",
  },
  ru: {
    eyebrow: "Подробности курса",
    title: "Посмотреть отдельные страницы курса",
    intro:
      "Короткие проверочные страницы помогают сравнить следующий шаг без длинного общего описания.",
  },
} as const;

export function CourseRelatedLinks({ locale, parentKey }: CourseRelatedLinksProps) {
  const detailKeys = getCourseDetailKeysForParent(parentKey);

  if (detailKeys.length === 0) {
    return null;
  }

  const copy = labels[locale];

  return (
    <SectionContainer className="bg-white">
      <div className="border-t border-brand-teal/10 pt-6">
        <p className="text-sm font-semibold text-brand-red">{copy.eyebrow}</p>
        <h3
          className="mt-2 text-lg font-semibold text-foreground"
          id={`${parentKey}-details-heading`}
        >
          {copy.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {copy.intro}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {detailKeys.map((detailKey) => {
            const detail = getCourseDetailContent(locale, detailKey);

            return (
              <Link
                className="inline-flex min-h-10 items-center rounded-md border border-brand-teal/20 bg-white px-4 py-2 text-sm font-semibold text-brand-teal transition hover:border-brand-teal/50 hover:bg-brand-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                href={getCourseDetailPath(locale, detailKey)}
                key={detailKey}
              >
                {detail.hero.title}
              </Link>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
