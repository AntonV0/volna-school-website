import type { Metadata } from "next";
import { ALevelExamGuidePage } from "@/components/alevel/alevel-exam-guide-page";
import { alevelPaths } from "@/content/alevel-content";
import { siteUrl } from "@/lib/site";

const title = "A Level Russian Exam Guide & 2027 Dates | Volna School";
const description =
  "Pearson Edexcel A Level Russian papers, optional mock exams, exam entry guidance and verified summer 2027 dates.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: alevelPaths.exams },
  openGraph: {
    title,
    description,
    url: alevelPaths.exams,
    siteName: "Volna School",
    locale: "en_GB",
    type: "website",
    images: ["/og"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og"] },
};

export default function EnglishALevelExamGuidePage() {
  return <ALevelExamGuidePage />;
}
