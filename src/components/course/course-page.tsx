import { CalendarSummary } from "@/components/course/calendar-summary";
import { CourseHero } from "@/components/course/course-hero";
import { CourseOverview } from "@/components/course/course-overview";
import { CourseRelatedLinks } from "@/components/course/course-related-links";
import { CourseResults } from "@/components/course/course-results";
import { CourseSectionNav } from "@/components/course/course-section-nav";
import { CourseStructuredData } from "@/components/course/course-structured-data";
import { FaqList } from "@/components/course/faq-list";
import { OptionCardGrid } from "@/components/course/option-card-grid";
import { PriceTable } from "@/components/course/price-table";
import { RegistrationCta } from "@/components/course/registration-cta";
import type { CourseContent } from "@/content/course-content";
import type { Locale } from "@/lib/i18n/config";
import { createCourseStructuredData } from "@/lib/metadata";

type CoursePageProps = {
  content: CourseContent;
  locale: Locale;
};

export function CoursePage({ content, locale }: CoursePageProps) {
  return (
    <>
      <CourseStructuredData data={createCourseStructuredData(locale, content)} />
      <CourseHero content={content.hero} />
      <CourseSectionNav items={content.sectionNav} />
      {content.results ? <CourseResults content={content.results} /> : null}
      <CourseOverview content={content.overview} />
      <CourseRelatedLinks locale={locale} parentKey={content.routeKey} />
      <OptionCardGrid content={content.studyOptions} />
      <PriceTable content={content.pricing} />
      <CalendarSummary content={content.calendar} />
      <FaqList content={content.faq} />
      <RegistrationCta
        content={content.registration}
        courseKey={content.routeKey}
        locale={locale}
      />
    </>
  );
}
