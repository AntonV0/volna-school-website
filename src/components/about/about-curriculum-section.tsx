import { ApprovedImage } from "@/components/ui/approved-image";
import { SectionContainer } from "@/components/ui/section-container";
import { aboutContent } from "@/content/about-content";
import { cn } from "@/lib/classnames";
import type { Locale } from "@/lib/i18n/config";
import { VOLNA_IMAGES } from "@/lib/volna-images";

export function AboutCurriculumSection({ locale }: { locale: Locale }) {
  const content = aboutContent[locale];

  return (
      <SectionContainer className="bg-surface-blue" id="curriculum">
        <div className="space-y-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
              {content.curriculum.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-teal sm:text-4xl">
              {content.curriculum.title}
            </h2>
            <div className="mt-4 h-1 w-16 bg-brand-teal" />
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {content.curriculum.intro}
            </p>
            <div className="mt-6 rounded-lg border border-brand-gold/35 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-brand-teal">
                {locale === "en"
                  ? "A connected pathway, not a course catalogue"
                  : content.curriculum.eyebrow}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {locale === "en"
                  ? "The same placement logic links the whole school: start with the learner's level, choose the route, then keep progress visible through lessons, homework, and feedback."
                  : content.curriculum.intro}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {content.curriculum.tracks.map((track, index) => (
              <article
                className="grid overflow-hidden rounded-lg border border-brand-teal/15 bg-white shadow-sm lg:grid-cols-[0.88fr_1.12fr]"
                key={track.title}
              >
                <div
                  className={cn(
                    "relative min-h-64 overflow-hidden bg-brand-teal-soft lg:min-h-80",
                    index % 2 === 1 && "lg:order-2",
                  )}
                >
                  <ApprovedImage
                    className="object-[50%_44%]"
                    image={
                      VOLNA_IMAGES.about.curriculum[
                        index % VOLNA_IMAGES.about.curriculum.length
                      ]
                    }
                    sizes="(min-width: 1024px) 44vw, 100vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {content.curriculum.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-brand-teal">
                    {track.title}
                  </h3>
                  <p className="text-base leading-7 text-muted-foreground">
                    {track.description}
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-foreground">
                    {track.points.map((point) => (
                      <li className="border-l-2 border-brand-gold pl-3" key={point}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
  );
}
