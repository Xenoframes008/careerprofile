import { ProficiencyRing } from "@/components/ui/ProficiencyRing";
import { Reveal } from "@/components/ui/Reveal";
import { proficiencyLabel } from "@/lib/utils";
import type { Skill } from "@/types";

interface SkillChipProps {
  skill: Skill;
  index?: number;
}

export function SkillChip({ skill, index = 0 }: SkillChipProps) {
  const delay = (index % 8) * 0.05;

  return (
    <Reveal
      y={10}
      scale={0.94}
      margin="-20px"
      duration={0.35}
      delay={delay}
      staggerStep={0}
      whileHover={{ y: -3 }}
      className="glass group relative flex items-center gap-2.5 rounded-full py-1.5 pr-2 pl-3.5 transition-colors duration-300 hover:border-border-strong"
    >
      <span className="text-xs font-medium text-foreground sm:text-sm">
        {skill.name}
      </span>
      <ProficiencyRing level={skill.level} size={24} delay={delay} />

      <span
        role="tooltip"
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 -translate-y-1 rounded-lg bg-foreground px-2.5 py-1 text-[11px] font-medium text-background opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-0 group-hover:opacity-100"
      >
        {proficiencyLabel(skill.level)}
      </span>
    </Reveal>
  );
}
