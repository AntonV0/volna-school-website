import { TermDatesPage } from "@/components/children/term-dates-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("ru", "termDates", {
  title: "Школьный календарь 2026–27 | Volna School",
  description:
    "Даты каникул Volna School на 2026–27 учебный год: осенние, рождественские, февральские, пасхальные, майские и летние каникулы.",
});

export default function Page() {
  return <TermDatesPage locale="ru" />;
}
