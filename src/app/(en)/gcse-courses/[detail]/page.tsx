import { notFound, permanentRedirect } from "next/navigation";
import { GcseCurriculumPage } from "@/components/gcse/gcse-curriculum-page";
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
    return createCourseDetailMetadata("en", "gcse-curriculum", {
      title: "GCSE Russian Curriculum | Volna School",
      description:
        "Explore the language skills, themes, homework and feedback in Volna’s Pearson Edexcel GCSE Russian courses.",
    });
  }
  return {};
}

export default async function EnglishGcseDetailPage({ params }: PageProps) {
  const { detail } = await params;
  if (detail === "exam-preparation") permanentRedirect("/gcse-courses/exam-guide");
  if (detail === "faq") permanentRedirect("/gcse-courses#questions");
  if (detail !== "curriculum") notFound();
  return <GcseCurriculumPage />;
}
