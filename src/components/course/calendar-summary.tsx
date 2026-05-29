import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrandCard } from "@/components/ui/brand-card";
import type { CourseContent } from "@/content/course-content";
import { cn } from "@/lib/classnames";
import { courseThemeClasses } from "@/components/course/course-theme";

type CalendarSummaryProps = {
  content: CourseContent["calendar"];
  routeKey: CourseContent["routeKey"];
};

export function CalendarSummary({ content, routeKey }: CalendarSummaryProps) {
  const theme = courseThemeClasses[routeKey];

  return (
    <SectionContainer className="bg-white" id="calendar">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-start">
        <SectionHeading
          eyebrow={content.eyebrow}
          level={2}
          title={content.title}
        >
          <p>{content.note}</p>
        </SectionHeading>
        <dl className="grid gap-4 md:grid-cols-3">
          {content.items.map((item, index) => (
            <BrandCard
              accent="top"
              accentClassName={theme.borderTop}
              as="div"
              className={cn(
                "",
                theme.border,
              )}
              key={item.label}
            >
              <dt className="grid gap-3 text-sm font-semibold text-foreground">
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
                <span>{item.label}</span>
              </dt>
              <dd className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.value}
              </dd>
            </BrandCard>
          ))}
        </dl>
      </div>
    </SectionContainer>
  );
}
