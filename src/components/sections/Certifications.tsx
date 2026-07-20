"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificationCard } from "@/components/sections/CertificationCard";
import { certifications } from "@/config/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials that back the craft"
          description="Standards-based qualifications that reinforce a structured, repeatable approach to quality — more are added as they're earned."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              index={index}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (certifications.length % 6) * 0.08, ease: "easeOut" }}
            className="glass flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-2xl border-dashed p-6 text-center"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface/[0.08] text-accent-secondary">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-medium text-foreground">
              More on the way
            </p>
            <p className="text-xs leading-5 text-foreground-muted">
              New credentials will appear here automatically as they&apos;re earned.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
