import { SchoolCalendarPage } from "./school-calendar-page";
import type { CSSProperties } from "react";
import { words, type Copy } from "@/content/children-content";
import { schoolHolidays, schoolYear } from "@/content/term-dates";
import type { Locale } from "@/lib/i18n/config";
import { courseRouteKeys, getLocalizedPath } from "@/lib/i18n/routing";
import { siteContent } from "@/content/site-content";
import { ChildLink, ChildSection } from "./children-shared";
import s from "./children.module.css";

export function TermDatesPage({
  locale,
  fromGcse = false,
}: {
  locale: Locale;
  fromGcse?: boolean;
}) {
  const t = (copy: Copy) => words(copy, locale);
  const format = (date: string) =>
    new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "ru-RU", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${date}T12:00:00Z`));
  if (locale === "en") return <SchoolCalendarPage fromGcse={fromGcse} />;
  return (
    <div
      className={s.page}
      style={
        {
          "--route-children": "var(--brand-teal)",
          "--route-children-soft": "var(--brand-teal-soft)",
        } as CSSProperties
      }
    >
      <ChildSection id="term-dates">
        <span className={s.eyebrow}>
          {t(["School calendar", "Школьный календарь"])} · {schoolYear}
        </span>
        <h1>
          {t([
            "Time to learn. Time to recharge.",
            "Время учиться. Время отдыхать.",
          ])}
        </h1>
        <p className={s.intro}>
          {t([
            "Our group classes take a break on the dates below. Keep this calendar handy when planning your family’s year: Volna’s holidays may differ from your child’s day school.",
            "В указанные даты групповые занятия не проводятся. Сохраните календарь при планировании семейного года: каникулы Volna могут отличаться от каникул основной школы ребёнка.",
          ])}
        </p>
        <div className={s.calendarGrid}>
          {schoolHolidays.map((term) => (
            <article className={s.calendarCard} key={term.term[0]}>
              <h2>{t(term.term)}</h2>
              <dl>
                {term.breaks.map((holiday) => (
                  <div key={holiday.start}>
                    <dt>{t(holiday.name)}</dt>
                    <dd>
                      <time dateTime={holiday.start}>
                        {format(holiday.start)}
                      </time>
                      {holiday.end && (
                        <>
                          {" "}
                          —{" "}
                          <time dateTime={holiday.end}>
                            {format(holiday.end)}
                          </time>
                        </>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <p className={s.note}>
          {t([
            "Holiday ranges include both the first and last day. Private lessons may continue by agreement with your teacher. Contact the school to confirm your first lesson or any change to your schedule.",
            "Первый и последний день включены в период каникул. Индивидуальные уроки возможны по договорённости с учителем. Для уточнения первого занятия или изменений расписания свяжитесь со школой.",
          ])}
        </p>
        <div className={s.related}>
          <span>
            {t(["Find your lesson times", "Расписание ваших занятий"])}
          </span>
          {courseRouteKeys.map((key) => (
            <ChildLink href={getLocalizedPath(locale, key)} key={key}>
              {siteContent[locale].routeLabels[key]}
            </ChildLink>
          ))}
        </div>
      </ChildSection>
    </div>
  );
}
