import Link from "next/link";
import { calendarHref, childCalendarSlugs } from "@/content/calendars";
import { ApprovedImage } from "@/components/ui/approved-image";
import { StructuredData } from "@/components/seo/structured-data";
import type { CourseDetailContent } from "@/content/course-detail-content";
import {
  childrenClasses,
  childrenDetails,
  childrenDetailKeys,
  words,
  type ChildrenDetailKey,
  type Copy,
} from "@/content/children-content";
import type { Locale } from "@/lib/i18n/config";
import {
  getCourseDetailPath,
  getCourseDetailSlug,
  getLocalizedPath,
} from "@/lib/i18n/routing";
import { createCourseDetailStructuredData } from "@/lib/metadata";
import { VOLNA_IMAGES } from "@/lib/volna-images";
import {
  ChildHeading,
  ChildLink,
  ChildNav,
  ChildSection,
  ChildrenFees,
  ChildrenStart,
  LegacyAnchors,
  PrivateLessonLengths,
  TrialButton,
} from "./children-shared";
import s from "./children.module.css";

export function ChildrenDetailPage({
  content,
  locale,
}: {
  content: CourseDetailContent;
  locale: Locale;
}) {
  const detail = childrenDetails[content.key as ChildrenDetailKey];
  const t = (copy: Copy) => words(copy, locale);
  const isPrivate = detail.key === "children-private-tuition";
  const classes = childrenClasses.filter((item) =>
    detail.classIds.includes(item.id),
  );
  return (
    <div className={s.page} data-children-locale={locale}>
      <StructuredData
        data={createCourseDetailStructuredData(
          locale,
          {
            ...content,
            sections: detail.learning.map((item) => ({
              title: t(item.title),
              body: t(item.body),
            })),
            hero: {
              ...content.hero,
              title: t(detail.label),
              summary: t(detail.intro),
            },
          },
          t(["Russian classes for children", "Русский язык для детей"]),
        )}
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
            <Link href={getLocalizedPath(locale, "children")}>
              {t(["Classes for children", "Детские занятия"])}
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{t(detail.label)}</span>
          </nav>
          <div className={s.heroGrid}>
            <div>
              <span className={s.eyebrow}>{t(detail.label)}</span>
              <h1>{t(detail.title)}</h1>
              <p className={s.intro}>{t(detail.intro)}</p>
              <p className={s.suitability}>
                {t(detail.ages)} · {t(detail.eyebrow)}
              </p>
              <div className={s.actions}>
                <TrialButton
                  locale={locale}
                  isPrivate={isPrivate}
                  focus={getCourseDetailSlug(detail.key)}
                />
                <ChildLink
                  href={isPrivate ? "#lesson-format" : "#class-levels"}
                >
                  {t(
                    isPrivate
                      ? ["Compare lesson lengths", "Выбрать длительность"]
                      : ["Explore groups & times", "Группы и расписание"],
                  )}
                </ChildLink>
              </div>
              <dl className={s.facts}>
                <div>
                  <dt>
                    {t(
                      isPrivate
                        ? ["Your schedule", "Ваш график"]
                        : ["2 × 1 hour", "2 × 1 час"],
                    )}
                  </dt>
                  <dd>
                    {t(
                      isPrivate
                        ? ["Agreed with your teacher", "По договорённости"]
                        : ["Each teaching week", "Каждую учебную неделю"],
                    )}
                  </dd>
                </div>
                <div>
                  <dt>{isPrivate ? "£35" : "£15"}</dt>
                  <dd>{t(["Per one-hour lesson", "За часовой урок"])}</dd>
                </div>
                <div>
                  <dt>
                    {t(
                      isPrivate
                        ? ["One-to-one", "Один на один"]
                        : ["Up to 8", "До 8"],
                    )}
                  </dt>
                  <dd>
                    {t(
                      isPrivate
                        ? ["Focused teacher attention", "Внимание учителя"]
                        : ["Children per group", "Детей в группе"],
                    )}
                  </dd>
                </div>
              </dl>
              {detail.key === "children-early-years" && (
                <p className={s.heroSupport}>
                  {t([
                    "Ages 3–4: a parent is strongly encouraged to stay and help during the lesson.",
                    "Для детей 3–4 лет настоятельно рекомендуем присутствие и помощь родителя на уроке.",
                  ])}
                </p>
              )}
            </div>
            <div className={s.heroImage}>
              <ApprovedImage
                image={VOLNA_IMAGES.courseDetails[detail.key]}
                priority
                sizes="(min-width: 1200px) 520px, (min-width: 768px) 45vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>
      <ChildNav
        locale={locale}
        detail
        isPrivate={isPrivate}
        focus={getCourseDetailSlug(detail.key)}
      />
      <ChildSection id="learning">
        <LegacyAnchors ids={["summary"]} />
        <div className={s.fit}>
          <div>
            <span className={s.eyebrow}>
              {t(["Who it’s for", "Кому подойдёт"])}
            </span>
            <h2>{t(detail.ages)}</h2>
          </div>
          <div>
            <p>{t(detail.fit)}</p>
            {detail.key === "children-bilingual" && (
              <ChildLink
                href={getCourseDetailPath(locale, "children-early-years")}
              >
                {t([
                  "Explore early years, ages 3–7",
                  "Дошкольные группы, 3–7 лет",
                ])}
              </ChildLink>
            )}
            {detail.key === "children-early-years" && (
              <ChildLink href={getCourseDetailPath(locale, "children-rfl")}>
                {t([
                  "Starting from zero? See beginners",
                  "Начинаете с нуля? Посмотрите РКИ",
                ])}
              </ChildLink>
            )}
          </div>
        </div>
        <span className={s.eyebrow}>
          {t(["What they’ll learn", "Чему научится ребёнок"])}
        </span>
        <h2>{t(detail.learningTitle)}</h2>
        <div className={s.detailLearning}>
          {detail.learning.map((item, index) => (
            <article key={item.title[0]}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{t(item.title)}</h3>
              <p>{t(item.body)}</p>
            </article>
          ))}
        </div>
        {locale === "en" && (
          <div className={s.learningLinks}>
            <ChildLink href={getLocalizedPath(locale, "about")}>
              Meet the school
            </ChildLink>
            <ChildLink
              href={`${getLocalizedPath(locale, "children")}#preparation`}
            >
              Before your first lesson
            </ChildLink>
          </div>
        )}
      </ChildSection>
      {isPrivate ? (
        <ChildSection id="lesson-format" wash>
          <ChildHeading
            locale={locale}
            eyebrow={["A format that fits", "Удобный формат"]}
            title={["Choose a lesson length.", "Выберите длительность урока."]}
            body={[
              "Agree a lesson length and frequency around your child’s age, attention and goals. Days and times are arranged with the teacher.",
              "Согласуйте длительность и частоту с учётом возраста, внимания и целей ребёнка. Дни и время подбираются с учителем.",
            ]}
          />
          <LegacyAnchors ids={["fees-and-times", "prices", "calendar"]} />
          <PrivateLessonLengths locale={locale} />
          <p className={s.note}>
            {t([
              "You can follow our group-class curriculum privately or agree a focused plan. The trial helps us choose a useful starting point together.",
              "Можно проходить групповую программу индивидуально или составить план по отдельным задачам. Пробный урок поможет выбрать отправную точку.",
            ])}
          </p>
          {locale === "en" && (
            <>
              <aside
              className={s.practicalNote}
              id="russian-writing-course"
              tabIndex={-1}
            >
              <span className={s.eyebrow}>Before GCSE Russian</span>
              <h3>Russian writing course</h3>
              <p>
                A short one-to-one course for Russian-speaking students who need
                to build reading and writing before GCSE. Most students use this
                focused support for one to two months before reviewing their next step.
              </p>
              <ChildLink href="/registration?course=gcse&format=private">
                Ask about the Russian writing course
              </ChildLink>
              </aside>
              <aside
              className={s.practicalNote}
              id="rfl-private-tuition"
              tabIndex={-1}
            >
              <span className={s.eyebrow}>Russian as a Foreign Language</span>
              <h3>RFL private tuition</h3>
              <p>
                One-to-one lessons for students aged 9+ who are starting Russian
                from the basics. Lessons develop speaking, reading and writing at
                a pace agreed with the teacher.
              </p>
              <ChildLink href="/registration?course=gcse&format=private">
                Ask about RFL private tuition
              </ChildLink>
              </aside>
            </>
          )}
          <div className={s.practicalNote}>
            <h3>{t(["Scheduling and payment", "Расписание и оплата"])}</h3>
            <p>
              {t([
                "Lessons take place on Zoom. We agree the frequency and schedule with you; holiday lessons depend on teacher availability. If you decide to continue after the trial, the school confirms your plan and payment arrangements before paid lessons begin.",
                "Уроки проходят в Zoom. Частоту и расписание согласуем с вами; занятия на каникулах зависят от свободного времени учителя. После пробного урока школа подтвердит план и условия оплаты до начала платных занятий.",
              ])}
            </p>
            <ChildLink href={getLocalizedPath(locale, "refund")}>
              {t(["Payment and refund terms", "Условия оплаты и возврата"])}
            </ChildLink>
          </div>
        </ChildSection>
      ) : (
        <ChildSection id="class-levels" wash>
          <ChildHeading
            locale={locale}
            eyebrow={
              detail.key === "children-rfl"
                ? ["Two age groups", "Две возрастные группы"]
                : ["Class progression", "Ступени обучения"]
            }
            title={
              detail.key === "children-rfl"
                ? [
                    "RFL groups by age.",
                    "Группы для начинающих по возрасту.",
                  ]
                : [
                    "See where your child could begin.",
                    "Посмотрите, с чего можно начать.",
                  ]
            }
            body={
              detail.key === "children-rfl"
                ? [
                    "Both groups start with the foundations. Activities and pace are adapted to their ages; we help you choose a suitable trial.",
                    "Обе группы начинают с основ. Задания и темп соответствуют возрасту детей; мы поможем подобрать пробный урок.",
                  ]
                : [
                    "Age ranges overlap because children develop at different rates. We consider spoken Russian, reading and writing together when recommending a group.",
                    "Возрастные диапазоны пересекаются: дети развиваются в разном темпе. При выборе группы мы учитываем устную речь, чтение и письмо.",
                  ]
            }
          />
          <div
            className={
              detail.key === "children-rfl"
                ? s.beginnerGroups
                : `${s.classList} ${detail.key === "children-bilingual" ? s.progression : ""}`
            }
          >
            {classes.map((item, index) =>
              detail.key === "children-rfl" ? (
                <article
                  className={s.beginnerGroup}
                  id={item.id === "rfl-older" ? "ages-9-plus" : "ages-4-to-8"}
                  key={item.id}
                  tabIndex={-1}
                >
                  <span className={s.eyebrow}>
                    {t(["Ages", "Возраст"])} {item.ages}
                  </span>
                  <h3>{t(item.name)}</h3>
                  <p className={s.groupFocus}>{t(item.focus)}</p>
                  <p>{t(item.learning)}</p>
                </article>
              ) : (
                <details
                  className={s.classRow}
                  key={item.id}
                  open={index === 0}
                >
                  <summary>
                    <span>
                      <strong>{t(item.name)}</strong>
                      <small>
                        {t(["Ages", "Возраст"])} {item.ages}
                      </small>
                    </span>
                    <span className={s.classFocus}>{t(item.focus)}</span>
                  </summary>
                  <div className={s.classBody}>
                    <p>{t(item.learning)}</p>
                  </div>
                </details>
              ),
            )}
          </div>
          {detail.key === "children-early-years" && (
            <aside className={s.parentSupport}>
              <span className={s.eyebrow}>
                {t(["Learning together", "Учимся вместе"])}
              </span>
              <h3>
                {t([
                  "Your part in the Junior Group",
                  "Роль родителя в младшей группе",
                ])}
              </h3>
              <p>
                {t([
                  "For ages 3–4, we strongly recommend staying with your child during the one-hour lesson to help with materials and attention. Activities vary throughout the session. Use the trial to see how the format suits your child and discuss the support they need with the teacher.",
                  "Для детей 3–4 лет мы настоятельно рекомендуем присутствие родителя на часовом уроке: помогайте с материалами и поддерживайте внимание ребёнка. Задания меняются в течение занятия. На пробном уроке вы сможете оценить формат и обсудить с учителем необходимую помощь.",
                ])}
              </p>
              <ChildLink
                href={getCourseDetailPath(locale, "children-private-tuition")}
              >
                {t([
                  "Need a shorter lesson? Explore private tuition",
                  "Нужен урок покороче? Посмотрите индивидуальные занятия",
                ])}
              </ChildLink>
            </aside>
          )}
          <div className={s.timetable} id="timetable" tabIndex={-1}>
            <table className={s.schedule}>
              <caption>
                {t(["Weekly lesson times", "Расписание на неделю"])}
              </caption>
              <thead>
                <tr>
                  <th scope="col">{t(["Class", "Группа"])}</th>
                  <th scope="col">{t(["First lesson", "Первый урок"])}</th>
                  <th scope="col">{t(["Second lesson", "Второй урок"])}</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{t(item.name)}{locale === "en" && <div><ChildLink href={calendarHref(childCalendarSlugs[item.id])}>View calendar</ChildLink></div>}</th>
                    <td>{t(item.times[0])}</td>
                    <td>{t(item.times[1])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              {t([
                "UK local time (GMT/BST). Lessons run during school terms. We confirm the recommended group and current availability when arranging your trial.",
                "Местное время Великобритании (GMT/BST). Занятия проходят в учебные триместры. Группу и наличие мест подтвердим при записи на пробный урок.",
              ])}
            </p>
            <ChildLink href={getLocalizedPath(locale, "termDates")}>
              {t(["See school holiday dates", "Посмотреть даты каникул"])}
            </ChildLink>
          </div>
          {detail.key === "children-bilingual" && (
            <p className={s.note}>
              {t([
                "Our Junior, Middle and Upper groups cover ages 3–7. ",
                "Младшая, средняя и старшая группы рассчитаны на детей 3–7 лет. ",
              ])}
              <Link
                className="underline underline-offset-4"
                href={getCourseDetailPath(locale, "children-early-years")}
              >
                {t([
                  "View early-years learning and times.",
                  "Программа и расписание дошкольных групп.",
                ])}
              </Link>
            </p>
          )}
        </ChildSection>
      )}
      {!isPrivate && <ChildrenFees locale={locale} mode="group" />}
      <ChildrenStart
        focus={getCourseDetailSlug(detail.key)}
        locale={locale}
        questions={detail.questions}
        compact
        isPrivate={isPrivate}
      />
      <div className={`${s.section} !pt-0`}>
        <div className={s.wrap}>
          <div className={s.related}>
            <span>
              {t(["Other children’s options", "Другие детские занятия"])}
            </span>
            {childrenDetailKeys
              .filter((key) => key !== detail.key)
              .map((key) => (
                <ChildLink key={key} href={getCourseDetailPath(locale, key)}>
                  {t(childrenDetails[key].label)}
                </ChildLink>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
