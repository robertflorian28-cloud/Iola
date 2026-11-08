import type { MetadataRoute } from "next";
import { projects } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      images: [absoluteUrl("/assets/model pozwe.jpeg")],
    },
    { url: absoluteUrl("/servicii") },
    ...projects.map((project) => ({
      url: absoluteUrl(`/proiecte/${project.slug}`),
      images: project.images.map((image) => absoluteUrl(image.src)),
    })),
    { url: absoluteUrl("/termeni-si-conditii") },
    { url: absoluteUrl("/politica-de-confidentialitate") },
  ];
}
