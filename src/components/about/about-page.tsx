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
            label={locale === "en" ? "Approved school archive image pending" : "Архивное фото ожидает утверждения"}
            variant="community"
          />
          <SectionHeading eyebrow={content.hero.eyebrow} title={content.hero.title}>
            <p>{content.hero.summary}</p>
          </SectionHeading>
        </div>
      </SectionContainer>

      <nav
        aria-label="About sections"
        className="sticky top-[73px] z-20 border-y border-border-soft bg-brand-teal px-5 py-3 text-white sm:px-8 lg:top-20 lg:px-12"
      >
        <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto">
          {content.anchors.map((anchor) => (
            <li className="shrink-0" key={anchor.id}>
              <a
                className="inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href={`#${anchor.id}`}
              >
                {anchor.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <SectionContainer className="bg-surface-blue" id="welcome">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow={content.welcome.eyebrow}
            level={2}
            title={content.welcome.title}
          >
            <p>{content.welcome.body}</p>
          </SectionHeading>
          <p className="mt-6 text-sm font-semibold text-brand-teal">
            {content.welcome.signature}
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white" id="mission">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MediaFrame
            label={locale === "en" ? "Mission image pending" : "Фото миссии ожидает утверждения"}
            variant="online"
          />
          <SectionHeading
            eyebrow={content.mission.eyebrow}
            level={2}
            title={content.mission.title}
          >
            <p>{content.mission.body}</p>
          </SectionHeading>
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
            <ul className="grid gap-3">
              {content.history.notes.map((note) => (
                <li
                  className="rounded-md border border-border-soft bg-background p-4 text-sm leading-6 text-muted-foreground"
                  key={note}
                >
                  {note}
                </li>
              ))}
            </ul>
          </div>
          <MediaFrame
            label={locale === "en" ? "History collage pending" : "Исторический коллаж ожидает утверждения"}
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
          />
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
                <div className="mb-5 aspect-[4/3] rounded-md bg-white/20" />
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
