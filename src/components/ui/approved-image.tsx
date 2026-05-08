import Image from "next/image";

import type { ApprovedPublicImage } from "@/lib/assets";
import { getApprovedImagePath } from "@/lib/assets";
import { cn } from "@/lib/classnames";

type ApprovedImageProps = {
  className?: string;
  image: ApprovedPublicImage;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  unoptimized?: boolean;
};

export function ApprovedImage({
  className,
  image,
  priority = false,
  quality,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  unoptimized = false,
}: ApprovedImageProps) {
  return (
    <Image
      alt={image.alt}
      className={cn("object-cover", className)}
      fill
      priority={priority}
      quality={quality}
      sizes={sizes}
      src={getApprovedImagePath(image)}
      unoptimized={unoptimized}
    />
  );
}
