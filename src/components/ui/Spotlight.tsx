"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  children: ReactNode;
  className?: string;
  /** Radius (px) of the glow that follows the pointer. */
  size?: number;
}

/**
 * Wraps a card with a subtle radial glow that tracks the pointer on hover.
 * Position is written straight to CSS custom properties (no React state),
 * so movement never triggers a re-render — it's effectively free at runtime.
 */
export function Spotlight({ children, className, size = 260 }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || event.pointerType === "touch") return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn("group/spotlight relative isolate", className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100"
        style={{
          background: `radial-gradient(${size}px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in srgb, var(--accent-secondary) 14%, transparent), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
