import { ParticleField } from "@/components/ui/ParticleField";

export function BackgroundDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_40%,transparent_100%)]" />

      <div className="animate-glow blob-a absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />
      <div className="blob-b absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-accent-secondary/20 blur-[110px]" />
      <div className="blob-a absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[110px]" />

      <ParticleField />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
