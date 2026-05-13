import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";

type PriceTableProps = {
  content: CourseContent["pricing"];
};

function formatPriceValue(value: string) {
  return value.replace("GBP ", "£");
}

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

        <div className="grid gap-4 md:grid-cols-2">
          {content.rows.map((row, index) => (
            <article
              className="overflow-hidden rounded-lg border border-brand-teal/15 bg-white shadow-sm"
              key={row.label}
            >
              <div className="border-b border-brand-teal/12 bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-6 text-foreground">
                    {row.label}
                  </h3>
                  <span className="rounded-full bg-brand-teal-soft px-2.5 py-1 text-xs font-semibold text-brand-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 text-3xl font-semibold text-brand-teal">
                  {formatPriceValue(row.value)}
                </p>
              </div>
              <p className="p-6 text-sm leading-6 text-muted-foreground">
                {row.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
