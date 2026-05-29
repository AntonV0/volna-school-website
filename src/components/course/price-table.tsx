import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrandCard } from "@/components/ui/brand-card";
import type { CourseContent } from "@/content/course-content";
import { cn } from "@/lib/classnames";
import { courseThemeClasses } from "@/components/course/course-theme";

type PriceTableProps = {
  content: CourseContent["pricing"];
  routeKey: CourseContent["routeKey"];
};

function formatPriceValue(value: string) {
  return value.replace("GBP ", "£");
}

export function PriceTable({ content, routeKey }: PriceTableProps) {
  const theme = courseThemeClasses[routeKey];

  return (
    <SectionContainer className="bg-section-wash" id="prices">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <SectionHeading
          eyebrow={content.eyebrow}
          level={2}
          title={content.title}
        >
          <p>{content.note}</p>
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2">
          {content.rows.map((row, index) => (
            <BrandCard
              accent="top"
              accentClassName={theme.borderTop}
              className={cn(
                "flex min-h-full flex-col overflow-hidden",
                theme.border,
              )}
              key={row.label}
              padding="none"
              shadow="soft"
            >
              <div className="border-b border-brand-teal/12 bg-white p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-6 text-foreground">
                    {row.label}
                  </h3>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-xs font-semibold ring-1",
                      theme.softBg,
                      theme.text,
                      theme.ring,
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-3xl font-semibold tracking-normal text-brand-teal">
                  {formatPriceValue(row.value)}
                </p>
              </div>
              <p className="flex flex-1 items-start p-5 text-sm leading-6 text-muted-foreground sm:p-6">
                {row.detail}
              </p>
            </BrandCard>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
