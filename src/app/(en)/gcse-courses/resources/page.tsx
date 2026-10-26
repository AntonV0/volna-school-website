import type { Metadata } from "next";
import { GcseResourcesPage } from "@/components/gcse/gcse-resources-page";
import { gcsePaths } from "@/content/gcse-content";
import { siteUrl } from "@/lib/site";

const title = "Official GCSE Russian Exam Resources | Volna School";
const description =
  "Official Pearson Edexcel GCSE Russian past-paper, specification, timetable and exam-day resources for students and families.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: gcsePaths.resources },
  openGraph: {
    title,
    description,
    url: gcsePaths.resources,
    siteName: "Volna School",
    locale: "en_GB",
    type: "website",
    images: ["/og"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og"] },
};

export default function EnglishGcseResourcesPage() {
  return <GcseResourcesPage />;
}
