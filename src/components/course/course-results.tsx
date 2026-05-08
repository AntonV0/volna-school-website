import type { CourseContent } from "@/content/course-content";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type CourseResultsProps = {
  content: NonNullable<CourseContent["results"]>;
  routeKey: CourseContent["routeKey"];
};

export function CourseResults({ content, routeKey }: CourseResultsProps) {
  const image = VOLNA_IMAGES.courses[routeKey].results;

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
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          {image ? (
            <MediaFrame
              image={image}
              label={content.eyebrow}
              sizes="(min-width: 1024px) 34vw, 100vw"
              variant="photo"
            />
          ) : null}
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </SectionContainer>
  );
}
