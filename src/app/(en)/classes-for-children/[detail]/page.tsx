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
  return createCourseDetailStaticParams("children");
}

export function generateMetadata(props: PageProps) {
  return createLocalizedCourseDetailMetadata(props, "en", "children");
}

export default function EnglishChildrenDetailPage(props: PageProps) {
  return renderCourseDetailRoute(props, "en", "children");
}
