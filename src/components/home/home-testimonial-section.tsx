import Link from "next/link";

import { SectionContainer } from "@/components/ui/section-container";
import { homeContent } from "@/content/home-content";
import { cn } from "@/lib/classnames";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { courseAccentClasses, routeNumbers } from "@/components/home/home-shared";

export function HomeTestimonialSection({
  feedbackThemes,
  locale,
}: {
  feedbackThemes: Array<{ body: string; title: string }>;
  locale: Locale;
}) {
  const content = homeContent[locale];
  const testimonialThemes = content.testimonial.themes;

  return (
    <SectionContainer className="bg-section-wash">
      <div className="mx-auto max-w-6xl border-y border-brand-teal/15 py-8">
        <figure className="grid gap-6 text-left lg:grid-cols-[0.3fr_0.7fr] lg:items-start">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
            {content.testimonial.eyebrow}
          </p>
          <div>
            <blockquote className="text-2xl font-medium leading-relaxed text-foreground">
              &quot;{content.testimonial.quote}&quot;
            </blockquote>
            <figcaption className="mt-4 border-l-4 border-accent pl-4 text-sm font-semibold text-brand-teal">
              {content.testimonial.attribution}
            </figcaption>
          </div>
        </figure>

        {testimonialThemes ? (
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {testimonialThemes.map((theme) => (
              <article
                className={cn(
                  "rounded-lg border border-brand-teal/14 border-l-4 bg-white p-4 shadow-sm",
                  courseAccentClasses[theme.routeKey],
                )}
                key={theme.title}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
                    {routeNumbers[theme.routeKey]}
                  </p>
                  <Link
                    className="text-xs font-semibold text-brand-teal underline-offset-4 hover:underline"
                    href={getLocalizedPath(locale, theme.routeKey)}
                  >
                    {locale === "en" ? "View class" : "Volna"}
                  </Link>
                </div>
                <h3 className="mt-3 text-base font-semibold leading-6 text-foreground">
                  {theme.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {theme.body}
                </p>
                <p className="mt-4 border-t border-brand-teal/12 pt-3 text-xs font-semibold uppercase tracking-[0.1em] text-brand-teal">
                  {theme.attribution}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {feedbackThemes.map((theme) => (
              <article
                className="rounded-lg border border-brand-teal/14 bg-white p-4 shadow-sm"
                key={theme.title}
              >
                <h3 className="text-sm font-semibold text-brand-teal">
                  {theme.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {theme.body}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </SectionContainer>
  );
}
