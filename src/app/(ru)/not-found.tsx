import { ButtonLink } from "@/components/ui/button-link";
import { SectionContainer } from "@/components/ui/section-container";
import { getLocalizedPath } from "@/lib/i18n/routing";

export default function RussianNotFound() {
  return (
    <SectionContainer className="bg-surface-blue">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
          Страница не найдена
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          Эта страница пока не входит в каркас обновления
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Используйте основную навигацию, чтобы вернуться к текущей структуре сайта.
        </p>
        <div className="mt-8">
          <ButtonLink href={getLocalizedPath("ru", "home")}>
            На главную
          </ButtonLink>
        </div>
      </div>
    </SectionContainer>
  );
}
