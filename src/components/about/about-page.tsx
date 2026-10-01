import { AboutClassesSection } from "@/components/about/about-classes-section";
import { AboutEditorialPage } from "./about-editorial-page";
import { AboutCurriculumSection } from "@/components/about/about-curriculum-section";
import { AboutHeroSection } from "@/components/about/about-hero-section";
import { AboutHistorySection } from "@/components/about/about-history-section";
import { AboutMissionSection } from "@/components/about/about-mission-section";
import { AboutProofBand } from "@/components/about/about-proof-band";
import { AboutSectionNav } from "@/components/about/about-section-nav";
import { AboutValuesSection } from "@/components/about/about-values-section";
import { AboutWelcomeSection } from "@/components/about/about-welcome-section";
import type { Locale } from "@/lib/i18n/config";

type AboutPageProps = {
  locale: Locale;
};

export function AboutPage({ locale }: AboutPageProps) {
  if (locale === "en") return <AboutEditorialPage />;
  return (
    <>
      <AboutHeroSection locale={locale} />
      <AboutSectionNav locale={locale} />
      <AboutProofBand locale={locale} />
      <AboutWelcomeSection locale={locale} />
      <AboutMissionSection locale={locale} />
      <AboutValuesSection locale={locale} />
      <AboutHistorySection locale={locale} />
      <AboutCurriculumSection locale={locale} />
      <AboutClassesSection locale={locale} />
    </>
  );
}
