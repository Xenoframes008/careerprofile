import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { socialLinks } from "@/config/site";
import { cn } from "@/lib/utils";

const icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
};

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socialLinks.map((link) => {
        const Icon = icons[link.icon];
        const isExternal = !link.href.startsWith("mailto:");

        return (
          <li key={link.label}>
            <a
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="focus-ring glass flex h-10 w-10 items-center justify-center rounded-full text-foreground-muted transition-colors duration-300 hover:border-border-strong hover:text-foreground"
            >
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
