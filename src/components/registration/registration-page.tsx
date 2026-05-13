import { TrialRegistrationForm } from "@/components/registration/trial-registration-form";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { registrationContent } from "@/content/registration-content";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/config";
import { VOLNA_IMAGES } from "@/lib/volna-images";

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
  const selectedCourseLabel = content.form.courseOptions.find(
    (option) => option.value === safeCourseInterest,
  )?.label;
  const contactCard =
    locale === "en"
      ? {
          title: "Prefer to ask first?",
          body:
            "Families are welcome to contact the school directly if they need help choosing a course, checking availability, or confirming the best route before sending the form.",
          phoneLabel: "Call the school",
          emailLabel: "Email the school",
        }
      : {
          title: site.footer.contact.title,
          body: "",
          phoneLabel: site.footer.contact.phone,
          emailLabel: site.footer.contact.email,
        };

  return (
    <>
      <SectionContainer className="bg-[linear-gradient(180deg,#fffdf8_0%,#f7fcfd_58%,#ffffff_100%)]">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow={content.hero.eyebrow}
              title={content.hero.title}
            >
              <p>{content.hero.body}</p>
            </SectionHeading>
            <div className="border-l-4 border-brand-red bg-white px-5 py-4 text-sm font-semibold leading-6 text-brand-teal-deep shadow-sm">
              {content.hero.nextStep}
            </div>

            {activeGuide ? (
              <div className="rounded-lg border border-brand-gold/35 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
                    {locale === "en" ? "Route guide" : content.process.eyebrow}
                  </p>
                  {selectedCourseLabel ? (
                    <span className="rounded-full bg-brand-teal-soft px-3 py-1 text-xs font-semibold text-brand-teal">
                      {selectedCourseLabel}
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-3 text-xl font-semibold leading-tight text-foreground">
                  {activeGuide.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {activeGuide.description}
                </p>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-foreground">
                  {activeGuide.prompts.map((prompt) => (
                    <li className="border-l-2 border-brand-gold pl-3" key={prompt}>
                      {prompt}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <MediaFrame
              className="border-4 border-white"
              image={VOLNA_IMAGES.home.enrollment}
              label={content.hero.eyebrow}
              sizes="(min-width: 1024px) 36vw, 100vw"
              variant="online"
            />
          </div>

          <div className="overflow-hidden rounded-lg border border-brand-teal/15 bg-white shadow-[var(--shadow-soft)]">
            <div className="h-2 bg-[linear-gradient(90deg,var(--brand-teal),var(--brand-gold),var(--brand-red))]" />
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
                {selectedCourseLabel ? (
                  <p className="mt-4 inline-flex rounded-full bg-brand-teal-soft px-3 py-1 text-xs font-semibold text-brand-teal">
                    {locale === "en" ? "Selected course: " : ""}
                    {selectedCourseLabel}
                  </p>
                ) : null}
              </div>
              <TrialRegistrationForm
                content={content.form}
                initialCourseInterest={safeCourseInterest}
                locale={locale}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-lg border border-brand-teal/15 bg-white shadow-sm">
            <div className="h-1.5 bg-brand-teal" />
            <div className="p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-teal">
                {content.process.eyebrow}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-foreground">
                {content.process.title}
              </h2>
              <ol className="mt-5 grid gap-3">
                {content.process.steps.map((step, index) => (
                  <li
                    className="grid gap-3 rounded-md border border-brand-teal/10 bg-surface-blue/50 p-4 sm:grid-cols-[2.5rem_1fr]"
                    key={step.title}
                  >
                    <span
                      className="flex shrink-0 items-center justify-center rounded-full bg-brand-teal text-sm font-semibold text-white"
                      style={{ height: "2rem", width: "2rem" }}
                    >
                      {String(index + 1).padStart(2, "0")}
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
          </div>

          <div className="grid gap-5">
            <div className="rounded-lg border border-brand-gold/35 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold leading-tight text-foreground">
                {content.reassurance.title}
              </h2>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
                {content.reassurance.items.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-gold"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-brand-red/20 bg-white p-5 text-sm leading-6 text-muted-foreground shadow-sm">
              <h2 className="text-lg font-semibold leading-tight text-foreground">
                {contactCard.title}
              </h2>
              {contactCard.body ? (
                <p className="mt-3">{contactCard.body}</p>
              ) : null}
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-teal/25 bg-brand-teal-soft px-4 py-2 text-center text-sm font-semibold text-brand-teal transition hover:bg-brand-teal/10"
                  href="tel:+447881764892"
                >
                  {contactCard.phoneLabel}
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-red/20 bg-white px-4 py-2 text-center text-sm font-semibold text-brand-red transition hover:bg-brand-red/5"
                  href={`mailto:${site.footer.contact.email}`}
                >
                  {contactCard.emailLabel}
                </a>
              </div>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                {site.footer.contact.phone} | {site.footer.contact.email}
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
