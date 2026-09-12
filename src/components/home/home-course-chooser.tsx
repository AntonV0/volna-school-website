import Link from "next/link";

import { courseThemeClasses } from "@/components/course/course-theme";
import type { HomeCourseRouteKey } from "@/components/home/home-shared";
import { ApprovedImage } from "@/components/ui/approved-image";
import { InPageButtonLink } from "@/components/ui/in-page-button-link";
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
    contentWash: string;
    eyebrow: string;
    imageBg: string;
    imagePosition: string;
    imageTint: string;
    line: string;
    titleHover: string;
  }
> = {
  children: {
    card: cn(
      "border-route-children/35",
      courseThemeClasses.children.focus,
      "hover:border-route-children/60",
    ),
    ctaIcon:
      "border-route-children/25 bg-route-children-soft text-route-children group-hover:border-route-children group-hover:bg-route-children group-hover:text-white lg:bg-white lg:ring-route-children-soft lg:group-focus-visible:border-route-children lg:group-focus-visible:bg-route-children lg:group-focus-visible:text-white",
    ctaRow:
      "group-hover:bg-route-children/[0.06] group-focus-visible:bg-route-children/[0.06]",
    ctaText: courseThemeClasses.children.text,
    contentWash: "from-route-children/10",
    eyebrow: courseThemeClasses.children.text,
    imageBg: courseThemeClasses.children.softBg,
    imagePosition: "object-center",
    imageTint: "bg-route-children/30",
    line: courseThemeClasses.children.bg,
    titleHover:
      "group-hover:text-route-children group-focus-visible:text-route-children",
  },
  gcse: {
    card: cn(
      "border-route-exam/35",
      courseThemeClasses.gcse.focus,
      "hover:border-route-exam/65",
    ),
    ctaIcon:
      "border-route-exam/25 bg-route-exam-soft text-route-exam group-hover:border-route-exam group-hover:bg-route-exam group-hover:text-white lg:bg-white lg:ring-route-exam-soft lg:group-focus-visible:border-route-exam lg:group-focus-visible:bg-route-exam lg:group-focus-visible:text-white",
    ctaRow:
      "group-hover:bg-route-exam/[0.06] group-focus-visible:bg-route-exam/[0.06]",
    ctaText: courseThemeClasses.gcse.text,
    contentWash: "from-route-exam/10",
    eyebrow: courseThemeClasses.gcse.text,
    imageBg: courseThemeClasses.gcse.softBg,
    imagePosition: "object-center",
    imageTint: "bg-route-exam/30",
    line: courseThemeClasses.gcse.bg,
    titleHover:
      "group-hover:text-route-exam group-focus-visible:text-route-exam",
  },
  alevel: {
    card: cn(
      "border-route-advanced/35",
      courseThemeClasses.alevel.focus,
      "hover:border-route-advanced/65",
    ),
    ctaIcon:
      "border-route-advanced/25 bg-route-advanced-soft text-route-advanced group-hover:border-route-advanced group-hover:bg-route-advanced group-hover:text-white lg:bg-white lg:ring-route-advanced-soft lg:group-focus-visible:border-route-advanced lg:group-focus-visible:bg-route-advanced lg:group-focus-visible:text-white",
    ctaRow:
      "group-hover:bg-route-advanced/[0.06] group-focus-visible:bg-route-advanced/[0.06]",
    ctaText: courseThemeClasses.alevel.text,
    contentWash: "from-route-advanced/10",
    eyebrow: courseThemeClasses.alevel.text,
    imageBg: courseThemeClasses.alevel.softBg,
    imagePosition: "object-[50%_62%]",
    imageTint: "bg-route-advanced/30",
    line: courseThemeClasses.alevel.bg,
    titleHover:
      "group-hover:text-route-advanced group-focus-visible:text-route-advanced",
  },
  adults: {
    card: cn(
      "border-route-adult/35",
      courseThemeClasses.adults.focus,
      "hover:border-route-adult/60",
    ),
    ctaIcon:
      "border-route-adult/25 bg-route-adult-soft text-route-adult group-hover:border-route-adult group-hover:bg-route-adult group-hover:text-white lg:bg-white lg:ring-route-adult-soft lg:group-focus-visible:border-route-adult lg:group-focus-visible:bg-route-adult lg:group-focus-visible:text-white",
    ctaRow:
      "group-hover:bg-route-adult/[0.06] group-focus-visible:bg-route-adult/[0.06]",
    ctaText: courseThemeClasses.adults.text,
    contentWash: "from-route-adult/10",
    eyebrow: courseThemeClasses.adults.text,
    imageBg: courseThemeClasses.adults.softBg,
    imagePosition: "object-[50%_43%]",
    imageTint: "bg-route-adult/30",
    line: courseThemeClasses.adults.bg,
    titleHover:
      "group-hover:text-route-adult group-focus-visible:text-route-adult",
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

const mobileCourseIntroLabels: Record<HomeCourseRouteKey, string> = {
  children: "Ages 3–16",
  gcse: "Edexcel 1RU0",
  alevel: "Edexcel 9RU0",
  adults: "1-to-1 lessons",
};

const courseCtaLabels: Record<Locale, Record<HomeCourseRouteKey, string>> = {
  en: {
    children: "View classes for children",
    gcse: "View GCSE courses",
    alevel: "View A Level courses",
    adults: "View courses for adults",
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
    <div>
      <div className="lg:sr-only">
        <h2 className="max-w-xl text-2xl font-semibold leading-tight text-brand-blue sm:text-3xl">
          {content.title}
        </h2>
      </div>

      <nav
        aria-label={content.title}
        className="mt-5 grid gap-4 sm:grid-cols-2 lg:mt-0 min-[1200px]:!grid-cols-4"
      >
        {content.courses.map((course) => {
          const image = VOLNA_IMAGES.home.courseCards[course.routeKey];
          const theme = courseCardThemeClasses[course.routeKey];

          return (
            <Link
              className={cn(
                "group flex min-h-full flex-col overflow-hidden rounded-lg border bg-white text-left shadow-[var(--home-course-card-shadow)] transition-[transform,border-color,box-shadow] duration-[420ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] hover:-translate-y-1 hover:shadow-[var(--home-course-card-shadow-hover)] active:translate-y-0 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transform-none",
                theme.card,
              )}
              href={getLocalizedPath(locale, course.routeKey)}
              key={course.routeKey}
            >
              <span
                className={cn(
                  "relative block aspect-[16/10] overflow-hidden sm:aspect-[4/3] lg:h-[clamp(15rem,24vw,18rem)] lg:aspect-auto min-[1200px]:!h-[clamp(11rem,13vw,11.875rem)] min-[1200px]:!aspect-auto",
                  theme.imageBg,
                )}
              >
                <ApprovedImage
                  className={cn(
                    "transition-transform duration-[420ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
                    theme.imagePosition,
                  )}
                  image={image}
                  sizes="(max-width: 639px) 88px, (min-width: 1280px) 18vw, (min-width: 1200px) 23vw, (min-width: 640px) 46vw, 100vw"
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
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-1.5 origin-bottom transition-transform duration-[420ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] group-hover:scale-y-150 group-focus-visible:scale-y-150 motion-reduce:transform-none",
                    theme.line,
                  )}
                />
              </span>
              <span className="relative flex flex-1 flex-col p-4">
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-4 bg-gradient-to-b to-transparent opacity-0 transition-opacity duration-[420ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] group-hover:opacity-100 group-focus-visible:opacity-100",
                    theme.contentWash,
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.12em]",
                    theme.eyebrow,
                  )}
                >
                  {locale === "en" ? (
                    <>
                      <span className="sm:hidden">{mobileCourseIntroLabels[course.routeKey]}</span>
                      <span className="hidden sm:inline">{courseIntroLabels.en[course.routeKey]}</span>
                    </>
                  ) : courseIntroLabels[locale][course.routeKey]}
                </span>
                <span
                  data-course-card-title=""
                  className={cn(
                    "mt-2 block text-xl font-semibold leading-tight text-foreground transition-colors duration-[420ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)]",
                    theme.titleHover,
                  )}
                >
                  {course.title}
                </span>
                <span data-course-summary="" className="mt-3 block flex-1 text-sm leading-6 text-muted-foreground">
                  {course.summary}
                </span>
                <span
                  data-course-card-cta=""
                  className={cn(
                    "-mx-4 -mb-4 mt-5 flex items-center justify-between gap-3 border-t border-brand-teal/12 px-4 pb-4 pt-4 text-sm font-semibold transition-colors duration-[420ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)]",
                    theme.ctaRow,
                  )}
                >
                  <span className={theme.ctaText}>
                    {locale === "en" ? (
                      <>
                        <span className="sm:hidden">{course.routeKey === "children" ? "View classes" : "View courses"}</span>
                        <span className="hidden sm:inline">{courseCtaLabels.en[course.routeKey]}</span>
                      </>
                    ) : courseCtaLabels[locale][course.routeKey]}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "grid size-9 place-items-center rounded-full border text-lg leading-none shadow-sm transition-[transform,background-color,border-color,color,box-shadow] duration-[420ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0 lg:text-base lg:ring-4 lg:group-hover:-translate-y-px lg:group-hover:translate-x-0 lg:group-hover:ring-[3px] lg:group-hover:ring-white/80 lg:group-hover:shadow-md lg:group-focus-visible:-translate-y-px lg:group-focus-visible:ring-[3px] lg:group-focus-visible:ring-white/80 lg:group-focus-visible:shadow-md motion-reduce:lg:group-hover:translate-y-0 motion-reduce:lg:group-focus-visible:translate-y-0",
                      theme.ctaIcon,
                    )}
                  >
                    <span className="-mt-0.5 lg:hidden">&rarr;</span>
                    <svg
                      className="hidden size-5 fill-none stroke-current transition-transform duration-[420ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] lg:block lg:group-hover:translate-x-[1.5px] lg:group-focus-visible:translate-x-[1.5px] motion-reduce:lg:group-hover:translate-x-0 motion-reduce:lg:group-focus-visible:translate-x-0"
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

      <div className="relative mt-5 flex flex-col gap-3 overflow-hidden rounded-md border border-brand-teal/18 bg-white p-4 pt-5 shadow-[0_4px_14px_rgba(18,49,66,0.05)] sm:flex-row sm:items-center sm:justify-between">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--route-children)_0_25%,var(--route-exam)_25%_50%,var(--route-advanced)_50%_75%,var(--route-adult)_75%_100%)]"
        />
        <p className="text-sm font-semibold leading-6 text-brand-teal-deep">
          {locale === "en"
            ? "Not sure which class or course to choose? A free trial lesson helps us recommend a suitable starting point."
            : content.placement.title}
        </p>
        <InPageButtonLink
          className="min-h-10 w-full shrink-0 px-4 py-2 text-sm sm:w-auto"
          href="#placement"
        >
          {locale === "en"
            ? "How the free trial works"
            : content.placement.title}
        </InPageButtonLink>
      </div>
    </div>
  );
}
