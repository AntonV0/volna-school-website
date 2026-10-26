"use client";

import { useEffect, useRef } from "react";
import s from "./mobile-section-menu.module.css";

export function MobileSectionMenu({ items, active, floating = false }: { items: { id: string; label: string }[]; active: string; floating?: boolean }) {
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (!floating) return;
    const outside = (event: PointerEvent) => {
      if (menu.current && !menu.current.contains(event.target as Node)) menu.current.open = false;
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [floating]);
  return <details ref={menu} className={`${s.menu} ${floating ? s.floating : ""}`}>
    <summary>On this page <span>{items.find(item => item.id === active)?.label ?? "Explore sections"}</span></summary>
    <div>{items.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} onClick={event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = document.getElementById(item.id);
      if (!target) return;
      if (menu.current) menu.current.open = false;
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      // Let the anchor perform native fragment navigation and maintain history.
    }}>{item.label}</a>)}</div>
  </details>;
}
