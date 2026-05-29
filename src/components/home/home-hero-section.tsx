import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import { HomeCourseChooserCards } from "@/components/home/home-course-chooser";

const heroFacts: Record<Locale, Array<{ label: string; value: string }>> = {
  en: [
    { label: "School story", value: "Since 2009" },
    { label: "Free first lesson", value: "Placement included" },
    { label: "Course paths", value: "Children, exams, adults" },
  ],
  ru: [
    { label: "Опыт школы", value: "с 2009" },
    { label: "Онлайн", value: "с 2020" },
    { label: "Курсы", value: "дети, экзамены, взрослые" },
  ],
};

function HomeHeroCollage({ locale }: { locale: Locale }) {
  const [eventImage, classroomImage] = VOLNA_IMAGES.home.heroCollage;

  return (
    <div className="grid gap-3 lg:mt-2">
      <div
        className="relative overflow-hidden rounded-md border-4 border-white bg-brand-teal-soft shadow-[var(--shadow-soft)]"
        style={{ height: "clamp(15rem, 25vw, 19rem)" }}
      >
        <ApprovedImage
          className="object-[50%_42%]"
          image={eventImage}
          priority
          sizes="(min-width: 1024px) 44vw, 100vw"
        />
        <div className="absolute left-4 top-4 rounded-md bg-white/92 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-teal shadow-sm backdrop-blur">
          {locale === "en" ? "School community" : "Школьное сообщество"}
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-md border border-brand-teal/16 bg-white p-4 text-foreground shadow-sm lg:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
            {locale === "en" ? "From Pushkin School to Volna" : "От Pushkin School к Volna"}
          </p>
          <p className="mt-2 text-base font-semibold leading-6 text-brand-teal lg:text-lg lg:leading-7">
            {locale === "en"
              ? "A real school story, now shaped into structured online Russian lessons."
              : "Живая история школы, теперь в формате структурированных онлайн-уроков русского языка."}
          </p>
          <p className="mt-4 border-t border-brand-teal/12 pt-3 text-sm font-semibold leading-6 text-muted-foreground">
            {locale === "en"
              ? "Friendly routines, known teachers, and a calm first step."
              : "Знакомые учителя, понятный ритм и спокойный первый шаг."}
          </p>
        </div>
        <div
          className="relative overflow-hidden rounded-md border-4 border-white bg-brand-teal-soft shadow-sm"
          style={{ minHeight: "9.5rem" }}
        >
          <ApprovedImage
            className="object-[50%_42%]"
            image={classroomImage}
            priority
            sizes="(min-width: 1024px) 24vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}

export function HomeHeroSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale];

  return (
    <section className="border-b border-brand-teal/14 bg-[linear-gradient(180deg,var(--section-wash)_0%,var(--background)_56%,var(--surface)_100%)] px-5 py-9 sm:px-8 lg:px-12 lg:py-12">
      <div className="mx-auto w-full max-w-7xl min-w-0">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <div className="space-y-5">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">
                {content.hero.eyebrow}
              </p>
              <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-brand-teal sm:text-5xl lg:text-[3.55rem] lg:leading-[1.12] xl:text-[4.1rem]">
                {content.hero.title}
              </h1>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-1 w-20 rounded-full bg-brand-red" />
                <span className="h-1 w-10 rounded-full bg-accent" />
              </div>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground lg:text-lg lg:leading-8">
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
            <dl className="grid max-w-2xl gap-x-4 gap-y-3 border-y border-brand-teal/16 py-3 sm:grid-cols-3">
              {heroFacts[locale].map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-brand-red sm:text-xs sm:tracking-[0.12em]">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold leading-5 text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <HomeHeroCollage locale={locale} />
        </div>
        <div className="mt-12 scroll-mt-24 sm:scroll-mt-28" id="courses">
          <HomeCourseChooserCards locale={locale} />
        </div>
      </div>
    </section>
  );
}
