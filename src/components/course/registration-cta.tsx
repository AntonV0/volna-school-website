import Link from "next/link";

import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";
import { cn } from "@/lib/classnames";
import type { Locale } from "@/lib/i18n/config";
import { getTrialRegistrationPath } from "@/lib/registration/routing";

type RegistrationCtaProps = {
  content: CourseContent["registration"];
  courseKey: CourseContent["routeKey"];
  locale: Locale;
};

export function RegistrationCta({
  content,
  courseKey,
  locale,
}: RegistrationCtaProps) {
  const isAdultCourse = courseKey === "adults";

  return (
    <SectionContainer className="bg-white" id="registration">
      <div
        className={cn(
          "overflow-hidden rounded-lg text-white shadow-[var(--shadow-soft)]",
          isAdultCourse
            ? "border border-brand-teal/20 bg-brand-teal-deep"
            : "border border-brand-red/20 bg-brand-red",
        )}
      >
        <div
          className={cn(
            "h-2",
            isAdultCourse
              ? "bg-[linear-gradient(90deg,var(--brand-gold),rgba(255,255,255,0.65),var(--brand-teal))]"
              : "bg-[linear-gradient(90deg,var(--brand-gold),rgba(255,255,255,0.65),var(--brand-red))]",
          )}
        />
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <SectionHeading
            eyebrow={content.eyebrow}
            level={2}
            tone="inverse"
            title={content.title}
          >
            <p>{content.body}</p>
          </SectionHeading>
          <Link
            className={cn(
              "inline-flex min-h-11 w-full max-w-full items-center justify-center rounded-md bg-white px-5 py-2.5 text-center text-sm font-semibold leading-snug shadow-[0_14px_28px_rgba(18,49,66,0.18)] transition hover:bg-white/92 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto",
              isAdultCourse ? "text-brand-teal-deep" : "text-brand-red",
            )}
            href={getTrialRegistrationPath(locale, courseKey)}
          >
            {content.ctaLabel}
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
