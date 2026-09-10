import type { MetadataRoute } from "next";
import { portfolioImages } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      images: [...new Set(portfolioImages.map((image) => absoluteUrl(image.src)))],
    },
    { url: absoluteUrl("/termeni-si-conditii") },
    { url: absoluteUrl("/politica-de-confidentialitate") },
  ];
}
