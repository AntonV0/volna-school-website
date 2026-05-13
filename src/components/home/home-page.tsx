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

const routeNumbers: Record<HomeCourseRouteKey, string> = {
  children: "01",
  gcse: "02",
  alevel: "03",
  adults: "04",
};

const heroFacts: Record<Locale, Array<{ label: string; value: string }>> = {
  en: [
    { label: "School roots", value: "Since 2009" },
    { label: "Online model", value: "Since 2020" },
    { label: "Course paths", value: "Children, exams, adults" },
  ],
  ru: [
    { label: "ÐžÐ¿Ñ‹Ñ‚ ÑˆÐºÐ¾Ð»Ñ‹", value: "Ñ 2009" },
    { label: "ÐžÐ½Ð»Ð°Ð¹Ð½", value: "Ñ 2020" },
    { label: "ÐšÑƒÑ€ÑÑ‹", value: "Ð´ÐµÑ‚Ð¸, ÑÐºÐ·Ð°Ð¼ÐµÐ½Ñ‹, Ð²Ð·Ñ€Ð¾ÑÐ»Ñ‹Ðµ" },
  ],
};

function HomeRouteStrip({ locale }: { locale: Locale }) {
  const content = homeContent[locale].courseChooser;

  return (
    <div
      className="scroll-mt-32 overflow-hidden rounded-lg border border-brand-teal/18 bg-white shadow-[var(--shadow-soft)]"
      id="courses"
    >
      <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
        <div className="flex flex-col border-b border-brand-teal/15 bg-[#fffdf8] p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
              {content.eyebrow}
            </p>
            <h2 className="mt-3 max-w-lg text-2xl font-semibold leading-tight text-brand-teal sm:text-3xl">
              {locale === "en" ? "Find the right Russian route" : content.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
              {locale === "en"
                ? "A practical starting point for families and adult learners: choose the route, then confirm level and format in the free first lesson."
                : content.placement.title}
            </p>
            <div className="mt-6 grid gap-3 border-y border-brand-teal/14 py-5 sm:grid-cols-3 lg:grid-cols-1">
              {content.placement.steps.map((step, index) => (
                <div className="grid grid-cols-[2rem_1fr] gap-3" key={step.title}>
                  <span className="text-sm font-bold text-brand-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-semibold leading-5 text-foreground">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 space-y-5 lg:mt-auto">
            <p className="border-l-4 border-brand-gold pl-4 text-sm font-semibold leading-6 text-brand-teal">
              {locale === "en"
                ? "The first lesson is for placement, confidence, and a calm next step."
                : content.placement.steps[1].description}
            </p>
            <Link
              className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-brand-teal/30 bg-white px-5 py-2.5 text-center text-sm font-semibold text-brand-teal shadow-sm transition hover:border-brand-teal hover:bg-brand-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal sm:w-auto"
              href="#placement"
            >
              {locale === "en" ? "How placement works" : content.placement.title}
            </Link>
          </div>
        </div>
        <nav aria-label={content.title} className="divide-y divide-brand-teal/12">
          {content.courses.map((course) => (
            <Link
              className={cn(
                "group grid gap-4 border-l-4 bg-white p-5 transition hover:bg-brand-teal-soft/55 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-red sm:grid-cols-[4.25rem_1fr_auto] sm:items-start sm:p-6",
                courseAccentClasses[course.routeKey],
              )}
              href={getLocalizedPath(locale, course.routeKey)}
              key={course.routeKey}
            >
              <span className="text-3xl font-semibold leading-none text-brand-teal/22 sm:pt-1">
                {routeNumbers[course.routeKey]}
              </span>
              <span>
                <span>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-red">
                    {courseIntroLabels[locale][course.routeKey]}
                  </span>
                  <span className="mt-2 block text-xl font-semibold leading-tight text-foreground">
                    {course.title}
                  </span>
                </span>
                <span className="mt-3 block text-sm leading-6 text-muted-foreground">
                  {course.summary}
                </span>
                <span className="mt-4 flex flex-wrap gap-2">
                  {courseSignalLabels[locale][course.routeKey].map((label) => (
                    <span
                      className="rounded-full bg-brand-teal-soft px-2.5 py-1 text-[0.68rem] font-semibold text-brand-teal"
                      key={label}
                    >
                      {label}
                    </span>
                  ))}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="grid size-9 place-items-center rounded-full border border-brand-teal/20 bg-white text-brand-red shadow-sm transition group-hover:bg-brand-red group-hover:text-white sm:justify-self-end"
              >
                &rarr;
              </span>
            </Link>
          ))}
        </nav>
      </div>
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

function PlacementSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const placement = content.courseChooser.placement;

  return (
    <SectionContainer className="bg-white" id="placement">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow={locale === "en" ? "Free first lesson" : content.hero.primaryCtaLabel}
            level={2}
            title={locale === "en" ? "A calm route into the right class" : placement.title}
          >
            <p>
              {locale === "en"
                ? "The first conversation is practical: understand the learner, check the level, and choose a route that feels realistic."
                : placement.title}
            </p>
          </SectionHeading>
          <ButtonLink
            className="mt-6 w-full sm:w-auto"
            href={getLocalizedPath(locale, "registration")}
          >
            {content.hero.primaryCtaLabel}
          </ButtonLink>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {placement.steps.map((step, index) => (
            <article
              className="rounded-lg border border-brand-teal/15 bg-surface-blue p-5 shadow-sm"
              key={step.title}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
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
      <SectionContainer className="border-b border-brand-teal/14 bg-[linear-gradient(180deg,#fffdf8_0%,#f7fcfd_56%,#ffffff_100%)] py-12 lg:py-16">
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
            <dl className="grid max-w-2xl grid-cols-3 gap-x-3 gap-y-3 border-y border-brand-teal/16 py-3 sm:gap-x-4 sm:py-4">
              {heroFacts[locale].map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-brand-red sm:text-xs sm:tracking-[0.14em]">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-xs font-semibold leading-5 text-foreground sm:text-sm">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <HomeHeroCollage locale={locale} />
        </div>
        <div className="mt-12">
          <HomeRouteStrip locale={locale} />
        </div>
      </SectionContainer>

      <PlacementSection locale={locale} />

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
            <Link
              className="inline-flex min-h-11 w-full max-w-full items-center justify-center whitespace-normal rounded-md bg-white px-5 py-2.5 text-center text-sm font-semibold leading-snug text-brand-red shadow-[0_14px_28px_rgba(18,49,66,0.18)] transition duration-200 hover:bg-white/92 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
              href={getLocalizedPath(locale, "registration")}
            >
              {content.enrollment.ctaLabel}
            </Link>
          </div>
          <MediaFrame
            image={VOLNA_IMAGES.home.enrollment}
            label={locale === "en" ? "Start with a free trial lesson" : "Начните с бесплатного пробного урока"}
            sizes="(min-width: 1024px) 34vw, 100vw"
            variant="online"
          />
        </div>
      </SectionContainer>

      <SectionContainer className="bg-[#fffdf8]">
        <figure className="mx-auto grid max-w-5xl gap-6 border-y border-brand-teal/15 py-8 text-left lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
            {content.testimonial.eyebrow}
          </p>
          <div>
            <blockquote className="text-2xl font-medium leading-relaxed text-foreground">
              &quot;{content.testimonial.quote}&quot;
            </blockquote>
            <figcaption className="mt-4 border-l-4 border-brand-gold pl-4 text-sm font-semibold text-brand-teal">
              {content.testimonial.attribution}
            </figcaption>
          </div>
        </figure>
      </SectionContainer>
    </>
  );
}
