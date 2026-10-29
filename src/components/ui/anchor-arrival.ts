let frame = 0;
let animation: Animation | undefined;

export function cancelAnchorArrival() {
  cancelAnimationFrame(frame);
  animation?.cancel();
}

export function focusAnchorHeading(target: HTMLElement) {
  const heading = target.matches("h1, h2, h3") ? target : target.querySelector<HTMLElement>("h1, h2, h3") ?? target;
  if (!heading.hasAttribute("tabindex")) {
    heading.setAttribute("tabindex", "-1");
    heading.addEventListener("blur", () => heading.removeAttribute("tabindex"), { once: true });
  }
  heading.focus({ preventScroll: true });
  return heading;
}

/** Feedback follows a deliberate jump, after scrolling has settled. */
export function highlightAnchorArrival(heading: HTMLElement) {
  cancelAnchorArrival();
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (preference.matches) return;
  const start = performance.now();
  let previousY = window.scrollY;
  let settled = 0;
  const check = () => {
    if (!heading.isConnected || preference.matches) return;
    settled = Math.abs(window.scrollY - previousY) < 1 ? settled + 1 : 0;
    previousY = window.scrollY;
    if ((performance.now() - start > 150 && settled >= 4) || performance.now() - start > 2000) {
      const bounds = heading.getBoundingClientRect();
      if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
        animation = heading.animate([
          { backgroundColor: "transparent", boxShadow: "inset 0 -2px transparent" },
          { backgroundColor: "rgba(36,122,74,.08)", boxShadow: "inset 0 -2px rgba(36,122,74,.5)", offset: .3 },
          { backgroundColor: "transparent", boxShadow: "inset 0 -2px transparent" },
        ], { duration: 700, easing: "ease-out" });
      }
      return;
    }
    frame = requestAnimationFrame(check);
  };
  frame = requestAnimationFrame(check);
}
