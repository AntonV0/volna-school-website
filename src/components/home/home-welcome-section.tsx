import { ApprovedImage } from "@/components/ui/approved-image";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";
import { homeContent } from "@/content/home-content";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath } from "@/lib/i18n/routing";
import { VOLNA_IMAGES } from "@/lib/volna-images";

const welcomeDetailParagraphs = [
  "We offer a wide range of online Russian classes for students of all ages, with a curriculum shaped for families and learners living in the United Kingdom.",
  "Our teachers bring years of experience from supplementary Russian schools and carry that same warm, structured teaching style into online tuition.",
  "With professional tutors, engaging methods, and a comprehensive curriculum, Volna helps students learn Russian in a way that is convenient, supportive, and enjoyable.",
];

const welcomeTrustItems = [
  { label: "Live online lessons", value: "Microsoft Teams and Zoom" },
  { label: "UK-focused curriculum", value: "Designed for learners in the United Kingdom" },
  { label: "Experienced teachers", value: "A warm style carried from supplementary Russian schools" },
];

function HomeWelcomeGallery({ locale }: { locale: Locale }) {
  const [communityImage, classroomImage, eventImage, groupImage] =
    VOLNA_IMAGES.home.welcomeGallery;

  return (
    <div className="grid content-center gap-3">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border-soft bg-brand-teal-soft shadow-[var(--shadow-soft)]">
        <ApprovedImage
          className="object-[50%_48%]"
          image={communityImage}
          sizes="(min-width: 1024px) 46vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-deep/28 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-md bg-white/92 px-4 py-2 text-sm font-semibold text-brand-teal shadow-sm backdrop-blur">
          {locale === "en" ? "Pushkin School community" : "Сообщество Pushkin School"}
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { image: classroomImage, label: locale === "en" ? "Classroom rhythm" : "Классная атмосфера" },
          { image: eventImage, label: locale === "en" ? "School events" : "Школьные события" },
          { image: groupImage, label: locale === "en" ? "Families and teachers" : "Семьи и учителя" },
        ].map((item) => (
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border-soft bg-brand-teal-soft shadow-sm"
            key={item.label}
          >
            <ApprovedImage
              image={item.image}
              sizes="(min-width: 1024px) 14vw, (min-width: 640px) 30vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-deep/42 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 rounded bg-white/90 px-2.5 py-1.5 text-xs font-semibold text-brand-teal shadow-sm backdrop-blur">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HomeWelcomeSection({ locale }: { locale: Locale }) {
  const content = homeContent[locale];
  const detailParagraphs =
    locale === "en" ? welcomeDetailParagraphs : [content.welcome.body];
  const trustItems =
    locale === "en"
      ? welcomeTrustItems
      : content.hero.trustSignals.slice(0, 3).map((signal) => ({
          label: signal,
          value: content.approach.points.find((point) => point.title === signal)?.description ?? signal,
        }));

  return (
    <SectionContainer className="bg-section-wash py-12 lg:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-stretch">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {content.welcome.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-brand-teal sm:text-4xl lg:text-5xl">
            {content.welcome.title}
          </h2>
          <p className="mt-3 max-w-xl text-lg font-semibold leading-8 text-foreground">
            {content.welcome.body}
          </p>

          <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-muted-foreground">
            {detailParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-8 grid gap-4 border-y border-brand-teal/18 py-5 md:grid-cols-3">
            {trustItems.map((item) => (
              <div className="min-w-0" key={item.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-blue">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm font-semibold leading-6 text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <ButtonLink
            className="mt-7 w-full self-start sm:w-auto"
            href={getLocalizedPath(locale, "about")}
            variant="secondary"
          >
            {content.welcome.ctaLabel}
          </ButtonLink>
        </div>

        <HomeWelcomeGallery locale={locale} />
      </div>
    </SectionContainer>
  );
}
