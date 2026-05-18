import { StructuredData } from "@/components/seo/structured-data";
import { ApprovedImage } from "@/components/ui/approved-image";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { createHomeStructuredData } from "@/lib/metadata";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import { HomeCourseDepthSection } from "@/components/home/home-course-depth";
import { HomeEnrollmentCta } from "@/components/home/home-enrollment-cta";
import { HomeHeroSection } from "@/components/home/home-hero-section";
import { PlacementSection } from "@/components/home/home-placement-section";
import { englishFeedbackThemes, staffImageClasses, staffImages } from "@/components/home/home-shared";
import { HomeTestimonialSection } from "@/components/home/home-testimonial-section";
import { HomeWelcomeSection } from "@/components/home/home-welcome-section";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const content = homeContent[locale];
  const feedbackThemes =
    locale === "en"
      ? englishFeedbackThemes
      : content.approach.points.slice(0, 3).map((point) => ({
          body: point.description,
          title: point.title,
        }));

  return (
    <>
      <StructuredData data={createHomeStructuredData(locale, content)} />
      <HomeHeroSection locale={locale} />

      <HomeWelcomeSection locale={locale} />

      <HomeCourseDepthSection locale={locale} />

      <PlacementSection locale={locale} />

      <SectionContainer className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={content.approach.eyebrow}
              level={2}
              title={content.approach.title}
            />
            <MediaFrame
              image={VOLNA_IMAGES.home.approach}
              label={locale === "en" ? "Structured online lessons" : "Структурированные онлайн-уроки"}
              sizes="(min-width: 1024px) 32vw, 100vw"
              variant="online"
            />
          </div>
          <div className="grid gap-4">
            {content.approach.points.map((point, index) => (
              <article
                className="grid gap-3 border-t border-brand-teal/14 bg-white py-5 first:border-t-0"
                key={point.title}
              >
                <h3 className="flex items-center gap-3 font-semibold text-foreground">
                  <span className="text-sm font-bold text-brand-red" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {point.title}
                </h3>
                <p className="pl-9 text-sm leading-6 text-muted-foreground">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-blue">
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

      <HomeTestimonialSection feedbackThemes={feedbackThemes} locale={locale} />

      <HomeEnrollmentCta locale={locale} />
    </>
  );
}
