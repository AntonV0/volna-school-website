import Link from "next/link";

import { ApprovedImage } from "@/components/ui/approved-image";
import { homeContent } from "@/content/home-content";
import { cn } from "@/lib/classnames";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import { courseSignalLabels, type HomeCourseRouteKey } from "@/components/home/home-shared";

const courseCardThemeClasses: Record<
  HomeCourseRouteKey,
  {
    card: string;
    ctaIcon: string;
    ctaText: string;
    eyebrow: string;
    imageBg: string;
    imageTint: string;
    line: string;
    pill: string;
  }
> = {
  children: {
    card:
      "border-brand-blue/28 hover:border-brand-blue/60 focus-visible:outline-brand-blue",
    ctaIcon:
      "border-brand-blue/25 bg-brand-blue-soft text-brand-blue group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white",
    ctaText: "text-brand-blue",
    eyebrow: "text-brand-blue",
    imageBg: "bg-brand-blue-soft",
    imageTint: "bg-brand-blue/30",
    line: "bg-brand-blue",
    pill: "bg-brand-blue-soft text-brand-blue",
  },
  gcse: {
    card: "border-route-exam/30 hover:border-route-exam/65 focus-visible:outline-route-exam",
    ctaIcon:
      "border-route-exam/25 bg-route-exam-soft text-route-exam group-hover:border-route-exam group-hover:bg-route-exam group-hover:text-white",
    ctaText: "text-route-exam",
    eyebrow: "text-route-exam",
    imageBg: "bg-route-exam-soft",
    imageTint: "bg-route-exam/30",
    line: "bg-route-exam",
    pill: "bg-route-exam-soft text-route-exam",
  },
  alevel: {
    card: "border-route-advanced/30 hover:border-route-advanced/65 focus-visible:outline-route-advanced",
    ctaIcon:
      "border-route-advanced/25 bg-route-advanced-soft text-route-advanced group-hover:border-route-advanced group-hover:bg-route-advanced group-hover:text-white",
    ctaText: "text-route-advanced",
    eyebrow: "text-route-advanced",
    imageBg: "bg-route-advanced-soft",
    imageTint: "bg-route-advanced/30",
    line: "bg-route-advanced",
    pill: "bg-route-advanced-soft text-route-advanced",
  },
  adults: {
    card:
      "border-accent-border hover:border-accent focus-visible:outline-accent",
    ctaIcon:
      "border-accent-border bg-accent-soft text-accent-strong group-hover:border-accent group-hover:bg-accent group-hover:text-white",
    ctaText: "text-accent-strong",
    eyebrow: "text-accent-strong",
    imageBg: "bg-accent-soft",
    imageTint: "bg-accent/30",
    line: "bg-accent",
    pill: "bg-accent-soft text-accent-strong",
  },
};

const courseIntroLabels: Record<Locale, Record<HomeCourseRouteKey, string>> = {
  en: {
    children: "For children and heritage learners",
    gcse: "For Edexcel GCSE students",
    alevel: "For advanced exam students",
    adults: "For adults learning at their pace",
  },
  ru: {
    children: "Для детей",
    gcse: "Для GCSE",
    alevel: "Для A-Level",
    adults: "Для взрослых",
  },
};

export function HomeCourseChooserCards({ locale }: { locale: Locale }) {
  const content = homeContent[locale].courseChooser;

  return (
    <div className="rounded-lg border border-brand-teal/18 bg-white p-4 shadow-[var(--shadow-soft)] sm:p-5 lg:p-6">
      <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-brand-teal sm:text-3xl">
            {locale === "en" ? "Choose the class that fits best" : content.title}
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground lg:justify-self-end">
          {locale === "en"
            ? "Start with the learner: children, exam students, advanced study, or adult Russian. The free first lesson can confirm level and the right format."
            : content.placement.steps[1].description}
        </p>
      </div>

      <nav
        aria-label={content.title}
        className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        {content.courses.map((course) => {
          const image = VOLNA_IMAGES.home.courseCards[course.routeKey];
          const theme = courseCardThemeClasses[course.routeKey];

          return (
            <Link
              className={cn(
                "group flex min-h-full flex-col overflow-hidden rounded-lg border bg-white text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] focus-visible:outline-2 focus-visible:outline-offset-2",
                theme.card,
              )}
              href={getLocalizedPath(locale, course.routeKey)}
              key={course.routeKey}
            >
              <span
                className={cn(
                  "relative block aspect-[16/10] overflow-hidden sm:aspect-[4/3]",
                  theme.imageBg,
                )}
              >
                <ApprovedImage
                  className="transition duration-500 group-hover:scale-[1.04]"
                  image={image}
                  sizes="(min-width: 1280px) 18vw, (min-width: 768px) 42vw, 100vw"
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-0 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_50%_42%,transparent_0%,transparent_44%,black_78%)]",
                    theme.imageTint,
                  )}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/16 via-transparent to-white/8"
                />
                <span
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-1.5",
                    theme.line,
                  )}
                />
              </span>
              <span className="flex flex-1 flex-col p-4">
                <span
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.12em]",
                    theme.eyebrow,
                  )}
                >
                  {courseIntroLabels[locale][course.routeKey]}
                </span>
                <span className="mt-2 block text-xl font-semibold leading-tight text-foreground">
                  {course.title}
                </span>
                <span className="mt-3 block flex-1 text-sm leading-6 text-muted-foreground">
                  {course.summary}
                </span>
                <span className="mt-4 flex flex-wrap gap-2">
                  {courseSignalLabels[locale][course.routeKey].map((label) => (
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-[0.68rem] font-semibold",
                        theme.pill,
                      )}
                      key={label}
                    >
                      {label}
                    </span>
                  ))}
                </span>
                <span className="mt-5 flex items-center justify-between gap-3 border-t border-brand-teal/12 pt-4 text-sm font-semibold">
                  <span className={theme.ctaText}>
                    {locale === "en" ? "Explore this class" : "Подробнее"}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "grid size-9 place-items-center rounded-full border text-lg leading-none shadow-sm transition duration-200 group-hover:translate-x-0.5",
                      theme.ctaIcon,
                    )}
                  >
                    <span className="-mt-0.5">&rarr;</span>
                  </span>
                </span>
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-5 flex flex-col gap-3 rounded-md border border-accent-border bg-accent-soft/45 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold leading-6 text-brand-teal">
          {locale === "en"
            ? "Not sure where to start? The first lesson helps choose the right level and format."
            : content.placement.title}
        </p>
        <Link
          className="inline-flex min-h-10 items-center justify-center rounded-md border border-brand-teal/30 bg-white px-4 py-2 text-sm font-semibold text-brand-teal shadow-sm transition hover:border-brand-teal hover:bg-brand-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
          href="#placement"
        >
          {locale === "en" ? "How placement works" : content.placement.title}
        </Link>
      </div>
    </div>
  );
}
