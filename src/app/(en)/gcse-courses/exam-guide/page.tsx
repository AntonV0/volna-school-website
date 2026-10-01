import type { Metadata } from "next";
import { GcseExamGuidePage } from "@/components/gcse/gcse-exam-guide-page";
import { gcsePaths } from "@/content/gcse-content";
import { siteUrl } from "@/lib/site";

const title = "GCSE Russian Exam Guide & 2027 Dates | Volna School";
const description =
  "Pearson Edexcel GCSE Russian Higher Tier papers, optional mock exams, exam entry guidance and verified summer 2027 dates.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: gcsePaths.exams },
  openGraph: {
    title,
    description,
    url: gcsePaths.exams,
    siteName: "Volna School",
    locale: "en_GB",
    type: "website",
    images: ["/og"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og"] },
};

export default function EnglishGcseExamGuidePage() {
  return <GcseExamGuidePage />;
}
