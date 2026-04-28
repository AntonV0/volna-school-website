import { ButtonLink } from "@/components/ui/button-link";
import { MediaFrame } from "@/components/ui/media-frame";
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
          <div className="grid gap-3 sm:flex sm:flex-wrap">
            <ButtonLink className="w-full sm:w-auto" href="#registration">
              {content.primaryCtaLabel}
            </ButtonLink>
            <ButtonLink className="w-full sm:w-auto" href="#overview" variant="secondary">
              {content.secondaryCtaLabel}
            </ButtonLink>
          </div>
        </div>

        <MediaFrame label={content.mediaLabel} variant="online" />
      </div>
    </SectionContainer>
  );
}
