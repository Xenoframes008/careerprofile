import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-2xl",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      <span className="glass inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-accent-secondary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-foreground-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
