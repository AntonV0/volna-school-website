import { HomePage } from "@/components/home/home-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("en", "home", {
  title: "Online Russian School in the UK | Volna School",
  description:
    "Live online Russian lessons for children, GCSE and A Level students, and adults in the UK, with group classes, private tuition, and a free first lesson.",
});

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
