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

        <div className="overflow-hidden rounded-lg border border-brand-teal/15 bg-white shadow-sm">
          {content.rows.map((row) => (
            <div
              className="grid gap-2 border-b border-brand-teal/10 p-5 last:border-b-0 md:grid-cols-[1fr_0.8fr_1.4fr] md:items-center"
              key={row.label}
            >
              <h3 className="font-semibold text-foreground">{row.label}</h3>
              <p className="font-semibold text-brand-teal">{row.value}</p>
              <p className="text-sm leading-6 text-muted-foreground">
                {row.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
