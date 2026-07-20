import { Award } from "lucide-react";
import Image from "next/image";
import { cn, withBasePath } from "@/lib/utils";

interface CertificateVisualProps {
  title: string;
  issuer: string;
  issueDate: string;
  previewImage?: string;
  size?: "sm" | "lg";
  className?: string;
}

export function CertificateVisual({
  title,
  issuer,
  issueDate,
  previewImage,
  size = "sm",
  className,
}: CertificateVisualProps) {
  const isLarge = size === "lg";

  if (previewImage) {
    return (
      <div
        className={cn(
          "relative isolate overflow-hidden rounded-2xl border border-border-strong bg-background-secondary",
          isLarge ? "aspect-[4/3]" : "aspect-[16/10]",
          className,
        )}
      >
        <Image
          src={withBasePath(previewImage)}
          alt={`${title} certificate`}
          fill
          sizes={isLarge ? "(min-width: 768px) 640px, 100vw" : "320px"}
          className="object-cover object-center"
          draggable={false}
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-grid relative isolate overflow-hidden rounded-2xl border border-border-strong bg-background-secondary",
        isLarge ? "aspect-[4/3] p-8" : "aspect-[16/10] p-5",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-3 rounded-xl border border-dashed border-accent-secondary/30" />
      <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent-secondary/20 blur-3xl" />

      <div className="relative flex h-full flex-col items-center justify-center gap-3 text-center">
        <span
          className={cn(
            "flex items-center justify-center rounded-full bg-linear-to-br from-accent to-accent-secondary text-accent-foreground shadow-[0_10px_30px_-10px_var(--accent)]",
            isLarge ? "h-16 w-16" : "h-10 w-10",
          )}
        >
          <Award className={isLarge ? "h-8 w-8" : "h-5 w-5"} aria-hidden="true" />
        </span>

        <p
          className={cn(
            "text-gradient font-semibold tracking-tight",
            isLarge ? "max-w-sm text-lg" : "max-w-[220px] text-xs",
          )}
        >
          {title}
        </p>

        {isLarge && (
          <>
            <p className="text-sm text-foreground-muted">{issuer}</p>
            <p className="font-mono text-xs text-foreground-muted/80">
              Issued {issueDate}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
