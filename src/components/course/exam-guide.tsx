import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";

type ExamGuideProps = {
  content: NonNullable<CourseContent["examGuide"]>;
};

export function ExamGuide({ content }: ExamGuideProps) {
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
          {content.cards.map((card) => (
            <article
              className="rounded-lg border border-brand-teal/15 bg-background p-5 shadow-sm"
              key={card.title}
            >
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
            </article>
          ))}
        </div>

        <p className="rounded-lg border border-brand-gold/35 bg-brand-blue-soft p-4 text-sm leading-6 text-muted-foreground">
          {content.reviewNote}
        </p>
      </div>
    </SectionContainer>
  );
}
