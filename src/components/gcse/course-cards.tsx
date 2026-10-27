import { AnimatedDisclosure } from "./animated-disclosure";
import { calendarHref } from "@/content/calendars";
import { gcseCalendars } from "@/content/gcse-content";
import { examTuition, gbp } from "@/content/tuition-prices";
import { GcseLink } from "./gcse-shared";
import s from "./gcse.module.css";
import p from "./course-cards.module.css";

export function CourseCards() {
  const courses = [
    {
      title: "One-year course",
      subtitle: "Preparing for exams in Summer 2027",
      schedule: "Mondays · 17:00–19:15",
      description: "Structured preparation for students who already read and write Russian.",
      fit: "Typically Year 11, or younger students with suitable literacy and speaking skills.",
      points: [
        ["Full Higher Tier course", "All themes, vocabulary and grammar taught with practice for each paper."],
        ["Two lessons every Monday", "17:00–18:00 · 18:15–19:15"],
        ["Online on Microsoft Teams", "Small groups of up to 8 students"],
      ],
      price: examTuition.gcse.groupHour,
      calendar: calendarHref("gcse-one-year"),
      calendarLabel: "View one-year calendar",
      pdf: gcseCalendars[0].href,
      pdfLabel: "Download PDF: GCSE one-year course calendar, 2026–27",
    },
    {
      title: "Two-year course",
      subtitle: "Preparing for exams in Summer 2028",
      schedule: "Tuesdays · 17:00–19:15",
      description: "For students who need more time to develop their language and exam skills.",
      fit: "Typically Year 10 or below, depending on the student’s current Russian skills.",
      points: [
        ["Strengthen core Russian skills", "Vocabulary, grammar and written Russian developed steadily across two years."],
        ["Two lessons every Tuesday", "17:00–18:00 · 18:15–19:15"],
        ["Online on Microsoft Teams", "Small groups of up to 8 students"],
      ],
      price: examTuition.gcse.groupHour,
      calendar: calendarHref("gcse-two-year"),
      calendarLabel: "View two-year calendar",
      pdf: gcseCalendars[1].href,
      pdfLabel: "Download PDF: GCSE two-year course calendar, 2026–27",
    },
    {
      title: "Private tuition",
      subtitle: "A flexible alternative to group study",
      description: "One-to-one tuition for focused practice at a pace agreed with your teacher.",
      fit: "Students who prefer individual lessons or need extra help alongside a group course.",
      points: [
        ["Speaking and exam-practice support", "Practise key tasks with direct teacher feedback."],
        ["Flexible days and times", "Arranged with your teacher"],
        ["Online on Zoom", "Lessons built around what you need to improve"],
      ],
      price: examTuition.gcse.privateHour,
      calendar: "/term-dates?from=gcse",
      calendarLabel: "View holiday calendar",
      pdf: "/downloads/calendars/holiday-2026-2027.pdf",
      pdfLabel: "Download PDF: school holiday dates, 2026–27",
    },
  ];
  return (
    <>
      <div className={`${s.compactCourseGrid} ${p.desktop}`}>
        {courses.map((course, index) => (
          <article className={`${s.compactCourseCard} ${index === 2 ? s.compactPrivateCard : ""}`} key={course.title}>
            <div>
              <h3>{course.title}</h3>
              <p className={s.examYear}>{course.subtitle}</p>
            </div>
            <p className={s.compactDescription}>{course.description}</p>
            <p className={s.compactFit}><strong>Best for</strong>{course.fit}</p>
            <dl className={s.compactSchedule}>
              {course.points.map(([title, description]) => (
                <div key={title}><dt>{title}</dt><dd>{description}</dd></div>
              ))}
            </dl>
            <div className={s.compactCourseFooter}>
              <div className={s.price}>
                <strong>{gbp(course.price)}<span> / hour</span></strong>
                {index < 2 ? (
                  <span>{gbp(course.price * 2)} per week of lessons</span>
                ) : (
                  <span className={s.privatePriceOptions}><span>30 minutes: {gbp(examTuition.gcse.private30)}</span>{" · "}<span>90 minutes: {gbp(examTuition.gcse.private90)}</span></span>
                )}
              </div>
              <div className={s.calendarActions}>
                <GcseLink href={course.calendar}>{course.calendarLabel}{index < 2 && <span className="sr-only">: GCSE {index === 0 ? "one" : "two"}-year course, 2026–27</span>}</GcseLink>
                <GcseLink href={course.pdf} ariaLabel={course.pdfLabel}>Download PDF</GcseLink>
              </div>
            </div>
          </article>
        ))}
      </div>
        <div className={p.cards}>
          {courses.map((course, index) => (
            <article className={p.card} key={course.title}>
              <h3>{course.title}</h3>
              <p className={s.examYear}>{course.subtitle}</p>
              <p className={s.compactDescription}>{course.description}</p>
              <p className={s.compactFit}><strong>Best for</strong>{course.fit}</p>
              {course.schedule && <p className={p.schedule}>{course.schedule} <span>(UK time)</span></p>}
              <div className={`${s.price} ${p.price}`}>
                <strong>{gbp(course.price)}<span> / hour</span></strong>
                {index < 2 ? (
                  <span>{gbp(examTuition.gcse.groupHour * 2)} per week of lessons</span>
                ) : (
                  <span className={s.privatePriceOptions}><span>30 minutes: {gbp(examTuition.gcse.private30)}</span>{" · "}<span>90 minutes: {gbp(examTuition.gcse.private90)}</span></span>
                )}
              </div>
              <AnimatedDisclosure className={p.details}>
                <summary>Lesson details &amp; calendar<span className="sr-only">: {course.title}</span></summary>
                <dl className={p.points}>
                  {course.points.map(([title, description]) => (
                    <div key={title}><dt>{title}</dt><dd>{description}</dd></div>
                  ))}
                </dl>
                <div className={s.calendarActions}>
                  <GcseLink href={course.calendar}>{course.calendarLabel}</GcseLink>
                  <GcseLink href={course.pdf} ariaLabel={course.pdfLabel}>Download PDF</GcseLink>
                </div>
              </AnimatedDisclosure>
            </article>
          ))}
        </div>
    </>
  );
}
