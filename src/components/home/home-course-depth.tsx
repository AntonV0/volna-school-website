import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCourseContent, type CourseContent } from "@/content/course-content";
import { homeContent } from "@/content/home-content";
import { cn } from "@/lib/classnames";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { getTrialRegistrationPath } from "@/lib/registration/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type HomeCourseDepth = NonNullable<(typeof homeContent)["en"]["courseDepth"]>;
type HomeCourseDepthRoute = HomeCourseDepth["routes"][number];

function getHomeFeeRows(rows: CourseContent["pricing"]["rows"]) {
  return rows.slice(0, 2);
}

function formatFeeValue(value: string) {
  return value.replace("GBP ", "\u00a3");
}

function HomeCourseSummaryBand({
  index,
  locale,
  route,
}: {
  index: number;
  locale: Locale;
  route: HomeCourseDepthRoute;
}) {
  const course = getCourseContent(locale, route.routeKey);
  const image = VOLNA_IMAGES.home.courseCards[route.routeKey];
  const feeRows = getHomeFeeRows(course.pricing.rows);
  const latestProof = route.proofLabel ? course.results?.items.at(-1) : undefined;
  const imageFirst = index % 2 === 1;

  return (
    <article className="overflow-hidden rounded-lg border border-border-soft bg-white shadow-[var(--shadow-soft)]">
      <div className="grid lg:grid-cols-[1.03fr_0.97fr]">
        <div
          className={cn(
            "relative min-h-64 bg-brand-teal-soft sm:min-h-80 lg:min-h-full",
            imageFirst ? "lg:order-first" : "lg:order-last",
          )}
        >
          <ApprovedImage
            className="transition duration-500 hover:scale-[1.02]"
            image={image}
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-deep/42 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 rounded-md bg-white/92 px-4 py-3 text-sm font-semibold text-brand-teal shadow-sm backdrop-blur">
            {course.hero.mediaLabel}
          </div>
        </div>

        <div className="p-5 sm:p-7 lg:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
              {route.eyebrow}
            </p>
            <span className="h-px min-w-12 flex-1 bg-brand-teal/18" />
            <span className="text-2xl font-semibold leading-none text-brand-teal/20">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold leading-tight text-brand-teal sm:text-3xl">
            {route.title}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            {route.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {route.optionLabels.map((label) => (
              <span
                className="rounded-full bg-brand-teal-soft px-3 py-1 text-xs font-semibold text-brand-teal"
                key={label}
              >
                {label}
              </span>
            ))}
          </div>

          <ul className="mt-6 grid gap-3 text-sm leading-6 text-foreground sm:grid-cols-2">
            <li className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red sm:col-span-2">
              {locale === "en" ? "Best fit when" : "Подходит, если"}
            </li>
            {route.decisionBullets.map((bullet) => (
              <li className="grid grid-cols-[0.8rem_1fr] gap-3" key={bullet}>
                <span
                  aria-hidden="true"
                  className="mt-2 size-2 rounded-full bg-accent"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {feeRows.map((row) => (
              <div
                className="rounded-md border border-brand-teal/14 bg-accent-soft/45 p-4"
                key={row.label}
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-brand-red">
                  {row.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-brand-teal">
                  {formatFeeValue(row.value)}
                </p>
              </div>
            ))}
            {latestProof ? (
              <div className="rounded-md border border-accent/45 bg-brand-teal-deep p-4 text-white">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/70">
                  {route.proofLabel}
                </p>
                <p className="mt-2 text-lg font-semibold text-accent-on-dark">
                  {latestProof.value}
                </p>
              </div>
            ) : null}
          </div>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <ButtonLink
              className="w-full sm:w-auto"
              href={getLocalizedPath(locale, route.routeKey)}
              variant="secondary"
            >
              {route.primaryCtaLabel}
            </ButtonLink>
            <ButtonLink
              className="w-full sm:w-auto"
              href={getTrialRegistrationPath(locale, route.routeKey)}
            >
              {route.secondaryCtaLabel}
            </ButtonLink>
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
    <section className="border-b border-brand-teal/14 bg-white px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl min-w-0">
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <SectionHeading
            eyebrow={content.eyebrow}
            level={2}
            title={content.title}
          >
            <p>{content.intro}</p>
          </SectionHeading>
          <div className="hidden h-px bg-brand-teal/18 lg:block" />
        </div>
        <div className="mt-8 grid gap-5">
          {content.routes.map((route, index) => (
            <HomeCourseSummaryBand
              index={index}
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
