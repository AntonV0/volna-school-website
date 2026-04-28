import {
  createCourseDetailStaticParams,
  createLocalizedCourseDetailMetadata,
  renderCourseDetailRoute,
} from "@/components/course/course-detail-route";

type PageProps = {
  params: Promise<{
    detail: string;
  }>;
};

export function generateStaticParams() {
  return createCourseDetailStaticParams("adults");
}

export function generateMetadata(props: PageProps) {
  return createLocalizedCourseDetailMetadata(props, "en", "adults");
}

export default function EnglishAdultsDetailPage(props: PageProps) {
  return renderCourseDetailRoute(props, "en", "adults");
}
