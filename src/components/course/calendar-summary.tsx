import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";

type CalendarSummaryProps = {
  content: CourseContent["calendar"];
};

export function CalendarSummary({ content }: CalendarSummaryProps) {
  return (
    <SectionContainer className="bg-white" id="calendar">
      <div className="space-y-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          level={2}
          title={content.title}
        >
          <p>{content.note}</p>
        </SectionHeading>
        <dl className="grid gap-4 md:grid-cols-3">
          {content.items.map((item) => (
            <div
              className="rounded-lg border border-brand-teal/15 bg-background p-5"
              key={item.label}
            >
              <dt className="text-sm font-semibold text-foreground">
                {item.label}
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
