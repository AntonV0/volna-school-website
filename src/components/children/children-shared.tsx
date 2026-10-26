import Link from "next/link";
import type { ReactNode } from "react";
import { childrenFocusOptions } from "@/lib/registration/children-focus";
import { CourseLinkIcon } from "@/components/ui/course-link-icon";
import { ButtonLink } from "@/components/ui/button-link";
import {
  words,
  groupFee,
  privateLessonFees,
  childrenQuestions,
  type Copy,
} from "@/content/children-content";
import type { Locale } from "@/lib/i18n/config";
import { getCourseDetailPath, getLocalizedPath } from "@/lib/i18n/routing";
import { getTrialRegistrationPath } from "@/lib/registration/routing";
import s from "./children.module.css";
import { ChildrenSectionNav } from "./children-section-nav";

export function ChildSection({
  id,
  children,
  wash = false,
}: {
  id: string;
  children: ReactNode;
  wash?: boolean;
}) {
  return (
    <section
      id={id}
      data-language-section=""
      tabIndex={-1}
      className={`${s.section} ${wash ? s.wash : ""}`}
    >
      <div className={s.wrap}>{children}</div>
    </section>
  );
}

export function ChildHeading({
  eyebrow,
  title,
  body,
  locale,
}: {
  eyebrow: Copy;
  title: Copy;
  body?: Copy;
  locale: Locale;
}) {
  return (
    <div className={s.sectionHead}>
      <div>
        <span className={s.eyebrow}>{words(eyebrow, locale)}</span>
        <h2>{words(title, locale)}</h2>
      </div>
      {body && <p>{words(body, locale)}</p>}
    </div>
  );
}

export function ChildLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const Tag = href.startsWith("#") ? "a" : Link;
  return (
    <Tag className={s.textLink} href={href}>
      {children}
      <CourseLinkIcon href={href} />
    </Tag>
  );
}

export function TrialButton({
  locale,
  isPrivate = false,
  focus,
}: {
  locale: Locale;
  isPrivate?: boolean;
  focus?: string;
}) {
  return (
    <ButtonLink
      href={getTrialRegistrationPath(
        locale,
        "children",
        locale === "en" && isPrivate ? "private" : undefined,
        focus,
      )}
    >
      {words(["Request a free trial", "Записаться на пробный урок"], locale)}
    </ButtonLink>
  );
}

export function ChildNav({
  locale,
  detail = false,
  isPrivate = false,
  focus,
}: {
  locale: Locale;
  detail?: boolean;
  isPrivate?: boolean;
  focus?: string;
}) {
  const items: [string, Copy][] = detail
    ? [
        ["learning", ["Learning", "Обучение"]],
        [
          isPrivate ? "lesson-format" : "class-levels",
          isPrivate
            ? ["Lesson format", "Формат"]
            : ["Classes & times", "Группы и время"],
        ],
        ["fees-and-times", ["Fees", "Стоимость"]],
        ["questions", ["Questions", "Вопросы"]],
      ]
    : [
        ["classes", ["Classes", "Занятия"]],
        ["learning", ["Learning", "Обучение"]],
        ["fees-and-times", ["Fees & times", "Цены и время"]],
        ["getting-started", ["Getting started", "Как начать"]],
      ];
  const links = items
    .filter(([id]) => !(isPrivate && id === "fees-and-times"))
    .map(([id, label]) => ({
      id,
      label: words(
        isPrivate && id === "lesson-format"
          ? ["Format & fees", "Формат и цены"]
          : label,
        locale,
      ),
    }));
  return (
    <>
      {locale === "en" && (
        <nav className={s.pageNav} aria-label="Children’s course pages">
          <div className={s.wrap}>
            <span>Explore classes for children</span>
            <Link
              href="/classes-for-children"
              aria-current={!detail ? "page" : undefined}
            >
              Overview
            </Link>
            {childrenFocusOptions
              .filter((option) => option.value !== "not_sure")
              .map((option) => (
                <Link
                  key={option.value}
                  href={`/classes-for-children/${option.value}`}
                  aria-current={focus === option.value ? "page" : undefined}
                >
                  {option.value === "bilingual-classes"
                    ? "Bilingual"
                    : option.value === "russian-for-beginners"
                      ? "Beginners"
                      : option.label}
                </Link>
              ))}
          </div>
        </nav>
      )}
      <ChildrenSectionNav
        items={links}
        ariaLabel={words(["On this page", "На этой странице"], locale)}
        className={s.nav}
      >
        <Link
          className={s.navTrial}
          href={getTrialRegistrationPath(
            locale,
            "children",
            locale === "en" && isPrivate ? "private" : undefined,
            focus,
          )}
        >
          {words(["Free trial", "Пробный урок"], locale)}{" "}
          <span aria-hidden="true">→</span>
        </Link>
      </ChildrenSectionNav>
    </>
  );
}

export function LegacyAnchors({ ids }: { ids: string[] }) {
  return ids.map((id) => (
    <span key={id} id={id} className={s.anchor} aria-hidden="true" />
  ));
}

