import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";
import type { IconCardData } from "@/types";

interface IconCardProps extends IconCardData {
  index?: number;
  className?: string;
  /** Heading level for the card title — depends on how deep the card sits
   * in the surrounding section's outline (e.g. h3 directly under a section
   * heading, h4 when nested inside an intermediate subsection heading). */
  headingLevel?: "h3" | "h4";
}

export function IconCard({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
  headingLevel = "h3",
}: IconCardProps) {
  const Heading = headingLevel;

  return (
    <Reveal index={index} className="h-full">
      <Spotlight
        className={cn(
          "glass group flex h-full flex-col gap-4 overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-border-strong",
          className,
        )}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/20"
        />

        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-accent to-accent-secondary text-accent-foreground shadow-[0_8px_20px_-8px_var(--accent)] transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>

        <div className="relative">
          <Heading className="text-base font-semibold text-foreground">{title}</Heading>
          <p className="mt-2 text-sm leading-6 text-foreground-muted">
            {description}
          </p>
        </div>
      </Spotlight>
    </Reveal>
  );
}
