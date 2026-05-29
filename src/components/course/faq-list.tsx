import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SimpleAccordion } from "@/components/ui/simple-accordion";
import type { CourseContent } from "@/content/course-content";
import { cn } from "@/lib/classnames";
import type { Locale } from "@/lib/i18n/config";
import { getTrialRegistrationPath } from "@/lib/registration/routing";
import { courseThemeClasses } from "@/components/course/course-theme";

type FaqListProps = {
  content: CourseContent["faq"];
  courseKey: CourseContent["routeKey"];
  locale: Locale;
  registrationCtaLabel: string;
};

export function FaqList({
  content,
  courseKey,
  locale,
  registrationCtaLabel,
}: FaqListProps) {
  const theme = courseThemeClasses[courseKey];

  return (
    <SectionContainer className="bg-brand-teal-deep" id="faq">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow={content.eyebrow}
          level={2}
          tone="inverse"
          title={content.title}
        />
        <div className="overflow-hidden rounded-lg border border-white/20 bg-white/[0.05] shadow-[var(--shadow-soft)]">
          <div className="px-5">
            {content.items.map((item) => (
              <SimpleAccordion key={item.question} title={item.question}>
                <p>{item.answer}</p>
              </SimpleAccordion>
            ))}
          </div>
          <div
            className={cn(
              "grid gap-4 border-t border-white/15 p-5 text-foreground sm:grid-cols-[1fr_auto] sm:items-center",
              theme.softBg,
            )}
          >
            <div>
              <p className={cn("text-sm font-semibold", theme.text)}>
                {locale === "en" ? "Still deciding?" : content.eyebrow}
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {locale === "en"
                  ? "Use the trial request to ask about fit, timetable, level, and the right lesson format."
                  : content.title}
              </p>
            </div>
            <ButtonLink
              className="w-full sm:w-auto"
              href={getTrialRegistrationPath(locale, courseKey)}
            >
              {registrationCtaLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
