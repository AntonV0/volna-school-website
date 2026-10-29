import type { Metadata } from "next";
import { AnimatedDisclosure } from "@/components/ui/animated-disclosure";
import type { CSSProperties } from "react";
import Image from "next/image";
import { CalendarMonthJump, CalendarPreviewButton } from "@/components/children/calendar-controls";
import Link from "next/link";
import { notFound } from "next/navigation";
import { calendars, calendarHref, calendarYear } from "@/content/calendars";
import { schoolHolidays } from "@/content/term-dates";
import s from "@/components/children/calendar-view.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return calendars.map(c => ({ slug: `${c.slug}-2026-2027` })); }
function findCalendar(slug: string) { return calendars.find(c => `${c.slug}-2026-2027` === slug); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = findCalendar((await params).slug);
  return c ? { title: `${c.title} calendar ${calendarYear} | Volna School`, description: `View ${c.title.toLowerCase()} dates for ${calendarYear}, with UK lesson times and a printable PDF.`, alternates: { canonical: calendarHref(c.slug), languages: {} } } : {};
}
const dateLabel = (date: string) => new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
export default async function CalendarPage({ params }: { params: Promise<{ slug: string }> }) {
  const c = findCalendar((await params).slug);
  if (!c) notFound();
  const months = new Map<string, string[]>();
  for (const date of c.dates) {
    const month = date.slice(0, 7);
    const dates = months.get(month);
    if (dates) dates.push(date);
    else months.set(month, [date]);
  }
  const monthOptions = Array.from(months.keys(), month => ({ id: `month-${month}`, label: new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${month}-01T12:00:00Z`)) }));
  const isExam = c.slug.startsWith("gcse-") || c.slug.startsWith("alevel-");
  const isGcseCalendar = c.slug.startsWith("gcse-");
  const pdf = `/downloads/calendars/${c.slug}-2026-2027.pdf`;
  return <div className={s.page} style={{ "--calendar-accent": c.theme } as CSSProperties}>
    <header className={s.hero}>
      <Link href="/term-dates#course-calendars">← All class calendars</Link>
      {isGcseCalendar ? (
        <Link className={s.courseReturn} href="/gcse-courses#course-options">
          ← Back to GCSE Russian courses
        </Link>
      ) : null}
      <p className={s.eyebrow}>Academic year {calendarYear}{c.slug.includes("two-year") && <span className={s.yearBadge}>Year 1 of 2</span>}</p>
      <h1>{c.title} calendar</h1>
      <p className={s.intro}>{c.dates.length ? "Your lesson dates in one place. Read the monthly list below or keep a PDF copy for the year." : "School-wide breaks for planning your year. Check your class calendar for individual lesson dates."}</p>
      <div className={s.actions}><a href={pdf} download>Download calendar (PDF)</a><CalendarPreviewButton /></div>{c.dates.length > 0 && <a className={s.dateLink} href="#lesson-dates">See monthly lesson dates <span aria-hidden="true">↓</span></a>}
    </header>
    <div className={s.body}>
      {c.dates.length > 0 && <section className={s.schedule} aria-labelledby="schedule-title"><div><h2 id="schedule-title">Weekly lesson times</h2>{c.times.map(time => <p key={time}>{time}</p>)}<p className={s.muted}>UK local time (GMT/BST).{(c.slug.startsWith("gcse-") || c.slug.startsWith("alevel-")) && " Both sessions take place on each listed teaching date."}</p><Link href={c.course}>Course details & timetable →</Link></div><div><h2>Your teaching year</h2><p><strong>First lesson:</strong> {dateLabel(c.dates[0])}</p><p><strong>Last lesson:</strong> {dateLabel(c.dates.at(-1)!)}</p>{c.note && <p>{c.note}</p>}{isExam && <Link href={`/${c.slug.startsWith("gcse-") ? "gcse" : "a-level"}-courses/exam-guide`}>Exam dates & guidance →</Link>}<p className={s.muted}>The dates below follow the published class calendar. The school will confirm any subsequent timetable changes.</p></div></section>}
      {c.dates.length > 0 && <section id="lesson-dates" className={s.section}><h2>Lesson dates by month</h2><p>Only teaching dates are listed. School breaks and bank holidays without lessons are excluded.</p><CalendarMonthJump months={monthOptions} /><div className={s.months}>{Array.from(months, ([month, items]) => <article key={month} id={`month-${month}`} tabIndex={-1}><h3>{new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${month}-01T12:00:00Z`))}</h3><ul>{items.map(date => <li key={date}><time dateTime={date} aria-label={dateLabel(date)}>{new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`))}</time></li>)}</ul></article>)}</div></section>}
      {!c.dates.length && <section className={s.section}><h2>School holiday dates</h2><div className={s.months}>{schoolHolidays.map(term => <article key={term.term[0]}><h3>{term.term[0]}</h3>{term.breaks.map(b => <div className={s.holidayBreak} key={b.start}><p>{b.name[0]}</p><strong><time dateTime={b.start}>{dateLabel(b.start)}</time>{b.end ? <> – <time dateTime={b.end}>{dateLabel(b.end)}</time></> : " onwards"}</strong></div>)}</article>)}</div><p>Holiday ranges include both dates. Private lessons may continue by agreement with your teacher.</p></section>}
      <section id="calendar-preview" tabIndex={-1} className={s.section}>
        <h2>Printable calendar</h2><p>The PDF contains the full year on one A4 page. Open it to zoom in, or download it and print at actual size.</p>
        <a className={s.dateLink} href={pdf} target="_blank" rel="noopener">Open PDF in a new tab ↗</a>
        <AnimatedDisclosure id="full-year-preview" className={s.preview}>
          <summary>Show full-year preview <svg className={s.previewChevron} aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m5 7 5 5 5-5" /></svg></summary>
          <Image src={`/images/calendars/${c.slug}-2026-2027.webp`} alt={`${c.title} calendar for ${calendarYear}. ${c.dates.length ? "Lesson dates are also listed in text above." : "Holiday dates are also listed in text above."}`} width={953} height={1347} sizes="(max-width: 768px) 100vw, 800px" />
        </AnimatedDisclosure>
      </section>
      <aside className={s.help}><h2>Need to check a date?</h2><p>Contact the school before making arrangements if your teacher has advised a timetable change.</p><a href="mailto:info@volnaschool.com">info@volnaschool.com</a><Link href="/term-dates#course-calendars">Browse all calendars →</Link></aside>
    </div>
  </div>;
}
