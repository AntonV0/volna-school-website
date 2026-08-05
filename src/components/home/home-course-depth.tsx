import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCourseContent, type CourseContent } from "@/content/course-content";
import { homeContent } from "@/content/home-content";
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

  return (
    <article
      className="overflow-hidden rounded-xl border border-brand-teal/14 bg-white shadow-[var(--shadow-soft)]"
      data-course-depth-card={route.routeKey}
    >
      <div className="grid lg:grid-cols-[21rem_minmax(0,1fr)_17rem] lg:items-stretch xl:grid-cols-[22rem_minmax(0,1fr)_18rem]">
        <div className="relative min-h-56 overflow-hidden bg-brand-teal-soft sm:min-h-64 lg:row-span-2 lg:min-h-full">
          <ApprovedImage
            image={imageSet.image}
            sizes="(min-width: 1280px) 22rem, (min-width: 1024px) 21rem, 100vw"
            style={{ objectPosition: imageSet.objectPosition }}
          />
        </div>

        <div className="p-5 sm:p-6 lg:px-7 lg:py-6 xl:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
              {route.eyebrow}
            </p>
            <span className="h-px min-w-12 flex-1 bg-brand-teal/18" />
          </div>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-brand-teal sm:text-[1.7rem]">
            {route.title}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
            {route.summary}
          </p>

          <div className="mt-5 border-t border-brand-teal/12 pt-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand-teal">
              {route.decisionHeading ??
                (locale === "en" ? "Best fit when" : "Подходит, если")}
            </p>
            <ul className="mt-3 grid gap-x-6 gap-y-2.5 text-sm leading-5 text-foreground md:grid-cols-2">
              {route.decisionBullets.map((bullet) => (
                <li className="grid grid-cols-[0.65rem_1fr] gap-2.5" key={bullet}>
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 rounded-full bg-accent"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="border-t border-brand-teal/12 bg-brand-teal-soft/45 p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-5">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {feeRows.map((row) => (
              <div
                className="rounded-md border border-brand-teal/14 bg-white/85 px-3.5 py-3"
                key={row.label}
              >
                <p className="text-[0.69rem] font-semibold uppercase tracking-[0.11em] text-brand-teal">
                  {row.label}
                </p>
                <p className="mt-1.5 text-base font-semibold text-brand-teal">
                  {formatFeeValue(row.value)}
                </p>
              </div>
            ))}
            {route.proofLabel && route.proofValue ? (
              <div className="rounded-md border border-accent/40 bg-brand-teal-deep px-3.5 py-3 text-white sm:col-span-2 lg:col-span-1">
                <p className="text-[0.69rem] font-semibold uppercase tracking-[0.11em] text-white/70">
                  {route.proofLabel}
                </p>
                <p className="mt-1.5 text-base font-semibold text-accent-on-dark">
                  {route.proofValue}
                </p>
                {route.proofNote ? (
                  <p className="mt-1 text-xs leading-5 text-white/78">
                    {route.proofNote}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
          <ButtonLink
            className="mt-3 hidden w-full justify-center px-4 lg:inline-flex"
            href={getTrialRegistrationPath(locale, route.routeKey)}
          >
            {route.secondaryCtaLabel}
          </ButtonLink>
        </aside>

        <div className="border-t border-brand-teal/12 bg-brand-teal-soft/20 p-5 sm:p-6 lg:col-span-2 lg:col-start-2 lg:px-5 lg:py-4">
          <div className="grid gap-4 lg:grid-cols-[minmax(10rem,1fr)_14.5rem] lg:items-center lg:gap-5 xl:grid-cols-[minmax(10rem,1fr)_15.5rem]">
            <div className="flex min-w-0 items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">
                {route.actionPrompt}
              </p>
              <span
                aria-hidden="true"
                className="relative hidden h-px min-w-8 flex-1 bg-gradient-to-r from-brand-teal/10 via-brand-teal/35 to-brand-teal/65 lg:block"
              >
                <span className="absolute -right-px top-1/2 size-2 -translate-y-1/2 rotate-45 border-r border-t border-brand-teal/65" />
              </span>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              <ButtonLink
                className="group w-full justify-center gap-2 px-4"
                href={getLocalizedPath(locale, route.routeKey)}
                variant="secondary"
              >
                <span>{route.primaryCtaLabel}</span>
                <svg
                  aria-hidden="true"
                  className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
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
                className="w-full justify-center px-4 lg:hidden"
                href={getTrialRegistrationPath(locale, route.routeKey)}
              >
                {route.secondaryCtaLabel}
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
      className="scroll-mt-20 border-b border-brand-teal/14 bg-white px-5 py-14 sm:px-8 lg:px-12"
      id="class-details"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-12">
          <SectionHeading level={2} title={content.title} />
          <div className="max-w-2xl lg:pb-1">
            <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {content.intro}
            </p>
            <div className="mt-5 h-px bg-brand-teal/18" />
          </div>
        </div>
        <div className="mt-8 grid gap-4">
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
