import type { CourseContent } from "@/content/course-content";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/classnames";
import { courseThemeClasses } from "@/components/course/course-theme";

type CourseResultsProps = {
  content: NonNullable<CourseContent["results"]>;
  locale: Locale;
  routeKey: CourseContent["routeKey"];
};

export function CourseResults({ content, locale, routeKey }: CourseResultsProps) {
  const image = VOLNA_IMAGES.courses[routeKey].results;
  const theme = courseThemeClasses[routeKey];
  const latestResult = content.items.at(-1);
  const previousResults = latestResult ? content.items.slice(0, -1) : content.items;
  const latestCohortLabel = locale === "en" ? "Latest cohort" : "Последний набор";

  return (
    <SectionContainer className="bg-white" id="results">
      <div className="space-y-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionHeading
            eyebrow={content.eyebrow}
            level={2}
            title={content.title}
          >
            <p>{content.note}</p>
          </SectionHeading>
          {latestResult ? (
            <div className="rounded-lg border border-brand-teal/18 bg-brand-teal-deep p-5 text-white shadow-[var(--shadow-soft)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                {latestCohortLabel}
              </p>
              <dl className="mt-3 grid gap-2 sm:grid-cols-[0.35fr_1fr] sm:items-end">
                <dt className="text-3xl font-semibold text-accent-on-dark">
                  {latestResult.label}
                </dt>
                <dd className="text-2xl font-semibold leading-tight">
                  {latestResult.value}
                </dd>
              </dl>
            </div>
          ) : null}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          {image ? (
            <MediaFrame
              className="border-4 border-white"
              contentClassName="min-h-72"
              image={image}
              label={content.eyebrow}
              sizes="(min-width: 1024px) 42vw, 100vw"
              variant="photo"
            />
          ) : null}
          <dl
            className={cn(
              "grid gap-px overflow-hidden rounded-lg border sm:grid-cols-2",
              theme.border,
              theme.softBg,
            )}
          >
            {previousResults.map((item) => (
              <div
                className="bg-white p-5"
                key={item.label}
              >
                <dt
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.14em]",
                    theme.text,
                  )}
                >
                  {item.label}
                </dt>
                <dd className="mt-3 text-lg font-semibold leading-7 text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SectionContainer>
  );
}
