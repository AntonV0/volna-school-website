"use client";
import { useState } from "react";
import { TrialRegistrationForm } from "@/components/registration/trial-registration-form";
import { BrandCard } from "@/components/ui/brand-card";
import { ButtonLink } from "@/components/ui/button-link";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { registrationContent } from "@/content/registration-content";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/config";
import { VOLNA_IMAGES } from "@/lib/volna-images";

type RegistrationPageProps = {
  initialCourseInterest?: string;
  initialClassPreference?: string;
  initialAdultFocus?: string;
  initialChildrenFocus?: string;
  initialEnquiryFor?: string;
  locale: Locale;
};

export function RegistrationPage({
  initialCourseInterest,
  initialClassPreference,
  initialAdultFocus,
  initialChildrenFocus,
  initialEnquiryFor,
  locale,
}: RegistrationPageProps) {
  const content = registrationContent[locale];
  const site = siteContent[locale];
  const safeCourseInterest = content.form.courseOptions.some(
    (option) => option.value === initialCourseInterest,
  )
    ? initialCourseInterest
    : "";
  const safeClassPreference = content.form.classPreferenceOptions.some(
    (option) => option.value === initialClassPreference,
  )
    ? initialClassPreference
    : "";
  const [selectedCourse, setSelectedCourse] = useState(safeCourseInterest);
  const activeGuide =
    content.courseGuides.find((guide) => guide.value === selectedCourse) ??
    content.courseGuides.find((guide) => guide.value === "not_sure");
  const selectedCourseLabel = content.form.courseOptions.find(
    (option) => option.value === selectedCourse,
  )?.label;
  const contactCard = content.contactPrompt;

  if (locale === "en") {
    return (
      <SectionContainer className="bg-[linear-gradient(180deg,var(--section-wash),white)]">
        <div className="mx-auto max-w-5xl">
          <header className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">
              Free trial lesson
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-brand-teal-deep sm:text-5xl">
              Let’s arrange your first lesson.
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Choose a live online course and tell us how to reach you. We’ll
              contact you to agree a suitable trial time. No payment details
              needed.
            </p>
          </header>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_17rem]">
            <div className="rounded-xl border border-brand-teal/15 bg-white p-5 shadow-sm sm:p-8">
              <h2 className="sr-only">Trial lesson details</h2>
              <TrialRegistrationForm
                content={content.form}
                locale={locale}
                initialCourseInterest={safeCourseInterest}
                initialClassPreference={safeClassPreference}
                initialAdultFocus={initialAdultFocus}
                initialChildrenFocus={initialChildrenFocus}
                initialEnquiryFor={initialEnquiryFor}
                onCourseChange={setSelectedCourse}
              />
            </div>
            <aside className="space-y-8 lg:sticky lg:top-28">
              <div>
                <h2 className="text-lg font-semibold text-brand-teal-deep">
                  What happens next?
                </h2>
                <ol className="mt-4 space-y-4 text-sm leading-6 text-muted-foreground">
                  <li>
                    <strong className="text-brand-teal-deep">
                      1. We get in touch.
                    </strong>{" "}
                    We’ll discuss the learner’s experience and arrange a trial.
                  </li>
                  <li>
                    <strong className="text-brand-teal-deep">
                      2. Meet your teacher.
                    </strong>{" "}
                    Try a lesson and discuss a suitable course or level.
                  </li>
                  <li>
                    <strong className="text-brand-teal-deep">
                      3. Decide whether to continue.
                    </strong>{" "}
                    Confirm lesson times, format and fees with the school.
                  </li>
                </ol>
              </div>
              <div className="border-t border-border-soft pt-6 text-sm leading-6">
                <h2 className="text-lg font-semibold text-brand-teal-deep">
                  Have a question first?
                </h2>
                <p className="mt-3 text-muted-foreground">
                  We’re happy to help students and families choose a course.
                </p>
                <a
                  className="mt-3 block font-semibold text-brand-teal underline underline-offset-4"
                  href="mailto:info@volnaschool.com"
                >
                  info@volnaschool.com
                </a>
                <a
                  className="mt-2 block text-brand-teal underline underline-offset-4"
                  href="tel:+447881764892"
                >
                  +44 7881 764892
                </a>
              </div>
            </aside>
          </div>
        </div>
      </SectionContainer>
    );
  }

  return (
    <>
      <SectionContainer className="bg-[linear-gradient(180deg,var(--section-wash)_0%,var(--background)_58%,var(--surface)_100%)]">
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
              <BrandCard className="border-accent-border">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
                    {content.labels.routeGuide}
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
                    <li className="border-l-2 border-accent pl-3" key={prompt}>
                      {prompt}
                    </li>
                  ))}
                </ul>
              </BrandCard>
            ) : null}

            <MediaFrame
              className="border-4 border-white"
              image={VOLNA_IMAGES.home.enrollment}
              label={content.hero.eyebrow}
              sizes="(min-width: 1024px) 36vw, 100vw"
              variant="online"
            />
          </div>

          <BrandCard
            as="div"
            className="overflow-hidden border-brand-teal/15"
            padding="none"
            shadow="soft"
          >
            <div className="h-2 bg-[linear-gradient(90deg,var(--brand-teal),var(--accent),var(--brand-red))]" />
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
                    {content.labels.selectedCoursePrefix}
                    {selectedCourseLabel}
                  </p>
                ) : null}
              </div>
              <TrialRegistrationForm
                initialEnquiryFor={initialEnquiryFor}
                onCourseChange={setSelectedCourse}
                initialChildrenFocus={initialChildrenFocus}
                key={`${safeCourseInterest}:${safeClassPreference}:${initialAdultFocus ?? ""}`}
                initialAdultFocus={initialAdultFocus}
                initialClassPreference={safeClassPreference}
                content={content.form}
                initialCourseInterest={safeCourseInterest}
                locale={locale}
              />
            </div>
          </BrandCard>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <BrandCard
            as="div"
            className="overflow-hidden border-brand-teal/15"
            padding="none"
          >
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
          </BrandCard>

          <div className="grid gap-5">
            <BrandCard as="div" className="border-accent-border">
              <h2 className="text-lg font-semibold leading-tight text-foreground">
                {content.reassurance.title}
              </h2>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
                {content.reassurance.items.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </BrandCard>

            <BrandCard
              as="div"
              className="border-brand-red/20 text-sm leading-6 text-muted-foreground"
            >
              <h2 className="text-lg font-semibold leading-tight text-foreground">
                {contactCard.title}
              </h2>
              {contactCard.body ? (
                <p className="mt-3">{contactCard.body}</p>
              ) : null}
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <ButtonLink href="tel:+447881764892" variant="soft">
                  {contactCard.phoneLabel}
                </ButtonLink>
                <ButtonLink
                  href={`mailto:${site.footer.contact.email}`}
                  variant="secondary"
                >
                  {contactCard.emailLabel}
                </ButtonLink>
              </div>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                {site.footer.contact.phone} | {site.footer.contact.email}
              </p>
            </BrandCard>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
