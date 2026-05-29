import Link from "next/link";

import { MediaFrame } from "@/components/ui/media-frame";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { getTrialRegistrationPath } from "@/lib/registration/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import { routeNumbers } from "@/components/home/home-shared";

export function HomeEnrollmentCta({ locale }: { locale: Locale }) {
  const content = homeContent[locale];

  return (
    <SectionContainer className="bg-brand-red text-white">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            {locale === "en" ? "Free first lesson" : content.hero.primaryCtaLabel}
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {content.enrollment.title}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-white/86">
            {content.enrollment.body}
          </p>
          <ButtonLink
            className="w-full sm:w-auto"
            href={getTrialRegistrationPath(locale)}
            variant="inverse"
          >
            {content.enrollment.ctaLabel}
          </ButtonLink>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="order-2 lg:order-none">
            <MediaFrame
              image={VOLNA_IMAGES.home.enrollment}
              label={locale === "en" ? "Start with a free trial lesson" : "Начните с бесплатного пробного урока"}
              sizes="(min-width: 1024px) 22vw, 100vw"
              variant="online"
            />
          </div>
          <div className="order-1 rounded-lg bg-white p-4 text-foreground shadow-[0_18px_45px_rgba(18,49,66,0.18)] lg:order-none">
            <p className="text-sm font-semibold text-brand-teal">
              {content.enrollment.routePrompt ?? content.courseChooser.title}
            </p>
            <div className="mt-4 grid gap-2">
              {content.courseChooser.courses.map((course) => (
                <Link
                  className="grid min-h-11 grid-cols-[2rem_1fr] items-center gap-3 rounded-md border border-border-soft bg-section-wash px-3 py-2 text-sm font-semibold text-foreground transition hover:border-brand-red hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                  href={getTrialRegistrationPath(locale, course.routeKey)}
                  key={course.routeKey}
                >
                  <span className="text-xs font-bold text-brand-red">
                    {routeNumbers[course.routeKey]}
                  </span>
                  <span>{course.title}</span>
                </Link>
              ))}
            </div>
            {content.enrollment.responseNote ? (
              <p className="mt-4 border-t border-brand-teal/12 pt-4 text-sm leading-6 text-muted-foreground">
                {content.enrollment.responseNote}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
