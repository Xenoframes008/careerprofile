"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/sections/TimelineItem";
import { experience } from "@/config/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Career timeline"
          description="From game QA at Ubisoft to leading enterprise test delivery today — click any role to explore the details."
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[21px] w-px bg-border sm:left-[25px]"
          />
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute top-0 bottom-0 left-[21px] w-px bg-linear-to-b from-accent via-accent-secondary to-accent/30 sm:left-[25px]"
          />

          <ol className="space-y-6">
            {experience.map((item, index) => (
              <TimelineItem
                key={`${item.company}-${item.role}`}
                item={item}
                index={index}
              />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
