import type { CourseContent } from "@/content/course-content";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";

type CourseResultsProps = {
  content: NonNullable<CourseContent["results"]>;
};

export function CourseResults({ content }: CourseResultsProps) {
  return (
    <SectionContainer className="bg-white" id="results">
      <div className="space-y-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          level={2}
          title={content.title}
        >
          <p>{content.note}</p>
        </SectionHeading>
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {content.items.map((item) => (
            <div
              className="rounded-lg border border-brand-teal/15 bg-brand-teal-soft p-5 text-center shadow-sm"
              key={item.label}
            >
              <dt className="text-sm font-semibold text-brand-teal">
                {item.label}
              </dt>
              <dd className="mt-2 text-lg font-semibold text-foreground">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionContainer>
  );
}
