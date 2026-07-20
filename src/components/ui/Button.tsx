import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "glass" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  download?: boolean | string;
}

interface ButtonAsButton extends BaseProps {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-linear-to-r from-accent to-accent-secondary text-accent-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_24px_-8px_var(--accent)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_10px_32px_-6px_var(--accent-secondary)] hover:brightness-110 active:brightness-95",
  glass:
    "glass text-foreground hover:border-border-strong hover:bg-surface/[0.08]",
  ghost:
    "text-foreground-muted hover:text-foreground",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, target, rel, onClick, download } = props;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        download={download}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as ButtonAsButton;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
