import { notFound, permanentRedirect } from "next/navigation";
import { AdultsDetailPage } from "@/components/adults/adults-detail-page";
import { adultCourses, adultPaths } from "@/content/adults-content";
import { createCourseDetailMetadata } from "@/lib/metadata";
type PageProps = { params: Promise<{ detail: string }> };
function resolveCourse(detail: string) {
  if (detail === "conversation") permanentRedirect(adultPaths.intermediate);
  if (detail === "business-russian") permanentRedirect(adultPaths.personalised);
  const course = adultCourses.find((x) => x.slug === detail);
  if (!course) notFound();
  return course;
}
export function generateStaticParams() {
  return [
    ...adultCourses.map((x) => ({ detail: x.slug })),
    { detail: "conversation" },
    { detail: "business-russian" },
  ];
}
export async function generateMetadata({ params }: PageProps) {
  const course = resolveCourse((await params).detail);
  return createCourseDetailMetadata("en", course.image, {
    title: `${course.label} | Volna School`,
    description: course.intro,
    languageAlternates: false,
  });
}
export default async function EnglishAdultsDetailPage({ params }: PageProps) {
  return <AdultsDetailPage course={resolveCourse((await params).detail)} />;
}
