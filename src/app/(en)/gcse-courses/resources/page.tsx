import type { Metadata } from "next";
import { GcseResourcesPage } from "@/components/gcse/gcse-resources-page";
import { gcsePaths } from "@/content/gcse-content";
import { siteUrl } from "@/lib/site";

const title = "Official GCSE Russian Exam Resources | Volna School";
const description =
  "Pearson Edexcel GCSE Russian Higher Tier past papers from 2019–2025, with mark schemes, listening audio and grade boundaries by exam series.";

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
