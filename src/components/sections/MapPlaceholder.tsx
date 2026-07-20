"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

const MAPS_QUERY = encodeURIComponent(siteConfig.location);

export function MapPlaceholder() {
  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${siteConfig.location} in Google Maps`}
      className="bg-grid group focus-ring relative block aspect-video overflow-hidden rounded-2xl border border-border-strong bg-background-secondary"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl transition-transform duration-500 group-hover:scale-110"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-accent-secondary/15 blur-3xl transition-transform duration-500 group-hover:scale-110"
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-3">
        <div className="relative flex h-14 w-14 items-center justify-center">
          <motion.span
            aria-hidden="true"
            className="absolute inline-flex h-full w-full rounded-full bg-accent-secondary/40"
            animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-accent to-accent-secondary text-accent-foreground shadow-[0_10px_30px_-8px_var(--accent)]">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <p className="text-sm font-semibold text-foreground">{siteConfig.location}</p>
        <p className="flex items-center gap-1.5 text-xs text-foreground-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Open in Google Maps
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
        </p>
      </div>
    </a>
  );
}
