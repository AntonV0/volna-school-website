export function CourseLinkIcon({ href }: { href: string }) {
  const download =
    /\.pdf(?:[?#]|$)/i.test(href) || href.startsWith("/downloads/");
  const kind = download
    ? "download"
    : /^https?:\/\//.test(href)
      ? "external"
      : "internal";
  return (
    <span aria-hidden="true" data-link-kind={kind}>
      {kind === "download" ? "↓" : kind === "external" ? "↗" : "→"}
    </span>
  );
}
