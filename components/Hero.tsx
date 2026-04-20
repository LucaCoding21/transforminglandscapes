"use client";

import Image from "next/image";
import HeroInfoCard from "@/components/HeroInfoCard";
import MorphIcon from "@/components/MorphIcon";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HERO_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAACwAAAAD/wAARCAALABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwACAgICAgIDAgIDBQMDAwUGBQUFBQYIBgYGBgYICggICAgICAoKCgoKCgoKDAwMDAwMDg4ODg4PDw8PDw8PDw8P/9sAQwECAgIEBAQHBAQHEAsJCxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/90ABAAC/9oADAMBAAIRAxEAPwDDuv2q/wBlWAtnwlqCDGE3tEOnTgNxk+tMsf2s/wBn+OMrB4XMVwhIILCQDHTJ+Xr9K/MWWNJ4fJmUMj7CQRxkpk/me1R6RpWnLqbWK26eS8IlIxk7x3DdR9AcV69DMsVVqKlUr1Nf77PFdDC0I+0p4anp3gmfpZeftf8Aw2kmJbQ2jwMAJGhXHbBJ9Kq/8Nd/DX/oDSf9+o/8a/L2wiScXBmy2yaRByeFB4FaH2O3/ufqf8ar62v55/8AgbO/6zL/AJ80v/AEf//Z";

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

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const safety = setTimeout(() => setImageLoaded(true), 2500);
    return () => clearTimeout(safety);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-earth-900 text-white md:min-h-[720px]">
      <div className="absolute inset-0">
        <Image
          src="/images/make_this_landscape_202604151519.webp"
          alt="Mountain sunset landscape in British Columbia"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={HERO_BLUR}
          onLoad={() => setImageLoaded(true)}
          className="object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-earth-900/85 via-earth-900/30 to-earth-900/45" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-earth-900/55 via-earth-900/10 to-earth-900/55" />

      <div className="relative z-10 mx-auto flex h-full max-w-content flex-col px-6 pb-10 pt-28 md:px-10 md:pb-14 md:pt-32">
        <div className="relative flex h-full flex-1 flex-col justify-center md:justify-end">
          <div className="lg:mb-[6vh] lg:-translate-x-20">
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
                  className="block w-max overflow-hidden pb-[0.12em] -mb-[0.12em]"
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
            </h1>
          </div>

          <div className="mt-6 max-w-sm md:max-w-none lg:absolute lg:bottom-32 lg:right-0 lg:mt-0 lg:max-w-md lg:translate-x-32">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.35, ease: EASE }}
              className="font-heading text-xl font-semibold leading-[1.15] tracking-tight text-white md:text-2xl lg:text-[1.75rem]"
            >
              The Future, Challenges &amp; Opportunities
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.47, ease: EASE }}
              className="mt-5 text-base leading-relaxed text-white/85 md:text-base"
            >
              Understanding First Nations-led real estate development in British
              Columbia, the territories and relationships grounding it, and the
              leaders defining what comes next.
            </motion.p>
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
