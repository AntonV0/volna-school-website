import Link from "next/link";

import { StructuredData } from "@/components/seo/structured-data";
import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home-content";
import { cn } from "@/lib/classnames";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { createHomeStructuredData } from "@/lib/metadata";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type HomePageProps = {
  locale: Locale;
};

type HomeCourseRouteKey = "children" | "gcse" | "alevel" | "adults";

const courseSignalLabels: Record<
  Locale,
  Record<HomeCourseRouteKey, [string, string, string]>
> = {
  en: {
    children: ["Ages 3-16", "Small groups", "Homework"],
    gcse: ["Edexcel", "Mocks", "Exam route"],
    alevel: ["Essays", "Speaking", "IRP"],
    adults: ["Flexible", "1-to-1", "Conversation"],
  },
  ru: {
    children: ["3-16 лет", "Группы", "Домашка"],
    gcse: ["Edexcel", "Mocks", "Экзамен"],
    alevel: ["Эссе", "Устная часть", "IRP"],
    adults: ["Гибко", "1-на-1", "Разговор"],
  },
};

const staffImages = [
  VOLNA_IMAGES.staff.elena,
  VOLNA_IMAGES.staff.marina,
  VOLNA_IMAGES.staff.irina,
  VOLNA_IMAGES.staff.anton,
];

const staffImageClasses = [
  "object-[58%_34%]",
  "object-[50%_24%]",
  "object-[50%_30%]",
  "object-[50%_34%]",
] as const;

const courseAccentClasses: Record<HomeCourseRouteKey, string> = {
  children: "border-l-brand-gold",
  gcse: "border-l-brand-teal",
  alevel: "border-l-brand-red",
  adults: "border-l-brand-blue",
};

const courseIntroLabels: Record<Locale, Record<HomeCourseRouteKey, string>> = {
  en: {
    children: "For children and heritage learners",
    gcse: "For Edexcel GCSE students",
    alevel: "For advanced exam students",
    adults: "For adults learning at their pace",
  },
  ru: {
    children: "Для детей",
    gcse: "Для GCSE",
    alevel: "Для A-Level",
    adults: "Для взрослых",
  },
};

const routeDecisionCopyEn: Record<
  HomeCourseRouteKey,
  { bestFor: string; format: string; nextStep: string }
> = {
  children: {
    bestFor: "Children aged 3-16, bilingual learners, beginners, and pupils who need a warmer route into Russian.",
    format: "Small groups or private lessons with homework, speaking practice, and age-appropriate structure.",
    nextStep: "Start with a trial lesson so the school can place your child by age, confidence, and level.",
  },
  gcse: {
    bestFor: "Students preparing for Pearson Edexcel GCSE Russian, including heritage speakers who need exam technique.",
    format: "One-year or two-year preparation with mock papers, speaking practice, writing feedback, and exam guidance.",
    nextStep: "Use the trial consultation to confirm the exam timeline and whether group or private support fits best.",
  },
  alevel: {
    bestFor: "Advanced students working towards A-Level Russian, literature, film, speaking, essays, or the IRP.",
    format: "Exam-focused teaching with detailed feedback, advanced language work, and structured research support.",
    nextStep: "Discuss current level, texts, exam board needs, and the most realistic preparation route.",
  },
  adults: {
    bestFor: "Adult learners starting Russian, returning after a break, or learning for family, travel, culture, or work.",
    format: "Flexible private tuition shaped around pace, confidence, vocabulary goals, and conversation needs.",
    nextStep: "Book a first lesson to set a practical goal and decide the right lesson rhythm.",
  },
};

const routeNumbers: Record<HomeCourseRouteKey, string> = {
  children: "01",
  gcse: "02",
  alevel: "03",
  adults: "04",
};

type HomeCourse = (typeof homeContent)["en"]["courseChooser"]["courses"][number];

function getRouteDecisionCopy(locale: Locale, course: HomeCourse) {
  if (locale === "en") {
    return routeDecisionCopyEn[course.routeKey];
  }

  return {
    bestFor: course.summary,
    format: course.bullets.join(" / "),
    nextStep: homeContent[locale].courseChooser.placement.steps[1].description,
  };
}

