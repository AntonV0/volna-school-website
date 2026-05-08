import { ButtonLink } from "@/components/ui/button-link";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type CourseHeroProps = {
  content: CourseContent;
};

export function CourseHero({ content }: CourseHeroProps) {
  const image = VOLNA_IMAGES.courses[content.routeKey].hero;

  return (
    <SectionContainer className="bg-brand-teal-soft">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <SectionHeading eyebrow={content.hero.eyebrow} title={content.hero.title}>
            <p>{content.hero.summary}</p>
          </SectionHeading>
          <div className="grid gap-3 sm:flex sm:flex-wrap">
            <ButtonLink className="w-full sm:w-auto" href="#registration">
              {content.hero.primaryCtaLabel}
            </ButtonLink>
            <ButtonLink className="w-full sm:w-auto" href="#overview" variant="secondary">
              {content.hero.secondaryCtaLabel}
            </ButtonLink>
          </div>
        </div>

        <MediaFrame
          image={image}
          label={content.hero.mediaLabel}
          priority
          sizes="(min-width: 1024px) 34vw, 100vw"
          variant="online"
        />
      </div>
    </SectionContainer>
  );
}
