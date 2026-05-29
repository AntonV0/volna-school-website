import { ApprovedImage } from "@/components/ui/approved-image";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutContent } from "@/content/about-content";
import type { Locale } from "@/lib/i18n/config";
import { VOLNA_IMAGES } from "@/lib/volna-images";

export function AboutMissionSection({ locale }: { locale: Locale }) {
  const content = aboutContent[locale];

  return (
      <SectionContainer className="bg-white py-14 sm:py-16" id="mission">
        <div className="grid gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="space-y-8">
            <SectionHeading
              eyebrow={content.mission.eyebrow}
              level={2}
              title={content.mission.title}
            >
              <p>{content.mission.body}</p>
            </SectionHeading>
            <div className="grid gap-4">
              {content.mission.pillars.map((pillar, index) => (
                <article
                  className="grid gap-3 rounded-lg border border-brand-teal/15 bg-section-wash p-5 shadow-sm sm:grid-cols-[3.5rem_1fr]"
                  key={pillar.title}
                >
                  <p className="flex size-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand-red shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border-soft bg-brand-teal-soft shadow-[var(--shadow-soft)] lg:aspect-[4/3]">
            <ApprovedImage
              className="object-[50%_45%]"
              image={VOLNA_IMAGES.about.mission}
              sizes="(min-width: 1024px) 44vw, 100vw"
            />
          </div>
        </div>
      </SectionContainer>
  );
}
