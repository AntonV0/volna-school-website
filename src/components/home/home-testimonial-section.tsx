import { EnglishTestimonialCarousel } from "@/components/home/english-testimonial-carousel";
import { SectionContainer } from "@/components/ui/section-container";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";

export function HomeTestimonialSection({
  feedbackThemes,
  locale,
}: {
  feedbackThemes: Array<{ body: string; title: string }>;
  locale: Locale;
}) {
  const content = homeContent[locale];

  if (content.testimonial.items && content.testimonial.title) {
    return (
      <SectionContainer className="bg-section-wash pt-0" id="testimonials">
        <EnglishTestimonialCarousel
          testimonials={content.testimonial.items}
          title={content.testimonial.title}
        />
      </SectionContainer>
    );
  }

  return (
    <SectionContainer className="bg-section-wash" id="testimonials">
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
      </div>
    </SectionContainer>
  );
}
