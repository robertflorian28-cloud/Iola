import type { CSSProperties } from "react";

export function WordScrub({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <p className="scrub-copy">
      {words.map((word, index) => (
        <span
          className="scrub-word"
          key={`${word}-${index}`}
          style={{ "--word-index": index, "--word-count": words.length } as CSSProperties}
        >
          {word}{" "}
        </span>
      ))}
    </p>
  );
}
