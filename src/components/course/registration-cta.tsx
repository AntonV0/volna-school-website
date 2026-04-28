import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";

type RegistrationCtaProps = {
  content: CourseContent["registration"];
  locale: Locale;
};

export function RegistrationCta({ content, locale }: RegistrationCtaProps) {
  return (
    <SectionContainer className="bg-white" id="registration">
      <div className="overflow-hidden rounded-lg border border-brand-red/20 bg-[linear-gradient(135deg,#ffffff,var(--brand-blue-soft))] shadow-[var(--shadow-soft)]">
        <div className="h-1.5 bg-brand-red" />
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeading
            eyebrow={content.eyebrow}
            level={2}
            title={content.title}
          >
            <p>{content.body}</p>
          </SectionHeading>
          <ButtonLink
            className="w-full sm:w-auto"
            href={getLocalizedPath(locale, "registration")}
          >
            {content.ctaLabel}
          </ButtonLink>
        </div>
      </div>
    </SectionContainer>
  );
}
