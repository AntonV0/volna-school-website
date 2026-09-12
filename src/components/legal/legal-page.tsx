import { LegalHero } from "./legal-hero";
import { LegalContentsNav } from "./legal-contents-nav";
import Link from "next/link";
import type { ReactNode } from "react";

import styles from "./legal-page.module.css";
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
          className={styles.list}
          key={`list-${index}`}
        >
          {items.map((item, itemIndex) => (
            <li key={`${item.text}-${itemIndex}`}>
              {renderLinkedText(item.text, item.links)}
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
          formField && styles.formField,
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
          home: "Home",
          breadcrumb: "Breadcrumb",
          language: "English version",
          top: "Back to top",
        }
      : {
          contents: "На этой странице",
          home: "Главная",
          breadcrumb: "Навигационная цепочка",
          language: "Русская версия",
          top: "Наверх",
        };

  return (
    <div className={styles.page} data-policy-page>
      <LegalHero>
        <div className={styles.heroInner}>
          <nav aria-label={labels.breadcrumb} className={styles.breadcrumb}>
            <ol>
              <li><Link href={locale === "en" ? "/" : "/ru"}>{labels.home}</Link></li>
              <li>
                <span aria-hidden="true" className={styles.breadcrumbSeparator}>/</span>
                <span aria-current="page">{content.title}</span>
              </li>
            </ol>
          </nav>
          <h1 id="top" tabIndex={-1}>{content.title}</h1>
          <div className={styles.heroBottom}>
            <p className={styles.description}>{content.seo.description}</p>
            <p className={styles.language}>{labels.language}</p>
          </div>
        </div>
      </LegalHero>

      <div className={styles.body}>
        <div className={styles.layout}>
          <LegalContentsNav
            key={`${locale}-${routeKey}`}
            label={labels.contents}
            sections={content.sections.flatMap((section) =>
              section.title ? [{ id: section.id, title: section.title }] : [],
            )}
          />
          <article className={styles.article} id="policy-content">
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
                    styles.section,
                    isIntroduction && styles.introduction,
                    isStudentSummary && styles.summary,
                    isForm && styles.form,
                  )}
                  id={section.id}
                  key={section.id}
                >
                  {section.title ? (
                    <h2 tabIndex={-1}>
                      {section.title}
                    </h2>
                  ) : null}
                  <div className={styles.prose}>
                    {renderBlocks(section.blocks, isForm)}
                  </div>
                </section>
              );
            })}

            <div className={styles.articleFooter}>
              <a className={styles.topLink} href="#top">{labels.top}</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
