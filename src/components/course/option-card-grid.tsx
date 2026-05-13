import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";
import type { Locale } from "@/lib/i18n/config";
import { getTrialRegistrationPath } from "@/lib/registration/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type OptionCardGridProps = {
  content: CourseContent["studyOptions"];
  locale: Locale;
  routeKey: CourseContent["routeKey"];
};

const optionDecisionCopy: Record<
  CourseContent["routeKey"],
  { body: string; ctaLabel: string; title: string }
> = {
  children: {
    title: "Not sure which option fits?",
    body:
      "The first lesson checks age, confidence, current Russian level, and whether group or private support is the better start.",
    ctaLabel: "Book a children's trial",
  },
  gcse: {
    title: "Not sure which GCSE route fits?",
    body:
      "Share the student's timeline and current level so Volna can recommend group preparation, private support, or mock practice.",
    ctaLabel: "Book a GCSE trial",
  },
  alevel: {
    title: "Not sure what A-Level support is needed?",
    body:
      "Use the trial request to clarify essays, speaking, IRP, literature, film, and the level of feedback required.",
    ctaLabel: "Book an A-Level trial",
  },
  adults: {
    title: "Not sure where to restart?",
    body:
      "The first conversation helps match lessons to level, schedule, speaking confidence, and practical goals.",
    ctaLabel: "Book an adult trial",
  },
};

export function OptionCardGrid({
  content,
  locale,
  routeKey,
}: OptionCardGridProps) {
  const images = VOLNA_IMAGES.courses[routeKey].studyOptions;
  const decision = optionDecisionCopy[routeKey];

  return (
    <SectionContainer className="bg-white" id="study-options">
      <div className="space-y-8">
        <div className="grid gap-5 lg:grid-cols-[0.74fr_1fr] lg:items-end">
          <SectionHeading
            eyebrow={content.eyebrow}
            level={2}
            title={content.title}
          />
          <div className="hidden h-px bg-brand-teal/20 lg:block" />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {content.cards.map((card, index) => (
            <article
              className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-brand-teal/15 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] motion-reduce:hover:translate-y-0"
              key={card.title}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-teal-soft">
                <ApprovedImage
                  className="transition duration-500 group-hover:scale-105"
                  image={images[index]}
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-red shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col border-t-4 border-brand-gold p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {card.description}
                </p>
                <p className="mt-auto border-t border-brand-teal/10 pt-4 text-sm font-medium leading-6 text-brand-teal">
                  {card.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-4 rounded-lg border border-brand-gold/35 bg-[#fffdf8] p-5 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-foreground">
              {decision.title}
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
              {decision.body}
            </p>
          </div>
          <ButtonLink
            className="w-full sm:w-auto"
            href={getTrialRegistrationPath(locale, routeKey)}
          >
            {decision.ctaLabel}
          </ButtonLink>
        </div>
      </div>
    </SectionContainer>
  );
}
