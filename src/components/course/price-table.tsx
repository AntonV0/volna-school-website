import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";

type PriceTableProps = {
  content: CourseContent["pricing"];
};

export function PriceTable({ content }: PriceTableProps) {
  return (
    <SectionContainer className="bg-surface-blue" id="prices">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <SectionHeading
          eyebrow={content.eyebrow}
          level={2}
          title={content.title}
        >
          <p>{content.note}</p>
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2 md:gap-px md:overflow-hidden md:rounded-lg md:border md:border-brand-teal/15 md:bg-brand-teal/15">
          {content.rows.map((row, index) => (
            <article
              className="rounded-lg border border-brand-teal/15 bg-white p-6 shadow-sm md:rounded-none md:border-0 md:shadow-none"
              key={row.label}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-lg font-semibold text-foreground">
                {row.label}
              </h3>
              <p className="mt-4 text-3xl font-semibold text-brand-teal">
                {row.value}
              </p>
              <p className="mt-4 border-t border-border-soft pt-4 text-sm leading-6 text-muted-foreground">
                {row.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
