"use client";

import Link from "next/link";
import { GcseViewTransition } from "./gcse-view-transition";
import { GcseCompactMenu } from "./gcse-compact-menu";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gcsePaths } from "@/content/gcse-content";
import s from "./gcse.module.css";
import { gcseAnchorIntent, gcseAnchorTarget, gcseStickyHeight } from "./gcse-anchor-geometry";

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
    let locked: string | null = null;
    let previous = "";
    const update = () => {
      if (locked && ids.split(",").includes(locked)) { setActive(locked); return; }
      const bottom = gcseStickyHeight();
      const line = bottom + Math.min(160, Math.max(80, (window.innerHeight - bottom) * .2));
      const candidates = ids
        .split(",")
        .map(id => ({ id, marker: gcseAnchorTarget(id)?.marker }))
        .filter((item): item is { id: string; marker: HTMLElement } => Boolean(item.marker));
      // Keep the last listed section through its supporting subsections.
      // A small dead band prevents oscillation at a section boundary.
      const current = candidates.filter(item => item.marker.getBoundingClientRect().top <= line + (item.id === previous ? 8 : -8)).at(-1);
      previous = current?.id ?? "";
      setActive(previous);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    schedule();
    const intent = (event: Event) => { locked = (event as CustomEvent<string | null>).detail; schedule(); };
    window.addEventListener(gcseAnchorIntent, intent);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // The header can continue shrinking after a scroll event has finished.
    const observer = new ResizeObserver(() => {
      schedule();
    });
    const header = document.querySelector("header");
    if (header) observer.observe(header);
    if (navigation.current) observer.observe(navigation.current);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener(gcseAnchorIntent, intent);
    };
  }, [ids, stickyCompact, pathname]);

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
