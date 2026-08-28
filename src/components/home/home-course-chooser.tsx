import Link from "next/link";

import { courseThemeClasses } from "@/components/course/course-theme";
import type { HomeCourseRouteKey } from "@/components/home/home-shared";
import { ApprovedImage } from "@/components/ui/approved-image";
import { homeContent } from "@/content/home-content";
import { cn } from "@/lib/classnames";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

const courseCardThemeClasses: Record<
  HomeCourseRouteKey,
  {
    card: string;
    ctaIcon: string;
    ctaRow: string;
    ctaText: string;
    eyebrow: string;
    imageBg: string;
    imageTint: string;
    line: string;
  }
> = {
  children: {
    card: cn(
      courseThemeClasses.children.border,
      courseThemeClasses.children.focus,
      "hover:border-route-children/60",
    ),
    ctaIcon:
      "border-route-children/25 bg-route-children-soft text-route-children group-hover:border-route-children group-hover:bg-route-children group-hover:text-white lg:bg-white lg:ring-route-children-soft lg:group-focus-visible:border-route-children lg:group-focus-visible:bg-route-children lg:group-focus-visible:text-white",
    ctaRow:
      "group-hover:bg-route-children/[0.06] group-focus-visible:bg-route-children/[0.06]",
    ctaText: courseThemeClasses.children.text,
    eyebrow: courseThemeClasses.children.text,
    imageBg: courseThemeClasses.children.softBg,
    imageTint: "bg-route-children/30",
    line: courseThemeClasses.children.bg,
  },
  gcse: {
    card: cn(
      courseThemeClasses.gcse.border,
      courseThemeClasses.gcse.focus,
      "hover:border-route-exam/65",
    ),
    ctaIcon:
      "border-route-exam/25 bg-route-exam-soft text-route-exam group-hover:border-route-exam group-hover:bg-route-exam group-hover:text-white lg:bg-white lg:ring-route-exam-soft lg:group-focus-visible:border-route-exam lg:group-focus-visible:bg-route-exam lg:group-focus-visible:text-white",
    ctaRow:
      "group-hover:bg-route-exam/[0.06] group-focus-visible:bg-route-exam/[0.06]",
    ctaText: courseThemeClasses.gcse.text,
    eyebrow: courseThemeClasses.gcse.text,
    imageBg: courseThemeClasses.gcse.softBg,
    imageTint: "bg-route-exam/30",
    line: courseThemeClasses.gcse.bg,
  },
  alevel: {
    card: cn(
      courseThemeClasses.alevel.border,
      courseThemeClasses.alevel.focus,
      "hover:border-route-advanced/65",
    ),
    ctaIcon:
      "border-route-advanced/25 bg-route-advanced-soft text-route-advanced group-hover:border-route-advanced group-hover:bg-route-advanced group-hover:text-white lg:bg-white lg:ring-route-advanced-soft lg:group-focus-visible:border-route-advanced lg:group-focus-visible:bg-route-advanced lg:group-focus-visible:text-white",
    ctaRow:
      "group-hover:bg-route-advanced/[0.06] group-focus-visible:bg-route-advanced/[0.06]",
    ctaText: courseThemeClasses.alevel.text,
    eyebrow: courseThemeClasses.alevel.text,
    imageBg: courseThemeClasses.alevel.softBg,
    imageTint: "bg-route-advanced/30",
    line: courseThemeClasses.alevel.bg,
  },
  adults: {
    card: cn(
      courseThemeClasses.adults.border,
      courseThemeClasses.adults.focus,
      "hover:border-route-adult/60",
    ),
    ctaIcon:
      "border-route-adult/25 bg-route-adult-soft text-route-adult group-hover:border-route-adult group-hover:bg-route-adult group-hover:text-white lg:bg-white lg:ring-route-adult-soft lg:group-focus-visible:border-route-adult lg:group-focus-visible:bg-route-adult lg:group-focus-visible:text-white",
    ctaRow:
      "group-hover:bg-route-adult/[0.06] group-focus-visible:bg-route-adult/[0.06]",
    ctaText: courseThemeClasses.adults.text,
    eyebrow: courseThemeClasses.adults.text,
    imageBg: courseThemeClasses.adults.softBg,
    imageTint: "bg-route-adult/30",
    line: courseThemeClasses.adults.bg,
  },
};

