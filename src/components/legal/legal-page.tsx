import Link from "next/link";
import type { ReactNode } from "react";

import { LegalContentsNav } from "./legal-contents-nav";
import { LegalHero } from "./legal-hero";
import { LegalBackToTop } from "./legal-back-to-top";
import { LegalPrint } from "./legal-print";
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
  const english = locale === "en";
  const quickTitle = english && routeKey !== "privacy" ? (routeKey === "refund" ? "Find the guidance you need" : "Report a safeguarding concern") : null;
  const updated = content.sections.flatMap(section => section.blocks).find(block => block.text.startsWith("Last updated:"))?.text;
  const descriptions = {
    privacy: "How we use and protect personal information, including children’s data and lesson recordings.",
    refund: "Your guide to lesson payments, absence notice, cancellations and refunds.",
    safeguarding: "How we keep children safe online and how to report a concern.",
  };
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
            <p className={styles.description}>{english ? descriptions[routeKey] : content.seo.description}</p>
            <div className={styles.documentTools}>
              <div className={styles.documentMeta}><p className={styles.language}>{labels.language}</p>{english && updated ? <p>{updated}</p> : null}</div>
              {english ? <div className={styles.printAction}><LegalPrint /></div> : null}
            </div>
          </div>
        </div>
      </LegalHero>

      <div className={styles.body}>
        <div className={styles.layout}>
          <LegalContentsNav
            key={`${locale}-${routeKey}`}
            label={labels.contents}
            sections={[...(quickTitle ? [{ id: "section-quick-guide", title: quickTitle }] : []), ...content.sections.flatMap((section) =>
              section.title ? [{ id: section.id, title: section.title }] : [],
            )]}
          />
          <article className={styles.article} id="policy-content">
            {english && routeKey === "safeguarding" ? <aside id="section-quick-guide" className={styles.quickGuide} aria-labelledby="policy-help-title">
              <h2 id="policy-help-title" tabIndex={-1}>Report a safeguarding concern</h2>
              <p>Contact Elena Vlasenko, our Headteacher and Designated Safeguarding Lead, at <a href="mailto:info@volnaschool.com">info@volnaschool.com</a>.</p>
              <p>If your concern involves Elena, address it to Anton Vlasenko. <a href="#section-3">Read the alternative reporting routes</a>.</p>
              <p className={styles.urgent}>If a child is in immediate danger, call <a href="tel:999">999</a>.</p>
              <a href="#section-4">External support and reporting →</a>
            </aside> : null}
            {english && routeKey === "refund" ? <aside id="section-quick-guide" className={styles.quickGuide} aria-labelledby="policy-help-title">
              <h2 id="policy-help-title" tabIndex={-1}>Find the guidance you need</h2>
              <ul>
                <li><a href="#section-5">Missing a lesson?</a> Give notice by the end of the previous calendar day for an authorised absence.</li>
                <li><a href="#section-7">Leaving the school?</a> Paid lessons that have not begun when notice is received are refunded.</li>
                <li><a href="#section-8">Has the school cancelled?</a> We first offer a replacement; the policy explains credits and refunds.</li>
              </ul>
              <p>This is a quick guide. Read the relevant section for the full terms, including your <a href="#section-3">statutory cancellation rights</a>.</p>
            </aside> : null}
            {content.sections.map((section) => {
              const blocks = english ? section.blocks.filter(block => !block.text.startsWith("Last updated:")) : section.blocks;
              if (!section.title && blocks.length === 0) return null;
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
                    {english && isForm ? <div className={styles.templateNote}><p>This is a printable template, not an online form. You can also cancel by sending a clear email; this template is optional.</p><div className={styles.printAction}><LegalPrint /></div></div> : null}
                    {renderBlocks(blocks, isForm)}
                  </div>
                </section>
              );
            })}

            <div className={styles.articleFooter}>
              {english ? <LegalPrint /> : null}
              <LegalBackToTop label={labels.top} />
            </div>
            {english ? <nav className={styles.related} aria-label="Related policies"><h2>Related policies</h2>{([
              ["privacy", "/privacy-policy", "Privacy Policy"],
              ["refund", "/refund-policy", "Lesson terms and refunds"],
              ["safeguarding", "/safeguarding-policy", "Safeguarding and online safety"],
            ] as const).filter(([key]) => key !== routeKey).map(([key, href, title]) => <Link key={key} href={href}>{title}<span aria-hidden="true">→</span></Link>)}</nav> : null}
          </article>
        </div>
      </div>
    </div>
  );
}
