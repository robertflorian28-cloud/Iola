"use client";

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";

const slides = [
  {
    title: "Decizii clare",
    text: "Vezi opțiunile în context, înțelegi impactul lor și știi ce aprobăm înainte să intrăm în execuție.",
  },
  {
    title: "Un singur fir logic",
    text: "Arhitectura, interiorul, instalațiile și mobilierul sunt coordonate ca părți ale aceluiași proiect.",
  },
  {
    title: "Detalii care se pot construi",
    text: "Conceptul este susținut de planuri, selecții și informații pe care echipele le pot folosi în șantier.",
  },
];

export function ExperienceCarousel() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  function move(direction: number) {
    setActive((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <div className="experience-carousel">
      <div className="experience-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Ideea anterioară">
          <ArrowLeft size={22} weight="regular" />
        </button>
        <button type="button" onClick={() => move(1)} aria-label="Ideea următoare">
          <ArrowRight size={22} weight="regular" />
        </button>
      </div>
      <div className="experience-slide" aria-live="polite">
        <p className="experience-count">{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</p>
        <h3>{slide.title}</h3>
        <p>{slide.text}</p>
      </div>
    </div>
  );
}
