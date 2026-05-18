import type { ApprovedPublicImage } from "@/lib/assets";

const approvalDate = "2026-05-04";

export function image(
  fileName: string,
  width: number,
  height: number,
  alt: string,
  source: ApprovedPublicImage["source"],
  usage: string,
): ApprovedPublicImage {
  return {
    alt,
    approvalDate,
    directory: "optimised",
    fileName,
    height,
    source,
    usage,
    width,
  };
}
