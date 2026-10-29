import { childrenClasses } from "@/content/children-content";
import { AnimatedDisclosure } from "@/components/ui/animated-disclosure";
import Link from "next/link";
import { calendarHref, childrenCalendarGroups, childCalendarSlugs } from "@/content/calendars";
import { schoolHolidays, schoolYear } from "@/content/term-dates";
import { gcseCalendars } from "@/content/gcse-content";
import { alevelCalendars } from "@/content/alevel-content";
import s from "./school-calendar.module.css";

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M7 3v4m10-4v4M3 11h18m-13 4h3m2 0h3m-8 3h3" />
    </svg>
  );
}

function Download({ href, label }: { href: string; label: string }) {
  return (
    <div className={s.calendarChoice}><Link className={s.download} href={calendarHref(href.split("/").at(-1)!.replace("-2026-2027.pdf", ""))}>
      <span>
        {label} <small>View dates & calendar · {schoolYear}</small>
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
    </Link><a className={s.pdfLink} href={href} download aria-label={`Download ${label} PDF`}>Download PDF ↓</a></div>
  );
}

const childrenCalendars = childrenCalendarGroups.map(group => ({
  title: group.title, schedule: group.schedule,
  files: group.detail.classIds.map(id => [childrenClasses.find(item => item.id === id)!.name[0], childCalendarSlugs[id]]),
}));

export function SchoolCalendarPage({ fromGcse = false }: { fromGcse?: boolean }) {
  const format = (date: string) =>
    new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${date}T12:00:00Z`));
  return (
    <div className={s.page}>
      <header className={s.hero}>
        <div>
          {fromGcse ? (
            <Link className={s.courseReturn} href="/gcse-courses#course-options">
              ← Back to GCSE Russian courses
            </Link>
          ) : null}
          <p className={s.eyebrow}>Plan your school year · {schoolYear}</p>
          <h1>
            Term dates
            <br />& calendars
          </h1>
          <p className={s.intro}>
            School holidays at a glance, with a calendar for your class. Volna’s
            dates may differ from those of your local school.
          </p>
          <nav aria-label="On this page" className={s.jump}>
            <a href="#holidays">
              Holiday dates <span aria-hidden="true">↓</span>
            </a>
            <a href="#course-calendars">
              Course calendars <span aria-hidden="true">↓</span>
            </a>
          </nav>
        </div>
        <aside className={s.yearCard}>
          <CalendarIcon />
          <p className={s.eyebrow}>Academic year</p>
          <strong>{schoolYear}</strong>
          <p>Keep the school calendar handy for planning ahead.</p>
          <Download
            href="/downloads/calendars/holiday-2026-2027.pdf"
            label="School holiday calendar"
          />
        </aside>
      </header>
      <section
        id="holidays"
        className={s.section}
        aria-labelledby="holidays-heading"
        tabIndex={-1}
      >
        <div className={s.sectionHead}>
          <h2 id="holidays-heading">School holiday dates</h2>
          <p>
            These are school-wide breaks. Check your course calendar for
            individual lesson dates and when your course finishes.
          </p>
        </div>
        <div className={s.holidays}>
          {schoolHolidays.map((term) => (
            <article key={term.term[0]}>
              <h3>{term.term[0]}</h3>
              <dl>
                {term.breaks.map((holiday) => (
                  <div key={holiday.start}>
                    <dt>{holiday.name[0]}</dt>
                    <dd>
                      {!holiday.end && "From "}
                      <time dateTime={holiday.start}>
                        {format(holiday.start)}
                      </time>
                      {holiday.end && (
                        <>
                          <span className={s.to}> to </span>
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
          Both the first and last date are included in each holiday period.
        </p>
      </section>
      <section
        id="course-calendars"
        className={s.section}
        aria-labelledby="calendars-heading"
        tabIndex={-1}
      >
        <div className={s.sectionHead}>
          <h2 id="calendars-heading">Your course calendar</h2>
          <p>
            Choose the class you attend. View lesson dates online or download a PDF for {schoolYear}.
            All lesson times are UK local time.
          </p>
        </div>
        <div className={s.library}>
          <article className={s.children}>
            <div className={s.courseHead}>
              <span className={s.eyebrow}>Classes for children</span>
              <h3>A calendar for every group</h3>
            </div>
            {childrenCalendars.map((group) => (
              <AnimatedDisclosure key={group.title} className={s.group}>
                <summary>
                  <span>
                    {group.title}
                    <small>
                      {group.files.length}{" "}
                      {group.files.length === 1 ? "calendar" : "calendars"}
                    </small>
                  </span>
                  <svg
                    className={s.chevron}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className={s.groupBody}>
                  {group.files.map(([label, slug]) => (
                    <Download
                      key={slug}
                      href={`/downloads/calendars/${slug}-2026-2027.pdf`}
                      label={label}
                    />
                  ))}
                  <Link
                    className={s.textLink}
                    href={`/classes-for-children/${group.schedule}#timetable`}
                  >
                    View {group.title.toLowerCase()} lesson times{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </AnimatedDisclosure>
            ))}
          </article>
          <div className={s.examStack}>
            {[
              {
                title: "GCSE",
                className: s.gcse,
                files: gcseCalendars,
                route: "/gcse-courses#course-options",
              },
              {
                title: "A Level",
                className: s.alevel,
                files: alevelCalendars,
                route: "/a-level-courses#course-options",
              },
            ].map((course) => (
              <article key={course.title} className={course.className}>
                <div className={s.courseHead}>
                  <h3>{course.title} courses</h3>
                </div>
                {course.files.map((file) => (
                  <Download
                    key={file.href}
                    href={file.href}
                    label={`${course.title} ${file.label.toLowerCase()}`}
                  />
                ))}
                <Link className={s.textLink} href={course.route}>
                  {course.title} lesson times & course dates{" "}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
        <aside className={s.examNote} aria-label="About exam course calendars">
          <strong>GCSE & A Level calendars</strong>
          <p>
            Two-year calendars cover the first academic year only. Exam courses
            may finish before the school’s July term end; check your calendar
            for the final lesson date.
          </p>
        </aside>
      </section>
      <section
        className={`${s.section} ${s.help}`}
        aria-labelledby="planning-heading"
      >
        <div>
          <p className={s.eyebrow}>Planning your lessons</p>
          <h2 id="planning-heading">A few things to know</h2>
          <p>
            Private lessons, including adult tuition, are arranged individually
            and may continue during school holidays by agreement with your
            teacher.
          </p>
          <Link className={s.textLink} href="/courses-for-adults#prices">
            Adult tuition: fees & scheduling <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div>
          <h3>Unsure which calendar to use?</h3>
          <p>
            Tell us your class or teacher’s name. We can help you find the right
            calendar, confirm your first lesson or check a change to your
            schedule.
          </p>
          <a className={s.textLink} href="mailto:info@volnaschool.com">
            Email the school <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
