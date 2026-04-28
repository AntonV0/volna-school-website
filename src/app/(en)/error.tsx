"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";

type EnglishErrorProps = {
  reset: () => void;
};

export default function EnglishError({ reset }: EnglishErrorProps) {
  return (
    <SectionContainer className="bg-surface-blue">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
          Something went wrong
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          The page could not load cleanly
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Try loading it again, or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(239,50,50,0.22)] transition duration-200 hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            onClick={reset}
            type="button"
          >
            Try again
          </button>
          <ButtonLink href="/" variant="secondary">
            Return home
          </ButtonLink>
        </div>
      </div>
    </SectionContainer>
  );
}
