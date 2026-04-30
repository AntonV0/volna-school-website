import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CourseContent } from "@/content/course-content";

type ClassCatalogueProps = {
  content: NonNullable<CourseContent["classCatalogue"]>;
};

export function ClassCatalogue({ content }: ClassCatalogueProps) {
  return (
    <SectionContainer className="bg-brand-blue-soft" id="learning-routes">
      <div className="space-y-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          level={2}
          title={content.title}
        >
          <p>{content.note}</p>
        </SectionHeading>

        <div className="grid gap-5">
          {content.routes.map((route, index) => (
            <article
              className="grid gap-5 rounded-lg border border-brand-teal/15 bg-white p-5 shadow-sm lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:p-6"
              key={route.title}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-teal text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {route.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-brand-teal">
                      {route.ageBand}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {route.learner}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm leading-6 text-muted-foreground">
                  {route.description}
                </p>
                <ul className="grid gap-2 text-sm text-foreground sm:grid-cols-3">
                  {route.bullets.map((bullet) => (
                    <li
                      className="rounded-lg border border-brand-teal/10 bg-background p-3 leading-6"
                      key={bullet}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="border-t border-brand-teal/10 pt-4 text-sm font-medium leading-6 text-brand-teal">
                  {route.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <article className="rounded-lg border border-brand-gold/35 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">
              {content.placement.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {content.placement.body}
            </p>
            <ol className="mt-5 space-y-3 text-sm text-foreground">
              {content.placement.steps.map((step, index) => (
                <li className="flex gap-3" key={step}>
                  <span className="font-semibold text-brand-red">
                    {index + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-lg border border-brand-teal/15 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">
              {content.support.title}
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {content.support.items.map((item) => (
                <div className="space-y-2" key={item.label}>
                  <h4 className="text-sm font-semibold text-foreground">
                    {item.label}
                  </h4>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </SectionContainer>
  );
}
