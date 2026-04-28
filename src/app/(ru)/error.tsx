"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";

type RussianErrorProps = {
  reset: () => void;
};

export default function RussianError({ reset }: RussianErrorProps) {
  return (
    <SectionContainer className="bg-surface-blue">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
          Ошибка загрузки
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          Страница загрузилась некорректно
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Попробуйте загрузить страницу еще раз или вернитесь на главную.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(239,50,50,0.22)] transition duration-200 hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            onClick={reset}
            type="button"
          >
            Попробовать снова
          </button>
          <ButtonLink href="/ru" variant="secondary">
            На главную
          </ButtonLink>
        </div>
      </div>
    </SectionContainer>
  );
}
