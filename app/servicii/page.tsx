import { GlassmorphismCta } from "@/components/ui/GlassmorphismCta";
import { StudioDetailPage } from "@/components/pages/StudioDetailPage";
import { pageMetadata, siteName } from "@/lib/seo";
import { contact, services } from "@/lib/site-data";

const title = "Servicii de arhitectură și design interior";
const description = "Vezi ce include proiectarea la IOLA Concept, de la concept și randări 3D la planuri tehnice, selecția materialelor și proiectarea mobilierului la comandă.";

export const metadata = pageMetadata(`${title} | ${siteName}`, description, "/servicii");

export default function ServicesPage() {
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;

  return (
    <StudioDetailPage
      title={title}
      intro="Proiectăm locuințe și spații comerciale. Stabilim de la prima discuție de ce are nevoie proiectul tău, apoi legăm conceptul de planurile și alegerile necesare pentru implementare."
      path="/servicii"
    >
      <div className="detail-services">
        {services.map((service) => (
          <section className="detail-section" id={service.slug} key={service.slug}>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </section>
        ))}
      </div>
      <div className="detail-links">
        <GlassmorphismCta href={whatsappUrl} label="Discută cu noi" target="_blank" animated={false} />
        <a className="detail-link" href="/#proiecte">Vezi proiectele IOLA</a>
      </div>
    </StudioDetailPage>
  );
}
