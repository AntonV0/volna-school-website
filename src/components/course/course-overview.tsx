import { MediaFrame } from "@/components/ui/media-frame";
import { BrandCard } from "@/components/ui/brand-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";
import { cn } from "@/lib/classnames";
import type { Locale } from "@/lib/i18n/config";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import { courseThemeClasses } from "@/components/course/course-theme";

type CourseOverviewProps = {
  content: CourseContent["overview"];
  locale: Locale;
  routeKey: CourseContent["routeKey"];
};

const overviewSnapshotLabels: Record<
  Locale,
  Record<CourseContent["routeKey"], { eyebrow: string; title: string }>
> = {
  en: {
    children: {
      eyebrow: "Route snapshot",
      title: "What families can check quickly",
    },
    gcse: {
      eyebrow: "Route snapshot",
      title: "What exam families can check quickly",
    },
    alevel: {
      eyebrow: "Route snapshot",
      title: "What advanced students can check quickly",
    },
    adults: {
      eyebrow: "Route snapshot",
      title: "What adult learners can check quickly",
    },
  },
  ru: {
    children: {
      eyebrow: "Краткий обзор",
      title: "Что семье удобно проверить сразу",
    },
    gcse: {
      eyebrow: "Краткий обзор",
      title: "Что важно проверить перед GCSE",
    },
    alevel: {
      eyebrow: "Краткий обзор",
      title: "Что важно проверить ученикам A Level",
    },
    adults: {
      eyebrow: "Краткий обзор",
      title: "Что взрослому ученику удобно уточнить",
    },
  },
};

export function CourseOverview({ content, locale, routeKey }: CourseOverviewProps) {
  const theme = courseThemeClasses[routeKey];
  const image = VOLNA_IMAGES.courses[routeKey].overview;
  const snapshot = overviewSnapshotLabels[locale][routeKey];

  return (
    <SectionContainer className="bg-white" id="overview">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow={content.eyebrow}
            level={2}
            title={content.title}
          >
            <p>{content.body}</p>
          </SectionHeading>
          <MediaFrame
            className="border-4 border-white"
            image={image}
            label={content.eyebrow}
            sizes="(min-width: 1024px) 42vw, 100vw"
            variant="online"
          />
        </div>

        <BrandCard
          as="div"
          className={cn(
            "self-start overflow-hidden",
            theme.border,
          )}
          padding="none"
          shadow="soft"
        >
          <div className={cn("border-b border-brand-teal/12 p-5", theme.softBg)}>
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.16em]",
                theme.text,
              )}
            >
              {snapshot.eyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-semibold leading-tight text-brand-teal">
              {snapshot.title}
            </h3>
          </div>
          <ul className="grid divide-y divide-brand-teal/12">
            {content.highlights.map((highlight, index) => (
              <li
                className="grid gap-3 p-5 text-sm leading-6 text-muted-foreground sm:grid-cols-[3.25rem_1fr]"
                key={highlight}
              >
                <span
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full text-xs font-semibold ring-1",
                    theme.softBg,
                    theme.text,
                    theme.ring,
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="[overflow-wrap:anywhere]">{highlight}</span>
              </li>
            ))}
          </ul>
        </BrandCard>
      </div>
    </SectionContainer>
  );
}
