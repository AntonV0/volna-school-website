import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";

type OptionCardGridProps = {
  content: CourseContent["studyOptions"];
};

export function OptionCardGrid({ content }: OptionCardGridProps) {
  return (
    <SectionContainer className="bg-white" id="study-options">
      <div className="space-y-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          level={2}
          title={content.title}
        />
        <div className="grid gap-4 md:grid-cols-3">
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
              <p className="mt-5 border-t border-brand-teal/10 pt-4 text-sm font-medium text-brand-teal">
                {card.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
