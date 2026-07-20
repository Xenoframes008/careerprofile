"use client";

import { useId, useState } from "react";
import { CalendarDays, Eye, ExternalLink, ShieldCheck } from "lucide-react";
import { CertificateVisual } from "@/components/ui/CertificateVisual";
import { CertificationDetailsModal } from "@/components/sections/CertificationDetailsModal";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import type { Certification } from "@/types";

interface CertificationCardProps {
  certification: Certification;
  index?: number;
}

export function CertificationCard({ certification, index = 0 }: CertificationCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  return (
    <>
      <Reveal index={index} y={24} whileHover={{ y: -6 }} className="h-full">
        <Spotlight className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-border-strong">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="focus-ring flex w-full flex-1 flex-col rounded-[inherit] text-left"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
          >
            <div className="p-4 pb-0 sm:p-5 sm:pb-0">
              <CertificateVisual
                title={certification.title}
                issuer={certification.issuer}
                issueDate={certification.issueDate}
                previewImage={certification.previewImage}
              />
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {certification.title}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-foreground-muted">
                  <ShieldCheck
                    className="h-3.5 w-3.5 shrink-0 text-accent-secondary"
                    aria-hidden="true"
                  />
                  {certification.issuer}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-foreground-muted/80">
                  <CalendarDays className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  Issued {certification.issueDate}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {certification.technology.slice(0, 4).map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-secondary ring-1 ring-inset ring-accent/20"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center gap-2 pt-1">
                <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-surface/[0.08] px-4 py-2 text-sm font-medium text-foreground transition-colors group-hover:bg-surface/[0.14]">
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  View certificate
                </span>
                {certification.credentialUrl && (
                  <span className="inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-foreground-muted">
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    Verify
                  </span>
                )}
              </div>
            </div>
          </button>
        </Spotlight>
      </Reveal>

      <CertificationDetailsModal
        certification={certification}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        titleId={titleId}
      />
    </>
  );
}
