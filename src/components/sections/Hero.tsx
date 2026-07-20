"use client";

import { motion, type Variants } from "framer-motion";
import { Briefcase, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TypingText } from "@/components/ui/TypingText";
import { HeroPhoto } from "@/components/sections/HeroPhoto";
import { siteConfig } from "@/config/site";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

// Intentionally transform-only (no opacity change): animating opacity on
// above-the-fold text defers Largest Contentful Paint until hydration
// finishes, since the browser won't treat the element as "painted" while
// it's transparent. A translate-only entrance keeps the motion feel without
// blocking LCP.
const item: Variants = {
  hidden: { y: 16 },
  show: { y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section aria-label="Introduction" className="relative pb-16 sm:pb-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            <motion.p
              variants={item}
              className="text-sm font-semibold tracking-wide text-accent-secondary"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-foreground-muted lg:justify-start"
            >
              <span className="inline-flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
                {siteConfig.role} · {siteConfig.company}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
                {siteConfig.location}
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 flex min-h-8 items-center justify-center gap-2 font-mono text-lg text-foreground sm:text-xl lg:justify-start"
            >
              <span className="text-accent" aria-hidden="true">
                &gt;
              </span>
              <TypingText words={siteConfig.roles} className="text-gradient font-semibold" />
            </motion.p>

            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-xl text-base leading-7 text-foreground-muted lg:mx-0"
            >
              {siteConfig.introduction}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <Button href={siteConfig.resumeUrl} download size="md">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </Button>
              <Button
                href={siteConfig.links.linkedin}
                variant="glass"
                size="md"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </Button>
              <Button href={siteConfig.links.github} variant="glass" size="md">
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </Button>
              <Button href="/#contact" variant="glass" size="md">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact
              </Button>
            </motion.div>
          </motion.div>

          <HeroPhoto />
        </div>
      </Container>
    </section>
  );
}
