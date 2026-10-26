import { RegistrationPage } from "@/components/registration/registration-page";
import { registrationContent } from "@/content/registration-content";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ searchParams }: EnglishRegistrationPageProps) {
  const params = await searchParams;
  return createPageMetadata("en", "registration",
    params.course === "gcse" && params.enquiry === "mock"
      ? { title: "GCSE Russian Mock Exam Enquiry", description: "Register interest in Volna GCSE Russian mock exams. Enquire about listening, reading, writing and individual speaking mocks." }
      : registrationContent.en.metadata);
}

type EnglishRegistrationPageProps = {
  searchParams: Promise<{
    course?: string;
    format?: string;
    focus?: string;
    for?: string;
    enquiry?: string;
    mock?: string;
  }>;
};

export default async function EnglishRegistrationPage({
  searchParams,
}: EnglishRegistrationPageProps) {
  const params = await searchParams;

  return (
    <RegistrationPage
      key={`${params.course ?? ""}:${params.format ?? ""}:${params.focus ?? ""}:${params.for ?? ""}:${params.enquiry ?? ""}:${params.mock ?? ""}`}
      mockEnquiry={params.course === "gcse" && params.enquiry === "mock"}
      initialMockInterest={params.mock === "speaking" ? "speaking" : "written"}
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
