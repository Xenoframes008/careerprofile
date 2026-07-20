import type { StatItem } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";

interface StatCardProps {
  stat: StatItem;
  index?: number;
}

export function StatCard({ stat, index = 0 }: StatCardProps) {
  return (
    <Reveal index={index} maxStagger={4} y={16}>
      <Spotlight className="glass rounded-2xl px-6 py-7 text-center transition-transform duration-300 hover:-translate-y-1">
        <p className="text-gradient text-3xl font-bold tracking-tight sm:text-4xl">
          {stat.value}
        </p>
        <p className="mt-2 text-sm text-foreground-muted">{stat.label}</p>
      </Spotlight>
    </Reveal>
  );
}
