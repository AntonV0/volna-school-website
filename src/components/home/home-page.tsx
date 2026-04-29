import Link from "next/link";

import { StructuredData } from "@/components/seo/structured-data";
import { ButtonLink } from "@/components/ui/button-link";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { createHomeStructuredData } from "@/lib/metadata";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const content = homeContent[locale];

  return (
    <>
      <StructuredData data={createHomeStructuredData(locale, content)} />
      <SectionContainer className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <SectionHeading eyebrow={content.hero.eyebrow} title={content.hero.title}>
              <p>{content.hero.summary}</p>
            </SectionHeading>
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <ButtonLink
                className="w-full sm:w-auto"
                href={getLocalizedPath(locale, "registration")}
              >
                {content.hero.primaryCtaLabel}
              </ButtonLink>
              <ButtonLink className="w-full sm:w-auto" href="#courses" variant="secondary">
                {content.hero.secondaryCtaLabel}
              </ButtonLink>
            </div>
          </div>
          <MediaFrame
            className="lg:translate-y-6"
            label={locale === "en" ? "Live online Russian lessons" : "Живые онлайн-уроки русского языка"}
            variant="community"
          />
        </div>
      </SectionContainer>

      <SectionContainer className="pt-8" id="courses">
        <div className="space-y-8">
          <SectionHeading
            eyebrow={content.courseChooser.eyebrow}
            level={2}
            title={content.courseChooser.title}
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.courseChooser.courses.map((course) => (
              <Link
                className="group flex min-h-72 flex-col justify-between rounded-lg border border-border-soft bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal motion-reduce:hover:translate-y-0"
                href={getLocalizedPath(locale, course.routeKey)}
                key={course.routeKey}
              >
                <div>
                  <div className="mb-5 aspect-[4/3] rounded-md bg-[linear-gradient(135deg,var(--brand-teal-soft),#ffffff_55%,rgba(239,50,50,0.15))]" />
                  <h3 className="text-xl font-semibold text-brand-teal">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {course.summary}
                  </p>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-foreground">
                  {course.bullets.map((bullet) => (
                    <li className="flex gap-2" key={bullet}>
                      <span className="text-brand-red" aria-hidden="true">
                        +
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-blue">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MediaFrame
            label={locale === "en" ? "A warm bilingual learning community" : "Теплое билингвальное учебное сообщество"}
            variant="photo"
          />
          <div className="space-y-6">
            <SectionHeading
              eyebrow={content.welcome.eyebrow}
              level={2}
              title={content.welcome.title}
            >
              <p>{content.welcome.body}</p>
            </SectionHeading>
            <ButtonLink
              className="w-full sm:w-auto"
              href={getLocalizedPath(locale, "about")}
              variant="secondary"
            >
              {content.welcome.ctaLabel}
            </ButtonLink>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow={content.approach.eyebrow}
            level={2}
            title={content.approach.title}
          />
          <div className="grid gap-4">
            {content.approach.points.map((point) => (
              <article
                className="rounded-lg border border-border-soft bg-background p-5"
                key={point.title}
              >
                <h3 className="font-semibold text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-blue">
        <div className="space-y-8 text-center">
          <SectionHeading
            eyebrow={content.team.eyebrow}
            level={2}
            title={content.team.title}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.team.people.map((person, index) => (
              <article
                className="rounded-lg border border-border-soft bg-white p-5 text-center shadow-sm"
                key={`${person.name}-${index}`}
              >
                <div className="mx-auto mb-4 grid size-24 place-items-center rounded-full bg-brand-teal-soft text-xl font-semibold text-brand-teal">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-foreground">{person.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {person.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white">
        <div className="grid gap-8 overflow-hidden rounded-lg border border-border-soft bg-surface-blue p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              {content.enrollment.title}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              {content.enrollment.body}
            </p>
            <ButtonLink
              className="w-full sm:w-auto"
              href={getLocalizedPath(locale, "registration")}
            >
              {content.enrollment.ctaLabel}
            </ButtonLink>
          </div>
          <MediaFrame
            label={locale === "en" ? "Start with a free trial lesson" : "Начните с бесплатного пробного урока"}
            variant="online"
          />
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white pt-0">
        <figure className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
            {content.testimonial.eyebrow}
          </p>
          <blockquote className="mt-4 text-2xl font-medium leading-relaxed text-foreground">
            &quot;{content.testimonial.quote}&quot;
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted-foreground">
            {content.testimonial.attribution}
          </figcaption>
        </figure>
      </SectionContainer>
    </>
  );
}
