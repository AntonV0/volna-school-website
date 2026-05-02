import Link from "next/link";

import { MediaFrame } from "@/components/ui/media-frame";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutContent } from "@/content/about-content";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";

type AboutPageProps = {
  locale: Locale;
};

export function AboutPage({ locale }: AboutPageProps) {
  const content = aboutContent[locale];
  const site = siteContent[locale];

  return (
    <>
      <SectionContainer className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <MediaFrame
            label={locale === "en" ? "From school roots to online learning" : "От школьных корней к онлайн-обучению"}
            variant="community"
          />
          <div className="space-y-8">
            <SectionHeading eyebrow={content.hero.eyebrow} title={content.hero.title}>
              <p>{content.hero.summary}</p>
            </SectionHeading>
            <dl className="grid gap-3 sm:grid-cols-3">
              {content.hero.facts.map((fact) => (
                <div
                  className="rounded-lg border border-brand-teal/15 bg-brand-teal-soft p-4"
                  key={fact.label}
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </SectionContainer>

      <nav
        aria-label="About sections"
        className="sticky top-[73px] z-20 border-y border-border-soft bg-brand-teal px-5 py-3 text-white sm:px-8 lg:top-20 lg:px-12"
      >
        <div className="relative mx-auto max-w-6xl">
          <ul className="flex gap-1.5 overflow-x-auto pr-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-2 sm:pr-10">
            {content.anchors.map((anchor) => (
              <li className="shrink-0" key={anchor.id}>
                <a
                  className="inline-flex min-h-10 items-center rounded-full px-3 text-xs font-semibold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-4 sm:text-sm"
                  href={`#${anchor.id}`}
                >
                  {anchor.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-brand-teal to-transparent sm:w-10" />
        </div>
      </nav>

      <SectionContainer className="bg-surface-blue" id="proof">
        <div className="space-y-8">
          <SectionHeading
            eyebrow={content.proof.eyebrow}
            level={2}
            title={content.proof.title}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.proof.items.map((item) => (
              <article
                className="rounded-lg border border-brand-teal/15 bg-white p-5 shadow-sm"
                key={`${item.value}-${item.label}`}
              >
                <p className="text-3xl font-semibold text-brand-teal">
                  {item.value}
                </p>
                <h3 className="mt-3 font-semibold text-foreground">
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

      <SectionContainer className="bg-surface-blue" id="welcome">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.45fr)] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={content.welcome.eyebrow}
              level={2}
              title={content.welcome.title}
            />
            <div className="space-y-4 text-lg leading-8 text-muted-foreground">
              {content.welcome.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="text-sm font-semibold text-brand-teal">
              {content.welcome.signature}
            </p>
          </div>

          <aside className="rounded-lg border border-brand-gold/35 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">
              {content.welcome.profile.title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              {content.welcome.profile.items.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span aria-hidden="true" className="font-semibold text-brand-red">
                    +
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white" id="mission">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MediaFrame
            label={locale === "en" ? "Structured learning with personal support" : "Структурное обучение с личной поддержкой"}
            variant="online"
          />
          <SectionHeading
            eyebrow={content.mission.eyebrow}
            level={2}
            title={content.mission.title}
          >
            <p>{content.mission.body}</p>
          </SectionHeading>
          <div className="grid gap-3">
            {content.mission.pillars.map((pillar) => (
              <article
                className="rounded-lg border border-brand-teal/15 bg-background p-4"
                key={pillar.title}
              >
                <h3 className="font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-blue" id="values">
        <div className="space-y-8">
          <SectionHeading
            eyebrow={content.values.eyebrow}
            level={2}
            title={content.values.title}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.values.items.map((value, index) => (
              <article
                className="rounded-lg border border-border-soft bg-white p-5 text-center shadow-sm"
                key={value.title}
              >
                <div className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-brand-teal-soft text-sm font-bold text-brand-teal">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white" id="history">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={content.history.eyebrow}
              level={2}
              title={content.history.title}
            >
              <p>{content.history.body}</p>
            </SectionHeading>
            <div className="grid gap-4">
              {content.history.milestones.map((milestone) => (
                <article
                  className="grid gap-4 rounded-lg border border-brand-teal/15 bg-background p-5 sm:grid-cols-[6rem_1fr]"
                  key={`${milestone.year}-${milestone.title}`}
                >
                  <p className="text-xl font-semibold text-brand-teal">
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
            <ul className="grid gap-3">
              {content.history.notes.map((note) => (
                <li
                  className="rounded-md border border-border-soft bg-background p-4 text-sm leading-6 text-muted-foreground"
                  key={note.title}
                >
                  <span className="font-semibold text-foreground">
                    {note.title}:{" "}
                  </span>
                  {note.description}
                </li>
              ))}
            </ul>
          </div>
          <MediaFrame
            label={locale === "en" ? "UK Russian teaching experience since 2017" : "Опыт преподавания русского в Великобритании с 2017 года"}
            variant="community"
          />
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface-blue" id="curriculum">
        <div className="space-y-8">
          <SectionHeading
            eyebrow={content.curriculum.eyebrow}
            level={2}
            title={content.curriculum.title}
          >
            <p>{content.curriculum.intro}</p>
          </SectionHeading>
          <div className="grid gap-4 lg:grid-cols-3">
            {content.curriculum.tracks.map((track) => (
              <article
                className="rounded-lg border border-border-soft bg-white p-6 shadow-sm"
                key={track.title}
              >
                <h3 className="text-lg font-semibold text-brand-teal">
                  {track.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {track.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-foreground">
                  {track.points.map((point) => (
                    <li className="flex gap-2" key={point}>
                      <span aria-hidden="true" className="text-brand-red">
                        +
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white" id="classes">
        <div className="space-y-8 text-center">
          <SectionHeading
            eyebrow={content.classes.eyebrow}
            level={2}
            title={content.classes.title}
          />
          <div className="grid gap-4 md:grid-cols-4">
            {content.classes.routes.map((routeKey) => (
              <Link
                className="rounded-lg border border-border-soft bg-brand-teal p-5 text-left text-white shadow-sm transition hover:-translate-y-1 hover:bg-brand-teal-dark hover:shadow-[var(--shadow-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                href={getLocalizedPath(locale, routeKey)}
                key={routeKey}
              >
                <div className="mb-5 aspect-[16/9] rounded-md bg-white/20 md:aspect-[4/3]" />
                <span className="text-lg font-semibold">
                  {site.routeLabels[routeKey]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
