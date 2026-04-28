import { TrialRegistrationForm } from "@/components/registration/trial-registration-form";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { registrationContent } from "@/content/registration-content";
import type { Locale } from "@/lib/i18n/config";

type RegistrationPageProps = {
  locale: Locale;
};

export function RegistrationPage({ locale }: RegistrationPageProps) {
  const content = registrationContent[locale];

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
              <TrialRegistrationForm content={content.form} locale={locale} />
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