function HeroCourseCards({ locale }: { locale: Locale }) {
  const pageContent = homeContent[locale];
  const content = pageContent.courseChooser;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {content.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground">
            {locale === "en" ? "Find the right Russian route" : content.title}
          </h2>
        </div>
        <ButtonLink className="w-full sm:w-auto" href="#courses" variant="secondary">
          {pageContent.hero.secondaryCtaLabel}
        </ButtonLink>
      </div>
      <nav aria-label={content.title} className="grid gap-3 sm:grid-cols-2">
        {content.courses.map((course) => (
          <Link
            className="group relative block h-44 overflow-hidden rounded-md border border-white/70 bg-brand-teal-deep shadow-[0_18px_34px_rgba(18,49,66,0.14)] transition hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(18,49,66,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red motion-reduce:hover:translate-y-0 lg:h-52"
            href={getLocalizedPath(locale, course.routeKey)}
            key={course.routeKey}
            style={{ height: "13rem" }}
          >
            <ApprovedImage
              className="scale-105 object-[50%_44%] transition duration-500 group-hover:scale-110"
              image={VOLNA_IMAGES.home.courseCards[course.routeKey]}
              sizes="(min-width: 1024px) 18vw, (min-width: 640px) 44vw, 100vw"
            />
            <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,86,104,0.18)_0%,rgba(7,86,104,0.55)_52%,rgba(7,86,104,0.92)_100%)]" />
            <span className="absolute inset-x-4 bottom-4 top-4 flex flex-col justify-between lg:inset-x-5 lg:bottom-5 lg:top-5">
              <span className="flex items-start justify-between gap-3">
                <span className="rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-brand-teal shadow-sm">
                  {routeNumbers[course.routeKey]}
                </span>
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-brand-red shadow-sm transition group-hover:bg-brand-red group-hover:text-white"
                >
                  &rarr;
                </span>
              </span>
              <span className="grid gap-1 text-white">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-white/82">
                  {courseIntroLabels[locale][course.routeKey]}
                </span>
                <span className="text-2xl font-semibold leading-tight [overflow-wrap:anywhere]">
                  {course.title}
                </span>
                <span className="hidden">
                  {courseSignalLabels[locale][course.routeKey].map((label) => (
                    <span
                      className="rounded-full bg-white/16 px-2.5 py-1 text-[0.68rem] font-semibold text-white backdrop-blur"
                      key={label}
                    >
                      {label}
                    </span>
                  ))}
                </span>
              </span>
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

function HomeHeroCollage({ locale }: { locale: Locale }) {
  const [eventImage, classroomImage] = VOLNA_IMAGES.home.heroCollage;

  return (
    <div className="grid gap-3 lg:mt-8">
      <div
        className="relative overflow-hidden rounded-md border-4 border-white bg-brand-teal-soft shadow-[var(--shadow-soft)]"
        style={{ height: "18rem" }}
      >
        <ApprovedImage
          className="object-[50%_42%]"
          image={eventImage}
          priority
          sizes="(min-width: 1024px) 44vw, 100vw"
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-md bg-brand-teal-deep p-4 text-white shadow-sm lg:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/72">
            {locale === "en" ? "From Pushkin School to Volna" : "Volna School"}
          </p>
          <p className="mt-2 text-base font-semibold leading-6 lg:text-lg lg:leading-7">
            {locale === "en"
              ? "Real school roots, now shaped into structured online Russian lessons."
              : "Volna School"}
          </p>
        </div>
        <div
          className="relative overflow-hidden rounded-md border-4 border-white bg-brand-teal-soft shadow-sm"
          style={{ minHeight: "12rem" }}
        >
          <ApprovedImage
            className="object-[50%_42%]"
            image={classroomImage}
            priority
            sizes="(min-width: 1024px) 24vw, 50vw"
          />
        </div>
      </div>
      <p className="rounded-md border-l-4 border-brand-red bg-white px-4 py-3 text-sm font-semibold text-brand-teal shadow-sm">
        {locale === "en"
          ? "Friendly, teacher-led classes with the practical structure families need"
          : "Volna School"}
      </p>
    </div>
  );
}

function RouteDecisionSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale];

  return (
    <SectionContainer className="bg-white pt-12" id="courses">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow={content.courseChooser.eyebrow}
            level={2}
            title={locale === "en" ? "Which course is right?" : content.courseChooser.title}
          >
            <p>
              {locale === "en"
                ? "A quick guide to choosing where to start. The free trial lesson then confirms level, confidence, and lesson format."
                : content.courseChooser.placement.title}
            </p>
          </SectionHeading>
          <ButtonLink
            className="mt-6 w-full sm:w-auto"
            href={getLocalizedPath(locale, "registration")}
          >
            {content.hero.primaryCtaLabel}
          </ButtonLink>
        </div>
        <div className="overflow-hidden rounded-md border border-brand-teal/18 bg-white shadow-sm">
          {content.courseChooser.courses.map((course) => {
            const decision = getRouteDecisionCopy(locale, course);

            return (
              <article
                className={cn(
                  "grid gap-4 border-t border-brand-teal/14 border-l-4 p-5 first:border-t-0 lg:grid-cols-[0.58fr_1fr] lg:p-6",
                  courseAccentClasses[course.routeKey],
                )}
                key={course.routeKey}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">
                    {routeNumbers[course.routeKey]} / {courseIntroLabels[locale][course.routeKey]}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-foreground">
                    {course.title}
                  </h3>
                  <Link
                    className="mt-4 inline-flex text-sm font-semibold text-brand-red underline decoration-brand-red/30 underline-offset-4 hover:text-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
                    href={getLocalizedPath(locale, course.routeKey)}
                  >
                    {locale === "en" ? "View course" : course.title}
                  </Link>
                </div>
                <dl className="grid gap-4 text-sm leading-6">
                  <div>
                    <dt className="font-semibold text-foreground">
                      {locale === "en" ? "Best for" : course.bullets[0]}
                    </dt>
                    <dd className="mt-1 text-muted-foreground">{decision.bestFor}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">
                      {locale === "en" ? "How lessons work" : course.bullets[1]}
                    </dt>
                    <dd className="mt-1 text-muted-foreground">{decision.format}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">
                      {locale === "en" ? "Best next step" : course.bullets[2]}
                    </dt>
                    <dd className="mt-1 text-muted-foreground">{decision.nextStep}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

export function HomePage({ locale }: HomePageProps) {
  const content = homeContent[locale];

  return (
    <>
      <StructuredData data={createHomeStructuredData(locale, content)} />
      <SectionContainer className="border-b border-brand-teal/14 bg-[linear-gradient(180deg,#fffdf8_0%,#f7fcfd_54%,#ffffff_100%)] py-14 lg:py-18">
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">
                {content.hero.eyebrow}
              </p>
              <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight text-brand-teal sm:text-5xl lg:text-[4.35rem]">
                {content.hero.title}
              </h1>
              <div className="mt-5 flex items-center gap-3">
                <span className="h-1 w-20 rounded-full bg-brand-red" />
                <span className="h-1 w-10 rounded-full bg-brand-gold" />
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                {content.hero.summary}
              </p>
            </div>
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
            <ul className="flex flex-wrap gap-2 text-sm font-semibold text-foreground">
              {content.hero.trustSignals.map((signal) => (
                <li
                  className="rounded-full border border-brand-teal/20 bg-white px-4 py-2 shadow-sm"
                  key={signal}
                >
                  {signal}
                </li>
              ))}
            </ul>
          </div>
          <HomeHeroCollage locale={locale} />
        </div>
        <div className="mt-14">
          <HeroCourseCards locale={locale} />
        </div>
      </SectionContainer>

      <RouteDecisionSection locale={locale} />

      <SectionContainer className="bg-surface-blue">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MediaFrame
            image={VOLNA_IMAGES.home.welcome}
            label={locale === "en" ? "A warm bilingual learning community" : "Теплое билингвальное учебное сообщество"}
            sizes="(min-width: 1024px) 42vw, 100vw"
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
            <div className="grid gap-3 border-y border-brand-teal/14 py-4 sm:grid-cols-3">
              {(locale === "en"
                ? ["Community roots", "Online structure", "Personal placement"]
                : content.hero.trustSignals.slice(0, 3)
              ).map((item) => (
                <p
                  className="text-sm font-semibold leading-6 text-brand-teal"
                  key={item}
                >
                  {item}
                </p>
              ))}
            </div>
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
                ? "Placement and lessons are led by a small team of Russian educators, so families know who is guiding the route and supporting progress."
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

      <SectionContainer className="bg-brand-red text-white">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/78">
              {locale === "en" ? "Free first lesson" : content.hero.primaryCtaLabel}
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {content.enrollment.title}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white/86">
              {content.enrollment.body}
            </p>
            <ButtonLink
              className="w-full bg-white text-brand-red shadow-[0_14px_28px_rgba(18,49,66,0.18)] hover:bg-white/92 sm:w-auto"
              href={getLocalizedPath(locale, "registration")}
            >
              {content.enrollment.ctaLabel}
            </ButtonLink>
          </div>
          <MediaFrame
            image={VOLNA_IMAGES.home.enrollment}
            label={locale === "en" ? "Start with a free trial lesson" : "Начните с бесплатного пробного урока"}
            sizes="(min-width: 1024px) 34vw, 100vw"
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
