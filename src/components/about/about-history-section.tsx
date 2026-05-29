import { ApprovedImage } from "@/components/ui/approved-image";
import { SectionContainer } from "@/components/ui/section-container";
import { aboutContent } from "@/content/about-content";
import type { Locale } from "@/lib/i18n/config";
import { VOLNA_IMAGES } from "@/lib/volna-images";

export function AboutHistorySection({ locale }: { locale: Locale }) {
  const content = aboutContent[locale];

  return (
      <SectionContainer className="bg-white" id="history">
        <div className="space-y-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
              {content.history.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-teal sm:text-4xl">
              {content.history.title}
            </h2>
            <div className="mt-4 h-1 w-16 bg-brand-teal" />
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {content.history.body}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border-soft bg-brand-teal-soft shadow-[var(--shadow-soft)]">
                <ApprovedImage
                  className="object-[50%_38%]"
                  image={VOLNA_IMAGES.about.historyGroup}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </div>
              <div
                className="grid gap-5"
                style={{
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(min(100%, 13rem), 1fr))",
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-brand-teal-soft">
                  <ApprovedImage
                    image={VOLNA_IMAGES.about.historyVideo}
                    sizes="(min-width: 640px) 24vw, 100vw"
                  />
                </div>
                <div className="flex min-h-44 items-center rounded-lg border border-border-soft bg-section-wash p-5">
                  <ul className="grid gap-4 text-sm leading-6 text-muted-foreground">
                    {content.history.notes.map((note) => (
                      <li
                        className="border-l-2 border-accent bg-white/70 py-2 pl-3"
                        key={note.title}
                      >
                        <span className="block font-semibold text-foreground">
                          {note.title}:{" "}
                        </span>
                        {note.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-brand-teal/15 bg-section-wash p-6 shadow-sm sm:p-8">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
                {locale === "en" ? "School timeline" : content.history.eyebrow}
              </p>
              <div className="relative space-y-7 before:absolute before:bottom-2 before:left-[2.15rem] before:top-2 before:w-px before:bg-brand-teal/20 sm:before:left-[4.65rem]">
                {content.history.milestones.map((milestone) => (
                  <article
                    className="relative grid gap-4 sm:grid-cols-[5rem_1fr]"
                    key={`${milestone.year}-${milestone.title}`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute rounded-full border-4 border-section-wash bg-brand-red"
                      style={{ height: "0.85rem", left: "2.15rem", top: "0.45rem", width: "0.85rem" }}
                    />
                    <p className="relative z-10 w-16 bg-section-wash text-xl font-semibold leading-7 text-brand-teal sm:w-20">
                      {milestone.year}
                    </p>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
  );
}
