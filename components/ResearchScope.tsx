"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

type Pillar = {
  number: string;
  label: string;
  description: string;
  image: string;
};

const pillars: Pillar[] = [
  {
    number: "01",
    label: "Indigenous Land & Development",
    description:
      "This section highlights existing resources that map and explain Indigenous territories and Indigenous-owned business designations. We encourage you to explore these materials for deeper context and understanding, and you\u2019ll find links throughout this report to help guide your learning.",
    image: "/images/jess-barnett-NwqvG6lb2jU-unsplash.webp",
  },
  {
    number: "02",
    label: "Governance Models",
    description:
      "We explore how traditional models and models from other parts of the world are implemented and the differences, challenges, and opportunities they present.",
    image: "/images/kyle-thacker-6ifWgyH5tuc-unsplash.webp",
  },
  {
    number: "03",
    label: "The Data",
    description:
      "Economic and market data is important in understanding impact, establishing policy and integrating communities in both the built environment and from a perspective of sustainability.",
    image: "/images/nathan-rose-sbvzdXqnG4k-unsplash.webp",
  },
  {
    number: "04",
    label: "The Future",
    description:
      "What challenges, opportunities and areas of innovation do we consider in the near- and distant future? What can we learn from the past, from tradition and culture?",
    image: "/images/dylan-gillis-KdeqA3aTnBY-unsplash (1).webp",
  },
];

export default function ResearchScope() {
  useEffect(() => {
    const section = document.getElementById("scope");
    if (!section) return;

    let lastY = window.scrollY;
    let snapping = false;
    let triggeredDown = false;
    let triggeredUp = false;
    let snapTimeout: ReturnType<typeof setTimeout> | null = null;

    const snapTo = (absoluteY: number) => {
      snapping = true;
      window.scrollTo({ top: absoluteY, behavior: "smooth" });
      if (snapTimeout) clearTimeout(snapTimeout);
      snapTimeout = setTimeout(() => {
        snapping = false;
        lastY = window.scrollY;
      }, 1000);
    };

    const onScroll = () => {
      if (snapping) {
        lastY = window.scrollY;
        return;
      }
      const y = window.scrollY;
      const goingDown = y > lastY;
      lastY = y;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const commit = vh * 0.55;

      if (rect.top > vh) triggeredDown = false;
      if (rect.bottom < 0) triggeredUp = false;

      if (goingDown && !triggeredDown && rect.top > 0 && rect.top < commit) {
        triggeredDown = true;
        snapTo(y + rect.top);
        return;
      }

      if (!goingDown && !triggeredUp && rect.top < 0 && rect.top > -commit) {
        triggeredUp = true;
        snapTo(y + rect.top);
        return;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (snapTimeout) clearTimeout(snapTimeout);
    };
  }, []);

  return (
    <section
      id="scope"
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-earth-50 text-earth-900"
    >
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-end px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-right font-heading font-medium leading-[0.9] tracking-[-0.035em] text-earth-900"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
        >
          Research
          <br />
          Scope.
        </motion.h2>
      </div>

      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
        {pillars.map((pillar, i) => (
          <article
            key={pillar.number}
            className="group relative h-full cursor-pointer border-earth-900/10 md:border-r md:last:border-r-0"
          >
            <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
              <div className="absolute inset-0 -translate-x-full transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0">
                <Image
                  src={pillar.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-earth-900 via-earth-900/75 to-transparent" />
              </div>
            </div>

            <div className="absolute bottom-8 left-6 right-6 z-40 md:bottom-12 md:left-8 md:right-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="font-heading text-xl font-medium text-earth-900 transition-colors duration-500 group-hover:text-white md:text-2xl">
                  {pillar.label}
                </div>
                <p
                  style={{ willChange: "max-height" }}
                  className="mt-3 max-h-[3rem] max-w-[30ch] overflow-hidden text-sm leading-relaxed text-earth-900/75 transition-[max-height,color] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-h-[11rem] group-hover:text-white"
                >
                  {pillar.description}
                </p>
              </motion.div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
