import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

const welcomeStory: Record<
  Locale,
  {
    body?: string;
    imageCaption: string;
    imageLinkLabel: string;
    imageLocation: string;
    newTabLabel: string;
    milestones: Array<{ description: string; title: string; year: string }>;
  }
> = {
  en: {
    imageCaption: "Pupils, families and teachers from Pushkin’s School",
    imageLinkLabel: "Visit Pushkin’s School",
    imageLocation: "Bracknell, Berkshire",
    newTabLabel: "opens in a new tab",
    milestones: [
      {
        year: "2009",
        title: "Pushkin’s School opens",
        description:
          "Russian language and literature classes begin in High Wycombe.",
      },
      {
        year: "2020",
        title: "Volna School opens",
        description:
          "Designed exclusively for online learning, it becomes the UK’s first online-only Russian school.",
      },
      {
        year: "Today",
        title: "In person and online",
        description:
          "Pushkin’s School continues its in-person classes while Volna School teaches learners across the UK.",
      },
    ],
  },
  ru: {
    body:
      "В 2020 году этот школьный опыт стал основой Volna Online Russian School. Формат изменился, но главное осталось прежним: живое преподавание, понятная программа, регулярная обратная связь и личный контакт с учителем.",
    imageCaption: "Ученики, семьи и педагоги школы имени А. С. Пушкина",
    imageLinkLabel: "Сайт школы имени А. С. Пушкина",
    imageLocation: "Бракнелл, Беркшир",
    newTabLabel: "откроется в новой вкладке",
    milestones: [
      {
        year: "2009",
        title: "Основа дополнительной школы",
        description: "Начало занятий русским языком и литературой в Великобритании.",
      },
      {
        year: "2020",
        title: "Появление Volna Online",
        description: "Живые онлайн-уроки становятся главным форматом школы.",
      },
      {
        year: "Сегодня",
        title: "Единая онлайн-школа",
        description: "Последовательное обучение для учеников по всей Великобритании.",
      },
    ],
  },
};

type WelcomeMilestone = {
  description: string;
  title: string;
  year: string;
};

type WelcomePanelContent = {
  body: string;
  ctaLabel: string;
  eyebrow: string;
  milestones: WelcomeMilestone[];
  supportingBody?: string;
  title: string;
};

function WelcomeStoryPanel({
  locale,
  panel,
  story,
}: {
  locale: Locale;
  panel: WelcomePanelContent;
  story: (typeof welcomeStory)[Locale];
}) {
  const communityImage = VOLNA_IMAGES.about.hero;

  return (
    <article className="overflow-hidden rounded-2xl border border-brand-teal/14 bg-[#f7f9f6] shadow-[0_24px_70px_rgba(18,49,66,0.10)]">
      <div className="grid min-[1120px]:grid-cols-[1.04fr_0.96fr] min-[1120px]:items-stretch">
        <figure className="flex min-w-0 flex-col border-b border-brand-teal/12 bg-white min-[1120px]:border-b-0 min-[1120px]:border-r">
          <div className="relative aspect-[4/3] overflow-hidden bg-brand-teal-soft sm:aspect-[16/9] min-[1120px]:aspect-auto min-[1120px]:flex-1">
            <ApprovedImage
              className="object-[50%_49%]"
              image={communityImage}
              sizes="(min-width: 1280px) 42rem, (min-width: 1120px) 52vw, 100vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-brand-teal-deep/18 via-transparent to-transparent"
            />
          </div>
          <figcaption className="flex flex-1 items-center gap-3.5 bg-[#f7f9f6] px-5 py-4 sm:px-7 min-[1120px]:flex-none">
            <span
              aria-hidden="true"
              className="inline-flex size-6 shrink-0 items-center justify-center text-brand-blue"
            >
              <svg
                fill="none"
                height="19"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
                width="19"
              >
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
              <span className="min-w-0">
                <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand-blue">
                  {story.imageLocation}
                </span>
                <span className="mt-0.5 block text-sm font-semibold leading-5 text-brand-teal-dark">
                  {story.imageCaption}
                </span>
              </span>
              <a
                className="group/image-link inline-flex max-w-full items-center gap-1.5 self-start whitespace-normal rounded-full border border-brand-blue/20 bg-brand-blue/[0.03] px-3.5 py-2 text-[0.8rem] font-bold text-brand-blue transition-[background-color,border-color] duration-200 ease-out hover:border-transparent hover:bg-transparent focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-blue sm:self-auto"
                href="https://www.pushkinsrussianschool.co.uk/"
                data-school-story-link=""
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 after:ease-out after:content-[''] group-hover/image-link:after:scale-x-100 motion-reduce:after:transition-none">
                  {story.imageLinkLabel}
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 ease-out group-hover/image-link:-translate-y-0.5 group-hover/image-link:translate-x-0.5 motion-reduce:transform-none"
                >
                  ↗
                </span>
                <span className="sr-only"> ({story.newTabLabel})</span>
              </a>
            </span>
          </figcaption>
        </figure>

        <div data-welcome-copy="" className="flex min-w-0 flex-col justify-center px-6 py-8 sm:px-9 sm:py-10 lg:px-9 lg:py-9 xl:px-10 xl:py-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
            {panel.eyebrow}
          </p>
          <h2 className="mt-3.5 max-w-2xl text-3xl font-semibold leading-[1.08] text-brand-blue [overflow-wrap:anywhere] sm:text-[clamp(2.2rem,2.4vw,2.75rem)]">
            {panel.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-foreground">
            {panel.body}
          </p>
          {panel.supportingBody ? (
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              {panel.supportingBody}
            </p>
          ) : null}
          <ButtonLink
            className="mt-6 w-full self-start px-6 sm:w-auto sm:min-w-[10.5rem]"
            href={getLocalizedPath(locale, "about")}
            variant="secondary"
          >
            {panel.ctaLabel}
          </ButtonLink>
        </div>
      </div>

      <ol className="grid border-t border-brand-teal/14 bg-white md:grid-cols-3">
        {panel.milestones.map((milestone) => (
          <li
            className="relative grid gap-2 min-[400px]:grid-cols-[5rem_minmax(0,1fr)] min-[400px]:gap-4 border-t border-brand-teal/12 px-6 py-5 first:border-t-0 md:block md:border-l md:border-t-0 md:px-7 md:py-6 md:first:border-l-0 xl:px-9"
            key={milestone.year}
          >
            <span
              aria-hidden="true"
              className="absolute left-6 top-0 h-1 w-10 rounded-b-full bg-brand-blue/85 md:left-7 xl:left-9"
            />
            <time className="text-sm font-bold uppercase tracking-[0.12em] text-brand-blue">
              {milestone.year}
            </time>
            <div className="md:mt-3">
              <h3 className="font-semibold text-brand-teal-dark">
                {milestone.title}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-foreground/80">
                {milestone.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}

export function HomeWelcomeSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale].welcome;
  const story = welcomeStory[locale];
  const currentPanel: WelcomePanelContent = {
    body: content.body,
    ctaLabel: content.ctaLabel,
    eyebrow: content.eyebrow,
    milestones: story.milestones,
    supportingBody: story.body,
    title: content.title,
  };

  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div
        className="mx-auto w-full max-w-7xl min-w-0 scroll-mt-36"
        data-language-section=""
        id="welcome"
      >
        <WelcomeStoryPanel locale={locale} panel={currentPanel} story={story} />
      </div>
    </section>
  );
}
