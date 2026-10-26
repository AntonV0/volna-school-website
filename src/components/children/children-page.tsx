import Link from "next/link";
import { ApprovedImage } from "@/components/ui/approved-image";
import { StructuredData } from "@/components/seo/structured-data";
import { homeContent } from "@/content/home-content";
import type { CourseContent } from "@/content/course-content";
import {
  childrenDetails,
  childrenDetailKeys,
  childrenQuestions,
  words,
  type Copy,
} from "@/content/children-content";
import type { Locale } from "@/lib/i18n/config";
import { getCourseDetailPath, getLocalizedPath } from "@/lib/i18n/routing";
import { createCourseStructuredData } from "@/lib/metadata";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import {
  ChildHeading,
  ChildLink,
  ChildNav,
  ChildSection,
  ChildrenFees,
  ChildrenStart,
  LegacyAnchors,
  TrialButton,
} from "./children-shared";
import s from "./children.module.css";

export function ChildrenPage({
  locale,
  content,
}: {
  locale: Locale;
  content: CourseContent;
}) {
  const t = (copy: Copy) => words(copy, locale);
  const learning: [Copy, Copy][] = [
    [
      ["A voice of their own", "Свой голос на русском"],
      [
        "From answering a first question to explaining an opinion, children practise using Russian with a teacher and classmates who listen.",
        "От ответа на первый вопрос до собственного мнения — дети учатся говорить с учителем и одноклассниками, которые готовы слушать.",
      ],
    ],
    [
      ["Words that open up a world", "Слова, открывающие мир"],
      [
        "Sounds become letters, letters become stories. Reading, writing and grammar develop together, with a curriculum matched to each stage.",
        "Звуки становятся буквами, а буквы — историями. Чтение, письмо и грамматика развиваются вместе по программе своего этапа.",
      ],
    ],
    [
      ["Progress you can follow", "Прогресс, который виден"],
      [
        "Weekly practice and teacher feedback show what is becoming easier and what needs attention. Older learners build foundations for GCSE Russian.",
        "Домашняя практика и обратная связь показывают, что уже получается, а над чем ещё стоит поработать. Старшие ученики готовят основу для GCSE Russian.",
      ],
    ],
  ];
  const reviews =
    homeContent.en.testimonial.items
      ?.filter((item) => item.routeKey === "children")
      .slice(0, 2) ?? [];
  const ruQuotes = [
    "Мой сын уже немного знал русский, когда пришёл в Volna. Здесь он продолжает учиться так, словно по-прежнему ходит в школу в России. Ему нравится заниматься с друзьями, уроки кажутся интересными, и он всегда их ждёт.",
    "Уже через несколько недель моя дочь с удовольствием учила меня новым русским словам. Она начала совсем без знания языка, поэтому особенно приятно видеть, как быстро она освоилась и как ей нравится учиться.",
  ];
  return (
    <div className={s.page} data-children-locale={locale}>
      <StructuredData
        data={createCourseStructuredData(locale, {
          ...content,
          faq: {
            ...content.faq,
            items: childrenQuestions.map((item) => ({
              question: t(item.question),
              answer: t(item.answer),
            })),
          },
        })}
      />
      <section className={`${s.section} ${s.hero}`}>
        <div className={s.wrap}>
          <nav
            className={s.breadcrumb}
            aria-label={t(["Breadcrumb", "Путь к странице"])}
          >
            <Link href={getLocalizedPath(locale, "home")}>
              {t(["Home", "Главная"])}
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">
              {t(["Classes for children", "Детские занятия"])}
            </span>
          </nav>
          <div className={s.heroGrid}>
            <div>
              <span className={s.eyebrow}>
                {t([
                  "Online Russian · Ages 3–16",
                  "Русский онлайн · Для детей 3–16 лет",
                ])}
              </span>
              <h1>
                {t([
                  "Russian that grows with your child.",
                  "Русский для общения, чтения и открытий.",
                ])}
              </h1>
              <p className={s.intro}>
                {t([
                  "From first words to confident reading and writing. Live Russian lessons for bilingual children and complete beginners, with a teacher who helps them take the next step.",
                  "От первых слов до уверенного чтения и письма. Живые уроки русского для билингвов и начинающих с учителем, который помогает двигаться дальше.",
                ])}
              </p>
              <div className={s.actions}>
                <TrialButton locale={locale} />
                <ChildLink href="#classes">
                  {t(["Explore the classes", "Выбрать занятия"])}
                </ChildLink>
              </div>
              <dl className={s.facts}>
                <div>
                  <dt>{t(["Small groups", "Малые группы"])}</dt>
                  <dd>{t(["Up to 8 learners", "До 8 учеников"])}</dd>
                </div>
                <div>
                  <dt>{t(["£15 / lesson", "£15 / урок"])}</dt>
                  <dd>
                    {t(["One-hour group lessons", "Часовые занятия в группе"])}
                  </dd>
                </div>
                <div>
                  <dt>{t(["One-to-one", "Один на один"])}</dt>
                  <dd>
                    {t([
                      "Flexible private tuition",
                      "Гибкие индивидуальные уроки",
                    ])}
                  </dd>
                </div>
              </dl>
            </div>
            <div className={s.heroImage}>
              <ApprovedImage
                image={VOLNA_IMAGES.courses.children.hero}
                priority
                sizes="(min-width: 1200px) 520px, (min-width: 768px) 45vw, 100vw"
              />
              <span className={s.photoLabel}>
                {t([
                  "Groups by age and level, with private tuition available.",
                  "Знакомый язык. Новая уверенность.",
                ])}
              </span>
            </div>
          </div>
        </div>
      </section>
      <ChildNav locale={locale} />
      <ChildSection id="classes">
        <LegacyAnchors ids={["overview", "study-options"]} />
        <ChildHeading
          locale={locale}
          eyebrow={["Find the right class", "Выберите подходящие занятия"]}
          title={[
            "Different beginnings. A place for each.",
            "Разный опыт. Подходящий класс для каждого.",
          ]}
          body={[
            "Start with your child’s experience of Russian. We’ll help you choose the level after a trial.",
            "Начните с того, насколько ребёнок знаком с русским. После пробного урока поможем выбрать уровень.",
          ]}
        />
        {locale === "en" && (
          <div className={s.choiceGuide}>
            <h3>Start with experience, then age.</h3>
            <p>
              <strong>Little or no Russian:</strong>{" "}
              <Link
                className={s.guideLink}
                href="/classes-for-children/russian-for-beginners"
              >
                explore beginner groups.
              </Link>
            </p>
            <p>
              <strong>Ages 3–7 with some familiarity:</strong>{" "}
              <Link
                className={s.guideLink}
                href="/classes-for-children/early-years"
              >
                look at early years.
              </Link>
            </p>
            <p>
              <strong>School-age children who already use Russian:</strong>{" "}
              <Link
                className={s.guideLink}
                href="/classes-for-children/bilingual-classes"
              >
                explore bilingual classes.
              </Link>
            </p>
            <p>
              Age ranges overlap; the trial helps us recommend a group.{" "}
              <Link
                className={s.guideLink}
                href="/classes-for-children/private-tuition"
              >
                Private tuition
              </Link>{" "}
              offers an individual pace at any level.
            </p>
          </div>
        )}
        <div className={s.options}>
          {childrenDetailKeys.map((key) => {
            const detail = childrenDetails[key];
            return (
              <article className={s.option} key={key}>
                <div className={s.optionImage}>
                  <ApprovedImage
                    image={VOLNA_IMAGES.courseDetails[key]}
                    style={{
                      objectPosition:
                        key === "children-bilingual"
                          ? "68% center"
                          : key === "children-early-years"
                            ? "40% center"
                            : "center",
                    }}
                    sizes="(min-width: 1024px) 200px, (min-width: 480px) 45vw, 30vw"
                  />
                </div>
                <div className={s.optionBody}>
                  <span className={s.eyebrow}>{t(detail.ages)}</span>
                  <h3>{t(detail.label)}</h3>
                  <p>{t(detail.card)}</p>
                  <ChildLink href={getCourseDetailPath(locale, key)}>
                    {locale === "en"
                      ? {
                          "children-bilingual": "View bilingual classes",
                          "children-rfl": "View RFL groups",
                          "children-early-years": "View early-years groups",
                          "children-private-tuition": "View private tuition",
                        }[key]
                      : "Подробнее"}
                    {locale !== "en" && (
                      <span className="sr-only">: {t(detail.label)}</span>
                    )}
                  </ChildLink>
                </div>
              </article>
            );
          })}
        </div>
        <p className={s.note}>
          {t([
            "Unsure between early years and school-age classes? Ages overlap: we recommend a group based on your child’s spoken Russian, reading and writing.",
            "Не уверены, выбрать дошкольную или школьную группу? Возрастные диапазоны пересекаются: мы подберём группу с учётом устной речи, чтения и письма ребёнка.",
          ])}
        </p>
      </ChildSection>
      <ChildSection id="learning" wash>
        <LegacyAnchors ids={["learning-routes"]} />
        <div className={s.learningGrid}>
          <div className={s.learningImage}>
            <ApprovedImage
              image={VOLNA_IMAGES.home.approach}
              sizes="(min-width: 1200px) 480px, (min-width: 768px) 42vw, 100vw"
            />
          </div>
          <div>
            <span className={s.eyebrow}>
              {t(["Learning with purpose", "Обучение с понятной целью"])}
            </span>
            <h2>
              {t([
                "More to say. More to discover.",
                "Больше слов. Больше открытий.",
              ])}
            </h2>
            <div className={s.learningItems}>
              {learning.map(([title, body], index) => (
                <div className={s.learningItem} key={title[0]}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <div>
                    <h3>{t(title)}</h3>
                    <p>{t(body)}</p>
                  </div>
                </div>
              ))}
            </div>
            <ChildLink href={getLocalizedPath(locale, "gcse")}>
              {t(["Looking ahead to GCSE", "Следующий этап — GCSE"])}
            </ChildLink>
          </div>
        </div>
      </ChildSection>
      <ChildrenFees locale={locale} />
      <ChildSection id="reviews" wash>
        <ChildHeading
          locale={locale}
          eyebrow={["From our families", "Отзывы родителей"]}
          title={[
            "Confidence carries beyond the lesson.",
            "Уверенность остаётся и после урока.",
          ]}
        />
        <div className={s.reviews}>
          {reviews.map((review, index) => (
            <figure className={s.quote} key={review.name}>
              <blockquote>
                “{locale === "en" ? review.quote : ruQuotes[index]}”
              </blockquote>
              <figcaption>
                <strong>
                  {locale === "en"
                    ? review.name
                    : index === 0
                      ? "Екатерина"
                      : "Иван"}
                </strong>{" "}
                · {t(["Parent", "Родитель"])}
                <br />
                {t(
                  index === 0
                    ? ["Bilingual classes", "Занятия для билингвов"]
                    : ["Russian for beginners", "Русский с нуля"],
                )}
              </figcaption>
            </figure>
          ))}
        </div>
        <ChildLink href={getLocalizedPath(locale, "about")}>
          {t(["Meet the school behind the lessons", "Познакомиться со школой"])}
        </ChildLink>
      </ChildSection>
      <ChildrenStart locale={locale} />
    </div>
  );
}
