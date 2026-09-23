import { HomeCourseChooserCards } from "@/components/home/home-course-chooser";
import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { InPageButtonLink } from "@/components/ui/in-page-button-link";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

function HomeHeroMediaPanel({ locale }: { locale: Locale }) {
  const [eventImage] = VOLNA_IMAGES.home.heroCollage;
  const wideSizes = locale === "en"
    ? "(min-width: 1600px) 670px, "
    : "";

  return (
    <div
      data-hero-media
      className="relative mx-auto aspect-[4/3] w-full max-w-[46rem] overflow-hidden rounded-lg border border-brand-teal/12 bg-brand-teal-soft shadow-[0_14px_36px_rgba(18,49,66,0.10)] sm:aspect-auto sm:h-[clamp(20rem,34vw,25rem)] lg:h-full lg:min-h-[20rem] lg:max-w-none xl:h-[clamp(20rem,34vw,25rem)] xl:min-h-0"
    >
      <ApprovedImage
        className="object-[67%_42%]"
        image={eventImage}
        priority
        sizes={wideSizes + (locale === "en"
          ? "(min-width: 1280px) 600px, (min-width: 1024px) 560px, (min-width: 640px) calc(100vw - 64px), calc(112.5vw - 45px)"
          : "(min-width: 1280px) 40vw, (min-width: 1024px) 38vw, (min-width: 768px) 46rem, 100vw")}
      />
    </div>
  );
}

export function HomeHeroSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const [heroTitleLead, heroTitleAudience] = content.hero.title.split(/ (?=for all ages$)/);
  const heroTitleClassName =
    locale === "ru"
      ? "mx-auto mt-4 max-w-[56rem] text-4xl font-semibold leading-tight text-brand-blue sm:text-[2.75rem] md:text-[2.9rem] lg:mx-0 lg:max-w-2xl lg:text-5xl xl:text-5xl"
      : "mx-auto mt-4 max-w-[56rem] text-4xl font-semibold leading-tight text-brand-blue sm:text-[2.75rem] md:text-[2.9rem] lg:mx-0 lg:max-w-2xl lg:text-[clamp(3rem,4.4vw,3.375rem)] xl:text-[4.1rem] xl:leading-[1.12]";

  return (
    <section data-hero-section={locale} className="bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_32%,#fbfcf9_72%,#fafbf7_100%)] px-5 py-10 sm:px-8 lg:px-12 xl:py-14 2xl:pb-10">
      <div className="mx-auto w-full max-w-7xl min-w-0">
        <div data-hero-layout className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,36vw)] lg:items-stretch lg:gap-7 xl:grid-cols-[minmax(0,44rem)_minmax(0,1fr)] xl:items-start xl:gap-8">
          <div className="flex flex-col gap-6 lg:block lg:space-y-6" data-hero-copy="">
            <div className="mx-auto max-w-[56rem] text-center lg:mx-0 lg:max-w-3xl lg:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-red sm:text-base">
                {content.hero.eyebrow}
              </p>
              <h1 className={heroTitleClassName}>
                {locale === "en" && heroTitleAudience ? (
                  <>
                    <span>{heroTitleLead}</span>{" "}
                    <span data-hero-title-audience>{heroTitleAudience}</span>
                  </>
                ) : content.hero.title}
              </h1>
              <div data-hero-divider className="mt-3 flex justify-center lg:hidden">
                <span className="h-1 w-12 rounded-full bg-brand-teal" />
              </div>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-foreground/76 sm:text-lg sm:leading-8 lg:mx-0 lg:mt-5 xl:text-xl xl:leading-9">
                {content.hero.summary}
              </p>
            </div>
            <div
              className="grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start"
              data-hero-actions={locale}
            >
              <ButtonLink
                data-hero-primary-action=""
                className="min-h-12 w-full px-6 py-3 text-base sm:w-auto sm:min-w-[13.5rem] xl:min-h-[3.25rem] xl:min-w-[14.5rem] xl:px-7 xl:py-3.5 xl:text-[1.05rem]"
                href={getLocalizedPath(locale, "registration")}
              >
                {locale === "en" ? "Start your free trial" : content.hero.primaryCtaLabel}
              </ButtonLink>
              <InPageButtonLink
                className="min-h-12 w-full px-6 py-3 text-base hover:!translate-y-0 sm:w-auto sm:min-w-[11.75rem] xl:min-h-[3.25rem] xl:min-w-[12.5rem] xl:px-7 xl:py-3.5 xl:text-[1.05rem]"
                href="#class-details"
              >
                {locale === "en" ? "Compare courses" : content.hero.secondaryCtaLabel}
              </InPageButtonLink>
            </div>
          </div>
          <div className="lg:h-full xl:h-auto">
            <HomeHeroMediaPanel locale={locale} />
          </div>
        </div>
        <div
          className="mt-6 scroll-mt-24 sm:scroll-mt-28 lg:mt-8"
          data-language-section=""
          id="courses"
        >
          <HomeCourseChooserCards locale={locale} />
        </div>
      </div>
    </section>
  );
}
