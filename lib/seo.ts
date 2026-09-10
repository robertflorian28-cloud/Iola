import type { Metadata } from "next";
import { contact, services } from "@/lib/site-data";

// Set SITE_URL at build time when the public domain changes.
const configuredUrl = new URL(process.env.SITE_URL || "https://iola.ro");

if (!["https:", "http:"].includes(configuredUrl.protocol)) {
  throw new Error("SITE_URL must be an absolute HTTP or HTTPS URL.");
}

export const siteUrl = configuredUrl.origin;
export const siteName = "IOLA Concept";
export const homeTitle = "Arhitectură și design interior | IOLA Concept";
export const homeDescription =
  "IOLA Concept: arhitectură și design interior pentru locuințe și spații comerciale. Concepte, planuri tehnice, randări 3D și mobilier la comandă.";

export function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString();
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = absoluteUrl(path);
  const images = [{
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
        url: absoluteUrl("/#servicii"),
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
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
