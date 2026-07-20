import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { navItems, siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-border">
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-6 text-foreground-muted">
              {siteConfig.tagline} Currently focused on building resilient
              test automation frameworks and shipping quality software.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="focus-ring text-sm text-foreground-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground-muted">
              <li>
                <a
                  href={siteConfig.links.email}
                  className="focus-ring transition-colors hover:text-foreground"
                >
                  {siteConfig.author.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring transition-colors hover:text-foreground"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring transition-colors hover:text-foreground"
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-foreground-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>

          <a
            href="#top"
            className="focus-ring glass group flex h-10 items-center gap-2 rounded-full px-4 text-xs font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
