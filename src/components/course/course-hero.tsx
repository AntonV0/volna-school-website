import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";

type CourseHeroProps = {
  content: CourseContent["hero"];
};

export function CourseHero({ content }: CourseHeroProps) {
  return (
    <SectionContainer className="bg-brand-teal-soft">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <SectionHeading eyebrow={content.eyebrow} title={content.title}>
            <p>{content.summary}</p>
          </SectionHeading>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="#registration">{content.primaryCtaLabel}</ButtonLink>
            <ButtonLink href="#overview" variant="secondary">
              {content.secondaryCtaLabel}
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-lg border border-brand-teal/15 bg-white p-6 shadow-sm">
          <div className="aspect-[4/3] rounded-md bg-[linear-gradient(135deg,var(--brand-teal-soft),#ffffff_55%,rgba(217,54,50,0.14))]" />
        </div>
      </div>
    </SectionContainer>
  );
}
