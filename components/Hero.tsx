"use client";

import Image from "next/image";
import HeroInfoCard from "@/components/HeroInfoCard";
import MorphIcon from "@/components/MorphIcon";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap";

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
    label: "Research Scope",
    href: "/#scope",
    renderIcon: (hovered) => (
      <>
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-box:fill-box] [transform-origin:center]"
          style={{
            transform: hovered ? "scale(0.88)" : "scale(1)",
          }}
        />
        <MorphIcon
          pathA="M11 7 L13 7 L13 11 L17 11 L17 13 L13 13 L13 17 L11 17 L11 13 L7 13 L7 11 L11 11 Z"
          pathB="M10.6 12 L7.1 8.5 L8.5 7.1 L12 10.6 L15.5 7.1 L16.9 8.5 L13.4 12 L16.9 15.5 L15.5 16.9 L12 13.4 L8.5 16.9 L7.1 15.5 Z"
          hovered={hovered}
          fill="currentColor"
          stroke="none"
          strokeWidth={0}
        />
      </>
    ),
  },
  {
    label: "Discussion Paper",
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

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(["[data-animate='fade']", "[data-animate='card']"], {
          opacity: 1,
          y: 0,
          x: 0,
          yPercent: 0,
        });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.35,
      });

      tl.from(
        "[data-animate='fade']",
        {
          opacity: 0,
          y: 20,
          duration: 1,
          stagger: 0.12,
        },
        0.45,
      ).from(
        "[data-animate='card']",
        {
          yPercent: 110,
          duration: 0.9,
          stagger: 0.14,
          ease: "power4.out",
        },
        0.7,
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-earth-900 text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="Mountain sunset landscape in British Columbia"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-earth-900/85 via-earth-900/30 to-earth-900/45" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-earth-900/55 via-earth-900/10 to-earth-900/55" />

      <div className="relative z-10 mx-auto flex h-full max-w-content flex-col px-6 pb-10 pt-28 md:px-10 md:pb-14 md:pt-32">
        <div className="relative flex h-full flex-1 flex-col justify-end">
          <div className="lg:mb-[6vh] lg:-translate-x-20">
            <h1
              style={{
                fontSize: "clamp(3.1rem, 9.5vw, 10rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
              }}
              className="whitespace-nowrap font-heading font-semibold text-white"
            >
              {headlineLines.map((line, i) => (
                <span
                  key={line}
                  className="block w-max overflow-hidden pb-[0.12em] -mb-[0.12em]"
                >
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.9,
                      delay: 0.1 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <div className="mt-6 lg:absolute lg:bottom-32 lg:right-0 lg:mt-0 lg:max-w-md lg:translate-x-32">
            <p
              data-animate="fade"
              className="font-heading text-xl font-semibold leading-[1.15] tracking-tight text-white md:text-2xl lg:text-[1.75rem]"
            >
              The Future,
              <br />
              Challenges &amp; Opportunities
            </p>

            <p
              data-animate="fade"
              className="mt-5 text-base leading-relaxed text-white/85 md:text-base"
            >
              Understanding First Nations-led real estate development in British
              Columbia, the territories and relationships grounding it, and the
              leaders defining what comes next.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 lg:bottom-24">
        <div className="pointer-events-auto mx-auto flex max-w-content justify-end px-6 md:px-10 lg:translate-x-32">
          <ul className="grid w-full max-w-md grid-cols-1 gap-2 sm:grid-cols-3 md:gap-2.5">
          {infoCards.map((card) => (
            <li
              key={card.label}
              className="overflow-hidden rounded-2xl"
            >
              <div data-animate="card" className="h-full">
                <HeroInfoCard
                  label={card.label}
                  href={card.href}
                  renderIcon={card.renderIcon}
                />
              </div>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
