import { ApprovedImage } from "@/components/ui/approved-image";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type OptionCardGridProps = {
  content: CourseContent["studyOptions"];
  routeKey: CourseContent["routeKey"];
};

export function OptionCardGrid({ content, routeKey }: OptionCardGridProps) {
  const images = VOLNA_IMAGES.courses[routeKey].studyOptions;

  return (
    <SectionContainer className="bg-white" id="study-options">
      <div className="space-y-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          level={2}
          title={content.title}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {content.cards.map((card, index) => (
            <article
              className="overflow-hidden rounded-lg border border-brand-teal/15 bg-background shadow-sm"
              key={card.title}
            >
              <div className="relative aspect-[16/10] bg-brand-teal-soft">
                <ApprovedImage
                  image={images[index]}
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {card.description}
                </p>
                <p className="mt-5 border-t border-brand-teal/10 pt-4 text-sm font-medium text-brand-teal">
                  {card.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
