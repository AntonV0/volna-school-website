import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";

type PriceTableProps = {
  content: CourseContent["pricing"];
};

export function PriceTable({ content }: PriceTableProps) {
  return (
    <SectionContainer id="prices">
      <div className="space-y-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          level={2}
          title={content.title}
        >
          <p>{content.note}</p>
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2">
          {content.rows.map((row) => (
            <article
              className="rounded-lg border border-border-soft bg-white p-6 shadow-sm"
              key={row.label}
            >
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
