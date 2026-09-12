import { CourseDetailsDisclosure } from "./course-details-disclosure";
import { courseThemeClasses } from "@/components/course/course-theme";
import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { EditorialSectionHeading } from "@/components/ui/editorial-section-heading";
import { getCourseContent, type CourseContent } from "@/content/course-content";
import { homeContent } from "@/content/home-content";
import { cn } from "@/lib/classnames";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { getTrialRegistrationPath } from "@/lib/registration/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type HomeCourseDepth = NonNullable<(typeof homeContent)["en"]["courseDepth"]>;
type HomeCourseDepthRoute = HomeCourseDepth["routes"][number];

function getHomeFeeRows(
  rows: CourseContent["pricing"]["rows"],
  routeKey: HomeCourseDepthRoute["routeKey"],
) {
  return rows.slice(0, routeKey === "adults" ? 3 : 2);
}

function formatFeeValue(value: string) {
  return value.replace("GBP ", "\u00a3");
}

function HomeCourseSummaryBand({
  locale,
  route,
}: {
  locale: Locale;
  route: HomeCourseDepthRoute;
}) {
  const course = getCourseContent(locale, route.routeKey);
  const imageSet = VOLNA_IMAGES.homeCourseDepth[route.routeKey];
  const feeRows = getHomeFeeRows(course.pricing.rows, route.routeKey);
  const theme = courseThemeClasses[route.routeKey];

  return (
    <article
      className={cn(
        "overflow-hidden rounded-xl border border-t-4 bg-white shadow-[var(--shadow-soft)]",
        theme.border,
        theme.borderTop,
      )}
      data-course-depth-card={route.routeKey}
    >
      <div className="grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-stretch xl:grid-cols-[22rem_minmax(0,1fr)_18rem]">
        <div
          className={cn(
            "relative min-h-56 overflow-hidden sm:min-h-64 lg:min-h-full xl:row-span-2",
            theme.softBg,
          )}
        >
          <ApprovedImage
            image={imageSet.image}
            sizes="(min-width: 1280px) 22rem, (min-width: 1024px) 16rem, (min-width: 640px) 12rem, 100vw"
            style={{ objectPosition: imageSet.objectPosition }}
          />
        </div>

        <CourseDetailsDisclosure
          locale={locale}
          title={route.title}
          introduction={
              <>
              <div className="flex flex-wrap items-center gap-3">
                <p
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.16em]",
                    theme.text,
                  )}
                >
                  {route.eyebrow}
                </p>
                <span className={cn("h-px min-w-12 flex-1 opacity-30", theme.bg)} />
              </div>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground sm:text-[1.7rem]">
                {route.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground/72">
                {route.summary}
              </p>

              </>
          }
        >
          <div className="mt-4">
            <p
              className={cn(
                "text-[0.68rem] font-semibold uppercase tracking-[0.14em]",
                theme.text,
              )}
            >
              {locale === "en" ? "Study options" : "Доступные варианты"}
            </p>
            <ul
              aria-label={locale === "en" ? "Study options" : "Доступные варианты"}
              className="mt-2 flex flex-wrap gap-2 lg:max-[1440px]:gap-1.5"
            >
              {route.optionLabels.map((option) => (
                <li
                  className={cn(
                    "rounded-full border px-2.5 py-1 text-xs font-semibold ring-1 ring-inset lg:max-[1440px]:px-2",
                    theme.border,
                    theme.softBg,
                    theme.text,
                    theme.ring,
                  )}
                  key={option}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 border-t border-brand-teal/12 pt-4">
            <p
              className={cn(
                "text-[0.68rem] font-semibold uppercase tracking-[0.14em]",
                theme.text,
              )}
            >
              {route.decisionHeading ??
                (locale === "en" ? "Best fit when" : "Подходит, если")}
            </p>
            <ul className="mt-3 grid gap-x-6 gap-y-2.5 text-sm leading-5 text-foreground md:grid-cols-2">
              {route.decisionBullets.map((bullet) => (
                <li key={bullet} className="grid grid-cols-[0.65rem_1fr] gap-2.5">
                  <span
                    aria-hidden="true"
                    className={cn("mt-1.5 size-1.5 rounded-full", theme.bg)}
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </CourseDetailsDisclosure>

        <aside
          className={cn(
            "border-t p-5 sm:p-6 lg:col-span-2 lg:p-5 xl:col-span-1 xl:border-l xl:border-t-0",
            theme.border,
            theme.panelBg,
          )}
        >
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
            {feeRows.map((row) => (
              <div
                className={cn(
                  "rounded-md border bg-white/90 px-3.5 py-3",
                  theme.border,
                )}
                key={row.label}
              >
                <p className="text-[0.69rem] font-semibold uppercase tracking-[0.11em] text-muted-foreground">
                  {row.label}
                </p>
                <p className={cn("mt-1.5 text-base font-semibold", theme.text)}>
                  {formatFeeValue(row.value)}
                </p>
              </div>
            ))}
            {route.proofLabel && route.proofValue ? (
              <div
                data-course-results=""
                className={cn(
                  "rounded-md border bg-white/95 px-3.5 py-3 shadow-[0_6px_16px_rgba(18,49,66,0.08)] sm:col-span-2 lg:col-span-1",
                  theme.border,
                )}
              >
                <p
                  className={cn(
                    "text-[0.69rem] font-semibold uppercase tracking-[0.11em]",
                    theme.text,
                  )}
                >
                  {route.proofLabel}
                </p>
                <p className={cn("mt-1.5 text-base font-semibold", theme.text)}>
                  {route.proofValue}
                </p>
                {route.proofNote ? (
                  <p className="mt-1 text-xs leading-5 text-foreground/68">
                    {route.proofNote}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className="mt-3 hidden xl:block">
            <ButtonLink
              className="w-full justify-center px-4"
              href={getTrialRegistrationPath(locale, route.routeKey)}
            >
              {route.secondaryCtaLabel}
            </ButtonLink>
          </div>
        </aside>

        <div
          className={cn(
            "border-t p-5 sm:p-6 lg:col-span-2 lg:px-5 lg:py-4 xl:col-start-2",
            theme.border,
            theme.washBg,
          )}
        >
          <div className="grid gap-4 xl:grid-cols-[minmax(10rem,1fr)_15.5rem] xl:items-center xl:gap-5">
            <div className="flex min-w-0 items-center gap-3">
              <p
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.14em]",
                  theme.text,
                )}
              >
                {route.actionPrompt}
              </p>
              <span
                aria-hidden="true"
                className={cn(
                  "relative hidden h-px min-w-8 flex-1 xl:block",
                  theme.connector,
                )}
              >
                <span
                  className={cn(
                    "absolute right-[-5px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[4px] border-l-[6px] border-y-transparent border-l-current",
                    theme.text,
                  )}
                />
              </span>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-1">
              <ButtonLink
                className={cn(
                  "group w-full justify-center gap-2 px-4",
                  theme.button,
                )}
                href={getLocalizedPath(locale, route.routeKey)}
                variant="unstyled"
              >
                <span>
                  {locale === "en" ? (
                    <>
                      <span className="min-[360px]:hidden">{route.routeKey === "children" ? "View classes" : "View courses"}</span>
                      <span className="hidden min-[360px]:inline">{route.primaryCtaLabel}</span>
                    </>
                  ) : route.primaryCtaLabel}
                </span>
                <svg
                  aria-hidden="true"
                  className="size-4 shrink-0 transition-transform duration-[360ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12h14m-5-5 5 5-5 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </ButtonLink>
              <ButtonLink
                className="w-full justify-center px-4 xl:hidden"
                href={getTrialRegistrationPath(locale, route.routeKey)}
              >
                {locale === "en" ? (
                  <>
                    <span className="min-[360px]:hidden">Book a free trial</span>
                    <span className="hidden min-[360px]:inline">{route.secondaryCtaLabel}</span>
                  </>
                ) : route.secondaryCtaLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function HomeCourseDepthSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale].courseDepth;

  if (!content) {
    return null;
  }

  return (
    <section
      className="scroll-mt-20 bg-white px-5 py-14 sm:px-8 lg:px-12"
      data-language-section=""
      id="class-details"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">
        {content.introduction ? (
          <EditorialSectionHeading
            introduction={content.introduction}
            title={content.title}
            variant="wave"
          />
        ) : (
          <div className="border-b border-brand-teal/14 pb-6">
            <div className="lg:[&_h2]:whitespace-nowrap lg:[&_h2]:text-[2.65rem] xl:[&_h2]:text-5xl">
              <SectionHeading headingTone="blue" level={2} title={content.title} />
              <div aria-hidden="true" className="mt-5 flex gap-2">
                <span className="h-1 w-16 rounded-full bg-brand-teal" />
                <span className="h-1 w-8 rounded-full bg-accent" />
              </div>
            </div>
          </div>
        )}
        <div className="mt-6 grid gap-4 lg:gap-5">
          {content.routes.map((route) => (
            <HomeCourseSummaryBand
              key={route.routeKey}
              locale={locale}
              route={route}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