const courseIntroLabels: Record<Locale, Record<HomeCourseRouteKey, string>> = {
  en: {
    children: "10 classes • Ages 3–16",
    gcse: "Pearson Edexcel • 1RU0",
    alevel: "Pearson Edexcel • 9RU0",
    adults: "1-to-1 • Practical Russian",
  },
  ru: {
    children: "Для детей",
    gcse: "Для GCSE",
    alevel: "Для A Level",
    adults: "Для взрослых",
  },
};

const courseCtaLabels: Record<Locale, Record<HomeCourseRouteKey, string>> = {
  en: {
    children: "View children's classes",
    gcse: "View GCSE courses",
    alevel: "View A Level courses",
    adults: "View adult courses",
  },
  ru: {
    children: "Подробнее",
    gcse: "Подробнее",
    alevel: "Подробнее",
    adults: "Подробнее",
  },
};

export function HomeCourseChooserCards({ locale }: { locale: Locale }) {
  const content = homeContent[locale].courseChooser;

  return (
    <div className="rounded-lg border border-brand-teal/12 bg-white p-4 shadow-sm sm:p-5 lg:p-6 xl:rounded-none xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none">
      <div className="xl:sr-only">
        <h2 className="max-w-xl text-2xl font-semibold leading-tight text-brand-teal sm:text-3xl">
          {content.title}
        </h2>
      </div>

      <nav
        aria-label={content.title}
        className="mt-5 grid gap-4 md:grid-cols-2 min-[1200px]:!grid-cols-4 xl:mt-0"
      >
        {content.courses.map((course) => {
          const image = VOLNA_IMAGES.home.courseCards[course.routeKey];
          const theme = courseCardThemeClasses[course.routeKey];

          return (
            <Link
              className={cn(
                "group flex min-h-full flex-col overflow-hidden rounded-lg border bg-white text-left shadow-sm transition duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:hover:translate-y-0",
                theme.card,
              )}
              href={getLocalizedPath(locale, course.routeKey)}
              key={course.routeKey}
            >
              <span
                className={cn(
                  "relative block aspect-[16/10] overflow-hidden sm:aspect-[4/3] lg:h-[clamp(15rem,24vw,18rem)] lg:aspect-auto min-[1200px]:!h-auto min-[1200px]:!aspect-[4/3]",
                  theme.imageBg,
                )}
              >
                <ApprovedImage
                  className="transition-transform duration-[380ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
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
                <span
                  className={cn(
                    "-mx-4 -mb-4 mt-5 flex items-center justify-between gap-3 border-t border-brand-teal/12 px-4 pb-4 pt-4 text-sm font-semibold transition-colors duration-[280ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
                    theme.ctaRow,
                  )}
                >
                  <span className={theme.ctaText}>
                    {courseCtaLabels[locale][course.routeKey]}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "grid size-9 place-items-center rounded-full border text-lg leading-none shadow-sm transition-[transform,background-color,border-color,color,box-shadow] duration-[280ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0 lg:text-base lg:ring-4 lg:duration-300 lg:group-hover:-translate-y-px lg:group-hover:translate-x-0 lg:group-hover:ring-[3px] lg:group-hover:ring-white/80 lg:group-hover:shadow-md lg:group-focus-visible:-translate-y-px lg:group-focus-visible:ring-[3px] lg:group-focus-visible:ring-white/80 lg:group-focus-visible:shadow-md motion-reduce:lg:group-hover:translate-y-0 motion-reduce:lg:group-focus-visible:translate-y-0",
                      theme.ctaIcon,
                    )}
                  >
                    <span className="-mt-0.5 lg:hidden">&rarr;</span>
                    <svg
                      className="hidden size-5 fill-none stroke-current transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] lg:block lg:group-hover:translate-x-[1.5px] lg:group-focus-visible:translate-x-[1.5px] motion-reduce:lg:group-hover:translate-x-0 motion-reduce:lg:group-focus-visible:translate-x-0"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4.5 10h10.2" strokeLinecap="round" strokeWidth="1.75" />
                      <path d="m11.2 6.4 3.6 3.6-3.6 3.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                    </svg>
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
            ? "Unsure which route fits? The free first lesson helps us recommend the right level and format."
            : content.placement.title}
        </p>
        <Link
          className="inline-flex min-h-10 items-center justify-center rounded-md border border-brand-teal/30 bg-white px-4 py-2 text-sm font-semibold text-brand-teal shadow-sm transition hover:border-brand-teal hover:bg-brand-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
          href="#placement"
        >
          {locale === "en"
            ? "See how placement works"
            : content.placement.title}
        </Link>
      </div>
    </div>
  );
}
