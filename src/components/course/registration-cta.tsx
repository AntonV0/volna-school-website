import { ButtonLink } from "@/components/ui/button-link";
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

const routeKeyGradient: Record<CourseContent["routeKey"], string> = {
  children:
    "bg-[linear-gradient(90deg,var(--brand-blue),rgba(255,255,255,0.65),var(--brand-red))]",
  gcse:
    "bg-[linear-gradient(90deg,var(--route-exam),rgba(255,255,255,0.65),var(--brand-red))]",
  alevel:
    "bg-[linear-gradient(90deg,var(--route-advanced),rgba(255,255,255,0.65),var(--brand-red))]",
  adults:
    "bg-[linear-gradient(90deg,var(--accent),rgba(255,255,255,0.65),var(--brand-teal))]",
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
          className={cn("h-2", routeKeyGradient[courseKey])}
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
          <ButtonLink
            className="w-full sm:w-auto"
            href={getTrialRegistrationPath(locale, courseKey)}
            variant={isAdultCourse ? "inverseTeal" : "inverse"}
          >
            {content.ctaLabel}
          </ButtonLink>
        </div>
      </div>
    </SectionContainer>
  );
}
