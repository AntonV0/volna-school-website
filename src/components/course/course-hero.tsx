import { ButtonLink } from "@/components/ui/button-link";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";
import type { Locale } from "@/lib/i18n/config";
import { getTrialRegistrationPath } from "@/lib/registration/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type CourseHeroProps = {
  content: CourseContent;
  locale: Locale;
};

const enHeroSignals: Record<CourseContent["routeKey"], [string, string, string]> = {
  children: ["Ages 3-16", "Groups and private tuition", "Free placement lesson"],
  gcse: ["Pearson Edexcel", "1-year and 2-year routes", "Mocks and feedback"],
  alevel: ["Advanced exam support", "Essays, speaking, IRP", "Specification planning"],
  adults: ["Beginner to advanced", "Flexible private lessons", "Conversation goals"],
};

const enRouteFitCopy: Record<
  CourseContent["routeKey"],
  { body: string; title: string }
> = {
  children: {
    title: "Good fit for",
    body:
      "Families choosing between bilingual, beginner, group, or private Russian lessons for a child.",
  },
  gcse: {
    title: "Good fit for",
    body:
      "Students who need a clear GCSE route, exam practice, mock support, and current-year guidance.",
  },
  alevel: {
    title: "Good fit for",
    body:
      "Advanced learners working on essays, speaking, cultural material, literature, film, or IRP planning.",
  },
  adults: {
    title: "Good fit for",
    body:
      "Adults who want practical private lessons shaped around level, schedule, confidence, and goals.",
  },
};

export function CourseHero({ content, locale }: CourseHeroProps) {
  const image = VOLNA_IMAGES.courses[content.routeKey].hero;
  const heroImagePosition =
    content.routeKey === "children"
      ? "center 24%"
      : content.routeKey === "alevel"
        ? "38% center"
        : "center";
  const heroSignals =
    locale === "en" ? enHeroSignals[content.routeKey] : content.overview.highlights.slice(0, 3);
  const routeFit =
    locale === "en"
      ? enRouteFitCopy[content.routeKey]
      : {
          body: content.overview.highlights[0],
          title: content.hero.secondaryCtaLabel,
        };

  return (
    <SectionContainer className="border-b border-brand-teal/14 bg-[linear-gradient(180deg,#fffdf8_0%,#f7fcfd_58%,#ffffff_100%)] py-14 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <SectionHeading eyebrow={content.hero.eyebrow} title={content.hero.title}>
            <p>{content.hero.summary}</p>
          </SectionHeading>
          <div className="grid gap-3 sm:flex sm:flex-wrap">
            <ButtonLink
              className="w-full sm:w-auto"
              href={getTrialRegistrationPath(locale, content.routeKey)}
            >
              {content.hero.primaryCtaLabel}
            </ButtonLink>
            <ButtonLink className="w-full sm:w-auto" href="#overview" variant="secondary">
              {content.hero.secondaryCtaLabel}
            </ButtonLink>
          </div>
          <div className="rounded-lg border border-brand-teal/15 border-l-4 border-l-brand-gold bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
              {routeFit.title}
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-brand-teal-deep">
              {routeFit.body}
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-3 border-y border-brand-teal/15 py-4 sm:py-5">
            {heroSignals.map((signal, index) => (
              <div
                className="min-w-0 border-l border-brand-teal/15 pl-3 first:border-l-0 first:pl-0"
                key={signal}
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
                  {String(index + 1).padStart(2, "0")}
                </dt>
                <dd className="mt-1 text-xs font-semibold leading-5 text-foreground sm:text-sm">
                  {signal}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <MediaFrame
          className="border-4 border-white"
          contentClassName="aspect-[4/3] min-h-72"
          image={image}
          imageStyle={{ objectPosition: heroImagePosition }}
          label={content.hero.mediaLabel}
          priority
          sizes="(min-width: 1024px) 34vw, 100vw"
          variant="online"
        />
      </div>
    </SectionContainer>
  );
}
