"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { navItems } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const toggleButton = menuToggleRef.current;
    document.body.style.overflow = "hidden";
    const focusFrame = requestAnimationFrame(() => firstMenuLinkRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      toggleButton?.focus();
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 sm:pt-5">
      <Container>
        <div
          className={cn(
            "glass-strong flex items-center justify-between rounded-2xl px-4 py-3 transition-shadow duration-300 sm:px-5",
            scrolled && "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]",
          )}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul
              className="flex items-center gap-1"
              onMouseLeave={() => setHoveredHref(null)}
            >
              {navItems.map((item) => (
                <li key={item.href} className="relative">
                  {hoveredHref === item.href && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 rounded-full bg-surface/[0.08]"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  <Link
                    href={item.href}
                    onMouseEnter={() => setHoveredHref(item.href)}
                    className="focus-ring relative z-10 block rounded-full px-4 py-2 text-sm font-medium text-foreground-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/#contact" size="sm">
              Let&apos;s talk
            </Button>
          </div>

          <button
            ref={menuToggleRef}
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="focus-ring -mr-1.5 flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-surface/[0.08] lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden"
          >
            <Container className="mt-3">
              <nav aria-label="Mobile" className="glass-strong flex flex-col gap-1 rounded-2xl p-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.04 }}
                  >
                    <Link
                      ref={index === 0 ? firstMenuLinkRef : undefined}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="focus-ring block rounded-xl px-4 py-3 text-base font-medium text-foreground-muted transition-colors hover:bg-surface/[0.06] hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-2 flex items-center justify-between gap-3 border-t border-border pt-4">
                  <SocialLinks />
                  <Button href="/#contact" size="sm" onClick={() => setMenuOpen(false)}>
                    Let&apos;s talk
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
