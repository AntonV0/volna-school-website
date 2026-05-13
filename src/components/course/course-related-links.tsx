import Link from "next/link";

import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";
import {
  getCourseDetailContent,
  getCourseDetailKeysForParent,
} from "@/content/course-detail-content";
import { cn } from "@/lib/classnames";
import type { Locale } from "@/lib/i18n/config";
import { getCourseDetailPath, type PageRouteKey } from "@/lib/i18n/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

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

const routeLabels = {
  en: {
    gcse: {
      title: "Compare focused GCSE support",
      intro:
        "Use these pages to compare preparation, curriculum planning, and exam questions before choosing the right GCSE route.",
    },
    alevel: {
      title: "Choose the right A-Level support",
      intro:
        "Use these pages to check readiness, set-material planning, independent study expectations, and the best route into A-Level support.",
    },
    adults: {
      title: "Find the adult route that fits your goal",
      intro:
        "Use these pages to compare foundations, conversation practice, and private study for travel, family, culture, or work.",
    },
  },
  ru: {
    gcse: {
      title: "Сравнить поддержку GCSE",
      intro:
        "Эти страницы помогают сравнить подготовку, программу и экзаменационные вопросы перед выбором маршрута GCSE.",
    },
    alevel: {
      title: "Выбрать подходящую поддержку A-Level",
      intro:
        "Эти страницы помогают проверить готовность, планирование материалов, самостоятельную работу и подходящий маршрут A-Level.",
    },
    adults: {
      title: "Выбрать подходящий маршрут для взрослых",
      intro:
        "Эти страницы помогают сравнить базовый курс, разговорную практику и индивидуальные занятия для путешествий, семьи, культуры или работы.",
    },
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
  const routeCopy =
    parentKey === "gcse" || parentKey === "alevel" || parentKey === "adults"
      ? routeLabels[locale][parentKey]
      : null;

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
            {routeCopy?.title ?? copy.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            {routeCopy?.intro ?? copy.intro}
          </p>
        </div>

        <div
          aria-labelledby={`${parentKey}-details-heading`}
          className={cn(
            "mt-6 grid gap-4 md:grid-cols-3",
            detailKeys.length === 4 && "lg:grid-cols-4",
          )}
        >
          {detailKeys.map((detailKey) => {
            const detail = getCourseDetailContent(locale, detailKey);
            const path = getCourseDetailPath(locale, detailKey);
            const stage = detail.summary.items[0]?.value;
            const focus = detail.summary.items[1]?.value;
            const image = VOLNA_IMAGES.courseDetails[detailKey];

            return (
              <article
                className="flex min-h-full flex-col overflow-hidden rounded-lg border border-brand-teal/15 bg-background shadow-sm transition hover:border-brand-teal/35 hover:shadow-[var(--shadow-soft)]"
                key={detailKey}
              >
                <div className="relative aspect-[16/9] bg-brand-teal-soft">
                  <ApprovedImage
                    image={image}
                    sizes={
                      detailKeys.length === 4
                        ? "(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 100vw"
                        : "(min-width: 768px) 30vw, 100vw"
                    }
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
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
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
