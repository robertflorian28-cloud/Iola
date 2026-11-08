import type { ReactNode } from "react";
import { ContactDock } from "@/components/layout/ContactDock";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { absoluteUrl } from "@/lib/seo";

type StudioDetailPageProps = {
  title: string;
  intro: string;
  path: string;
  children: ReactNode;
};

export function StudioDetailPage({ title, intro, path, children }: StudioDetailPageProps) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: title, item: absoluteUrl(path) },
    ],
  };

  return (
    <div className="site-main">
      <Header />
      <ContactDock />
      <main className="section-shell detail-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }}
        />
        <header className="detail-heading">
          <nav aria-label="Fir de navigare">
            <a className="detail-link" href="/">Acasă</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{title}</span>
          </nav>
          <h1>{title}</h1>
          <p>{intro}</p>
        </header>
        {children}
      </main>
      <Footer />
    </div>
  );
}
