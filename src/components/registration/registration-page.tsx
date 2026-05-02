import { TrialRegistrationForm } from "@/components/registration/trial-registration-form";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { registrationContent } from "@/content/registration-content";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/config";

type RegistrationPageProps = {
  initialCourseInterest?: string;
  locale: Locale;
};

export function RegistrationPage({
  initialCourseInterest,
  locale,
}: RegistrationPageProps) {
  const content = registrationContent[locale];
  const site = siteContent[locale];
  const safeCourseInterest = content.form.courseOptions.some(
    (option) => option.value === initialCourseInterest,
  )
    ? initialCourseInterest
    : "";
  const activeGuide =
    content.courseGuides.find((guide) => guide.value === safeCourseInterest) ??
    content.courseGuides.find((guide) => guide.value === "not_sure");

  return (
    <>
      <SectionContainer className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow={content.hero.eyebrow}
              title={content.hero.title}
            >
              <p>{content.hero.body}</p>
            </SectionHeading>
            <div className="rounded-lg border border-brand-teal/20 bg-brand-teal-soft p-5 text-sm leading-6 text-brand-teal-deep shadow-sm">
              {content.hero.nextStep}
            </div>

            <div className="rounded-lg border border-border-soft bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-teal">
                {content.process.eyebrow}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-foreground">
                {content.process.title}
              </h2>
              <ol className="mt-5 space-y-4">
                {content.process.steps.map((step, index) => (
                  <li className="flex gap-3" key={step.title}>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-teal text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">
                        {step.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                        {step.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {activeGuide ? (
              <div className="rounded-lg border border-brand-gold/35 bg-brand-blue-soft p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-foreground">
                  {activeGuide.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {activeGuide.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-foreground">
                  {activeGuide.prompts.map((prompt) => (
                    <li className="flex gap-2" key={prompt}>
                      <span aria-hidden="true" className="text-brand-red">
                        +
                      </span>
                      <span>{prompt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="rounded-lg border border-border-soft bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">
                {content.reassurance.title}
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                {content.reassurance.items.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <span aria-hidden="true" className="text-brand-teal">
                      +
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border-soft bg-white p-5 text-sm leading-6 text-muted-foreground shadow-sm">
              <p className="font-semibold text-foreground">
                {site.footer.contact.title}
              </p>
              <p className="mt-2">
                <a className="text-brand-teal hover:underline" href="tel:+447881764892">
                  {site.footer.contact.phone}
                </a>
              </p>
              <p>
                <a
                  className="text-brand-teal hover:underline"
                  href={`mailto:${site.footer.contact.email}`}
                >
                  {site.footer.contact.email}
                </a>
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border-soft bg-white shadow-[var(--shadow-soft)]">
            <div className="h-1.5 bg-[linear-gradient(90deg,var(--brand-teal),var(--brand-blue),var(--brand-red))]" />
            <div className="p-5 sm:p-6 lg:p-8">
              <div className="mb-6 border-b border-border-soft pb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-teal">
                  {content.hero.eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">
                  {content.form.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {content.form.description}
                </p>
              </div>
              <TrialRegistrationForm
                content={content.form}
                initialCourseInterest={safeCourseInterest}
                locale={locale}
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
