import Image from "next/image";
import { ContactDock } from "@/components/layout/ContactDock";
import { ExperienceCarousel } from "@/components/home/ExperienceCarousel";
import { Footer } from "@/components/layout/Footer";
import { GlassmorphismCta } from "@/components/ui/GlassmorphismCta";
import { Header } from "@/components/layout/Header";
import { ProjectAccordion } from "@/components/home/ProjectAccordion";
import { StudioPortrait } from "@/components/home/StudioPortrait";
import { WordScrub } from "@/components/home/WordScrub";
import { contact, irinaProfile, services } from "@/lib/site-data";
import { homeDescription, homeStructuredData, homeTitle, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(homeTitle, homeDescription, "/");

const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;

const serviceGroups = [
  {
    title: "Arhitectură",
    intro: "Spațiul începe cu o structură clară și o idee care poate fi construită.",
    items: [services[0], services[3]],
    className: "service-bento-main",
  },
  {
    title: "Interior",
    intro: "Atmosfera se construiește din lumină, material și proporție.",
    items: [services[1], services[4]],
    className: "service-bento-side",
  },
  {
    title: "Detaliu tehnic",
    intro: "Documentația bună ține conceptul intact până la ultimul montaj.",
    items: [services[2], services[5]],
    className: "service-bento-side service-bento-accent",
  },
];

export default function Home() {
  return (
    <main id="top" className="site-main overflow-x-hidden w-full max-w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData).replace(/</g, "\\u003c") }}
      />
      <Header />
      <ContactDock />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 className="max-w-6xl" id="hero-title">
            Spații care
            <span className="hero-inline-image" aria-hidden="true">
              <Image src="/assets/illustrations/architecture-concept-study.png" alt="" fill priority sizes="180px" />
            </span>
            {" "}rămân.
          </h1>
          <p>Studio de arhitectură și design interior pentru locuințe și spații comerciale, de la concept până la implementare.</p>
          <div className="hero-actions">
            <GlassmorphismCta href={whatsappUrl} label="Discută cu noi" target="_blank" />
            <GlassmorphismCta href="#proiecte" label="Vezi proiectele" animated={false} />
          </div>
        </div>
        <div className="hero-media">
          <Image
            src="/assets/model pozwe.jpeg"
            alt="Scară sculpturală neagră iluminată ambiental, într-un interior contemporan cu vedere la apus"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 767px) 100vw, 46vw"
          />
        </div>
      </section>

      <section className="services-chapter chapter section-shell" id="servicii" aria-labelledby="services-title">
        <div className="chapter-heading">
          <h2 id="services-title">Servicii de arhitectură și design interior.</h2>
          <p>Fără rupturi între imaginea pe care o aprobi și informația care ajunge în șantier.</p>
          <a className="detail-link" href="/servicii">Vezi serviciile și ce includ</a>
        </div>
        <div className="services-bento">
          {serviceGroups.map((group) => (
            <article className={`service-bento-cell ${group.className}`} key={group.title}>
              {group.className === "service-bento-main" && (
                <Image
                  className="service-bento-image"
                  src="/assets/arhitectura 21 (1).jpg"
                  alt=""
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 45vw, 53vw"
                />
              )}
              <div>
                <h3>{group.title}</h3>
                <p>{group.intro}</p>
              </div>
              <div className="service-bento-list">
                {group.items.map((item) => (
                  <span key={item.title}>{item.title}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="accordion-chapter chapter section-shell" id="proiecte" aria-labelledby="projects-title">
        <div className="chapter-heading chapter-heading-wide">
          <h2 id="projects-title">Proiecte de amenajare rezidențială, retail și HoReCa.</h2>
        </div>
        <ProjectAccordion />
      </section>

      <section className="manifesto-chapter chapter section-shell" aria-label="Filosofia IOLA">
        <WordScrub text="Un spațiu bun nu este o colecție de obiecte frumoase. Este o succesiune atentă de proporții, lumină, material și gesturi cotidiene." />
      </section>

      <section className="experience-chapter chapter section-shell" aria-labelledby="experience-title">
        <div className="experience-copy">
          <h2 id="experience-title">Colaborarea trebuie să fie la fel de bine proiectată.</h2>
          <p>Procesul rămâne lizibil, iar fiecare decizie are un motiv și un loc în ansamblu.</p>
        </div>
        <ExperienceCarousel />
      </section>

      <section className="studio-chapter chapter section-shell" id="studio" aria-labelledby="studio-title">
        <h2 className="studio-heading" id="studio-title">O echipă mică, ghidată de o viziune coerentă.</h2>
        <StudioPortrait alt="Denisa, cofondatoare și arhitectă a studioului IOLA" />
        <div className="studio-copy">
          <h3>Denisa</h3>
          <p>Cofondatoare, arhitectă și designer de interior la IOLA.</p>
          <div className="team-roles">
            <div>
              <h3>Arhitect</h3>
              <p>Organizează spațiul, proporțiile și soluțiile care susțin proiectul în timp.</p>
            </div>
            <div>
              <h3>Designer interior</h3>
              <p>Construiesc atmosfera prin lumină, culoare, material și mobilier.</p>
            </div>
          </div>
        </div>
        <article className="studio-member" aria-labelledby="irina-title">
          <StudioPortrait src={irinaProfile.image} alt={irinaProfile.alt} />
          <div className="studio-member-copy">
            <h3 id="irina-title">{irinaProfile.name}</h3>
            {irinaProfile.role && <p className="studio-member-role">{irinaProfile.role}</p>}
            {irinaProfile.description && (
              <p className="studio-member-description">{irinaProfile.description}</p>
            )}
            <div className="team-roles">
              {irinaProfile.specialties.map((specialty) => (
                <div key={specialty.title}>
                  <h3>{specialty.title}</h3>
                  <p>{specialty.text}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="faq-chapter chapter section-shell" aria-labelledby="faq-title">
        <h2 id="faq-title">Răspunsuri înainte de prima discuție.</h2>
        <div className="faq-grid">
          <details>
            <summary>Când este bine să vă contactăm?</summary>
            <p>Cât mai devreme. Putem evita decizii costisitoare înainte de compartimentări, instalații sau finisaje.</p>
          </details>
          <details>
            <summary>Preluați proiecte aflate deja în șantier?</summary>
            <p>Da, după evaluarea stadiului și a documentației. Stabilim clar ce păstrăm și ce trebuie refăcut.</p>
          </details>
          <details>
            <summary>Putem alege doar anumite servicii?</summary>
            <p>Da. Recomandăm însă o formulă care păstrează legătura dintre concept, planuri și implementare.</p>
          </details>
          <details>
            <summary>Cum începe colaborarea?</summary>
            <p>Cu o discuție despre spațiu, obiective, buget și calendar, urmată de o propunere adaptată.</p>
          </details>
        </div>
      </section>

      <Footer />
    </main>
  );
}
