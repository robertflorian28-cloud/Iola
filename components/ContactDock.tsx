import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { contact } from "@/lib/site-data";

const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;

export function ContactDock() {
  return (
    <aside className="contact-dock" aria-label="Contact rapid">
      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Scrie pe WhatsApp" data-tooltip="WhatsApp">
        <WhatsappLogo size={22} weight="regular" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
