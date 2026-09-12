import { HomeApproachSection } from "@/components/home/home-approach-section";
import { StructuredData } from "@/components/seo/structured-data";
import { HomeSectionMarker } from "@/components/dev/home-section-marker";
import { ApprovedImage } from "@/components/ui/approved-image";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { createHomeStructuredData } from "@/lib/metadata";
import { HomeCourseDepthSection } from "@/components/home/home-course-depth";
import { HomeEnrollmentCta } from "@/components/home/home-enrollment-cta";
import { HomeHeroSection } from "@/components/home/home-hero-section";
import { PlacementSection } from "@/components/home/home-placement-section";
import { staffImageClasses, staffImages } from "@/components/home/home-shared";
import { HomeTestimonialSection } from "@/components/home/home-testimonial-section";
import { HomeTrustStripSection } from "@/components/home/home-trust-strip";
import { HomeWelcomeSection } from "@/components/home/home-welcome-section";

import styles from "./home-responsive.module.css";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const content = homeContent[locale];
  const feedbackThemes = content.approach.points.slice(0, 3).map((point) => ({
    body: point.description,
    title: point.title,
  }));

  return (
    <div className={styles.home}>
      <StructuredData data={createHomeStructuredData(locale, content)} />
      <HomeSectionMarker label="Hero" number={1}>
        <HomeHeroSection locale={locale} />
      </HomeSectionMarker>

      <HomeTrustStripSection locale={locale} />

      <HomeSectionMarker label="Welcome" number={2}>
        <HomeWelcomeSection locale={locale} />
      </HomeSectionMarker>

      <HomeSectionMarker label="Class details" number={3}>
        <HomeCourseDepthSection locale={locale} />
      </HomeSectionMarker>

      <HomeSectionMarker label="Placement" number={4}>
        <PlacementSection locale={locale} />
      </HomeSectionMarker>

      <HomeSectionMarker label="Teaching approach" number={5}>
        <HomeApproachSection locale={locale} />
      </HomeSectionMarker>

      <HomeSectionMarker label="Team" number={6}>
        <SectionContainer className="bg-section-wash">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <SectionHeading
              eyebrow={content.team.eyebrow}
              level={2}
              title={content.team.title}
            >
              <p>
                {locale === "en"
                  ? "Placement and lessons are led by a small team of Russian educators, so families know who is guiding the plan and supporting progress."
                  : "Небольшая команда педагогов помогает семье понимать маршрут обучения, формат уроков и следующий шаг."}
              </p>
            </SectionHeading>
            <div className="grid gap-3">
              {content.team.people.map((person, index) => (
                <article
                  className="grid grid-cols-[5rem_1fr] items-center gap-4 rounded-lg border border-border-soft bg-white p-4 text-left shadow-sm"
                  key={`${person.name}-${index}`}
                >
                  <div className="relative h-20 overflow-hidden rounded-md border border-brand-teal/15 bg-brand-teal-soft shadow-sm">
                    <ApprovedImage
                      className={staffImageClasses[index]}
                      image={staffImages[index]}
                      sizes="5rem"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{person.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {person.role}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-teal">
                      {person.focus}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SectionContainer>
      </HomeSectionMarker>

      <HomeSectionMarker label="Testimonials" number={7}>
        <HomeTestimonialSection feedbackThemes={feedbackThemes} locale={locale} />
      </HomeSectionMarker>

      <HomeSectionMarker label="Free lesson" number={8}>
        <HomeEnrollmentCta locale={locale} />
      </HomeSectionMarker>
    </div>
  );
}
