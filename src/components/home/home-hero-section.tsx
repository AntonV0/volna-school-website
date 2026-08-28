import { HomeCourseChooserCards } from "@/components/home/home-course-chooser";
import { HomeTrustSignals } from "@/components/home/home-trust-strip";
import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

function HomeHeroMediaPanel() {
  const [eventImage] = VOLNA_IMAGES.home.heroCollage;

  return (
    <div
      className="relative mx-auto w-full max-w-[46rem] overflow-hidden rounded-lg border border-brand-teal/12 bg-brand-teal-soft shadow-[0_14px_36px_rgba(18,49,66,0.10)] lg:max-w-none"
      style={{ height: "clamp(20rem, 34vw, 25rem)" }}
    >
      <ApprovedImage
        className="object-[67%_42%]"
        image={eventImage}
        priority
        sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 38vw, (min-width: 768px) 46rem, 100vw"
      />
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
    <section className="border-b border-brand-teal/10 bg-[linear-gradient(180deg,#ffffff_0%,#fbfcfa_52%,var(--background)_100%)] px-5 py-10 sm:px-8 lg:px-12 xl:py-14 2xl:pb-10">
      <div className="mx-auto w-full max-w-7xl min-w-0">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,38vw)] lg:items-start lg:gap-7 xl:grid-cols-[minmax(0,44rem)_minmax(0,1fr)] xl:gap-8">
          <div className="space-y-6">
            <div className="mx-auto max-w-[56rem] text-center lg:mx-0 lg:max-w-3xl lg:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-red sm:text-base">
                {content.hero.eyebrow}
              </p>
              <h1 className={heroTitleClassName}>{content.hero.title}</h1>
              <div className="mt-3 flex justify-center lg:hidden">
                <span className="h-1 w-12 rounded-full bg-brand-teal" />
              </div>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-foreground/76 sm:text-lg sm:leading-8 lg:mx-0 lg:mt-5 xl:text-xl xl:leading-9">
                {content.hero.summary}
              </p>
            </div>
            <div className="grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
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
          </div>
          <div>
            <HomeHeroMediaPanel />
          </div>
        </div>
        <HomeTrustSignals
          className="mt-6 grid gap-4 rounded-md border border-brand-teal/18 bg-brand-teal-soft/55 px-5 py-4 sm:grid-cols-3 sm:gap-0 sm:px-6 lg:hidden"
          locale={locale}
        />
        <div
          className="mt-6 scroll-mt-24 sm:scroll-mt-28 lg:mt-8"
          id="courses"
        >
          <HomeCourseChooserCards locale={locale} />
        </div>
      </div>
    </section>
  );
}
