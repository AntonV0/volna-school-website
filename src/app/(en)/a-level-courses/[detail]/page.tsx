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
  return createLocalizedCourseDetailMetadata(props, "en", "alevel");
}

export default function EnglishALevelDetailPage(props: PageProps) {
  return renderCourseDetailRoute(props, "en", "alevel");
}
