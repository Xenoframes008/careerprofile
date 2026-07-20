import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Spotlight } from "@/components/ui/Spotlight";
import { siteConfig } from "@/config/site";

const INFO_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.author.email,
    href: siteConfig.links.email,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "atanusamadder2022",
    href: siteConfig.links.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "atanusamadder",
    href: siteConfig.links.github,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: undefined,
  },
];

export function ContactInfoCard() {
  return (
    <Spotlight className="glass rounded-2xl p-6 sm:p-7">
      <h3 className="text-base font-semibold text-foreground">Contact details</h3>
      <ul className="mt-5 space-y-4">
        {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
          <li key={label} className="flex items-center gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface/[0.08] text-accent-secondary">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-foreground-muted">{label}</p>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="focus-ring truncate text-sm font-medium text-foreground transition-colors hover:text-accent-secondary"
                >
                  {value}
                </a>
              ) : (
                <p className="truncate text-sm font-medium text-foreground">{value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-border pt-6">
        <p className="mb-4 text-xs text-foreground-muted">Find me elsewhere</p>
        <SocialLinks />
      </div>
    </Spotlight>
  );
}
