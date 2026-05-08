export const APPROVED_PUBLIC_IMAGE_DIRECTORIES = [
  "categorised",
  "optimised",
] as const;

export type ApprovedPublicImageDirectory =
  (typeof APPROVED_PUBLIC_IMAGE_DIRECTORIES)[number];

export type ApprovedPublicImageSource =
  | "approved-stock"
  | "generated-supporting"
  | "owned-brand"
  | "owned-school"
  | "staff-portrait";

export type ApprovedPublicImage = {
  alt: string;
  approvalDate: string;
  directory: ApprovedPublicImageDirectory;
  fileName: string;
  height: number;
  source: ApprovedPublicImageSource;
  usage: string;
  width: number;
};

function assertFileNameOnly(fileName: string) {
  if (fileName.includes("/") || fileName.includes("\\")) {
    throw new Error("Approved image fileName must not include path separators.");
  }
}

export function getApprovedImagePath(
  image: Pick<ApprovedPublicImage, "directory" | "fileName">,
) {
  assertFileNameOnly(image.fileName);

  return `/images/${image.directory}/${image.fileName}`;
}
