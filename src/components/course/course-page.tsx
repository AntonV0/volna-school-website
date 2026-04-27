import { CalendarSummary } from "@/components/course/calendar-summary";
import { CourseHero } from "@/components/course/course-hero";
import { CourseOverview } from "@/components/course/course-overview";
import { CourseSectionNav } from "@/components/course/course-section-nav";
import { FaqList } from "@/components/course/faq-list";
import { OptionCardGrid } from "@/components/course/option-card-grid";
import { PriceTable } from "@/components/course/price-table";
import { RegistrationCta } from "@/components/course/registration-cta";
import type { CourseContent } from "@/content/course-content";

type CoursePageProps = {
  content: CourseContent;
};

export function CoursePage({ content }: CoursePageProps) {
  return (
    <>
      <CourseHero content={content.hero} />
      <CourseSectionNav items={content.sectionNav} />
      <CourseOverview content={content.overview} />
      <OptionCardGrid content={content.studyOptions} />
      <PriceTable content={content.pricing} />
      <CalendarSummary content={content.calendar} />
      <FaqList content={content.faq} />
      <RegistrationCta content={content.registration} />
    </>
  );
}
