import Link from "next/link";

import { ApprovedImage } from "@/components/ui/approved-image";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutContent } from "@/content/about-content";
import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/classnames";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import type { PageRouteKey } from "@/lib/i18n/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type AboutPageProps = {
  locale: Locale;
};

type CourseRouteKey = Extract<
  PageRouteKey,
  "children" | "gcse" | "alevel" | "adults"
>;

const courseTileImage: Record<CourseRouteKey, (typeof VOLNA_IMAGES.home.courseCards)[CourseRouteKey]> =
  {
    children: VOLNA_IMAGES.home.courseCards.children,
    gcse: VOLNA_IMAGES.home.courseCards.gcse,
    alevel: VOLNA_IMAGES.home.courseCards.alevel,
    adults: VOLNA_IMAGES.home.courseCards.adults,
  };

const englishCourseRouteSummaries: Record<CourseRouteKey, string> = {
  children: "Bilingual, beginner, and private Russian lessons for children.",
  gcse: "Exam practice, mock support, and a clear GCSE route.",
  alevel: "Advanced essays, speaking, cultural study, and IRP support.",
  adults: "Flexible private Russian lessons shaped around real goals.",
};

function AboutProofBand({ locale }: { locale: Locale }) {
  const content = aboutContent[locale].proof;

  return (
    <SectionContainer className="bg-[#fffdf8]" id="proof">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-teal sm:text-4xl">
            {content.title}
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-1 w-16 bg-brand-teal" />
            <span className="h-1 w-8 bg-brand-gold" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {content.items.map((item) => (
            <article
              className="rounded-lg border border-brand-teal/15 bg-white p-5 shadow-sm"
              key={`${item.value}-${item.label}`}
            >
              <p className="text-3xl font-semibold leading-none text-brand-teal">
                {item.value}
              </p>
              <h3 className="mt-4 text-base font-semibold leading-6 text-foreground">
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export function AboutPage({ locale }: AboutPageProps) {
  const content = aboutContent[locale];
  const site = siteContent[locale];
  const anchors = content.anchors;

  return (
    <>
      <section className="bg-white">
        <div className="grid lg:min-h-[37rem] lg:grid-cols-2">
          <div
            className="relative order-2 w-full overflow-hidden bg-brand-teal-soft lg:order-1"
            style={{ height: "clamp(18rem, 47vw, 37rem)" }}
          >
            <ApprovedImage
              className="object-[50%_44%]"
              image={VOLNA_IMAGES.about.hero}
              priority
              quality={90}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-deep/10 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 order-1 -mt-6 flex items-center rounded-t-lg bg-white px-5 pb-10 pt-8 shadow-[0_-18px_40px_rgba(18,49,66,0.08)] sm:px-8 sm:pb-14 sm:pt-10 lg:order-2 lg:mt-0 lg:rounded-none lg:px-16 lg:py-14 lg:shadow-none">
            <div className="mx-auto max-w-xl space-y-5 lg:mx-0 lg:space-y-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
                {content.hero.eyebrow}
              </p>
              <h1 className="text-3xl font-semibold leading-[1.08] text-brand-teal sm:text-5xl lg:text-6xl">
                {content.hero.title}
              </h1>
              <div className="h-1 w-20 bg-brand-teal" />
              <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {content.hero.summary}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  className="inline-flex min-h-11 items-center justify-center rounded bg-brand-red px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                  href={getLocalizedPath(locale, "registration")}
                >
                  {site.navigation.ctaLabel}
                </Link>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded border border-brand-teal/35 px-5 text-sm font-semibold text-brand-teal transition hover:border-brand-teal hover:bg-brand-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                  href="#classes"
                >
                  {locale === "en" ? "View course routes" : content.classes.title}
                </a>
              </div>
              <dl className="grid gap-3 border-y border-brand-teal/15 py-4 min-[520px]:grid-cols-3 sm:gap-4 sm:py-5">
                {content.hero.facts.map((fact) => (
                  <div
                    className="min-w-0 border-t border-brand-teal/15 pt-3 first:border-t-0 first:pt-0 min-[520px]:border-l min-[520px]:border-t-0 min-[520px]:pl-3 min-[520px]:pt-0 min-[520px]:first:border-l-0 min-[520px]:first:pl-0"
                    key={fact.label}
                  >
                    <dt className="text-[0.64rem] font-semibold uppercase leading-4 tracking-[0.14em] text-brand-red sm:text-xs">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold leading-5 text-foreground sm:text-base">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <nav
        aria-label="About sections"
        className="sticky top-[73px] z-20 border-y border-white/30 bg-brand-teal text-white lg:top-20"
      >
        <div className="mx-auto max-w-6xl overflow-x-auto px-5 [scrollbar-width:none] sm:px-8 lg:px-12 [&::-webkit-scrollbar]:hidden">
          <ul className="flex min-w-max divide-x divide-white/30 lg:min-w-0">
            {anchors.map((anchor) => (
              <li className="shrink-0 lg:flex-1" key={anchor.id}>
                <a
                  className="flex min-h-12 items-center justify-center px-5 text-xs font-semibold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white sm:text-sm lg:px-3"
                  href={`#${anchor.id}`}
                >
                  {anchor.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <AboutProofBand locale={locale} />

      <SectionContainer className="bg-surface-blue py-14 sm:py-16" id="welcome">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
              {content.welcome.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-teal sm:text-4xl">
              {content.welcome.title}
            </h2>
            <div className="mt-4 h-1 w-16 bg-brand-teal" />
          </div>

          <div className="mt-9 grid gap-8 lg:grid-cols-[19rem_1fr] lg:items-start">
            <aside className="w-full rounded-lg border border-white/80 bg-white/90 p-5 shadow-[var(--shadow-soft)] sm:p-6 lg:text-center">
              <div className="flex items-center gap-4 lg:block">
                <div
                  className="relative shrink-0 overflow-hidden rounded-full border-4 border-white bg-brand-teal-soft shadow-[var(--shadow-soft)] lg:mx-auto"
                  style={{ height: "7rem", width: "7rem" }}
                >
                  <ApprovedImage
                    image={VOLNA_IMAGES.staff.elena}
                    sizes="8rem"
                  />
                </div>
                <div>
                  <p className="font-semibold text-brand-teal lg:mt-5">
                    {content.welcome.signature}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {content.welcome.profile.title}
                  </p>
                </div>
              </div>
              <ul className="mt-5 grid gap-3 text-left text-sm leading-6 text-muted-foreground sm:grid-cols-3 lg:grid-cols-1">
                {content.welcome.profile.items.map((item) => (
                  <li className="border-l-2 border-brand-gold pl-3" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="rounded-lg border border-brand-teal/15 bg-white p-5 text-base leading-8 text-muted-foreground shadow-sm sm:p-6 sm:text-lg">
              {content.welcome.body.map((paragraph, index) => (
                <p
                  className={cn(
                    "border-l-2 border-brand-teal/25 py-1 pl-4",
                    index === content.welcome.body.length - 1 &&
                      "font-medium text-foreground",
                    index > 0 && "mt-4",
                  )}
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-6 rounded-md border border-brand-gold/35 bg-[#fffdf8] p-4 text-sm font-semibold leading-6 text-brand-teal">
                {locale === "en"
                  ? "The first step is always practical: understand the learner, recommend a route, and keep expectations clear."
                  : content.welcome.profile.items[0]}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white py-14 sm:py-16" id="mission">
        <div className="grid gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="space-y-8">
            <SectionHeading
              eyebrow={content.mission.eyebrow}
              level={2}
              title={content.mission.title}
            >
              <p>{content.mission.body}</p>
            </SectionHeading>
            <div className="grid gap-4">
              {content.mission.pillars.map((pillar, index) => (
                <article
                  className="grid gap-3 rounded-lg border border-brand-teal/15 bg-[#fffdf8] p-5 shadow-sm sm:grid-cols-[3.5rem_1fr]"
                  key={pillar.title}
                >
                  <p className="flex size-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand-red shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border-soft bg-brand-teal-soft shadow-[var(--shadow-soft)] lg:aspect-[4/3]">
            <ApprovedImage
              className="object-[50%_45%]"
              image={VOLNA_IMAGES.about.mission}
              sizes="(min-width: 1024px) 44vw, 100vw"
            />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-blue" id="values">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-36">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
              {content.values.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-teal sm:text-4xl">
              {content.values.title}
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-1 w-16 bg-brand-teal" />
              <span className="h-1 w-8 bg-brand-gold" />
            </div>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              {locale === "en"
                ? "These are the everyday standards behind placement, lessons, feedback, and communication with families."
                : content.mission.body}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.values.items.map((value, index) => (
              <article
                className="rounded-lg border border-brand-teal/15 bg-white p-5 shadow-sm"
                key={value.title}
              >
                <div className="flex gap-4">
                  <span
                    className="grid shrink-0 place-items-center rounded-full bg-white text-xs font-bold text-brand-red shadow-sm"
                    style={{ height: "2.75rem", width: "2.75rem" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-teal">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white" id="history">
        <div className="space-y-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
              {content.history.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-teal sm:text-4xl">
              {content.history.title}
            </h2>
            <div className="mt-4 h-1 w-16 bg-brand-teal" />
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {content.history.body}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border-soft bg-brand-teal-soft shadow-[var(--shadow-soft)]">
                <ApprovedImage
                  className="object-[50%_38%]"
                  image={VOLNA_IMAGES.about.historyGroup}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </div>
              <div
                className="grid gap-5"
                style={{
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(min(100%, 13rem), 1fr))",
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-brand-teal-soft">
                  <ApprovedImage
                    image={VOLNA_IMAGES.about.historyVideo}
                    sizes="(min-width: 640px) 24vw, 100vw"
                  />
                </div>
                <div className="flex min-h-44 items-center rounded-lg border border-brand-teal/15 bg-surface-blue p-5">
                  <ul className="grid gap-4 text-sm leading-6 text-muted-foreground">
                    {content.history.notes.map((note) => (
                      <li
                        className="border-l-2 border-brand-gold bg-white/70 py-2 pl-3"
                        key={note.title}
                      >
                        <span className="block font-semibold text-foreground">
                          {note.title}:{" "}
                        </span>
                        {note.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-brand-teal/15 bg-[#fffdf8] p-6 shadow-sm sm:p-8">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
                {locale === "en" ? "School timeline" : content.history.eyebrow}
              </p>
              <div className="relative space-y-7 before:absolute before:bottom-2 before:left-[2.15rem] before:top-2 before:w-px before:bg-brand-teal/20 sm:before:left-[4.65rem]">
                {content.history.milestones.map((milestone) => (
                  <article
                    className="relative grid gap-4 sm:grid-cols-[5rem_1fr]"
                    key={`${milestone.year}-${milestone.title}`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute rounded-full border-4 border-[#fffdf8] bg-brand-red"
                      style={{ height: "0.85rem", left: "2.15rem", top: "0.45rem", width: "0.85rem" }}
                    />
                    <p className="relative z-10 w-16 bg-[#fffdf8] text-xl font-semibold leading-7 text-brand-teal sm:w-20">
                      {milestone.year}
                    </p>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-blue" id="curriculum">
        <div className="space-y-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
              {content.curriculum.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-teal sm:text-4xl">
              {content.curriculum.title}
            </h2>
            <div className="mt-4 h-1 w-16 bg-brand-teal" />
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {content.curriculum.intro}
            </p>
            <div className="mt-6 rounded-lg border border-brand-gold/35 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-brand-teal">
                {locale === "en"
                  ? "A connected pathway, not a course catalogue"
                  : content.curriculum.eyebrow}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {locale === "en"
                  ? "The same placement logic links the whole school: start with the learner's level, choose the route, then keep progress visible through lessons, homework, and feedback."
                  : content.curriculum.intro}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {content.curriculum.tracks.map((track, index) => (
              <article
                className="grid overflow-hidden rounded-lg border border-brand-teal/15 bg-white shadow-sm lg:grid-cols-[0.88fr_1.12fr]"
                key={track.title}
              >
                <div
                  className={cn(
                    "relative min-h-64 overflow-hidden bg-brand-teal-soft lg:min-h-80",
                    index % 2 === 1 && "lg:order-2",
                  )}
                >
                  <ApprovedImage
                    className="object-[50%_44%]"
                    image={
                      VOLNA_IMAGES.about.curriculum[
                        index % VOLNA_IMAGES.about.curriculum.length
                      ]
                    }
                    sizes="(min-width: 1024px) 44vw, 100vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {content.curriculum.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-brand-teal">
                    {track.title}
                  </h3>
                  <p className="text-base leading-7 text-muted-foreground">
                    {track.description}
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-foreground">
                    {track.points.map((point) => (
                      <li className="border-l-2 border-brand-gold pl-3" key={point}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white" id="classes">
        <div className="space-y-9">
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
                {content.classes.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-teal sm:text-4xl">
                {content.classes.title}
              </h2>
              <div className="mt-4 h-1 w-16 bg-brand-teal" />
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              {locale === "en"
                ? "Families can start with a course page or go straight to a free trial lesson. The first conversation confirms level, confidence, and the right lesson format."
                : content.hero.summary}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {content.classes.routes.map((routeKey, index) => (
              <Link
                className="group relative min-h-64 overflow-hidden rounded-lg border-2 border-brand-teal bg-brand-teal text-left shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                href={getLocalizedPath(locale, routeKey)}
                key={routeKey}
              >
                <ApprovedImage
                  className="transition duration-500 group-hover:scale-105"
                  image={courseTileImage[routeKey]}
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-deep/80 via-brand-teal/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-red shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="absolute inset-x-0 bottom-0 bg-brand-teal/88 px-5 py-5 text-white backdrop-blur-sm">
                  <span className="block text-2xl font-semibold leading-tight">
                    {site.routeLabels[routeKey]}
                  </span>
                  <span className="mt-2 block text-sm font-medium leading-6 text-white/86">
                    {locale === "en"
                      ? englishCourseRouteSummaries[routeKey]
                      : site.routeLabels[routeKey]}
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <div className="grid gap-4 rounded-lg border border-brand-teal/15 bg-[#fffdf8] p-5 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-foreground">
                {locale === "en" ? "Not sure which route fits?" : content.classes.title}
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                {locale === "en"
                  ? "Use the free first lesson to check level, confidence, schedule, and whether group or private support is the right next step."
                  : content.hero.summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                className="inline-flex min-h-11 w-full items-center justify-center rounded bg-brand-red px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red sm:w-auto"
                href={getLocalizedPath(locale, "registration")}
              >
                {site.navigation.ctaLabel}
              </Link>
              <Link
                className="inline-flex min-h-11 w-full items-center justify-center rounded border border-brand-teal/35 bg-white px-5 text-sm font-semibold text-brand-teal transition hover:border-brand-teal hover:bg-brand-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal sm:w-auto"
                href={getLocalizedPath(locale, "children")}
              >
                {site.routeLabels.children}
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
