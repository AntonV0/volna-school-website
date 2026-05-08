import { ApprovedImage } from "@/components/ui/approved-image";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type ExamGuideProps = {
  content: NonNullable<CourseContent["examGuide"]>;
  routeKey: CourseContent["routeKey"];
};

export function ExamGuide({ content, routeKey }: ExamGuideProps) {
  const images = VOLNA_IMAGES.courses[routeKey].examGuide ?? [];

  return (
    <SectionContainer className="bg-white" id="exam-guide">
      <div className="space-y-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          level={2}
          title={content.title}
        >
          <p>{content.note}</p>
        </SectionHeading>

        <div className="grid gap-4 lg:grid-cols-3">
          {content.cards.map((card, index) => {
            const image =
              images.length > 0 ? images[index % images.length] : null;

            return (
              <article
                className="overflow-hidden rounded-lg border border-brand-teal/15 bg-background shadow-sm"
                key={card.title}
              >
                {image ? (
                  <div className="relative aspect-[16/10] bg-brand-teal-soft">
                    <ApprovedImage
                      image={image}
                      sizes="(min-width: 1024px) 28vw, 100vw"
                    />
                  </div>
                ) : null}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {card.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-foreground">
                    {card.points.map((point) => (
                      <li className="flex gap-2" key={point}>
                        <span aria-hidden="true" className="text-brand-red">
                          +
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <p className="rounded-lg border border-brand-gold/35 bg-brand-blue-soft p-4 text-sm leading-6 text-muted-foreground">
          {content.reviewNote}
        </p>
      </div>
    </SectionContainer>
  );
}
