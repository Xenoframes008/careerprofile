"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type RevealElement = "div" | "li";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport"> {
  /** Position in a list — used to derive a staggered entrance delay. */
  index?: number;
  /** Delay (in seconds) added per item when staggering a group. */
  staggerStep?: number;
  /** Caps how many items deep the stagger keeps increasing before repeating. */
  maxStagger?: number;
  /** Vertical offset (px) the element animates in from. */
  y?: number;
  /** Horizontal offset (px) the element animates in from (mutually exclusive with `y` in practice). */
  x?: number;
  /** Starting scale the element animates in from. */
  scale?: number;
  /** Entrance animation duration (seconds). */
  duration?: number;
  /** Extra fixed delay (seconds), added on top of the stagger delay. */
  delay?: number;
  /** Root margin for the `whileInView` viewport check — how early the entrance fires. */
  margin?: string;
  /** Rendered element tag. Defaults to `div`; use `li` for list items. */
  as?: RevealElement;
}

/**
 * Shared scroll-reveal wrapper. Centralizes the `whileInView` fade/rise-in
 * pattern that was previously duplicated across most section and card
 * components, so every entrance animation stays consistent and easy to tune
 * from one place.
 */
export function Reveal({
  index = 0,
  staggerStep = 0.08,
  maxStagger = 6,
  y = 20,
  x,
  scale,
  duration = 0.5,
  delay = 0,
  margin = "-40px",
  as = "div",
  transition,
  children,
  ...props
}: RevealProps) {
  // `motion.div` and `motion.li` differ only in their DOM event-handler
  // generics, which are functionally interchangeable here — the tag is
  // chosen at runtime, so a single cast keeps the public API element-agnostic.
  const MotionTag = (as === "li" ? motion.li : motion.div) as typeof motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y, ...(x !== undefined && { x }), ...(scale !== undefined && { scale }) }}
      whileInView={{
        opacity: 1,
        y: 0,
        ...(x !== undefined && { x: 0 }),
        ...(scale !== undefined && { scale: 1 }),
      }}
      viewport={{ once: true, margin }}
      transition={{
        duration,
        delay: delay + (index % maxStagger) * staggerStep,
        ease: "easeOut",
        ...transition,
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
