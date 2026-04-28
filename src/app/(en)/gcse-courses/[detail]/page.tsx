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
  return createCourseDetailStaticParams("gcse");
}

export function generateMetadata(props: PageProps) {
  return createLocalizedCourseDetailMetadata(props, "en", "gcse");
}

export default function EnglishGcseDetailPage(props: PageProps) {
  return renderCourseDetailRoute(props, "en", "gcse");
}
