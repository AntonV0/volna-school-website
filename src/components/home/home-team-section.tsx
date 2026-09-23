import { ApprovedImage } from "@/components/ui/approved-image";
import { EditorialSectionHeading } from "@/components/ui/editorial-section-heading";
import { SectionContainer } from "@/components/ui/section-container";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { staffImageClasses, staffImages } from "@/components/home/home-shared";

// Static, source-specific framing keeps faces legible in the existing 88px cards.
// Keep this local to the homepage so other uses of the staff photos are unaffected.
const portraitStyles = [
  { objectPosition: "50% 50%", transform: "scale(1.7)", transformOrigin: "85% 4%" },
  { objectPosition: "50% 18%" },
  { objectPosition: "50% 38%", transform: "scale(1.08)", transformOrigin: "50% 40%" },
  { objectPosition: "50% 50%", transform: "scale(1.08)", transformOrigin: "50% 40%" },
] as const;

export function HomeTeamSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale].team;
  const introduction = locale === "en"
    ? "Our leadership, teaching and admissions work closely together, so families know who to contact and learners receive consistent support."
    : "Руководство школы, преподаватели и специалисты по записи работают вместе, чтобы семьи знали, к кому обратиться, а ученики получали последовательную поддержку.";

  return (
    <SectionContainer className="bg-section-wash" id="team">
      <EditorialSectionHeading
        introduction={content.eyebrow}
        title={content.title}
      >
          <p>{introduction}</p>
      </EditorialSectionHeading>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {content.people.map((person, index) => (
          <article
            className="relative grid grid-cols-[5.5rem_1fr] items-center gap-3 overflow-hidden rounded-xl border border-brand-teal/14 bg-white p-4 shadow-[0_12px_30px_rgba(18,49,66,0.07)] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[linear-gradient(90deg,var(--brand-blue),var(--brand-teal))]"
            key={`${person.name}-${index}`}
          >
            <div className="relative size-[5.5rem] overflow-hidden rounded-lg border border-brand-teal/12 bg-brand-teal-soft">
              <ApprovedImage
                className={staffImageClasses[index]}
                image={staffImages[index]}
                style={locale === "en" ? portraitStyles[index] : undefined}
                sizes="5.5rem"
                unoptimized
              />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold leading-snug text-foreground">
                {person.name}
              </h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {person.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
