import s from "./gcse.module.css";

export function gcseStickyHeight() {
  return Array.from(document.querySelectorAll("header, [data-gcse-navigation]"))
    .reduce((height, element) => height + element.getBoundingClientRect().height, 0);
}

export function gcseAnchorTarget(id: string) {
  const target = document.getElementById(id);
  const container = target?.matches(`.${s.anchor}`) ? target.closest("section") : target;
  const heading = container?.matches("h1,h2,h3") ? container as HTMLElement : container?.querySelector<HTMLElement>("h1,h2,h3");
  if (!heading) return null;
  const intro = heading.closest<HTMLElement>("[data-gcse-intro]");
  const previous = heading.previousElementSibling;
  const marker = intro ?? (previous?.classList.contains(s.eyebrow) ? previous as HTMLElement : heading);
  return { heading, marker };
}

export function gcseAnchorTop(marker: HTMLElement) {
  return Math.max(0, window.scrollY + marker.getBoundingClientRect().top - gcseStickyHeight() - 16);
}

export const gcseAnchorIntent = "gcse-anchor-intent";
export function announceGcseAnchor(id: string | null) {
  window.dispatchEvent(new CustomEvent(gcseAnchorIntent, { detail: id }));
}
