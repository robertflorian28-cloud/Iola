"use client";

import { useInView } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

const portraitSizes = "(max-width: 420px) 76vw, (max-width: 767px) 320px, (max-width: 1023px) 34vw, (max-width: 1439px) 36vw, 500px";

type StudioPortraitProps = {
  src?: string | null;
  alt?: string;
};

export function StudioPortrait({
  src = "/assets/cofondator-arhitect.png",
  alt = "Cofondatoarea și arhitecta studioului IOLA",
}: StudioPortraitProps) {
  const portraitRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isInView = useInView(portraitRef, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -10% 0px",
  });

  if (!src) {
    return (
      <div className="studio-image studio-image-placeholder">
        <span>Fotografie în curând</span>
      </div>
    );
  }

  return (
    <div ref={portraitRef} className={`studio-image${isInView && isLoaded ? " is-revealed" : ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={portraitSizes}
        onLoad={() => setIsLoaded(true)}
      />
      {/* Fade a monochrome copy to reveal color without animating an image filter. */}
      <Image
        className="studio-portrait-monochrome"
        src={src}
        alt=""
        aria-hidden="true"
        fill
        sizes={portraitSizes}
      />
    </div>
  );
}
