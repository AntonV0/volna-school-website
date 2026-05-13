import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";

type CalendarSummaryProps = {
  content: CourseContent["calendar"];
};

export function CalendarSummary({ content }: CalendarSummaryProps) {
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
            <div
              className="rounded-lg border border-brand-teal/15 border-t-4 border-t-brand-teal bg-surface-blue p-5 shadow-sm"
              key={item.label}
            >
              <dt className="grid gap-3 text-sm font-semibold text-foreground">
                <span className="flex size-9 items-center justify-center rounded-full bg-white text-xs font-semibold text-brand-red shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.label}</span>
              </dt>
              <dd className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionContainer>
  );
}
