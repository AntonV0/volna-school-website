import type { MetadataRoute } from "next";

import { siteContent } from "@/content/site-content";
import { siteUrl } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteContent.en.metadata.title,
    short_name: "Volna School",
    description: siteContent.en.metadata.description,
    start_url: siteUrl,
    display: "standalone",
    background_color: "#F8FCFD",
    theme_color: "#108CA3",
    lang: "en",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
