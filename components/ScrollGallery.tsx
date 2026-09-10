"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { portfolioImages } from "@/lib/site-data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ScrollGallery() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray<HTMLElement>(".scroll-project");
        items.forEach((item) => {
          const visual = item.querySelector<HTMLElement>(".scroll-project-media");
          if (!visual) return;

          gsap
            .timeline({
              scrollTrigger: {
                trigger: item,
                start: "top 92%",
                end: "bottom top",
                scrub: 1,
              },
            })
            .fromTo(visual, { scale: 0.82, opacity: 0.28 }, { scale: 1, opacity: 1, duration: 0.52, ease: "none" })
            .to(visual, { scale: 0.94, opacity: 0.2, duration: 0.48, ease: "none" });
        });
      });
      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <div className="scroll-gallery" ref={root}>
      {portfolioImages.map((image) => (
        <article className="scroll-project" key={`${image.projectSlug}-${image.src}`}>
          <div className="scroll-project-media">
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 100vw, 72vw" />
          </div>
          <div className="scroll-project-caption">
            <h3>{image.title}</h3>
            <p>{image.projectTitle} · {image.sequence}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
