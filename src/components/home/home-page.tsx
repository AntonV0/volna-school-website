import { HomeTeamSection } from "@/components/home/home-team-section";
import { HomeApproachSection } from "@/components/home/home-approach-section";
import { StructuredData } from "@/components/seo/structured-data";
import { HomeSectionMarker } from "@/components/dev/home-section-marker";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { createHomeStructuredData } from "@/lib/metadata";
import { HomeCourseDepthSection } from "@/components/home/home-course-depth";
import { HomeEnrollmentCta } from "@/components/home/home-enrollment-cta";
import { HomeHeroSection } from "@/components/home/home-hero-section";
import { PlacementSection } from "@/components/home/home-placement-section";
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
        <HomeTeamSection locale={locale} />
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
