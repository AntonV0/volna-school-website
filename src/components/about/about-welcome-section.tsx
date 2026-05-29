import { ApprovedImage } from "@/components/ui/approved-image";
import { SectionContainer } from "@/components/ui/section-container";
import { aboutContent } from "@/content/about-content";
import { cn } from "@/lib/classnames";
import type { Locale } from "@/lib/i18n/config";
import { VOLNA_IMAGES } from "@/lib/volna-images";

export function AboutWelcomeSection({ locale }: { locale: Locale }) {
  const content = aboutContent[locale];

  return (
      <SectionContainer className="bg-section-wash py-14 sm:py-16" id="welcome">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
              {content.welcome.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-brand-teal sm:text-4xl">
              {content.welcome.title}
            </h2>
            <div className="mt-4 h-1 w-16 bg-brand-teal" />
          </div>

          <div className="mt-9 grid gap-8 lg:grid-cols-[19rem_1fr] lg:items-start">
            <aside className="w-full rounded-lg border border-border-soft bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6 lg:text-center">
              <div className="flex items-center gap-4 lg:block">
                <div
                  className="relative shrink-0 overflow-hidden rounded-full border-4 border-white bg-brand-teal-soft shadow-[var(--shadow-soft)] lg:mx-auto"
                  style={{ height: "7rem", width: "7rem" }}
                >
                  <ApprovedImage
                    image={VOLNA_IMAGES.staff.elena}
                    sizes="8rem"
                  />
                </div>
                <div>
                  <p className="font-semibold text-brand-teal lg:mt-5">
                    {content.welcome.signature}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {content.welcome.profile.title}
                  </p>
                </div>
              </div>
              <ul className="mt-5 grid gap-3 text-left text-sm leading-6 text-muted-foreground sm:grid-cols-3 lg:grid-cols-1">
                {content.welcome.profile.items.map((item) => (
                  <li className="border-l-2 border-accent pl-3" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="rounded-lg border border-border-soft border-l-4 border-l-accent bg-white p-5 text-base leading-8 text-muted-foreground shadow-sm sm:p-6 sm:text-lg">
              {content.welcome.body.map((paragraph, index) => (
                <p
                  className={cn(
                    "border-l-2 border-brand-teal/25 py-1 pl-4",
                    index === content.welcome.body.length - 1 &&
                      "font-medium text-foreground",
                    index > 0 && "mt-4",
                  )}
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-6 rounded-md border border-accent-border bg-accent-soft/45 p-4 text-sm font-semibold leading-6 text-brand-teal">
                {locale === "en"
                  ? "The first step is always practical: understand the learner, recommend a route, and keep expectations clear."
                  : content.welcome.profile.items[0]}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
  );
}
