import Image from "next/image";
import { contact } from "@/lib/site-data";

const footerLinks = [
  ["Proiecte", "/#proiecte"],
  ["Servicii", "/#servicii"],
  ["Studio", "/#studio"],
];

export function Footer() {
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;

  return (
    <footer className="footer section-shell">
      <div className="footer-primary">
        <div className="footer-identity">
          <a className="footer-brand" href="/" aria-label="IOLA Concept, pagina de început">
            <Image className="footer-logo" src="/assets/logo-transparent.png" alt="" width={912} height={536} sizes="128px" />
          </a>
          <div>
            <strong>IOLA CONCEPT</strong>
            <p>Interior Design &amp; Architecture</p>
          </div>
        </div>

        <nav className="footer-links" aria-label="Navigație în subsol">
          {footerLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
      </div>

      <div className="footer-details">
        <div className="footer-contact-data">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            {contact.phoneDisplay} / WhatsApp
          </a>
        </div>

        <nav className="footer-legal-links" aria-label="Informații juridice">
          <a href="/termeni-si-conditii">Termeni și condiții</a>
          <a href="/politica-de-confidentialitate">Politica de confidențialitate</a>
        </nav>

        <a
          className="footer-sal"
          href="https://reclamatiisal.anpc.ro/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SAL - Soluționarea Alternativă a Litigiilor, deschide platforma ANPC"
        >
          <Image
            src="/assets/sal-anpc.png"
            alt="SAL - Soluționarea Alternativă a Litigiilor"
            width={201}
            height={50}
          />
        </a>
      </div>

      <p className="footer-copyright">© 2026 IOLA Concept. Toate drepturile rezervate.</p>
    </footer>
  );
}
