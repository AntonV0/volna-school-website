import Link from "next/link";
import type { ReactNode } from "react";

import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getLegalContent,
  type LegalBlock,
  type LegalInlineLink,
  type LegalRouteKey,
} from "@/content/legal-content";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/classnames";

type LegalPageProps = {
  locale: Locale;
  routeKey: LegalRouteKey;
};

function getLocalHref(href: string) {
  try {
    const url = new URL(href);

    if (url.hostname === "www.volnaschool.com") {
      return `${url.pathname}${url.search}${url.hash}`;
    }

    if (url.hostname === "ru.volnaschool.com") {
      return `/ru${url.pathname}${url.search}${url.hash}`;
    }
  } catch {
    return href;
  }

  return href;
}

function renderLinkedText(text: string, links: LegalInlineLink[]) {
  if (links.length === 0) {
    return text;
  }

  const parts: ReactNode[] = [];
  let cursor = 0;

  links.forEach((link, index) => {
    const linkStart = text.indexOf(link.text, cursor);

    if (linkStart < 0) {
      return;
    }

    if (linkStart > cursor) {
      parts.push(text.slice(cursor, linkStart));
    }

    const href = getLocalHref(link.href);
    const className =
      "font-semibold text-brand-teal underline decoration-brand-teal/30 decoration-1 underline-offset-4 transition hover:decoration-brand-teal focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal";

    parts.push(
      href.startsWith("/") ? (
        <Link className={className} href={href} key={`${link.text}-${index}`}>
          {link.text}
        </Link>
      ) : (
        <a className={className} href={href} key={`${link.text}-${index}`}>
          {link.text}
        </a>
      ),
    );

    cursor = linkStart + link.text.length;
  });

  if (cursor < text.length) {
    parts.push(text.slice(cursor));
  }

  return parts;
}

function isFormField(text: string) {
  return /^(Description of lessons or service:|Date the contract was made:|Name of consumer\(s\):|Address of consumer\(s\):|Signature of consumer\(s\):|Date:|Описание занятий или услуги:|Дата заключения договора:|Имя и фамилия потребителя \(потребителей\):|Адрес потребителя \(потребителей\):|Подпись потребителя \(потребителей\):|Дата:)$/.test(
    text,
  );
}

function renderBlocks(blocks: LegalBlock[], isForm: boolean) {
  const rendered: ReactNode[] = [];
  let index = 0;

  while (index < blocks.length) {
    const block = blocks[index];

    if (block.type === "list-item") {
      const items: LegalBlock[] = [];

      while (blocks[index]?.type === "list-item") {
        items.push(blocks[index]);
        index += 1;
      }

      rendered.push(
        <ul
          className="my-5 space-y-3 rounded-lg border border-accent-border/70 bg-accent-soft/55 px-5 py-4 text-foreground"
          key={`list-${index}`}
        >
          {items.map((item, itemIndex) => (
            <li className="flex gap-3 leading-7" key={`${item.text}-${itemIndex}`}>
              <span
                aria-hidden="true"
                className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-brand-teal"
              />
              <span>{renderLinkedText(item.text, item.links)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    const formField = isForm && isFormField(block.text);

    rendered.push(
      <div
        className={cn(
          formField &&
            "mt-6 border-b border-dashed border-brand-teal/45 pb-8 font-semibold text-foreground",
        )}
        key={`${block.text}-${index}`}
      >
        <p>{renderLinkedText(block.text, block.links)}</p>
      </div>,
    );
    index += 1;
  }

  return rendered;
}

export function LegalPage({ locale, routeKey }: LegalPageProps) {
  const content = getLegalContent(locale, routeKey);
  const labels =
    locale === "en"
      ? {
          contents: "On this page",
          eyebrow: "School policy",
          language: "English version",
          top: "Back to top",
        }
      : {
          contents: "На этой странице",
          eyebrow: "Политика школы",
          language: "Русская версия",
          top: "Наверх",
        };

  return (
    <>
      <SectionContainer className="border-b border-border-soft bg-section-wash">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionHeading eyebrow={labels.eyebrow} title={content.title}>
            <p>{content.seo.description}</p>
          </SectionHeading>
          <p className="w-fit rounded-full border border-accent-border bg-white px-4 py-2 text-sm font-semibold text-brand-teal shadow-sm">
            {labels.language}
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <nav
              aria-label={labels.contents}
              className="rounded-xl border border-border-soft bg-section-wash p-5 shadow-sm"
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-teal">
                {labels.contents}
              </h2>
              <ol className="mt-4 space-y-2 text-sm leading-5 text-muted-foreground">
                {content.sections
                  .filter((section) => section.title)
                  .map((section) => (
                    <li key={section.id}>
                      <a
                        className="block rounded-md px-2 py-1.5 transition hover:bg-white hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                        href={`#${section.id}`}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
              </ol>
            </nav>
          </aside>

          <article className="min-w-0 space-y-6" id="policy-content">
            {content.sections.map((section) => {
              const isIntroduction = section.title === null;
              const isStudentSummary = /privacy summary|конфиденциальности для учеников/i.test(
                section.title ?? "",
              );
              const isForm = /Model cancellation form|Типовая форма отмены договора/.test(
                section.title ?? "",
              );

              return (
                <section
                  className={cn(
                    "scroll-mt-28 rounded-xl border p-6 sm:p-8",
                    isIntroduction
                      ? "border-accent-border bg-accent-soft/45"
                      : "border-border-soft bg-white shadow-sm",
                    isStudentSummary && "border-brand-teal/25 bg-brand-teal-soft/50",
                    isForm && "border-accent-border bg-section-wash",
                  )}
                  id={section.id}
                  key={section.id}
                >
                  {section.title ? (
                    <h2 className="text-balance text-xl font-semibold leading-tight text-foreground sm:text-2xl">
                      {section.title}
                    </h2>
                  ) : null}
                  <div
                    className={cn(
                      "space-y-4 text-[0.98rem] leading-7 text-muted-foreground sm:text-base",
                      section.title && "mt-5",
                    )}
                  >
                    {renderBlocks(section.blocks, isForm)}
                  </div>
                </section>
              );
            })}

            <div className="flex justify-end pt-2">
              <a
                className="text-sm font-semibold text-brand-teal underline decoration-brand-teal/30 underline-offset-4 hover:decoration-brand-teal"
                href="#top"
              >
                {labels.top}
              </a>
            </div>
          </article>
        </div>
      </SectionContainer>
    </>
  );
}