export function ChildrenFees({
  locale,
  mode = "all",
}: {
  locale: Locale;
  mode?: "all" | "group" | "private";
}) {
  const t = (copy: Copy) => words(copy, locale);
  return (
    <ChildSection id="fees-and-times">
      <LegacyAnchors ids={["prices", "calendar"]} />
      <ChildHeading
        locale={locale}
        eyebrow={["Fees & practical details", "Стоимость и организация"]}
        title={["Lesson fees and payment.", "Всё важное до начала занятий."]}
        body={[
          "Clear lesson prices, a regular learning rhythm and a free trial before you decide.",
          "Понятная стоимость, регулярные занятия и бесплатный пробный урок перед решением.",
        ]}
      />
      <div
        className={`${s.fees} ${locale === "en" && mode === "group" ? s.groupFees : ""}`}
      >
        {mode !== "private" && (
          <div className={s.fee}>
            <h3>{t(["Small-group lessons", "Занятия в небольшой группе"])}</h3>
            <div className={s.amount}>
              £{groupFee}{" "}
              <small>{t(["/ one-hour lesson", "/ часовой урок"])}</small>
            </div>
            <p>
              {t([
                "Two lessons a week · £30 per teaching week",
                "Два урока в неделю · £30 за учебную неделю",
              ])}
            </p>
            <ul>
              <li>
                {t([
                  "Up to eight children in a group",
                  "До восьми детей в группе",
                ])}
              </li>
              <li>
                {t([
                  "Live lessons on Microsoft Teams",
                  "Живые занятия в Microsoft Teams",
                ])}
              </li>
              <li>
                {t([
                  "Weekly homework and teacher feedback",
                  "Еженедельные задания и обратная связь",
                ])}
              </li>
            </ul>
            {mode === "all" ? (
              <div className={s.feeLinks}>
                <ChildLink
                  href={`${getCourseDetailPath(locale, "children-bilingual")}#${locale === "en" ? "timetable" : "class-levels"}`}
                >
                  {t(["Bilingual timetable", "Расписание билингвов"])}
                </ChildLink>
                <ChildLink
                  href={`${getCourseDetailPath(locale, "children-rfl")}#${locale === "en" ? "timetable" : "class-levels"}`}
                >
                  {t(["RFL timetable", "Расписание РКИ"])}
                </ChildLink>
                <ChildLink
                  href={`${getCourseDetailPath(locale, "children-early-years")}#${locale === "en" ? "timetable" : "class-levels"}`}
                >
                  {t(["Early-years timetable", "Расписание дошкольников"])}
                </ChildLink>
              </div>
            ) : (
              <ChildLink
                href={locale === "en" ? "#timetable" : "#class-levels"}
              >
                {t(["View class times", "Смотреть расписание"])}
              </ChildLink>
            )}
          </div>
        )}
        {mode !== "group" && (
          <div className={s.fee}>
            <h3>{t(["One-to-one lessons", "Индивидуальные уроки"])}</h3>
            <div className={s.amount}>
              £35 <small>{t(["/ one-hour lesson", "/ часовой урок"])}</small>
            </div>
            <p>
              {t([
                "£20 for 30 minutes · £45 for 90 minutes",
                "£20 за 30 минут · £45 за 90 минут",
              ])}
            </p>
            <ul>
              <li>
                {t([
                  "A learning plan for your child’s priorities",
                  "Учебный план под задачи ребёнка",
                ])}
              </li>
              <li>
                {t([
                  "Days and times agreed with the teacher",
                  "Дни и время по договорённости",
                ])}
              </li>
              <li>{t(["Online lessons on Zoom", "Онлайн-занятия в Zoom"])}</li>
            </ul>
            {mode === "all" && (
              <ChildLink
                href={getCourseDetailPath(locale, "children-private-tuition")}
              >
                {t(["Explore private tuition", "Об индивидуальных занятиях"])}
              </ChildLink>
            )}
          </div>
        )}
        {mode !== "all" && (
          <div className={s.fee}>
            <h3>{t(["Payment arrangements", "Оплата занятий"])}</h3>
            <p style={{ marginTop: "1rem" }}>
              {t([
                "If you decide to continue after the trial, we’ll confirm the course and lesson arrangements. Invoices are sent on the first day of each month for lessons taught in the previous month. Pay by card or bank transfer.",
                "После пробного урока, если вы решите продолжить, мы подтвердим курс и расписание занятий. Счета выставляются первого числа каждого месяца за занятия, проведённые в предыдущем месяце. Оплатить можно картой или банковским переводом.",
              ])}
            </p>
          </div>
        )}
      </div>
      <div className={s.feeFoot}>
        <p>
          {t([
            mode === "group"
              ? "Group lessons run during school terms. Timetable times are UK local time (GMT/BST). "
              : "Group lessons run during school terms. All timetable times are UK local time (GMT/BST). Private lessons may continue in holidays by arrangement. ",
            "Групповые занятия проходят в учебные триместры. В расписании указано местное время Великобритании (GMT/BST). Индивидуальные уроки возможны на каникулах по договорённости. ",
          ])}
          {mode === "all" &&
            t([
              "If you decide to continue after the trial, we’ll confirm the course and lesson arrangements. Invoices are sent on the first day of each month for lessons taught in the previous month. ",
              "После пробного урока, если вы решите продолжить, мы подтвердим курс и расписание занятий. Счета выставляются первого числа каждого месяца за занятия, проведённые в предыдущем месяце. ",
            ])}
          <Link
            href={getLocalizedPath(locale, "refund")}
            className="underline underline-offset-4"
          >
            {t(["Payment and refund terms", "Условия оплаты и возврата"])}
          </Link>
        </p>
        <ChildLink href={getLocalizedPath(locale, "termDates")}>
          {t(["School term dates", "Школьный календарь"])}
        </ChildLink>
      </div>
    </ChildSection>
  );
}

