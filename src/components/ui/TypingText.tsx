"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypingTextProps {
  words: readonly string[];
  className?: string;
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
}

export function TypingText({
  words,
  className,
  typingSpeedMs = 65,
  deletingSpeedMs = 35,
  pauseMs = 1800,
}: TypingTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing",
  );

  useEffect(() => {
    if (prefersReducedMotion || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charCount < currentWord.length) {
        timeout = setTimeout(() => setCharCount((c) => c + 1), typingSpeedMs);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pauseMs);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else {
      if (charCount > 0) {
        timeout = setTimeout(
          () => setCharCount((c) => c - 1),
          deletingSpeedMs,
        );
      } else {
        timeout = setTimeout(() => {
          setWordIndex((i) => (i + 1) % words.length);
          setPhase("typing");
        }, 0);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    charCount,
    phase,
    wordIndex,
    words,
    typingSpeedMs,
    deletingSpeedMs,
    pauseMs,
    prefersReducedMotion,
  ]);

  if (prefersReducedMotion) {
    return <span className={className}>{words[0]}</span>;
  }

  const currentWord = words[wordIndex % words.length];
  const displayText = currentWord.slice(0, charCount);

  return (
    <span className={cn("inline-flex items-baseline", className)}>
      {displayText}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.1em] animate-[blink_1s_step-end_infinite] bg-current"
      />
    </span>
  );
}
