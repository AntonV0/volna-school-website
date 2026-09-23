import { EditorialSectionHeading } from "@/components/ui/editorial-section-heading";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionContainer } from "@/components/ui/section-container";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { VOLNA_IMAGES } from "@/lib/volna-images";

export function HomeApproachSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale].approach;

  return (
    <SectionContainer
      className="relative overflow-hidden border-t border-brand-teal/14 bg-[linear-gradient(180deg,var(--section-wash)_0%,#fff_17rem)]"
      id="approach"
    >
      <div className="relative z-10">
        <EditorialSectionHeading
          introduction={content.eyebrow}
          title={content.title}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <MediaFrame
            className="h-full rounded-xl sm:max-lg:hidden lg:h-full lg:max-w-none"
            contentClassName="aspect-[4/3] min-h-0 lg:aspect-auto lg:h-full lg:min-h-[25rem]"
            image={VOLNA_IMAGES.home.approach}
            imageStyle={{
              objectPosition: "32% center",
              transform: "scale(1.58)",
              transformOrigin: "27% 46%",
            }}
            showImageOverlay={false}
            showLabel={false}
            // Avoid a large image request while the tablet layout intentionally hides this media.
            sizes="(min-width: 1024px) 1050px, (min-width: 640px) 1px, calc(158vw - 64px)"
            variant="online"
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {content.points.map((point) => (
              <article
                className="relative min-h-0 overflow-hidden rounded-xl border border-brand-teal/14 bg-[linear-gradient(145deg,#fff_0%,var(--section-wash)_100%)] p-6 shadow-[0_12px_30px_rgba(18,49,66,0.07)] sm:min-h-[10.5rem] lg:min-h-48"
                key={point.title}
              >
                <span
                  aria-hidden="true"
                  className="block h-1 w-12 rounded-full bg-[linear-gradient(90deg,var(--brand-blue),var(--brand-teal))]"
                />
                <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
