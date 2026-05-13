import { ApprovedImage } from "@/components/ui/approved-image";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type ExamGuideProps = {
  content: NonNullable<CourseContent["examGuide"]>;
  routeKey: CourseContent["routeKey"];
};

export function ExamGuide({ content, routeKey }: ExamGuideProps) {
  const images = VOLNA_IMAGES.courses[routeKey].examGuide ?? [];

  return (
    <SectionContainer className="bg-surface-blue" id="exam-guide">
      <div className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-[0.86fr_1fr] lg:items-end">
          <SectionHeading
            eyebrow={content.eyebrow}
            level={2}
            title={content.title}
          >
            <p>{content.note}</p>
          </SectionHeading>
          <p className="border-l-4 border-brand-gold bg-white p-4 text-sm font-medium leading-6 text-muted-foreground shadow-sm">
            {content.reviewNote}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {content.cards.map((card, index) => {
            const image = images[index] ?? null;

            return (
              <article
                className="group overflow-hidden rounded-lg border border-brand-teal/15 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] motion-reduce:hover:translate-y-0"
                key={card.title}
              >
                {image ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-teal-soft">
                    <ApprovedImage
                      className="transition duration-500 group-hover:scale-105"
                      image={image}
                      sizes="(min-width: 1024px) 28vw, 100vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-red shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ) : (
                  <div className="flex min-h-52 flex-col justify-between bg-brand-teal-deep p-5 text-white">
                    <span className="w-fit self-start rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-red shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="max-w-xs text-2xl font-semibold leading-tight">
                      {card.title}
                    </p>
                  </div>
                )}
                <div className="border-t-4 border-brand-gold p-5">
                  {image ? (
                    <h3 className="text-lg font-semibold text-foreground">
                      {card.title}
                    </h3>
                  ) : null}
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {card.description}
                  </p>
                  <ul className="mt-5 grid gap-2 text-sm text-foreground">
                    {card.points.map((point) => (
                      <li
                        className="border-l-2 border-brand-gold bg-[#fffdf8] px-3 py-2 leading-6"
                        key={point}
                      >
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
