import type { Copy } from "@/content/children-content";

// Published school holiday dates, checked on the live site on 24 September 2026.
// Store dates once for both languages; do not infer unconfirmed term start dates.
export const schoolYear = "2026–27";
export const schoolHolidays: {
  term: Copy;
  breaks: { name: Copy; start: string; end?: string }[];
}[] = [
  {
    term: ["Autumn", "Осень"],
    breaks: [
      {
        name: ["Half term", "Осенние каникулы"],
        start: "2026-10-26",
        end: "2026-11-01",
      },
      {
        name: ["Christmas holidays", "Рождественские каникулы"],
        start: "2026-12-21",
        end: "2027-01-03",
      },
    ],
  },
  {
    term: ["Spring", "Весна"],
    breaks: [
      {
        name: ["Half term", "Февральские каникулы"],
        start: "2027-02-15",
        end: "2027-02-21",
      },
      {
        name: ["Easter holidays", "Пасхальные каникулы"],
        start: "2027-03-26",
        end: "2027-04-11",
      },
    ],
  },
  {
    term: ["Summer", "Лето"],
    breaks: [
      {
        name: ["Half term", "Майские каникулы"],
        start: "2027-05-31",
        end: "2027-06-06",
      },
      {
        name: ["Summer holidays begin", "Начало летних каникул"],
        start: "2027-07-22",
      },
    ],
  },
];
