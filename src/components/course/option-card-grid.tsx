import { ApprovedImage } from "@/components/ui/approved-image";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type OptionCardGridProps = {
  content: CourseContent["studyOptions"];
  routeKey: CourseContent["routeKey"];
};

export function OptionCardGrid({ content, routeKey }: OptionCardGridProps) {
  const images = VOLNA_IMAGES.courses[routeKey].studyOptions;

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
              className="group overflow-hidden rounded-lg border border-brand-teal/15 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] motion-reduce:hover:translate-y-0"
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
              <div className="border-t-4 border-brand-gold p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {card.description}
                </p>
                <p className="mt-5 border-t border-brand-teal/10 pt-4 text-sm font-medium text-brand-teal">
                  {card.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
