"use client";

import { Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCard } from "@/components/ui/IconCard";
import { StatCard } from "@/components/ui/StatCard";
import { Button } from "@/components/ui/Button";
import { recruiterTraits, recruiterStats } from "@/config/whyHireMe";
import { siteConfig } from "@/config/site";

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Recruiters Hire Me"
          title="The traits behind the track record"
          description="Beyond tools and technologies, here's the mindset that shows up in every release, every triage, and every test case."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recruiterStats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recruiterTraits.map((trait, index) => (
            <IconCard
              key={trait.title}
              icon={trait.icon}
              title={trait.title}
              description={trait.description}
              index={index}
            />
          ))}
        </div>

        <div className="glass-strong mt-14 flex flex-col items-center gap-5 rounded-3xl p-10 text-center sm:p-14">
          <p className="max-w-xl text-lg font-semibold text-foreground sm:text-xl">
            Ready to see the full picture — roles, tools and results in one place?
          </p>
          <Button href={siteConfig.resumeUrl} size="lg" download>
            <Download className="h-5 w-5" aria-hidden="true" />
            Download Resume
          </Button>
        </div>
      </Container>
    </section>
  );
}
