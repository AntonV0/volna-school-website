import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { aboutContent } from "@/content/about-content";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

export function AboutHeroSection({ locale }: { locale: Locale }) {
  const content = aboutContent[locale];
  const site = siteContent[locale];

  return (
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
              <h1 className="text-3xl font-semibold leading-[1.08] text-brand-blue sm:text-5xl lg:text-6xl">
                {content.hero.title}
              </h1>
              <div className="h-1 w-20 bg-brand-teal" />
              <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {content.hero.summary}
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href={getLocalizedPath(locale, "registration")}
                >
                  {site.navigation.ctaLabel}
                </ButtonLink>
                <ButtonLink
                  href="#classes"
                  variant="secondary"
                >
                  {locale === "en" ? "View course routes" : content.classes.title}
                </ButtonLink>
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
  );
}
