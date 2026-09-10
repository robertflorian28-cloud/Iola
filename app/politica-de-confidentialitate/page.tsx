import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";
import { contact } from "@/lib/site-data";

export const metadata = pageMetadata(
  "Politica de confidențialitate | IOLA Concept",
  "Informații despre prelucrarea datelor personale pe site-ul IOLA Concept și prin contactarea pe WhatsApp.",
  "/politica-de-confidentialitate",
);

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Politica de confidențialitate"
      intro="Află ce date pot fi prelucrate atunci când vizitezi site-ul sau alegi să contactezi IOLA Concept prin WhatsApp."
    >
      <section className="legal-section">
        <h2>1. Contact IOLA Concept</h2>
        <p>Pentru întrebări despre acest site sau despre prelucrarea datelor, poți contacta IOLA Concept folosind datele de mai jos:</p>
        <div className="legal-contact">
          <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          <p>Telefon / WhatsApp: <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">{contact.phoneDisplay}</a></p>
        </div>
      </section>

      <section className="legal-section">
        <h2>2. Despre acest site</h2>
        <p>Site-ul are rol de prezentare a serviciilor și portofoliului IOLA Concept. Nu permite crearea de conturi, nu include checkout sau plăți online și nu solicită introducerea directă de date personale prin formulare.</p>
      </section>

      <section className="legal-section">
        <h2>3. Date tehnice prelucrate automat</h2>
        <p>Serverul sau furnizorul de hosting poate prelucra automat date tehnice precum adresa IP, tipul și versiunea browserului, sistemul de operare, data și ora accesării, pagina solicitată și log-uri tehnice.</p>
        <p>Aceste date pot fi utilizate pentru securitatea, funcționarea, livrarea și administrarea tehnică a site-ului, pentru diagnosticarea erorilor și prevenirea abuzurilor. Temeiul poate fi interesul legitim de a menține un site sigur și funcțional, precum și îndeplinirea obligațiilor legale aplicabile.</p>
      </section>

      <section className="legal-section">
        <h2>4. Contactarea prin WhatsApp</h2>
        <p>Contactarea IOLA Concept se face printr-un link extern către WhatsApp. Site-ul nu colectează și nu stochează pe un server propriu date introduse într-un formular, deoarece un astfel de formular nu este disponibil.</p>
        <p>Dacă alegi să ne contactezi prin WhatsApp, transmiți voluntar datele pe care dorești să le comunici. Acestea pot include numele, numărul de telefon, conținutul mesajului și eventualele fișiere trimise de tine.</p>
        <p>Datele sunt folosite pentru a răspunde solicitării, a discuta proiectul și, dacă este cazul, pentru demersuri făcute la cererea ta înaintea încheierii unui contract. Păstrarea anumitor informații poate fi necesară și pentru obligații legale sau pentru constatarea, exercitarea ori apărarea unor drepturi.</p>
        <p>WhatsApp este un serviciu extern furnizat în Spațiul Economic European de WhatsApp Ireland Limited, parte a grupului Meta. Prelucrarea realizată prin această platformă este supusă și <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer">Politicii de confidențialitate WhatsApp</a>.</p>
      </section>

      <section className="legal-section">
        <h2>5. Destinatari și transferuri</h2>
        <p>Datele tehnice pot fi accesibile furnizorului de hosting și furnizorilor tehnici strict în măsura necesară operării site-ului. Datele comunicate pe WhatsApp sunt prelucrate și în infrastructura WhatsApp și Meta, conform regulilor proprii ale acestor companii.</p>
        <p>Dacă un furnizor prelucrează date în afara Spațiului Economic European, transferul trebuie realizat pe baza unui mecanism legal aplicabil, precum o decizie de adecvare sau clauze contractuale standard.</p>
      </section>

      <section className="legal-section">
        <h2>6. Durata păstrării</h2>
        <p>Log-urile tehnice sunt păstrate conform perioadelor stabilite de furnizorul de hosting și necesităților de securitate. Mesajele și datele primite prin WhatsApp sunt păstrate numai atât timp cât este necesar pentru gestionarea solicitării, relația contractuală, obligațiile legale și apărarea unor drepturi.</p>
      </section>

      <section className="legal-section">
        <h2>7. Cookies și tehnologii similare</h2>
        <p>La data acestei actualizări, codul site-ului nu setează cookies și nu include Google Analytics, Google Tag Manager, pixeli de marketing, Hotjar sau alte instrumente de urmărire. Nu este afișat un banner de consimțământ deoarece nu sunt folosite tehnologii neesențiale care să necesite acordul vizitatorului.</p>
        <p>Dacă infrastructura de hosting folosește mecanisme strict necesare pentru securitate sau livrarea paginii, acestea nu sunt utilizate de IOLA Concept pentru profilare ori publicitate. Politica va fi actualizată înainte de introducerea oricărui instrument de analiză sau marketing care necesită consimțământ.</p>
      </section>

      <section className="legal-section">
        <h2>8. Drepturile tale</h2>
        <p>În condițiile Regulamentului general privind protecția datelor, poți solicita accesul la date, rectificarea sau ștergerea lor, restricționarea prelucrării, portabilitatea datelor, unde este aplicabilă, și te poți opune prelucrării bazate pe interes legitim.</p>
        <p>Dacă o prelucrare se bazează pe consimțământ, îl poți retrage oricând, fără a afecta legalitatea prelucrării anterioare. Ai și dreptul de a depune o plângere la <a href="https://www.dataprotection.ro/" target="_blank" rel="noopener noreferrer">Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal</a>.</p>
        <p>Pentru exercitarea drepturilor, poți contacta IOLA Concept la <a href={`mailto:${contact.email}`}>{contact.email}</a>. Este posibil să solicităm informații rezonabile pentru verificarea identității.</p>
      </section>

      <section className="legal-section">
        <h2>9. Securitate și actualizări</h2>
        <p>Sunt aplicate măsuri tehnice și organizatorice rezonabile pentru protejarea datelor. Nicio transmitere sau stocare electronică nu poate fi însă garantată ca fiind complet lipsită de riscuri.</p>
        <p>Prezenta politică poate fi actualizată când se schimbă site-ul, furnizorii sau cerințele legale. Versiunea curentă va fi publicată pe această pagină.</p>
      </section>
    </LegalPage>
  );
}
