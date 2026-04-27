import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";

type CourseOverviewProps = {
  content: CourseContent["overview"];
};

export function CourseOverview({ content }: CourseOverviewProps) {
  return (
    <SectionContainer id="overview">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <SectionHeading
          eyebrow={content.eyebrow}
          level={2}
          title={content.title}
        >
          <p>{content.body}</p>
        </SectionHeading>

        <ul className="grid gap-3">
          {content.highlights.map((highlight) => (
            <li
              className="rounded-lg border border-brand-teal/15 bg-white p-4 text-sm leading-6 text-muted-foreground shadow-sm"
              key={highlight}
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
