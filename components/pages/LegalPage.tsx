import type { ReactNode } from "react";
import { ContactDock } from "@/components/layout/ContactDock";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type LegalPageProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPage({ title, intro, children }: LegalPageProps) {
  return (
    <main id="top" className="site-main legal-main">
      <Header />
      <ContactDock />

      <article className="legal-page section-shell">
        <header className="legal-hero">
          <p className="legal-kicker">Informații juridice</p>
          <h1>{title}</h1>
          <p className="legal-intro">{intro}</p>
          <p className="legal-updated">Ultima actualizare: 6 septembrie 2026</p>
        </header>

        <div className="legal-content">{children}</div>
      </article>

      <Footer />
    </main>
  );
}
