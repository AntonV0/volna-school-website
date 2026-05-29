import { SectionContainer } from "@/components/ui/section-container";
import { aboutContent } from "@/content/about-content";
import type { Locale } from "@/lib/i18n/config";

export function AboutValuesSection({ locale }: { locale: Locale }) {
  const content = aboutContent[locale];

  return (
      <SectionContainer className="bg-section-wash" id="values">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-36">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
              {content.values.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-teal sm:text-4xl">
              {content.values.title}
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-1 w-16 bg-brand-teal" />
              <span className="h-1 w-8 bg-accent" />
            </div>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              {locale === "en"
                ? "These are the everyday standards behind placement, lessons, feedback, and communication with families."
                : content.mission.body}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.values.items.map((value, index) => (
              <article
                className="rounded-lg border border-border-soft border-t-4 border-t-accent bg-white p-5 shadow-sm"
                key={value.title}
              >
                <div className="flex gap-4">
                  <span
                    className="grid shrink-0 place-items-center rounded-full bg-accent-soft text-xs font-bold text-accent-strong ring-1 ring-accent-border"
                    style={{ height: "2.75rem", width: "2.75rem" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-teal">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
  );
}
