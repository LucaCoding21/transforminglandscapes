"use client";

import Image from "next/image";
import HeroInfoCard from "@/components/HeroInfoCard";
import MorphIcon from "@/components/MorphIcon";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CardDef = {
  label: string;
  href: string;
  renderIcon: (hovered: boolean) => React.ReactNode;
};

const infoCards: CardDef[] = [
  {
    label: "Executive Summary",
    href: "/#summary",
    renderIcon: (hovered) => (
      <MorphIcon
        pathA="M4 5 L20 5 L20 16 L13 16 L11 20 L10 16 L4 16 Z"
        pathB="M4 10 L13 10 L13 5 L20 12 L13 19 L13 14 L4 14 Z"
        hovered={hovered}
      />
    ),
  },
  {
    label: "The Library",
    href: "/library",
    renderIcon: (hovered) => (
      <>
        <MorphIcon
          pathA="M6 3 L18 3 L18 21 L6 21 Z"
          pathB="M4 7 L12 5 L20 7 L20 19 L12 17 L4 19 Z"
          hovered={hovered}
        />
        <g
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ opacity: hovered ? 0 : 1 }}
        >
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="13" y2="17" />
        </g>
        <line
          x1="12"
          y1="7"
          x2="12"
          y2="17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: hovered ? 1 : 0,
            transitionDelay: hovered ? "200ms" : "0ms",
          }}
        />
      </>
    ),
  },
];

const headlineLines = ["Transforming", "Landscapes"];
const EASE = [0.22, 1, 0.36, 1] as const;

const heroIntro =
  "To create this report, we engaged with Indigenous and First Nations groups to better understand their perspectives, goals, and priorities related to Indigenous-led development today.";
const heroMore =
  "The project is intended to deepen understanding among the members we represent and support more informed, respectful, and collaborative relationships moving forward.";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const safety = setTimeout(() => setImageLoaded(true), 2500);
    return () => clearTimeout(safety);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-[#15212a] text-white md:min-h-[720px]">
      <div className="absolute inset-0">
        <Image
          src="/images/make_this_landscape_202604151519.webp"
          alt="Mountain sunset landscape in British Columbia"
          fill
          priority
          sizes="100vw"
          onLoad={() => setImageLoaded(true)}
          className="object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-earth-900/85 via-earth-900/30 to-earth-900/45" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-earth-900/55 via-earth-900/10 to-earth-900/55" />

      <div className="relative z-10 mx-auto flex h-full max-w-content flex-col px-6 pb-44 pt-28 md:px-10 md:pb-14 md:pt-32">
        <div className="relative flex h-full flex-1 flex-col justify-end">
          <div className="lg:mb-[6vh] lg:-translate-x-20">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="mb-5 flex flex-col gap-3 pl-3 sm:hidden"
            >
              <div className="flex w-max items-center gap-3">
                <Image
                  src="/images/reibclogo.jpeg"
                  alt="Real Estate Institute of British Columbia"
                  width={200}
                  height={200}
                  className="h-9 w-auto"
                />
                <Image
                  src="/images/gvrlogo.jpeg"
                  alt="Greater Vancouver Realtors"
                  width={200}
                  height={200}
                  className="h-9 w-auto"
                />
              </div>
              <p className="text-[0.65rem] font-medium uppercase leading-[1.55] tracking-[0.18em] text-white/85">
                This research was led in partnership by Greater Vancouver
                Realtors and the Real Estate Institute of British Columbia.
              </p>
            </motion.div>
            <h1
              style={{
                fontSize: "clamp(4rem, 12vw, 10rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
              }}
              className="font-heading font-semibold text-white md:whitespace-nowrap"
            >
              {headlineLines.map((line, i) => (
                <span
                  key={line}
                  className="block w-max overflow-hidden pb-[0.2em] pr-[0.08em] -mb-[0.2em] -mr-[0.08em] md:pb-[0.12em] md:-mb-[0.12em]"
                >
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={imageLoaded ? { y: "0%" } : { y: "110%" }}
                    transition={{ duration: 0.9, delay: i * 0.12, ease: EASE }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
              <span className="sr-only">
                : First Nations-Led Real Estate Development in BC
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="mt-4 hidden flex-col gap-4 pl-3 sm:flex sm:flex-row sm:items-center md:mt-5 md:pl-4"
            >
              <div className="hidden w-max items-center gap-3 sm:flex">
                <Image
                  src="/images/reibclogo.jpeg"
                  alt="Real Estate Institute of British Columbia"
                  width={200}
                  height={200}
                  className="h-9 w-auto md:h-10"
                />
                <Image
                  src="/images/gvrlogo.jpeg"
                  alt="Greater Vancouver Realtors"
                  width={200}
                  height={200}
                  className="h-9 w-auto md:h-10"
                />
              </div>
              <p className="text-[0.65rem] font-medium uppercase leading-[1.55] tracking-[0.18em] text-white/85 md:text-[0.72rem]">
                This research was led in partnership by Greater Vancouver
                Realtors
                <br />
                and the Real Estate Institute of British Columbia.
              </p>
            </motion.div>
          </div>

          <div className="mt-6 max-w-sm md:max-w-none lg:absolute lg:bottom-28 lg:right-0 lg:mt-0 lg:max-w-md lg:translate-x-32">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.35, ease: EASE }}
              className="pb-1 font-heading text-xl font-semibold leading-[1.15] tracking-tight text-white md:pb-6 md:text-2xl lg:text-[1.75rem]"
            >
              The Future, Challenges &amp; Opportunities
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.47, ease: EASE }}
              className="mt-5"
            >
              <p className="text-base leading-relaxed text-white/85">
                {heroIntro}
              </p>
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.p
                    key="more"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: "0.75rem" }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="overflow-hidden text-base leading-relaxed text-white/85"
                  >
                    {heroMore}
                  </motion.p>
                )}
              </AnimatePresence>
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="mt-4 inline-flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/85 transition hover:text-white"
              >
                <span>{expanded ? "Read less" : "Read more"}</span>
                <svg
                  className={`h-3 w-3 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-24 z-10 md:bottom-8 lg:bottom-24">
        <div className="pointer-events-auto mx-auto flex max-w-content justify-center px-6 md:justify-end md:px-10 lg:translate-x-32">
          <ul className="grid w-full max-w-md grid-cols-2 gap-3 sm:gap-3 md:gap-2.5">
            {infoCards.map((card, i) => (
              <li
                key={card.label}
                className="overflow-hidden rounded-2xl"
              >
                <motion.div
                  initial={{ y: "110%" }}
                  animate={imageLoaded ? { y: "0%" } : { y: "110%" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.6 + i * 0.14,
                    ease: EASE,
                  }}
                  className="h-full"
                >
                  <HeroInfoCard
                    label={card.label}
                    href={card.href}
                    renderIcon={card.renderIcon}
                  />
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
