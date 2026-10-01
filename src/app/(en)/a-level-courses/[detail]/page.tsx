import { notFound, permanentRedirect } from "next/navigation";
import { ALevelCurriculumPage } from "@/components/alevel/alevel-curriculum-page";
import { createCourseDetailMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{
    detail: string;
  }>;
};

export function generateStaticParams() {
  return [
    { detail: "curriculum" },
    { detail: "exam-preparation" },
    { detail: "faq" },
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const { detail } = await params;
  if (detail === "curriculum") {
    return createCourseDetailMetadata("en", "alevel-curriculum", {
      title: "A Level Russian Curriculum | Volna School",
      description:
        "Explore A Level Russian language, literature, film, cultural themes and independent research at Volna School.",
    });
  }
  return {};
}

export default async function EnglishALevelDetailPage({ params }: PageProps) {
  const { detail } = await params;
  if (detail === "exam-preparation") permanentRedirect("/a-level-courses/exam-guide");
  if (detail === "faq") permanentRedirect("/a-level-courses#questions");
  if (detail !== "curriculum") notFound();
  return <ALevelCurriculumPage />;
}
