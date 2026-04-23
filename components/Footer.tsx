"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "@/components/TransitionLink";

const FOOTER_IMAGE = "/images/jess-barnett-NwqvG6lb2jU-unsplash.webp";


const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/#summary", label: "Executive Summary" },
  { href: "/#scope", label: "Research Scope" },
  { href: "/library", label: "Library" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const producedBy = [
  { label: "REIBC", href: "https://www.reibc.org/" },
  { label: "Greater Vancouver REALTORS®", href: "https://gvrealtors.ca" },
];

function Wordmark({
  text,
  viewBoxWidth,
  imageSrc,
  clipId,
}: {
  text: string;
  viewBoxWidth: number;
  imageSrc?: string;
  clipId?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const padX = 6;
  const innerWidth = viewBoxWidth - padX * 2;
  const totalWidth = viewBoxWidth;
  const totalHeight = 130;

  const textStyle: React.CSSProperties = {
    fontSize: "100px",
    fontWeight: 700,
    letterSpacing: "-0.045em",
  };

  return (
    <div ref={ref}>
      <svg
        viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        className="block w-full overflow-hidden"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {imageSrc && clipId ? (
          <>
            <defs>
              <clipPath id={clipId}>
                <text
                  x={padX}
                  y="92"
                  textLength={innerWidth}
                  lengthAdjust="spacingAndGlyphs"
                  className="font-heading"
                  style={textStyle}
                >
                  {text}
                </text>
              </clipPath>
            </defs>
            <g clipPath={`url(#${clipId})`}>
              <motion.g style={{ y: imageY }}>
                <image
                  href={imageSrc}
                  x="0"
                  y="-350"
                  width={totalWidth}
                  height={totalHeight + 500}
                  preserveAspectRatio="xMidYMid slice"
                />
              </motion.g>
            </g>
          </>
        ) : (
          <text
            x={padX}
            y="92"
            textLength={innerWidth}
            lengthAdjust="spacingAndGlyphs"
            className="fill-current font-heading"
            style={textStyle}
          >
            {text}
          </text>
        )}
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-earth-50 text-earth-900">
      <div className="px-6 pt-12 pb-6 md:px-10 md:pt-14 md:pb-8 lg:px-12">
        {/* Row 1 — Transforming, full width */}
        <Wordmark
          text="Transforming"
          viewBoxWidth={620}
          imageSrc={FOOTER_IMAGE}
          clipId="footer-clip-transforming"
        />

        {/* Row 2 — Landscapes full width on mobile */}
        <div className="md:hidden">
          <Wordmark
            text="Landscapes"
            viewBoxWidth={620}
            imageSrc={FOOTER_IMAGE}
            clipId="footer-clip-landscapes-mobile"
          />
        </div>

        {/* Desktop: links + Landscapes side by side */}
        <div className="mt-4 hidden md:mt-6 md:flex md:items-end md:gap-10 lg:gap-14">
          <div className="flex shrink-0 gap-12 pb-5 text-sm">
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-earth-900/60 transition-colors hover:text-earth-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {producedBy.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-earth-900/60 transition-colors hover:text-earth-900"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 flex-1">
            <Wordmark
              text="Landscapes"
              viewBoxWidth={460}
              imageSrc={FOOTER_IMAGE}
              clipId="footer-clip-landscapes"
            />
          </div>
        </div>

        {/* Mobile: links below */}
        <div className="mt-6 flex flex-wrap gap-6 text-sm md:hidden">
          <ul className="space-y-2">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-earth-900/60 transition-colors hover:text-earth-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {producedBy.map((p) => (
              <li key={p.label}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-earth-900/60 transition-colors hover:text-earth-900"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <h1 className="sr-only">Transforming Landscapes</h1>

        <div className="mt-8 border-t border-earth-900/15 pt-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-8">
              <a href="https://www.reibc.org/" target="_blank" rel="noreferrer">
                <img src="/images/reibc-logo.png" alt="Real Estate Institute of British Columbia" className="h-10 w-auto opacity-70 transition hover:opacity-100" />
              </a>
              <a href="https://gvrealtors.ca" target="_blank" rel="noreferrer">
                <img src="/images/gvr-logo.png" alt="Greater Vancouver Realtors" className="h-[68px] w-auto opacity-70 transition hover:opacity-100" />
              </a>
            </div>
            <div className="flex flex-col gap-1 text-[0.7rem] uppercase tracking-[0.04em] text-earth-900/40 md:text-right">
              <p>&copy; 2026 REIBC &amp; Greater Vancouver REALTORS&reg;</p>
              <p>A research platform on First Nations-led real estate development in BC</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
