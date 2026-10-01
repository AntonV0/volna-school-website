import type { SVGProps } from "react";

export function RegistrationIcon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: "next" | "back" | "edit" | "check" | "chevron" | "spinner";
}) {
  const paths = {
    next: "M4 12h16m-6-6 6 6-6 6",
    back: "M20 12H4m6-6-6 6 6 6",
    edit: "m15 5 4 4M4 20l4-1L20 7a2.8 2.8 0 0 0-4-4L4 15v5Z",
    check: "m5 12 4 4L19 6",
    chevron: "m6 9 6 6 6-6",
    spinner: "M21 12a9 9 0 1 1-9-9",
  };
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
