"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import s from "./gcse-compact-menu.module.css";
import { GCSE_COMPACT_QUERY } from "./gcse-navigation-config";

export function GcseCompactMenu({ pages, pathname, items, active }: {
  pages: { href: string; label: string }[];
  pathname: string;
  items: { id: string; label: string }[];
  active: string;
}) {
  const menu = useRef<HTMLDetailsElement>(null);
  const fitPanel = () => {
    if (!menu.current?.open) return;
    menu.current.style.setProperty("--gcse-panel-space", `${Math.max(0, window.innerHeight - menu.current.getBoundingClientRect().bottom - 12)}px`);
  };
  useEffect(() => {
    const element = menu.current;
    const panel = element?.lastElementChild as HTMLElement | null;
    // The closing panel can remain painted briefly, but its links must stop
    // accepting focus immediately, including closes from the anchor controller.
    const syncPanel = () => {
      if (!element || !panel) return;
      panel.inert = !element.open;
      panel.setAttribute("aria-hidden", String(!element.open));
    };
    const observer = new MutationObserver(syncPanel);
    if (element) observer.observe(element, { attributes: true, attributeFilter: ["open"] });
    syncPanel();
    const closeOutside = (event: PointerEvent | MouseEvent) => {
      if (menu.current && !menu.current.contains(event.target as Node)) menu.current.open = false;
    };
    const escape = (event: KeyboardEvent) => {
      if (event.defaultPrevented || menu.current?.closest("[inert]") ||
        (event.target instanceof Element && event.target.closest('[aria-modal="true"]'))) return;
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    };
    const resize = () => {
      if (!window.matchMedia(GCSE_COMPACT_QUERY).matches && menu.current) menu.current.open = false;
      fitPanel();
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("click", closeOutside);
    document.addEventListener("keydown", escape);
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", fitPanel, { passive: true });
    return () => {
      observer.disconnect();
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("click", closeOutside);
      document.removeEventListener("keydown", escape);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", fitPanel);
    };
  }, []);

  // Preserve native opening/restoration before hydration; the observer reads `open`.
  return <details suppressHydrationWarning ref={menu} className={s.menu} onToggle={() => {
    if (menu.current?.open && window.matchMedia(GCSE_COMPACT_QUERY).matches) {
      const bounds = menu.current.getBoundingClientRect();
      const panel = menu.current.lastElementChild as HTMLElement | null;
      const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 60;
      const availableSpace = window.innerHeight - bounds.bottom - 12;
      if (panel && panel.scrollHeight + 2 > availableSpace && bounds.top > headerBottom + 1) {
        window.scrollTo({ top: window.scrollY + bounds.top - headerBottom, behavior: "instant" });
      }
    }
    fitPanel();
  }}>
    <summary><strong>GCSE menu</strong><span>{pages.find(page => page.href === pathname)?.label}</span></summary>
    <div className={s.panel}>
      <div className={s.group} role="group" aria-label="GCSE pages">
        <p className={s.label}>GCSE pages</p>
        <div className={s.pages}>
          {pages.map(page => <Link key={page.href} href={page.href} transitionTypes={["gcse-page", "gcse-page-quick"]} scroll={false}
            aria-current={pathname === page.href ? "page" : undefined}
            onClick={event => {
              if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && menu.current) menu.current.open = false;
            }}>{page.label}</Link>)}
        </div>
      </div>
      <div className={s.group} role="group" aria-label="On this page">
        <p className={s.label}>On this page</p>
        <div className={s.sections}>
          {items.map(item => <a key={item.id} href={`#${item.id}`}
            aria-current={active === item.id ? "location" : undefined}
            onClick={event => {
              if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              const target = document.getElementById(item.id);
              if (!target) return;
              if (menu.current) menu.current.open = false;
              if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
              target.focus({ preventScroll: true });
            }}>{item.label}</a>)}
        </div>
      </div>
    </div>
  </details>;
}
