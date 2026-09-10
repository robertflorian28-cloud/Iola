import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";
import { contact } from "@/lib/site-data";

export const metadata = pageMetadata(
  "Termeni și condiții | IOLA Concept",
  "Condițiile de utilizare a site-ului de prezentare IOLA Concept pentru servicii de interior design și arhitectură.",
  "/termeni-si-conditii",
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Termeni și condiții"
      intro="Condițiile de utilizare a site-ului și limitele informațiilor prezentate de IOLA Concept."
    >
      <section className="legal-section">
        <h2>1. Despre IOLA Concept</h2>
        <p>IOLA Concept este denumirea sub care sunt prezentate pe acest site serviciile și portofoliul de design interior și arhitectură.</p>
        <div className="legal-contact">
          <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          <p>Telefon / WhatsApp: <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">{contact.phoneDisplay}</a></p>
        </div>
      </section>

      <section className="legal-section">
        <h2>2. Rolul site-ului</h2>
        <p>Site-ul are rol de prezentare generală a serviciilor, abordării și portofoliului IOLA Concept în domeniul designului interior și arhitecturii. Informațiile publicate au caracter informativ și nu reprezintă consultanță tehnică adaptată unui proiect concret.</p>
      </section>

      <section className="legal-section">
        <h2>3. Solicitările prin WhatsApp</h2>
        <p>Afișarea unui serviciu pe site nu reprezintă automat o ofertă fermă și nu determină încheierea unui contract. Apăsarea butonului WhatsApp și trimiterea unui mesaj reprezintă doar o solicitare de contact sau de ofertă.</p>
        <p>Un contract se consideră încheiat numai prin documentele și acordurile acceptate separat de IOLA Concept și client, în condițiile stabilite între aceștia.</p>
      </section>

      <section className="legal-section">
        <h2>4. Servicii, prețuri și termene</h2>
        <p>Conținutul și întinderea serviciilor, prețurile, termenele, etapele, livrabilele, responsabilitățile și condițiile de plată se stabilesc separat pentru fiecare proiect. Site-ul nu publică și nu garantează un preț sau un termen standard.</p>
      </section>

      <section className="legal-section">
        <h2>5. Proprietate intelectuală</h2>
        <p>În limita drepturilor deținute, imaginile, randările, proiectele, planurile, textele, grafica, logo-ul și identitatea vizuală IOLA sunt protejate de legislația privind drepturile de autor, mărcile și alte drepturi de proprietate intelectuală.</p>
        <p>Copierea, reproducerea, publicarea, modificarea, distribuirea sau folosirea lor în scop comercial nu este permisă fără acordul scris al titularului drepturilor. Drepturile terților asupra materialelor identificate ca atare rămân neafectate.</p>
      </section>

      <section className="legal-section">
        <h2>6. Portofoliu și reprezentări vizuale</h2>
        <p>Imaginile și randările din portofoliu ilustrează proiecte, concepte sau direcții de design. Aspectul final al unui proiect poate depinde de condițiile din teren, buget, disponibilitatea materialelor, cerințe tehnice și acordurile contractuale.</p>
      </section>

      <section className="legal-section">
        <h2>7. Linkuri și servicii externe</h2>
        <p>Site-ul poate include linkuri către servicii terțe, inclusiv WhatsApp și platforma SAL administrată de ANPC. IOLA Concept nu controlează disponibilitatea, securitatea, politicile de confidențialitate sau funcționarea acestor platforme.</p>
        <p>Accesarea unui link extern se face pe răspunderea utilizatorului și este supusă termenilor platformei respective.</p>
      </section>

      <section className="legal-section">
        <h2>8. Disponibilitate și răspundere</h2>
        <p>IOLA Concept urmărește ca informațiile să fie clare și actuale, dar pot apărea erori, omisiuni sau întreruperi tehnice. Conținutul poate fi actualizat fără notificare prealabilă.</p>
        <p>Nicio prevedere de pe această pagină nu limitează drepturile consumatorilor sau o răspundere care nu poate fi exclusă potrivit legii.</p>
      </section>

      <section className="legal-section">
        <h2>9. Legea aplicabilă și soluționarea litigiilor</h2>
        <p>Utilizarea site-ului și raporturile juridice care rezultă din serviciile contractate separat sunt guvernate de legea română, cu respectarea normelor obligatorii aplicabile consumatorilor.</p>
        <p>Consumatorii pot consulta platforma <a href="https://reclamatiisal.anpc.ro/" target="_blank" rel="noopener noreferrer">SAL - Soluționarea Alternativă a Litigiilor</a>. Această informare nu înlătură dreptul de a apela la autoritățile competente sau la instanțele de judecată.</p>
      </section>

      <section className="legal-section">
        <h2>10. Contact</h2>
        <p>Pentru întrebări despre acești termeni, poți contacta IOLA Concept la <a href={`mailto:${contact.email}`}>{contact.email}</a> sau prin WhatsApp la <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">{contact.phoneDisplay}</a>.</p>
      </section>
    </LegalPage>
  );
}
