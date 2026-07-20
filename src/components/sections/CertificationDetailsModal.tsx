"use client";

import { motion } from "framer-motion";
import {
  Award,
  Building2,
  CalendarDays,
  Download,
  ExternalLink,
  Hash,
  Sparkles,
} from "lucide-react";
import { CertificateVisual } from "@/components/ui/CertificateVisual";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/utils";
import type { Certification } from "@/types";

interface CertificationDetailsModalProps {
  certification: Certification;
  isOpen: boolean;
  onClose: () => void;
  titleId: string;
}

const detailItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export function CertificationDetailsModal({
  certification,
  isOpen,
  onClose,
  titleId,
}: CertificationDetailsModalProps) {
  const downloadHref = certification.downloadUrl
    ? withBasePath(certification.downloadUrl)
    : undefined;

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy={titleId} className="max-w-3xl">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
        }}
      >
        <motion.div variants={detailItem}>
          <CertificateVisual
            title={certification.title}
            issuer={certification.issuer}
            issueDate={certification.issueDate}
            previewImage={certification.previewImage}
            size="lg"
            className="mx-auto max-w-xl"
          />
        </motion.div>

        <motion.h3
          variants={detailItem}
          id={titleId}
          className="mt-6 pr-10 text-xl font-semibold tracking-tight text-foreground"
        >
          {certification.title}
        </motion.h3>

        {certification.summary && (
          <motion.p
            variants={detailItem}
            className="mt-2 text-sm leading-6 text-foreground-muted"
          >
            {certification.summary}
          </motion.p>
        )}

        <motion.dl
          variants={detailItem}
          className="mt-6 grid gap-4 sm:grid-cols-2"
        >
          <div className="glass rounded-2xl p-4">
            <dt className="flex items-center gap-2 text-xs font-semibold tracking-wide text-foreground-muted uppercase">
              <Hash className="h-3.5 w-3.5 text-accent-secondary" aria-hidden="true" />
              Credential ID
            </dt>
            <dd className="mt-2 font-mono text-sm text-foreground">
              {certification.credentialId ?? "See verification link"}
            </dd>
          </div>

          <div className="glass rounded-2xl p-4">
            <dt className="flex items-center gap-2 text-xs font-semibold tracking-wide text-foreground-muted uppercase">
              <Building2 className="h-3.5 w-3.5 text-accent-secondary" aria-hidden="true" />
              Issuer
            </dt>
            <dd className="mt-2 text-sm text-foreground">{certification.issuer}</dd>
          </div>

          <div className="glass rounded-2xl p-4">
            <dt className="flex items-center gap-2 text-xs font-semibold tracking-wide text-foreground-muted uppercase">
              <CalendarDays className="h-3.5 w-3.5 text-accent-secondary" aria-hidden="true" />
              Issue Date
            </dt>
            <dd className="mt-2 text-sm text-foreground">{certification.issueDate}</dd>
          </div>

          <div className="glass rounded-2xl p-4">
            <dt className="flex items-center gap-2 text-xs font-semibold tracking-wide text-foreground-muted uppercase">
              <Award className="h-3.5 w-3.5 text-accent-secondary" aria-hidden="true" />
              Credential
            </dt>
            <dd className="mt-2 text-sm text-foreground">Verified professional certificate</dd>
          </div>
        </motion.dl>

        <motion.div variants={detailItem} className="mt-6">
          <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Sparkles className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
            Skills Covered
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {certification.technology.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent-secondary ring-1 ring-inset ring-accent/20"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={detailItem}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          {certification.credentialUrl && (
            <Button href={certification.credentialUrl} size="md">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {certification.credentialLabel ?? "Verification link"}
            </Button>
          )}

          {downloadHref ? (
            <Button href={downloadHref} variant="glass" size="md" download>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download certificate
            </Button>
          ) : certification.credentialUrl ? (
            <Button href={certification.credentialUrl} variant="glass" size="md">
              <Download className="h-4 w-4" aria-hidden="true" />
              Open issuer download
            </Button>
          ) : null}
        </motion.div>
      </motion.div>
    </Modal>
  );
}
