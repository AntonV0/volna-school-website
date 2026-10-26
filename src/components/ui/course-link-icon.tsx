export function CourseLinkIcon({ href, modern = false }: { href: string; modern?: boolean }) {
  const download =
    /\.pdf(?:[?#]|$)/i.test(href) || href.startsWith("/downloads/");
  const kind = download
    ? "download"
    : /^https?:\/\//.test(href)
      ? "external"
      : "internal";
  return (
    <span aria-hidden="true" data-link-kind={kind}>
      {modern ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" focusable="false">
          <path d={kind === "download" ? "M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4" : kind === "external" ? "M7 17 17 7M7 7h10v10" : "M4 12h14.5M13 6l5.3 5.3a1 1 0 0 1 0 1.4L13 18"} />
        </svg>
      ) : kind === "download" ? "↓" : kind === "external" ? "↗" : "→"}
    </span>
  );
}
