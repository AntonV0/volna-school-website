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
    <SectionContainer className="bg-white" id="overview">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeading
            eyebrow={content.eyebrow}
            level={2}
            title={content.title}
          >
            <p>{content.body}</p>
          </SectionHeading>
          <MediaFrame
            className="border-4 border-white"
            image={image}
            label={content.eyebrow}
            sizes="(min-width: 1024px) 42vw, 100vw"
            variant="online"
          />
        </div>

        <ul className="grid self-start overflow-hidden rounded-lg border border-brand-teal/15 bg-brand-teal/15">
          {content.highlights.map((highlight, index) => (
            <li
              className="grid gap-3 bg-white p-5 text-sm leading-6 text-muted-foreground sm:grid-cols-[3.25rem_1fr]"
              key={highlight}
            >
              <span className="text-sm font-semibold text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
