import { MediaFrame } from "@/components/ui/media-frame";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type CourseOverviewProps = {
  content: CourseContent["overview"];
  routeKey: CourseContent["routeKey"];
};

export function CourseOverview({ content, routeKey }: CourseOverviewProps) {
  const image = VOLNA_IMAGES.courses[routeKey].overview;

  return (
    <SectionContainer id="overview">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow={content.eyebrow}
            level={2}
            title={content.title}
          >
            <p>{content.body}</p>
          </SectionHeading>
          <MediaFrame
            image={image}
            label={content.eyebrow}
            sizes="(min-width: 1024px) 42vw, 100vw"
            variant="online"
          />
        </div>

        <ul className="grid self-start gap-3">
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
