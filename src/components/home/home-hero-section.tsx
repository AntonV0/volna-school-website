import { HomeCourseChooserCards } from "@/components/home/home-course-chooser";
import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type HeroFactIcon = "history" | "online" | "route";

const heroFacts: Record<
  Locale,
  Array<{ icon: HeroFactIcon; label: string; value: string }>
> = {
  en: [
    {
      icon: "history",
      label: "15+ years of experience",
      value: "Russian tuition since 2009",
    },
    {
      icon: "online",
      label: "Online education",
      value: "UK's first online-exclusive Russian school",
    },
    {
      icon: "route",
      label: "Flexible study",
      value: "Group classes or private tuition",
    },
  ],
  ru: [
    { icon: "history", label: "Опыт школы", value: "с 2009" },
    { icon: "online", label: "Онлайн", value: "с 2020" },
    { icon: "route", label: "Курсы", value: "дети, экзамены, взрослые" },
  ],
};

function HeroTrustIcon({ icon }: { icon: HeroFactIcon }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 16 16"
    >
      {icon === "history" ? (
        <>
          <path d="M8 4.5v4l2.5 1.5" />
          <path d="M3.8 6.2A5 5 0 1 1 3.2 10" />
          <path d="M3.2 3.8v2.4h2.4" />
        </>
      ) : null}
      {icon === "online" ? (
        <>
          <rect height="7" rx="1.25" width="10" x="3" y="3.5" />
          <path d="M6.5 12.5h3" />
          <path d="M8 10.5v2" />
        </>
      ) : null}
      {icon === "route" ? (
        <>
          <circle cx="5" cy="5" r="1.6" />
          <path d="M2.5 10.5a2.5 2.5 0 0 1 5 0" />
          <circle cx="11.2" cy="4.8" r="1.35" />
          <path d="M9 10.2a2.2 2.2 0 0 1 4.4 0" />
          <circle cx="10.6" cy="11.2" r="1.25" />
          <path d="M8.6 14a2 2 0 0 1 4 0" />
        </>
      ) : null}
    </svg>
  );
}

function HomeHeroTrustSignals({
  className,
  locale,
}: {
  className: string;
  locale: Locale;
}) {
  return (
    <dl className={className}>
      {heroFacts[locale].map((fact) => (
        <div className="flex gap-2.5 sm:shrink-0" key={fact.label}>
          <span className="inline-flex h-[0.95rem] shrink-0 -translate-y-px items-center text-accent-strong sm:h-[1.125rem]">
            <HeroTrustIcon icon={fact.icon} />
          </span>
          <div>
            <dt className="text-[0.62rem] font-semibold uppercase leading-[0.95rem] tracking-[0.1em] text-accent-strong sm:text-xs sm:leading-[1.125rem] sm:tracking-[0.12em]">
              {fact.label}
            </dt>
            <dd className="mt-1 text-sm font-semibold leading-5 text-foreground xl:whitespace-nowrap">
              {fact.value}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

function HomeHeroMediaPanel() {
  const [eventImage, classroomImage] = VOLNA_IMAGES.home.heroCollage;

  return (
    <div className="relative mx-auto w-full max-w-[46rem] lg:mt-2 lg:max-w-none">
      <div className="relative">
        <div
          className="relative overflow-hidden rounded-md border-4 border-white bg-brand-teal-soft shadow-[var(--shadow-soft)]"
          style={{ height: "clamp(16rem, 38vw, 22rem)" }}
        >
          <ApprovedImage
            className="object-[100%_42%]"
            image={eventImage}
            priority
            sizes="(min-width: 1280px) 36vw, (min-width: 1024px) 36vw, (min-width: 768px) 46rem, 100vw"
          />
        </div>
      </div>
      <div
        className="relative ml-auto mt-3 hidden overflow-hidden rounded-md border-4 border-white bg-brand-teal-soft shadow-sm xl:block xl:w-[78%]"
        style={{ height: "clamp(7.75rem, 11vw, 9.75rem)" }}
      >
        <ApprovedImage
          className="object-[50%_60%]"
          image={classroomImage}
          priority
          sizes="(min-width: 1280px) 26vw, 74vw"
        />
      </div>
    </div>
  );
}

export function HomeHeroSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const heroTitleClassName =
    locale === "ru"
      ? "mx-auto mt-4 max-w-[56rem] text-4xl font-semibold leading-tight text-brand-teal sm:text-[2.75rem] md:text-[2.9rem] lg:mx-0 lg:max-w-2xl lg:text-5xl xl:text-5xl"
      : "mx-auto mt-4 max-w-[56rem] text-4xl font-semibold leading-tight text-brand-teal sm:text-[2.75rem] md:text-[2.9rem] lg:mx-0 lg:max-w-2xl lg:text-5xl xl:text-[4.1rem] xl:leading-[1.12]";

  return (
    <section className="border-b border-brand-teal/14 bg-[linear-gradient(180deg,var(--surface)_0%,var(--section-wash)_48%,var(--background)_100%)] px-5 py-10 sm:px-8 lg:px-12 xl:py-14">
      <div className="mx-auto w-full max-w-7xl min-w-0">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,38vw)] lg:items-center lg:gap-7 xl:grid-cols-[minmax(0,48rem)_minmax(0,1fr)] xl:items-stretch xl:gap-5">
          <div className="space-y-6 xl:flex xl:flex-col xl:space-y-0">
            <div className="mx-auto max-w-[56rem] text-center lg:mx-0 lg:max-w-3xl lg:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-red sm:text-base">
                {content.hero.eyebrow}
              </p>
              <h1 className={heroTitleClassName}>{content.hero.title}</h1>
              <div className="mt-3 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-1 w-20 rounded-full bg-brand-teal" />
                <span className="h-1 w-10 rounded-full bg-accent" />
              </div>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:mx-0 xl:text-xl xl:leading-9">
                {content.hero.summary}
              </p>
            </div>
            <div className="grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start xl:mt-7">
              <ButtonLink
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto sm:min-w-[13.5rem] xl:min-h-[3.25rem] xl:min-w-[14.5rem] xl:px-7 xl:py-3.5 xl:text-[1.05rem]"
                href={getLocalizedPath(locale, "registration")}
              >
                {content.hero.primaryCtaLabel}
              </ButtonLink>
              <ButtonLink
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto sm:min-w-[11.75rem] xl:min-h-[3.25rem] xl:min-w-[12.5rem] xl:px-7 xl:py-3.5 xl:text-[1.05rem]"
                href="#courses"
                variant="secondary"
              >
                {content.hero.secondaryCtaLabel}
              </ButtonLink>
            </div>
            <HomeHeroTrustSignals
              className="grid gap-3 border-y border-brand-teal/16 py-4 sm:grid-cols-3 sm:gap-5 lg:hidden xl:mt-auto xl:flex xl:w-max xl:max-w-none xl:flex-row xl:items-start xl:gap-8"
              locale={locale}
            />
          </div>
          <div className="xl:-ml-6">
            <HomeHeroMediaPanel />
          </div>
        </div>
        <HomeHeroTrustSignals
          className="mt-6 hidden w-max max-w-full gap-8 border-y border-brand-teal/16 py-4 lg:flex lg:items-start xl:hidden"
          locale={locale}
        />
        <div className="mt-12 scroll-mt-24 sm:scroll-mt-28" id="courses">
          <HomeCourseChooserCards locale={locale} />
        </div>
      </div>
    </section>
  );
}
