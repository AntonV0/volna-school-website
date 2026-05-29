import { ApprovedImage } from "@/components/ui/approved-image";
import { BrandCard } from "@/components/ui/brand-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";
import { cn } from "@/lib/classnames";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import { courseThemeClasses } from "@/components/course/course-theme";

type ExamGuideProps = {
  content: NonNullable<CourseContent["examGuide"]>;
  routeKey: CourseContent["routeKey"];
};

export function ExamGuide({ content, routeKey }: ExamGuideProps) {
  const images = VOLNA_IMAGES.courses[routeKey].examGuide ?? [];
  const theme = courseThemeClasses[routeKey];

  return (
    <SectionContainer className="bg-section-wash" id="exam-guide">
      <div className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-[0.86fr_1fr] lg:items-end">
          <SectionHeading
            eyebrow={content.eyebrow}
            level={2}
            title={content.title}
          >
            <p>{content.note}</p>
          </SectionHeading>
          <p
            className={cn(
              "border-l-4 bg-white p-4 text-sm font-medium leading-6 text-muted-foreground shadow-sm",
              theme.borderLeft,
            )}
          >
            {content.reviewNote}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {content.cards.map((card, index) => {
            const image = images[index] ?? null;

            return (
              <BrandCard
                className={cn(
                  "group overflow-hidden",
                  theme.border,
                )}
                hover
                key={card.title}
                padding="none"
              >
                {image ? (
                  <div className={cn("relative aspect-[16/10] overflow-hidden", theme.softBg)}>
                    <ApprovedImage
                      className="transition duration-500 group-hover:scale-105"
                      image={image}
                      sizes="(min-width: 1024px) 28vw, 100vw"
                    />
                    <span
                      className={cn(
                        "absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold shadow-sm",
                        theme.text,
                      )}
                    >
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
                <div className={cn("border-t-4 p-5", theme.borderTop)}>
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
                        className={cn(
                          "border-l-2 px-3 py-2 leading-6",
                          theme.borderLeft,
                          theme.softBg,
                        )}
                        key={point}
                      >
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BrandCard>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
