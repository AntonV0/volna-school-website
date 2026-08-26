import { ApprovedImage } from "@/components/ui/approved-image";
import { BrandCard } from "@/components/ui/brand-card";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";
import type { Locale } from "@/lib/i18n/config";
import { getCourseDetailPath } from "@/lib/i18n/routing";
import { getTrialRegistrationPath } from "@/lib/registration/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import { cn } from "@/lib/classnames";
import { courseThemeClasses } from "@/components/course/course-theme";

type OptionCardGridProps = {
  content: CourseContent["studyOptions"];
  locale: Locale;
  routeKey: CourseContent["routeKey"];
};

const optionDecisionCopy: Record<
  Locale,
  Record<CourseContent["routeKey"], { body: string; ctaLabel: string; title: string }>
> = {
  en: {
    children: {
      title: "Not sure which option fits?",
      body:
        "The first lesson checks age, confidence, current Russian level, and whether group or private support is the better start.",
      ctaLabel: "Book a Free Trial",
    },
    gcse: {
      title: "Not sure which GCSE route fits?",
      body:
        "Share the student's timeline and current level so Volna can recommend group preparation, private support, or mock practice.",
      ctaLabel: "Get Exam Course Advice",
    },
    alevel: {
      title: "Not sure what A Level support is needed?",
      body:
        "Use the trial request to clarify essays, speaking, IRP, literature, film, and the level of feedback required.",
      ctaLabel: "Get Exam Course Advice",
    },
    adults: {
      title: "Not sure where to restart?",
      body:
        "The first conversation helps match lessons to level, schedule, speaking confidence, and practical goals.",
      ctaLabel: "Ask About Class Fit",
    },
  },
  ru: {
    children: {
      title: "Не уверены, какой формат подойдет?",
      body:
        "Пробный урок помогает понять возраст, уверенность, текущий уровень русского и выбрать группу или индивидуальную поддержку.",
      ctaLabel: "Подобрать формат",
    },
    gcse: {
      title: "Не уверены, какой маршрут GCSE подходит?",
      body:
        "Расскажите о сроках и текущем уровне ученика, чтобы Volna могла предложить группу, индивидуальную поддержку или пробную практику.",
      ctaLabel: "Совет по GCSE",
    },
    alevel: {
      title: "Не уверены, какая поддержка A Level нужна?",
      body:
        "Через заявку можно уточнить эссе, устную часть, IRP, литературу, фильм и нужный уровень обратной связи.",
      ctaLabel: "Совет по A Level",
    },
    adults: {
      title: "Не уверены, с чего начать?",
      body:
        "Первая беседа помогает сопоставить уроки с уровнем, расписанием, уверенностью в речи и практическими целями.",
      ctaLabel: "Подобрать формат",
    },
  },
};

const optionDetailCta = {
  en: "View class details",
  ru: "Подробнее о занятиях",
} as const;

export function OptionCardGrid({
  content,
  locale,
  routeKey,
}: OptionCardGridProps) {
  const images = VOLNA_IMAGES.courses[routeKey].studyOptions;
  const decision = optionDecisionCopy[locale][routeKey];
  const theme = courseThemeClasses[routeKey];

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
        <div
          className={cn(
            "grid gap-4",
            content.cards.length === 4
              ? "md:grid-cols-2 xl:grid-cols-4"
              : "md:grid-cols-3",
          )}
        >
          {content.cards.map((card, index) => (
            <BrandCard
              className={cn(
                "group flex min-w-0 flex-col overflow-hidden",
                theme.border,
              )}
              hover
              key={card.title}
              padding="none"
            >
              <div className={cn("relative aspect-[16/10] overflow-hidden", theme.softBg)}>
                <ApprovedImage
                  className="transition duration-500 group-hover:scale-105"
                  image={images[index]}
                  sizes="(min-width: 768px) 30vw, 100vw"
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
              <div className={cn("flex flex-1 flex-col border-t-4 p-5", theme.borderTop)}>
                <h3 className="text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {card.description}
                </p>
                <p
                  className={cn(
                    "mt-auto border-t border-brand-teal/10 pt-4 text-sm font-medium leading-6",
                    theme.text,
                  )}
                >
                  {card.detail}
                </p>
                {card.detailKey ? (
                  <ButtonLink
                    className={cn(
                      "mt-5 w-full justify-center border",
                      theme.border,
                      theme.focus,
                      theme.softBg,
                      theme.text,
                    )}
                    href={getCourseDetailPath(locale, card.detailKey)}
                    variant="unstyled"
                  >
                    {optionDetailCta[locale]}
                  </ButtonLink>
                ) : null}
              </div>
            </BrandCard>
          ))}
        </div>

        <BrandCard
          as="div"
          className={cn(
            "grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center",
            theme.border,
            theme.softBg,
          )}
          tone="plain"
        >
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
        </BrandCard>
      </div>
    </SectionContainer>
  );
}
