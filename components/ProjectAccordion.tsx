"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import Image, { getImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/site-data";

type Project = (typeof projects)[number];

const swipeDistance = 44;
const imageSizes = "(max-width: 767px) calc(100vw - 40px), 42vw";

function SwipeProject({ project }: { project: Project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const root = useRef<HTMLElement>(null);
  const isNearViewport = useInView(root, { margin: "200px 0px", once: true });
  const reduceMotion = useReducedMotion();
  const activeImage = project.images[activeIndex];
  const hasImages = project.images.length > 0;

  useEffect(() => {
    if (!isNearViewport || project.images.length < 2) return;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (connection?.saveData) return;

    // Warm only the next slide, after this gallery approaches the viewport.
    const nextImage = project.images[(activeIndex + 1) % project.images.length];
    const { props } = getImageProps({ src: nextImage.src, alt: "", fill: true, sizes: imageSizes });
    const preload = new window.Image();
    preload.decoding = "async";
    preload.fetchPriority = "low";
    preload.sizes = props.sizes ?? "";
    preload.srcset = props.srcSet ?? "";
    preload.src = props.src;
  }, [activeIndex, isNearViewport, project.images]);

  function changeImage(step: 1 | -1) {
    if (project.images.length < 2) return;
    setDirection(step);
    setActiveIndex((current) => (current + step + project.images.length) % project.images.length);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0 || (event.target as HTMLElement).closest("button")) return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (!pointerStart.current) return;

    const distanceX = event.clientX - pointerStart.current.x;
    const distanceY = event.clientY - pointerStart.current.y;
    pointerStart.current = null;

    if (Math.abs(distanceX) < swipeDistance || Math.abs(distanceX) <= Math.abs(distanceY)) return;
    changeImage(distanceX < 0 ? 1 : -1);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeImage(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      changeImage(1);
    }
  }

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.42, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <article
      ref={root}
      className={`accordion-project${hasImages ? "" : " is-placeholder"}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        pointerStart.current = null;
      }}
      aria-label={hasImages
        ? `${project.title}. Galerie cu ${project.images.length} imagini.`
        : `${project.title}. Imaginile proiectului vor fi adăugate în curând.`}
    >
      <div
        className="accordion-project-media"
        aria-label={activeImage?.alt ?? project.alt}
      >
        {activeImage ? (
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className="accordion-project-slide"
              key={activeImage.src}
              initial={reduceMotion ? false : { opacity: 0, x: direction * 42 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -42 }}
              transition={transition}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                draggable={false}
                sizes={imageSizes}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="accordion-project-placeholder">
            <p>Imagini în pregătire</p>
          </div>
        )}
      </div>
      <div className="accordion-project-wash" />
      <div className="accordion-project-copy">
        <h3>{project.title}</h3>
        <p>{project.type}</p>
      </div>
      <p className="visually-hidden" role="status" aria-atomic="true">
        {activeImage && `Imaginea ${activeIndex + 1} din ${project.images.length}: ${activeImage.alt}`}
      </p>
      {project.images.length > 1 && <div className="accordion-project-controls">
        <button
          type="button"
          onClick={() => changeImage(-1)}
          aria-label={`Imaginea precedentă din ${project.title}`}
        >
          <CaretLeft aria-hidden="true" size={18} weight="bold" />
        </button>
        <button
          type="button"
          onClick={() => changeImage(1)}
          aria-label={`Imaginea următoare din ${project.title}`}
        >
          <CaretRight aria-hidden="true" size={18} weight="bold" />
        </button>
      </div>}
    </article>
  );
}

export function ProjectAccordion() {
  return (
    <div className="project-accordion">
      {projects.map((project) => (
        <SwipeProject project={project} key={project.slug} />
      ))}
    </div>
  );
}
