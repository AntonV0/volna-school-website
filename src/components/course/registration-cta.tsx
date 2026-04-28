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
      <div className="rounded-lg border border-brand-red/20 bg-[linear-gradient(135deg,#ffffff,var(--brand-blue-soft))] p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeading
            eyebrow={content.eyebrow}
            level={2}
            title={content.title}
          >
            <p>{content.body}</p>
          </SectionHeading>
          <ButtonLink
            href={getLocalizedPath(locale, "registration")}
          >
            {content.ctaLabel}
          </ButtonLink>
        </div>
      </div>
    </SectionContainer>
  );
}
