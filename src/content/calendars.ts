import { childrenClasses, childrenDetails } from "./children-content";
import lessonDates from "./calendar-dates.json";

export const calendarYear = "2026–27";
export const childCalendarSlugs: Record<string, string> = {
  junior: "junior-group", middle: "middle-group", upper: "upper-group",
  zero: "class-zero", one: "class-one", two: "class-two", three: "class-three", four: "class-four",
  "rfl-younger": "rfl-ages-4-8-group", "rfl-older": "rfl-ages-9-16-group",
};
export const calendarHref = (slug: string) => `/calendars/${slug}-2026-2027`;
export type SchoolCalendar = { slug: string; title: string; times: string[]; course: string; theme: string; note?: string; dates: string[] };
const dates = lessonDates as Record<string, string[]>;
// Explicit dates transcribed from the highlighted cells in the published PDFs.
// Keep calendar-dates.json, PDF downloads and their previews in sync when revising a calendar.
export const childrenCalendarGroups = [
  { title: "Early years", schedule: "early-years", detail: childrenDetails["children-early-years"] },
  { title: "Bilingual classes", schedule: "bilingual-classes", detail: childrenDetails["children-bilingual"] },
  { title: "Russian for beginners", schedule: "russian-for-beginners", detail: childrenDetails["children-rfl"] },
];
export const calendars: SchoolCalendar[] = [
  ...childrenClasses.map(group => ({
    slug: childCalendarSlugs[group.id], title: group.name[0], times: group.times.map(time => time[0]),
    course: `/classes-for-children/${childrenCalendarGroups.find(category => category.detail.classIds.includes(group.id))!.schedule}#timetable`,
    theme: "var(--route-children)", dates: dates[childCalendarSlugs[group.id]],
  })),
  ...([
    ["gcse-one-year", "GCSE one-year course", "Monday", "gcse-courses", "gcse"],
    ["gcse-two-year", "GCSE two-year course", "Tuesday", "gcse-courses", "gcse"],
    ["alevel-one-year", "A Level one-year course", "Wednesday", "a-level-courses", "alevel"],
    ["alevel-two-year", "A Level two-year course", "Thursday", "a-level-courses", "alevel"],
  ] as const).map(([slug, title, day, course, theme]) => ({
    slug, title, times: [`${day} 17:00–18:00`, `${day} 18:15–19:15`], course: `/${course}#course-options`,
    theme: `var(--route-${theme === "gcse" ? "exam" : "advanced"})`, dates: dates[slug],
    note: slug.includes("two-year") ? "This calendar covers the first academic year of the two-year course. The second-year calendar will be provided separately." : "Lessons finish before the general school term ends in July. Exam dates and centre arrangements are listed separately in the course exam guide.",
  })),
  { slug: "holiday", title: "School holiday", times: [], course: "/term-dates", theme: "var(--brand-teal)", dates: [] },
];
