"use client";

import { useLayoutEffect, useRef } from "react";
import { gcsePaths } from "@/content/gcse-content";
import { gcseAnchorTarget, gcseAnchorTop } from "./gcse-anchor-geometry";

type Point = { x: number; y: number };
type Entry = { key: string; url: string; point: Point };
const stateKey = "volnaGcseScroll";
const reloadKey = "volnaGcseReload";
const paths = new Set<string>([gcsePaths.main, gcsePaths.curriculum, gcsePaths.exams, gcsePaths.resources]);

/** Own restoration only inside GCSE, so an old native restore cannot win a later traversal. */
export function useGcseScrollRestoration(pathname: string) {
  const renderedPath = useRef(pathname);
  const commit = useRef<(() => void) | null>(null);

  useLayoutEffect(() => {
    renderedPath.current = pathname;
    commit.current?.();
  }, [pathname]);

  useLayoutEffect(() => {
    const history = window.history;
    const previousMode = history.scrollRestoration;
    const supportsActiveTransition = CSS.supports("selector(:active-view-transition)");
    const positions = new Map<string, Point>();
    const point = (): Point => ({ x: window.scrollX, y: window.scrollY });
    const readEntry = (): Entry | undefined => history.state?.[stateKey];
    const writeEntry = (entry: Entry) => {
      // Keep Next's router tree and all other history state intact.
      history.replaceState({ ...history.state, [stateKey]: entry }, "");
    };
    const ensureEntry = () => {
      const stored = readEntry();
      if (stored?.url === window.location.href) return stored;
      const entry = { key: crypto.randomUUID(), url: window.location.href, point: point() };
      writeEntry(entry);
      return entry;
    };

    const saved = readEntry();
    const navigationType = (performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined)?.type;
    let reloadPoint: Point | undefined;
    if (navigationType === "reload") {
      try {
        const stored = JSON.parse(sessionStorage.getItem(reloadKey) ?? "null");
        if (stored?.url === window.location.href && Number.isFinite(stored.point?.x) && Number.isFinite(stored.point?.y)) reloadPoint = stored.point;
      } catch { /* Storage may be unavailable; history remains the fallback. */ }
    }
    let hashTarget: string | null = window.location.hash &&
      !reloadPoint && !(saved?.url === window.location.href && navigationType !== "navigate")
      ? window.location.hash.slice(1) : null;
    let active = ensureEntry();
    if (reloadPoint) active = { ...active, point: reloadPoint };
    let pending: Entry | null = null;
    let frame = 0;
    let revision = 0;
    let saveFrame = 0;
    history.scrollRestoration = "manual";
    positions.set(active.key, active.point);

    const saveReloadPoint = () => {
      if (pending || active.url !== window.location.href) return;
      try {
        sessionStorage.setItem(reloadKey, JSON.stringify({ url: active.url, point: positions.get(active.key) ?? point() }));
      } catch { /* Scrolling and history must work when storage is blocked. */ }
    };
    const remember = () => {
      if (!pending && active.url === window.location.href) {
        positions.set(active.key, point());
        cancelAnimationFrame(saveFrame);
        // Save while the document is active: pagehide history changes alone
        // are not a reliable source for a browser reload's history snapshot.
        saveFrame = requestAnimationFrame(saveReloadPoint);
      }
    };
    const persist = () => {
      remember();
      if (active.url === window.location.href && !pending) {
        active = { ...active, point: positions.get(active.key) ?? point() };
        writeEntry(active);
        saveReloadPoint();
      }
    };
    const cancel = () => {
      revision++;
      cancelAnimationFrame(frame);
      pending = null;
      hashTarget = null;
    };
    const restore = () => {
      const target = pending;
      if (!target || new URL(target.url).pathname !== renderedPath.current || target.url !== window.location.href) return;
      const version = revision;
      active = target;
      const start = performance.now();
      let previousHeight = -1;
      let stable = 0;
      const align = () => {
        if (version !== revision || target.url !== window.location.href) return;
        const height = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
        stable = Math.abs(height - previousHeight) < .5 ? stable + 1 : 0;
        previousHeight = height;
        let anchor = null;
        try { anchor = hashTarget ? gcseAnchorTarget(decodeURIComponent(hashTarget)) : null; } catch { /* Invalid fragments use the saved point. */ }
        window.scrollTo({ left: target.point.x, top: anchor ? gcseAnchorTop(anchor.marker) : target.point.y, behavior: "instant" });
        // Let the shrinking header settle without leaking adjustments into
        // the saved position. Any new traversal or user input cancels this.
        const transitioning = supportsActiveTransition && document.documentElement.matches(":active-view-transition");
        if (performance.now() - start < 500 && (performance.now() - start < 150 || stable < 3 || transitioning)) frame = requestAnimationFrame(align);
        else { pending = null; hashTarget = null; remember(); }
      };
      align();
    };
    const onCommit = () => {
      if (window.location.pathname !== renderedPath.current) return;
      if (pending) restore();
      else {
        const isNewEntry = readEntry()?.url !== window.location.href;
        active = ensureEntry();
        positions.set(active.key, point());
        if (isNewEntry && window.location.hash) {
          hashTarget = window.location.hash.slice(1);
          pending = active;
          restore();
        } else remember();
      }
    };
    const traverse = () => {
      // The URL already points at the destination, but the rendered page and
      // scroll still belong to the entry being left (even before a scroll event).
      if (!pending && new URL(active.url).pathname === renderedPath.current) positions.set(active.key, point());
      cancel();
      if (!paths.has(window.location.pathname)) {
        history.scrollRestoration = previousMode;
        return;
      }
      history.scrollRestoration = "manual";
      const entry = ensureEntry();
      pending = { ...entry, point: positions.get(entry.key) ?? entry.point };
      restore();
    };
    const anchorEntry = () => {
      if (!pending && window.location.pathname === renderedPath.current) {
        active = ensureEntry();
        positions.set(active.key, point());
      }
    };

    commit.current = onCommit;
    // Capture before Next handles popstate, and before the browser restores scroll.
    window.addEventListener("popstate", traverse, true);
    window.addEventListener("scroll", remember, { passive: true });
    window.addEventListener("hashchange", anchorEntry);
    window.addEventListener("pagehide", persist);
    document.addEventListener("click", persist, true);
    // Deliberate anchors use pushState, which does not emit hashchange.
    document.addEventListener("click", anchorEntry);
    const inputs = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
    inputs.forEach(event => window.addEventListener(event, cancel, { passive: true }));
    pending = active;
    restore();

    return () => {
      persist();
      cancelAnimationFrame(saveFrame);
      cancel();
      commit.current = null;
      history.scrollRestoration = previousMode;
      window.removeEventListener("popstate", traverse, true);
      window.removeEventListener("scroll", remember);
      window.removeEventListener("hashchange", anchorEntry);
      window.removeEventListener("pagehide", persist);
      document.removeEventListener("click", persist, true);
      document.removeEventListener("click", anchorEntry);
      inputs.forEach(event => window.removeEventListener(event, cancel));
    };
  }, []);
}
