import { CalendarSummary } from "@/components/course/calendar-summary";
import { ChildrenPage } from "@/components/children/children-page";
import { ClassCatalogue } from "@/components/course/class-catalogue";
import { CourseHero } from "@/components/course/course-hero";
import { CourseOverview } from "@/components/course/course-overview";
import { CourseRelatedLinks } from "@/components/course/course-related-links";
import { CourseResults } from "@/components/course/course-results";
import { CourseSectionNav } from "@/components/course/course-section-nav";
import { ExamGuide } from "@/components/course/exam-guide";
import { FaqList } from "@/components/course/faq-list";
import { OptionCardGrid } from "@/components/course/option-card-grid";
import { PriceTable } from "@/components/course/price-table";
import { RegistrationCta } from "@/components/course/registration-cta";
import { StructuredData } from "@/components/seo/structured-data";
import type { CourseContent } from "@/content/course-content";
import type { Locale } from "@/lib/i18n/config";
import { createCourseStructuredData } from "@/lib/metadata";

type CoursePageProps = {
  content: CourseContent;
  locale: Locale;
};

export function CoursePage({ content, locale }: CoursePageProps) {
  if (content.routeKey === "children")
    return <ChildrenPage content={content} locale={locale} />;

  return (
    <>
      <StructuredData data={createCourseStructuredData(locale, content)} />
      <CourseHero content={content} locale={locale} />
      <CourseSectionNav items={content.sectionNav} locale={locale} />
      {content.results ? (
        <CourseResults
          content={content.results}
          locale={locale}
          routeKey={content.routeKey}
        />
      ) : null}
      <CourseOverview
        content={content.overview}
        locale={locale}
        routeKey={content.routeKey}
      />
      <CourseRelatedLinks locale={locale} parentKey={content.routeKey} />
      <OptionCardGrid
        content={content.studyOptions}
        locale={locale}
        routeKey={content.routeKey}
      />
      {content.classCatalogue ? (
        <ClassCatalogue content={content.classCatalogue} />
      ) : null}
      {content.examGuide ? (
        <ExamGuide content={content.examGuide} routeKey={content.routeKey} />
      ) : null}
      <PriceTable content={content.pricing} routeKey={content.routeKey} />
      <CalendarSummary
        content={content.calendar}
        routeKey={content.routeKey}
        locale={locale}
      />
      <FaqList
        content={content.faq}
        courseKey={content.routeKey}
        locale={locale}
        registrationCtaLabel={content.registration.ctaLabel}
      />
      <RegistrationCta
        content={content.registration}
        courseKey={content.routeKey}
        locale={locale}
      />
    </>
  );
}
