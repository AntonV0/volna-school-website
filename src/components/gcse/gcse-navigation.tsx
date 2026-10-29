"use client";

import Link from "next/link";
import { GcseViewTransition } from "./gcse-view-transition";
import { GcseCompactMenu } from "./gcse-compact-menu";
import { GCSE_COMPACT_QUERY } from "./gcse-navigation-config";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gcsePaths } from "@/content/gcse-content";
import s from "./gcse.module.css";

const pages = [
  { href: gcsePaths.main, label: "Overview" },
  { href: gcsePaths.curriculum, label: "Curriculum" },
  { href: gcsePaths.exams, label: "Exam guide" },
  { href: gcsePaths.resources, label: "Exam resources" },
];

export function GcseNavigation({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const pathname = usePathname();
  const nav = useRef<HTMLElement>(null);
  const navigation = useRef<HTMLDivElement>(null);
  const stickyCompact = pathname === gcsePaths.main || pathname === gcsePaths.curriculum || pathname === gcsePaths.exams || pathname === gcsePaths.resources;
  useEffect(() => {
    if (!stickyCompact) return;
    const header = document.querySelector("header");
    if (!header) return;
    const page = navigation.current?.closest<HTMLElement>(`.${s.page}`);
    const update = () => {
      const height = `${header.getBoundingClientRect().height}px`;
      nav.current?.style.setProperty("--compact-header-height", height);
      navigation.current?.style.setProperty("--compact-header-height", height);
      page?.style.setProperty("--gcse-header-height", height);
      page?.style.setProperty("--gcse-navigation-height", `${navigation.current?.getBoundingClientRect().height ?? 96}px`);
      page?.style.setProperty("--gcse-scroll-padding", getComputedStyle(document.documentElement).scrollPaddingTop);
    };
    const observer = new ResizeObserver(update);
    observer.observe(header);
    if (navigation.current) observer.observe(navigation.current);
    update();
    return () => observer.disconnect();
  }, [stickyCompact]);
  const [active, setActive] = useState("");
  const ids = items.map((item) => item.id).join(",");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const compact = stickyCompact && window.matchMedia(GCSE_COMPACT_QUERY).matches;
      const expanded = window.innerWidth >= 768 && !compact;
      const line = compact
        ? (nav.current?.getBoundingClientRect().bottom ?? 100) + 24
        : (navigation.current?.getBoundingClientRect().bottom ?? 160) + 24;
      const current = ids
        .split(",")
        .map((id) => document.getElementById(id))
        .filter((node): node is HTMLElement => Boolean(node))
        .filter((node) => {
          const bounds = node.getBoundingClientRect();
          const bottom = compact && pathname === gcsePaths.main && node.id === "course-options"
            ? document.getElementById("starting-point")?.getBoundingClientRect().bottom ?? bounds.bottom
            : bounds.bottom;
          return (
            bounds.top + (compact ? 0 : parseFloat(getComputedStyle(node).paddingTop)) <=
              line && (expanded || bottom > line)
          );
        })
        .at(-1);
      setActive(current?.id ?? "");
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // The header can continue shrinking after a scroll event has finished.
    const observer = new ResizeObserver(() => {
      if (!window.matchMedia(GCSE_COMPACT_QUERY).matches) schedule();
    });
    const header = document.querySelector("header");
    if (header) observer.observe(header);
    if (navigation.current) observer.observe(navigation.current);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids, stickyCompact, pathname]);

  useEffect(() => {
    let frame = 0;
    const sectionIds = ids.split(",");
    const alignMobileHash = () => {
      if (stickyCompact ? !window.matchMedia(GCSE_COMPACT_QUERY).matches : window.innerWidth >= 768) return;

      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!sectionIds.includes(id)) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = document.getElementById(id);
        const header = document.querySelector<HTMLElement>("header");
        if (!target || !header) return;

        window.scrollTo({
          top: Math.max(
            0,
            window.scrollY + target.getBoundingClientRect().top - header.offsetHeight - (stickyCompact ? nav.current?.offsetHeight ?? 52 : 0) - 16,
          ),
          behavior: "auto",
        });
      });
    };

    alignMobileHash();
    const repeatAnchor = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && link?.getAttribute("href") === window.location.hash) {
        alignMobileHash();
      }
    };
    window.addEventListener("click", repeatAnchor);
    window.addEventListener("hashchange", alignMobileHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("click", repeatAnchor);
      window.removeEventListener("hashchange", alignMobileHash);
    };
  }, [ids, stickyCompact]);

  return (
    <div ref={navigation} className={s.navigation}>
      <nav className={s.pageNav} aria-label="GCSE pages" data-gcse-navigation>
        <div className={s.wrap}>
          <span>GCSE Russian · 1RU0</span>
          {pages.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              transitionTypes={active ? ["gcse-page", "gcse-page-quick"] : ["gcse-page"]}
              scroll={false}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {pathname === item.href && <GcseViewTransition name="gcse-active-tab" default="none" share="gcse-active-tab"><span className={s.activePagePill} aria-hidden="true">{item.label}</span></GcseViewTransition>}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
      <nav ref={nav} className={s.nav} aria-label="GCSE navigation" data-gcse-navigation>
        <div className={s.wrap} data-gcse-section-links>
          <span className={s.navLabel}>On this page</span>
          <GcseCompactMenu pages={pages} pathname={pathname} items={items} active={active} />
          <div className={s.navLinks}>
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
