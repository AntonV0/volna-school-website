import { RegistrationPage } from "@/components/registration/registration-page";
import { registrationContent } from "@/content/registration-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "en",
  "registration",
  registrationContent.en.metadata,
);

type EnglishRegistrationPageProps = {
  searchParams: Promise<{
    course?: string;
    format?: string;
    focus?: string;
    for?: string;
  }>;
};

export default async function EnglishRegistrationPage({
  searchParams,
}: EnglishRegistrationPageProps) {
  const params = await searchParams;

  return (
    <RegistrationPage
      key={`${params.course ?? ""}:${params.format ?? ""}:${params.focus ?? ""}:${params.for ?? ""}`}
      initialEnquiryFor={
        ["gcse", "alevel"].includes(params.course ?? "") && params.for === "self"
          ? "self"
          : undefined
      }
      initialChildrenFocus={params.course === "children" ? params.focus : undefined}
      initialClassPreference={params.format}
      initialAdultFocus={params.focus}
      initialCourseInterest={params.course}
      locale="en"
    />
  );
}
