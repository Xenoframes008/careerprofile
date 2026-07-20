import { Compass, Heart, Sparkles as SparklesIcon, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCard } from "@/components/ui/IconCard";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import {
  careerHighlights,
  personalInterests,
  professionalSummary,
  strengths,
  workPhilosophy,
} from "@/config/about";
import type { IconCardData } from "@/types";

interface SubsectionProps {
  icon: LucideIcon;
  title: string;
  items: IconCardData[];
  columns?: string;
}

function AboutSubsection({ icon: Icon, title, items, columns }: SubsectionProps) {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-center gap-2.5 lg:justify-start">
        <Icon className="h-5 w-5 text-accent-secondary" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>

      <div
        className={
          columns ?? "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {items.map((cardItem, index) => (
          <IconCard
            key={cardItem.title}
            icon={cardItem.icon}
            title={cardItem.title}
            description={cardItem.description}
            index={index}
            headingLevel="h4"
          />
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="The person behind the test cases"
          description="A quick look at how I think about quality, where I've come from, and what keeps me curious."
        />

        <Reveal duration={0.6} className="mx-auto mt-12 max-w-3xl">
          <Spotlight className="glass-strong rounded-3xl p-8 text-center sm:p-10 lg:text-left">
            <span className="text-xs font-semibold tracking-wide text-accent-secondary">
              PROFESSIONAL SUMMARY
            </span>
            <p className="mt-4 text-base leading-7 text-foreground-muted sm:text-lg sm:leading-8">
              {professionalSummary}
            </p>
          </Spotlight>
        </Reveal>

        <AboutSubsection
          icon={Trophy}
          title="Career Highlights"
          items={careerHighlights}
        />

        <AboutSubsection icon={Compass} title="Strengths" items={strengths} />

        <AboutSubsection
          icon={SparklesIcon}
          title="Work Philosophy"
          items={workPhilosophy}
          columns="mt-6 grid gap-5 sm:grid-cols-1 lg:grid-cols-3"
        />

        <AboutSubsection
          icon={Heart}
          title="Personal Interests"
          items={personalInterests}
          columns="mt-6 grid gap-5 sm:grid-cols-2"
        />
      </Container>
    </section>
  );
}
