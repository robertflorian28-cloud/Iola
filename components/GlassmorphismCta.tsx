import { ArrowRight } from "@phosphor-icons/react/ssr";

type GlassmorphismCtaProps = {
  href: string;
  label: string;
  animated?: boolean;
  target?: "_blank";
};

export function GlassmorphismCta({ href, label, animated = true, target }: GlassmorphismCtaProps) {
  return (
    <a className={`glassmorphism-cta${animated ? "" : " glassmorphism-cta-static"}`} href={href} target={target} rel={target ? "noreferrer" : undefined}>
      <span className="glassmorphism-cta-content">
        <span className="glassmorphism-cta-label">{label}</span>
        {!animated ? (
          <span className="glassmorphism-cta-icon" aria-hidden="true">
            <ArrowRight size={17} weight="bold" />
          </span>
        ) : null}
      </span>
    </a>
  );
}
