import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SimpleAccordion } from "@/components/ui/simple-accordion";
import type { CourseContent } from "@/content/course-content";

type FaqListProps = {
  content: CourseContent["faq"];
};

export function FaqList({ content }: FaqListProps) {
  return (
    <SectionContainer className="bg-brand-teal-deep" id="faq">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow={content.eyebrow}
          level={2}
          tone="inverse"
          title={content.title}
        />
        <div className="rounded-lg border border-white/20 px-5">
          {content.items.map((item) => (
            <SimpleAccordion key={item.question} title={item.question}>
              <p>{item.answer}</p>
            </SimpleAccordion>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
