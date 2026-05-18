import Image from "next/image";
import type { CSSProperties } from "react";

import type { ApprovedPublicImage } from "@/lib/assets";
import { getApprovedImagePath } from "@/lib/assets";
import { cn } from "@/lib/classnames";

type ApprovedImageProps = {
  className?: string;
  image: ApprovedPublicImage;
  loading?: "eager" | "lazy";
  priority?: boolean;
  quality?: number;
  sizes?: string;
  style?: CSSProperties;
  unoptimized?: boolean;
};

export function ApprovedImage({
  className,
  image,
  loading,
  priority = false,
  quality,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  style,
  unoptimized = false,
}: ApprovedImageProps) {
  return (
    <Image
      alt={image.alt}
      className={cn("object-cover", className)}
      fill
      loading={loading ?? (priority ? "eager" : undefined)}
      priority={priority}
      quality={quality}
      sizes={sizes}
      src={getApprovedImagePath(image)}
      style={style}
      unoptimized={unoptimized}
    />
  );
}
