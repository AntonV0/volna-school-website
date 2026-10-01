import { AdultsPage } from "@/components/adults/adults-page";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata("en", "adults", {
  title: "Online Russian Lessons for Adults | Volna School",
  description:
    "One-to-one online Russian lessons for beginners, intermediate learners and personal goals. Explore flexible lesson lengths, prices and adult exam tuition.",
});
export default function EnglishAdultsPage() {
  return <AdultsPage />;
}
