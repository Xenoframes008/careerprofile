"use client";

import { motion, type Variants } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroPhoto } from "@/components/sections/HeroPhoto";
import { siteConfig } from "@/config/site";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

// Intentionally transform-only (no opacity change): animating opacity on
// above-the-fold text defers Largest Contentful Paint until hydration
// finishes, since the browser won't treat the element as "painted" while
// it's transparent. A translate-only entrance keeps the motion feel without
// blocking LCP.
const item: Variants = {
  hidden: { y: 16 },
  show: { y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section aria-label="Introduction" className="relative pb-16 sm:pb-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
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
              className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
            >
              {siteConfig.name}
            </motion.h1>

            {/* Role stack — scannable in under 5 seconds */}
            <motion.div variants={item} className="mt-5 space-y-1.5 sm:mt-6">
              <p className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {hero.title}
              </p>
              <p className="text-base font-medium text-accent-secondary sm:text-lg">
                {hero.subtitle}
              </p>
              <p className="text-sm text-foreground-muted sm:text-[0.95rem]">
                {siteConfig.company} • {siteConfig.location}
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="mx-auto mt-7 max-w-md text-base leading-relaxed text-foreground sm:mt-8 sm:text-lg lg:mx-0"
            >
              {hero.headline}
            </motion.p>

            <motion.div variants={item} className="mt-6 sm:mt-7">
              <p className="text-xs font-semibold tracking-[0.14em] text-foreground-muted uppercase">
                Specialising in
              </p>
              <ul className="mt-3 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                {hero.specialties.map((specialty) => (
                  <li key={specialty}>
                    <span className="glass inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium text-foreground sm:text-sm">
                      {specialty}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap lg:justify-start"
            >
              <Button href={siteConfig.resumeUrl} download size="lg" className="w-full sm:w-auto">
                <Download className="h-5 w-5" aria-hidden="true" />
                Download Resume
              </Button>

              <div className="flex w-full flex-wrap items-center justify-center gap-2.5 sm:w-auto lg:justify-start">
                <Button href={siteConfig.links.linkedin} variant="glass" size="sm">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </Button>
                <Button href={siteConfig.links.github} variant="glass" size="sm">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </Button>
                <Button href="/#contact" variant="glass" size="sm">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Contact
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <HeroPhoto />
        </div>
      </Container>
    </section>
  );
}
