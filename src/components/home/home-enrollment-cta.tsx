import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { getTrialRegistrationPath } from "@/lib/registration/routing";
import { routeNumbers } from "@/components/home/home-shared";

export function HomeEnrollmentCta({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const placement = content.courseChooser.placement;

  return (
    <SectionContainer className="bg-white" id="placement">
      <span aria-hidden="true" className="sr-only" id="free-lesson" />
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch lg:gap-12">
        <div className="flex flex-col lg:justify-center">
          <h2 className="text-3xl font-semibold leading-tight text-brand-blue sm:text-4xl">
            {content.enrollment.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            {content.enrollment.body}
          </p>
          <div className="mt-6">
            <ButtonLink
              className="w-full sm:w-auto"
              href={getTrialRegistrationPath(locale)}
            >
              {content.enrollment.ctaLabel}
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-xl border border-brand-teal/14 bg-section-wash p-5 text-foreground shadow-[0_16px_40px_rgba(18,49,66,0.09)] sm:p-6">
          <p className="text-sm font-semibold text-brand-teal">
            {content.enrollment.routePrompt ?? content.courseChooser.title}
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {content.courseChooser.courses.map((course) => (
              <ButtonLink
                className="min-h-12 w-full justify-start px-3 py-2 text-left [&>svg]:ml-auto"
                href={getTrialRegistrationPath(locale, course.routeKey)}
                key={course.routeKey}
                variant="secondary"
              >
                <span className="text-xs font-bold text-white/72">
                  {routeNumbers[course.routeKey]}
                </span>
                <span>{course.title}</span>
              </ButtonLink>
            ))}
          </div>
          {content.enrollment.responseNote ? (
            <p className="mt-4 border-t border-brand-teal/12 pt-4 text-sm leading-6 text-muted-foreground">
              {content.enrollment.responseNote}
            </p>
          ) : null}
        </div>
      </div>

      <ol className="mt-8 grid overflow-hidden rounded-xl border border-brand-teal/14 bg-white shadow-[0_12px_30px_rgba(18,49,66,0.07)] md:grid-cols-3">
        {placement.steps.map((step, index) => (
          <li
            className="border-t border-brand-teal/14 p-5 first:border-t-0 md:border-l md:border-t-0 md:first:border-l-0 lg:p-6"
            key={step.title}
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-lg font-semibold leading-tight text-foreground">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
}
