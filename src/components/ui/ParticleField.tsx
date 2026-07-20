import type { CSSProperties } from "react";

/** Deterministic pseudo-random in [0, 1) — avoids Math.random() so server
 * and client render identical markup (no hydration mismatch). */
function seededRandom(seed: number) {
  const x = Math.sin(seed * 999.17) * 10000;
  return x - Math.floor(x);
}

const PARTICLE_COUNT = 26;

const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  top: seededRandom(i) * 100,
  left: seededRandom(i + 100) * 100,
  size: 1.5 + seededRandom(i + 200) * 2.5,
  duration: 10 + seededRandom(i + 300) * 10,
  delay: seededRandom(i + 400) * -14,
  opacity: 0.15 + seededRandom(i + 500) * 0.35,
}));

/**
 * A handful of slow-drifting, twinkling dots. Pure CSS (no JS animation
 * loop, no canvas) so it's effectively free on the main thread — safe to
 * leave running behind the rest of the page.
 */
export function ParticleField() {
  return (
    <div aria-hidden="true" className="particle-field absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <span
          key={i}
          className="particle-dot absolute rounded-full bg-accent-secondary"
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            "--particle-opacity": particle.opacity,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
