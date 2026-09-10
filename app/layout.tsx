import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { homeDescription, homeTitle, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: homeTitle,
  description: homeDescription,
  applicationName: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
