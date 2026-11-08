import type { Metadata } from "next";
import { contact, services } from "@/lib/site-data";

// Set SITE_URL at build time when the public domain changes.
const configuredUrl = new URL(process.env.SITE_URL || "https://iola.ro");

if (!["https:", "http:"].includes(configuredUrl.protocol)) {
  throw new Error("SITE_URL must be an absolute HTTP or HTTPS URL.");
}

export const siteUrl = configuredUrl.origin;
export const siteName = "IOLA Concept";
export const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();
export const homeTitle = "Arhitectură și design interior | IOLA Concept";
export const homeDescription =
  "Studio de arhitectură și design interior pentru locuințe, retail și HoReCa. Descoperă portofoliul IOLA și serviciile de proiectare, randare 3D și mobilier la comandă.";

export function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString();
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image?: { src: string; alt: string },
): Metadata {
  const url = absoluteUrl(path);
  const images = image
    ? [{ url: absoluteUrl(image.src), alt: image.alt }]
    : [{
        url: absoluteUrl("/social-image"),
        width: 1200,
        height: 630,
        alt: "IOLA Concept — arhitectură și design interior",
        type: "image/png",
      }];

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "ro_RO",
      type: "website",
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteName,
      alternateName: "IOLA",
      url: absoluteUrl("/"),
      description: homeDescription,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/assets/logo-transparent.png"),
        width: 912,
        height: 536,
      },
      email: contact.email,
      telephone: `+${contact.whatsapp}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicii de arhitectură și design interior",
        url: absoluteUrl("/servicii"),
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.text,
            url: absoluteUrl(`/servicii#${service.slug}`),
            provider: { "@id": absoluteUrl("/#organization") },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: absoluteUrl("/"),
      name: siteName,
      alternateName: "IOLA",
      inLanguage: "ro-RO",
      publisher: { "@id": absoluteUrl("/#organization") },
    },
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/#webpage"),
      url: absoluteUrl("/"),
      name: homeTitle,
      description: homeDescription,
      inLanguage: "ro-RO",
      isPartOf: { "@id": absoluteUrl("/#website") },
      about: { "@id": absoluteUrl("/#organization") },
    },
  ],
};
