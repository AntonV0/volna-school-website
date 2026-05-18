import Link from "next/link";

import { ApprovedImage } from "@/components/ui/approved-image";
import { SectionContainer } from "@/components/ui/section-container";
import { aboutContent } from "@/content/about-content";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import type { PageRouteKey } from "@/lib/i18n/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type CourseRouteKey = Extract<
  PageRouteKey,
  "children" | "gcse" | "alevel" | "adults"
>;

const courseTileImage: Record<CourseRouteKey, (typeof VOLNA_IMAGES.home.courseCards)[CourseRouteKey]> =
  {
    children: VOLNA_IMAGES.home.courseCards.children,
    gcse: VOLNA_IMAGES.home.courseCards.gcse,
    alevel: VOLNA_IMAGES.home.courseCards.alevel,
    adults: VOLNA_IMAGES.home.courseCards.adults,
  };

const englishCourseRouteSummaries: Record<CourseRouteKey, string> = {
  children: "Bilingual, beginner, and private Russian lessons for children.",
  gcse: "Exam practice, mock support, and a clear GCSE route.",
  alevel: "Advanced essays, speaking, cultural study, and IRP support.",
  adults: "Flexible private Russian lessons shaped around real goals.",
};

export function AboutClassesSection({ locale }: { locale: Locale }) {
  const content = aboutContent[locale];
  const site = siteContent[locale];

  return (
      <SectionContainer className="bg-white" id="classes">
        <div className="space-y-9">
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
                {content.classes.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-teal sm:text-4xl">
                {content.classes.title}
              </h2>
              <div className="mt-4 h-1 w-16 bg-brand-teal" />
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              {locale === "en"
                ? "Families can start with a course page or go straight to a free trial lesson. The first conversation confirms level, confidence, and the right lesson format."
                : content.hero.summary}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {content.classes.routes.map((routeKey, index) => (
              <Link
                className="group relative min-h-64 overflow-hidden rounded-lg border-2 border-brand-teal bg-brand-teal text-left shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                href={getLocalizedPath(locale, routeKey)}
                key={routeKey}
              >
                <ApprovedImage
                  className="transition duration-500 group-hover:scale-105"
                  image={courseTileImage[routeKey]}
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-deep/80 via-brand-teal/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-red shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="absolute inset-x-0 bottom-0 bg-brand-teal/88 px-5 py-5 text-white backdrop-blur-sm">
                  <span className="block text-2xl font-semibold leading-tight">
                    {site.routeLabels[routeKey]}
                  </span>
                  <span className="mt-2 block text-sm font-medium leading-6 text-white/86">
                    {locale === "en"
                      ? englishCourseRouteSummaries[routeKey]
                      : site.routeLabels[routeKey]}
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <div className="grid gap-4 rounded-lg border border-brand-teal/15 bg-[#fffdf8] p-5 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-foreground">
                {locale === "en" ? "Not sure which route fits?" : content.classes.title}
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                {locale === "en"
                  ? "Use the free first lesson to check level, confidence, schedule, and whether group or private support is the right next step."
                  : content.hero.summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                className="inline-flex min-h-11 w-full items-center justify-center rounded bg-brand-red px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red sm:w-auto"
                href={getLocalizedPath(locale, "registration")}
              >
                {site.navigation.ctaLabel}
              </Link>
              <Link
                className="inline-flex min-h-11 w-full items-center justify-center rounded border border-brand-teal/35 bg-white px-5 text-sm font-semibold text-brand-teal transition hover:border-brand-teal hover:bg-brand-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal sm:w-auto"
                href={getLocalizedPath(locale, "children")}
              >
                {site.routeLabels.children}
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
  );
}
