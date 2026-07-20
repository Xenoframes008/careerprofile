import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="focus-ring group flex items-center gap-2.5 rounded-lg"
      aria-label="Atanu Samadder — Home"
    >
      <span
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-linear-to-br from-accent to-accent-secondary text-[13px] font-bold tracking-tight text-accent-foreground shadow-[0_0_24px_-6px_var(--accent)] transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-3"
        aria-hidden="true"
      >
        AS
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight text-foreground">
          Atanu Samadder
        </span>
        <span className="text-[11px] font-medium tracking-wide text-foreground-muted">
          QA Engineer
        </span>
      </span>
    </Link>
  );
}
