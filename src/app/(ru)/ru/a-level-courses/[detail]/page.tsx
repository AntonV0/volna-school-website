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
  return createCourseDetailStaticParams("alevel");
}

export function generateMetadata(props: PageProps) {
  return createLocalizedCourseDetailMetadata(props, "ru", "alevel");
}

export default function RussianALevelDetailPage(props: PageProps) {
  return renderCourseDetailRoute(props, "ru", "alevel");
}