export function ChildrenStart({
  locale,
  questions = childrenQuestions,
  compact = false,
  isPrivate = false,
  focus,
}: {
  locale: Locale;
  questions?: typeof childrenQuestions;
  compact?: boolean;
  isPrivate?: boolean;
  focus?: string;
}) {
  const t = (copy: Copy) => words(copy, locale);
  const steps = [
    [
      ["Tell us about your child", "Расскажите о ребёнке"],
      [
        "Share their age, Russian level and what you would like lessons to help with.",
        "Укажите возраст, уровень русского и задачи, которые хотите решить.",
      ],
    ],
    [
      ["We arrange a suitable trial", "Подберём пробный урок"],
      [
        "Our team contacts you to agree the class, format and lesson time.",
        "Мы свяжемся с вами, чтобы согласовать группу, формат и время.",
      ],
    ],
    [
      ["Choose the next step together", "Вместе выберем следующий шаг"],
      [
        "After the lesson, discuss the teacher’s recommendation and decide how to continue.",
        "После урока обсудим рекомендации учителя и дальнейшие занятия.",
      ],
    ],
  ] satisfies [Copy, Copy][];
  return (
    <ChildSection id="getting-started">
      <LegacyAnchors ids={["registration", "trial"]} />
      <ChildHeading
        locale={locale}
        eyebrow={["Starting at Volna", "Начало обучения в Volna"]}
        title={
          compact
            ? ["Your questions, answered.", "Ответы на ваши вопросы."]
            : [
                "Start with a free trial.",
                "Начните с бесплатного пробного урока.",
              ]
        }
      />
      <div className={compact ? s.compactStart : s.startGrid}>
        {!compact && (
          <ol className={s.steps}>
            {steps.map(([title, body], index) => (
              <li key={title[0]}>
                <span className={s.stepNumber} aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3>{t(title)}</h3>
                  <p>{t(body)}</p>
                </div>
              </li>
            ))}
          </ol>
        )}
        <div className={s.faq} id="questions" tabIndex={-1}>
          <LegacyAnchors ids={["faq"]} />
          {questions.map(({ question, answer }) => (
            <details
              key={question[0]}
              id={
                locale === "en" &&
                !compact &&
                question[0] === "What equipment will we need?"
                  ? "preparation"
                  : undefined
              }
              open={
                locale === "en" &&
                !compact &&
                question[0] === "What equipment will we need?"
                  ? true
                  : undefined
              }
            >
              <summary>{t(question)}</summary>
              <p>{t(answer)}</p>
            </details>
          ))}
        </div>
      </div>
      <div className={s.trial}>
        <div>
          <h3>{t(["Ready to try a lesson?", "Попробуем первый урок?"])}</h3>
          <p>
            {t([
              "Tell us about your child. We’ll contact you to arrange a suitable trial and discuss the next step afterwards.",
              "Расскажите о ребёнке. Мы свяжемся с вами, подберём пробный урок и после него обсудим дальнейшие занятия.",
            ])}
          </p>
        </div>
        <TrialButton locale={locale} isPrivate={isPrivate} focus={focus} />
      </div>
    </ChildSection>
  );
}

export function PrivateLessonLengths({ locale }: { locale: Locale }) {
  const descriptions: Copy[] = [
    [
      "A shorter session to concentrate on a specific skill or suit a younger learner.",
      "Короткое занятие для отдельного навыка или младшего ученика.",
    ],
    [
      "Time to combine speaking, reading and writing in a regular weekly lesson.",
      "Время для сочетания речи, чтения и письма в регулярном уроке.",
    ],
    [
      "A longer session for learners who benefit from extended practice and discussion.",
      "Продолжительный урок для тех, кому полезна углублённая практика и беседа.",
    ],
  ];
  return (
    <div className={s.privateLengths}>
      {privateLessonFees.map((fee, index) => (
        <article className={s.length} key={fee.minutes}>
          <h3>
            {fee.minutes} {words(["minutes", "минут"], locale)}
          </h3>
          <div className={s.amount}>£{fee.price}</div>
          <p>{words(descriptions[index], locale)}</p>
        </article>
      ))}
    </div>
  );
}
