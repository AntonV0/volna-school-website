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
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={content.hero.eyebrow}
              title={content.hero.title}
            >
              <p>{content.hero.body}</p>
            </SectionHeading>
            <div className="rounded-md border border-brand-teal/20 bg-brand-teal-soft p-4 text-sm leading-6 text-brand-teal-deep">
              {content.hero.nextStep}
            </div>
          </div>

          <div className="rounded-lg border border-border-soft bg-background p-5 shadow-[var(--shadow-soft)] sm:p-6 lg:p-8">
            <div className="mb-6 space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">
                {content.form.title}
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                {content.form.description}
              </p>
            </div>
            <TrialRegistrationForm content={content.form} locale={locale} />
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
