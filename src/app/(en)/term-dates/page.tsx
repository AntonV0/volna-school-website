import { TermDatesPage } from "@/components/children/term-dates-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("en", "termDates", {
  title: "Term Dates & Course Calendars 2026–27 | Volna School",
  description:
    "View Volna School’s 2026–27 holiday dates and download calendars for children’s Russian classes, GCSE and A Level courses.",
});

type TermDatesPageProps = {
  searchParams: Promise<{ from?: string | string[] }>;
};

export default async function Page({ searchParams }: TermDatesPageProps) {
  const { from } = await searchParams;
  return <TermDatesPage locale="en" fromGcse={from === "gcse"} />;
}
