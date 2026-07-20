"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Eye, ExternalLink, ShieldCheck } from "lucide-react";
import { CertificateVisual } from "@/components/ui/CertificateVisual";
import { Modal } from "@/components/ui/Modal";
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
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.5, delay: (index % 6) * 0.08, ease: "easeOut" }}
        className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-border-strong"
      >
        <div className="p-4 pb-0 sm:p-5 sm:pb-0">
          <CertificateVisual
            title={certification.title}
            issuer={certification.issuer}
            issueDate={certification.issueDate}
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              {certification.title}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-foreground-muted">
              <ShieldCheck className="h-3.5 w-3.5 text-accent-secondary" aria-hidden="true" />
              {certification.issuer}
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-foreground-muted/80">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              Issued {certification.issueDate}
            </p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {certification.technology.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-secondary ring-1 ring-inset ring-accent/20"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-surface/[0.08] px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface/[0.14]"
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
              Preview
            </button>
            {certification.credentialUrl && (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                {certification.credentialLabel ?? "Verify"}
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} labelledBy={titleId}>
        <CertificateVisual
          title={certification.title}
          issuer={certification.issuer}
          issueDate={certification.issueDate}
          size="lg"
          className="mx-auto max-w-md"
        />
        <h3 id={titleId} className="mt-6 text-lg font-semibold text-foreground">
          {certification.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-foreground-muted">
          {certification.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {certification.technology.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-secondary ring-1 ring-inset ring-accent/20"
            >
              {tech}
            </li>
          ))}
        </ul>

        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent to-accent-secondary px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:brightness-110"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            {certification.credentialLabel ?? "Verify credential"}
          </a>
        )}
      </Modal>
    </>
  );
}
