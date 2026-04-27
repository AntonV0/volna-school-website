import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";

type RegistrationCtaProps = {
  content: CourseContent["registration"];
};

export function RegistrationCta({ content }: RegistrationCtaProps) {
  return (
    <SectionContainer id="registration">
      <div className="rounded-lg border border-brand-red/20 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeading
            eyebrow={content.eyebrow}
            level={2}
            title={content.title}
          >
            <p>{content.body}</p>
          </SectionHeading>
          <ButtonLink
            aria-disabled="true"
            className="pointer-events-none opacity-75"
            href="#registration"
          >
            {content.ctaLabel}
          </ButtonLink>
        </div>
      </div>
    </SectionContainer>
  );
}
