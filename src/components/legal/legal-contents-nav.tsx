"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

import styles from "./legal-page.module.css";
import { AnimatedDisclosure, setDisclosureOpen } from "@/components/ui/animated-disclosure";

type ContentsSection = { id: string; title: string };

export function LegalContentsNav({
  sections,
  label,
  animated = false,
}: {
  sections: ContentsSection[];
  label: string;
  animated?: boolean;
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const container = useRef<HTMLDivElement>(null);
  const desktopList = useRef<HTMLOListElement>(null);
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const Contents = animated ? AnimatedDisclosure : "details";

  useEffect(() => {
    if (!animated) return;
    const escape = (event: KeyboardEvent) => {
      if (event.defaultPrevented || mobileMenu.current?.closest("[inert]") ||
        (event.target instanceof Element && event.target.closest('[aria-modal="true"]'))) return;
      if (event.key !== "Escape" || !mobileMenu.current?.open) return;
      setDisclosureOpen(mobileMenu.current, false);
      mobileMenu.current.querySelector("summary")?.focus();
    };
    const compact = window.matchMedia("(max-width: 1023px)");
    const resize = () => { if (!compact.matches && mobileMenu.current) setDisclosureOpen(mobileMenu.current, false); };
    const prepareAnchor = (event: globalThis.MouseEvent) => {
      if (!mobileMenu.current?.open || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin === location.origin && url.pathname === location.pathname && url.search === location.search && url.hash && url.hash !== "#main-content") {
        setDisclosureOpen(mobileMenu.current, false, { immediate: true });
      }
    };
    document.addEventListener("click", prepareAnchor, true);
    document.addEventListener("keydown", escape);
    compact.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("click", prepareAnchor, true);
      compact.removeEventListener("change", resize);
    };
  }, [animated]);

  useEffect(() => {
    const root = container.current?.closest<HTMLElement>("[data-policy-page]");
    const header = document.querySelector<HTMLElement>("header");
    const hero = root?.querySelector<HTMLElement>("[data-policy-hero]");
    let frame = 0;

    const update = () => {
      const headerHeight = header?.getBoundingClientRect().height ?? 80;
      root?.style.setProperty("--policy-header-height", `${headerHeight}px`);
      root?.style.setProperty("--policy-scroll-padding", getComputedStyle(document.documentElement).scrollPaddingTop);
      const mobile = window.matchMedia("(max-width: 1023px)").matches;
      const contentsHeight = (mobileMenu.current?.querySelector("summary")?.getBoundingClientRect().height ?? 90) + 22;
      root?.style.setProperty("--policy-contents-height", `${contentsHeight}px`);
      if (container.current) {
        container.current.dataset.stuck = String(mobile && container.current.getBoundingClientRect().top <= headerHeight + 1);
      }
      const heroHeight = window.matchMedia("(min-width: 1280px)").matches
        ? hero?.getBoundingClientRect().height ?? 0 : 0;
      root?.style.setProperty("--policy-hero-height", `${heroHeight}px`);
      const readingLine = headerHeight + heroHeight + (mobile ? contentsHeight + 24 : 64);
      let nextId = sections[0]?.id ?? "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= readingLine) {
          nextId = section.id;
        }
      }

      // Short final sections may never reach the reading line before the footer.
      const article = document.getElementById("policy-content");
      if (article && article.getBoundingClientRect().bottom <= window.innerHeight) {
        nextId = sections.at(-1)?.id ?? nextId;
      }
      setActiveId(nextId);
    };
    const queueUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(queueUpdate);
    if (header) observer.observe(header);
    if (hero) observer.observe(hero);
    if (container.current) observer.observe(container.current);
    queueUpdate();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);
    window.addEventListener("hashchange", queueUpdate);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
      window.removeEventListener("hashchange", queueUpdate);
    };
  }, [sections]);

  useEffect(() => {
    const list = desktopList.current;
    const link = list?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!list || !link || !list.clientHeight) return;
    const bounds = list.getBoundingClientRect();
    const linkBounds = link.getBoundingClientRect();
    if (linkBounds.top < bounds.top) {
      list.scrollTop += linkBounds.top - bounds.top - 4;
    } else if (linkBounds.bottom > bounds.bottom) {
      list.scrollTop += linkBounds.bottom - bounds.bottom + 4;
    }
  }, [activeId]);

  function navigate(event: MouseEvent<HTMLAnchorElement>, id: string) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    document.querySelector("[data-policy-hero]")?.dispatchEvent(new Event("policy:compact"));
    if (mobileMenu.current) {
      // Navigation needs the final layout before measuring the destination.
      if (animated) setDisclosureOpen(mobileMenu.current, false, { immediate: true });
      else mobileMenu.current.open = false;
    }
    const root = container.current?.closest<HTMLElement>("[data-policy-page]");
    const closedHeight = animated
      ? (mobileMenu.current?.querySelector("summary")?.getBoundingClientRect().height ?? 90) + 22
      : container.current?.getBoundingClientRect().height ?? 112;
    root?.style.setProperty("--policy-contents-height", `${closedHeight}px`);
    if (window.location.hash !== `#${id}`) {
      window.history.pushState(null, "", `#${id}`);
    }
    setActiveId(id);
    // Move keyboard focus into the document without starting a second scroll.
    if (event.detail === 0) target.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });
    target.scrollIntoView({
      block: "start",
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  const links = sections.map((section) => (
    <li key={section.id}>
      <a
        className={styles.contentsLink}
        href={`#${section.id}`}
        aria-current={activeId === section.id ? "location" : undefined}
        onClick={(event) => navigate(event, section.id)}
      >
        {section.title}
      </a>
    </li>
  ));
  const activeTitle = sections.find((section) => section.id === activeId)?.title;

  return (
    <div className={styles.contents} ref={container}>
      <Contents className={styles.mobileContents} ref={mobileMenu}>
        <summary className={styles.contentsToggle}>
          <span className={styles.contentsLabel}>{label}</span>
          <span className={styles.currentTitle}>{activeTitle}</span>
          <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
            <path d="m5 7 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </summary>
        <nav aria-label={label}>
          <ol className={styles.contentsList}>{links}</ol>
        </nav>
      </Contents>
      <nav aria-label={label} className={styles.desktopContents}>
        <h2 className={styles.contentsLabel}>{label}</h2>
        <ol className={styles.contentsList} ref={desktopList}>{links}</ol>
      </nav>
    </div>
  );
}
