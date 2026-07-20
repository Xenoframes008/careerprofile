"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfoCard } from "@/components/sections/ContactInfoCard";
import { MapPlaceholder } from "@/components/sections/MapPlaceholder";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something reliable together"
          description="Open to Software QA, Test Automation and Quality Engineering opportunities in Dublin and beyond. Drop a message and I'll get back to you soon."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <ContactInfoCard />
            <MapPlaceholder />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
