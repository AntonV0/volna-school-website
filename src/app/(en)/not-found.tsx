import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";
import { getLocalizedPath } from "@/lib/i18n/routing";

export default function EnglishNotFound() {
  return (
    <SectionContainer className="bg-surface-blue">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
          Page not found
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          This page is not part of the rebuild yet
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Use the main navigation to return to the current public scaffold.
        </p>
        <div className="mt-8">
          <ButtonLink href={getLocalizedPath("en", "home")}>
            Return home
          </ButtonLink>
        </div>
      </div>
    </SectionContainer>
  );
}
