import Link from "next/link";

import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SimpleAccordion } from "@/components/ui/simple-accordion";
import type { CourseContent } from "@/content/course-content";
import type { Locale } from "@/lib/i18n/config";
import { getTrialRegistrationPath } from "@/lib/registration/routing";

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
  return (
    <SectionContainer className="bg-brand-teal-deep" id="faq">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow={content.eyebrow}
          level={2}
          tone="inverse"
          title={content.title}
        />
        <div className="overflow-hidden rounded-lg border border-white/20 bg-white/[0.04]">
          <div className="px-5">
            {content.items.map((item) => (
              <SimpleAccordion key={item.question} title={item.question}>
                <p>{item.answer}</p>
              </SimpleAccordion>
            ))}
          </div>
          <div className="grid gap-4 border-t border-white/15 bg-white p-5 text-foreground sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="text-sm font-semibold text-brand-teal-deep">
                {locale === "en" ? "Still deciding?" : content.eyebrow}
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {locale === "en"
                  ? "Use the trial request to ask about fit, timetable, level, and the right lesson format."
                  : content.title}
              </p>
            </div>
            <Link
              className="inline-flex min-h-11 w-full max-w-full items-center justify-center whitespace-normal rounded-md bg-brand-red px-5 py-2.5 text-center text-sm font-semibold leading-snug text-white shadow-sm transition hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red sm:w-auto"
              href={getTrialRegistrationPath(locale, courseKey)}
            >
              {registrationCtaLabel}
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
