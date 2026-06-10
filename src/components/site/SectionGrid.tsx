type SectionGridProps = {
  /** Decorative frame anchor — flips with reversed layouts */
  align?: "left" | "right";
  /** Grid density in px */
  cell?: number;
  className?: string;
};

/**
 * Subtle pixel grid + golden-ratio frame for section backgrounds.
 * Purely decorative — always aria-hidden.
 */
export function SectionGrid({
  align = "right",
  cell = 20,
  className = "",
}: SectionGridProps) {
  const isLeft = align === "left";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in oklch, var(--color-border) 70%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklch, var(--color-border) 70%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: `${cell}px ${cell}px`,
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 35%, black 15%, transparent 72%)",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 35%, black 15%, transparent 72%)",
        }}
      />

      {/* φ ratio frame */}
      <div
        className={`absolute top-1/2 w-[min(38vw,480px)] -translate-y-1/2 aspect-[1.618/1] rounded-sm border border-accent/20 ${
          isLeft ? "-left-[8%]" : "-right-[8%]"
        }`}
      />

      {/* Nested ratio blocks — pixel-perfect steps */}
      <div
        className={`absolute top-[18%] h-20 w-20 border border-primary/10 ${
          isLeft ? "left-[6%]" : "right-[6%]"
        }`}
      />
      <div
        className={`absolute top-[calc(18%+5rem)] h-12 w-12 border border-accent/15 bg-accent/[0.04] ${
          isLeft ? "left-[calc(6%+5rem)]" : "right-[calc(6%+5rem)]"
        }`}
      />
      <div
        className={`absolute bottom-[16%] h-8 w-8 bg-primary/[0.04] border border-primary/10 ${
          isLeft ? "left-[14%]" : "right-[14%]"
        }`}
      />
    </div>
  );
}
