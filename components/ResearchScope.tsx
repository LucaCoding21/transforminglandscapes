"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    image: "/images/orca-indigenous-land.webp",
  },
  {
    number: "02",
    label: "Governance Models",
    description:
      "We explore how traditional models and models from other parts of the world are implemented and the differences, challenges, and opportunities they present.",
    image: "/images/microsoft-copilot-pEVjp7yIc2A-unsplash.webp",
  },
  {
    number: "03",
    label: "The Data",
    description:
      "Economic and market data is important in understanding impact, establishing policy and integrating communities in both the built environment and from a perspective of sustainability.",
    image: "/images/kaleidico-3V8xo5Gbusk-unsplash.webp",
  },
  {
    number: "04",
    label: "The Future",
    description:
      "What challenges, opportunities and areas of innovation do we consider in the near- and distant future? What can we learn from the past, from tradition and culture?",
    image: "/images/dylan-gillis-KdeqA3aTnBY-unsplash (1).webp",
  },
];

function ParallaxImage({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="relative aspect-[4/3] overflow-hidden">
      <motion.div className="absolute -inset-[20%]" style={{ y }}>
        <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      {title && (
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-5 pb-5 pt-24">
          <h3 className="font-heading text-2xl font-semibold text-white">
            {title}
          </h3>
        </div>
      )}
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: "-100%" }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-20 bg-earth-50 md:hidden"
      />
    </div>
  );
}

export default function ResearchScope() {
  useEffect(() => {
    // Disable snap scroll on touch devices and mobile — it conflicts with natural scrolling
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.innerWidth < 768) return;

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
    <div id="scope">
      {/* Mobile layout */}
      <section className="bg-earth-50 py-20 text-earth-900 md:hidden">
        <div className="mx-auto max-w-content px-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-medium uppercase leading-[0.9] text-earth-900"
            style={{ fontSize: "2.5rem" }}
          >
            Research
            <br />
            Scope.
          </motion.h2>

          <div className="mt-16 flex flex-col gap-20">
            {pillars.map((pillar, i) => {
              const isLast = i === pillars.length - 1;
              const isEven = i % 2 !== 0;

              if (isLast) {
                return (
                  <motion.article
                    key={pillar.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col items-center text-center py-16"
                  >
                    <h3 className="font-heading text-[1.75rem] font-medium leading-[1.1] text-earth-900">
                      {pillar.label}
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-earth-600">
                      {pillar.description}
                    </p>
                  </motion.article>
                );
              }

              return (
                <motion.article
                  key={pillar.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col"
                >
                  <h3
                    className={`font-heading text-[1.75rem] font-medium leading-[1.1] text-earth-900 ${isEven ? "text-left pr-12" : "text-right pl-12"}`}
                  >
                    {pillar.label}
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`mt-6 ${isEven ? "-ml-6 -mr-2" : "-mr-6 -ml-2"}`}
                  >
                    <ParallaxImage src={pillar.image} title="" />
                  </motion.div>
                  <p
                    className={`mt-6 text-sm leading-relaxed text-earth-600 ${isEven ? "text-left" : "ml-auto text-right"}`}
                  >
                    {pillar.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Desktop layout */}
      <section
        className="relative hidden h-[100svh] min-h-[720px] w-full overflow-hidden bg-earth-50 text-earth-900 md:block"
      >
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-end pr-[15vw]">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-right font-heading font-medium uppercase leading-[0.9] text-earth-900"
            style={{ fontSize: "5rem" }}
          >
            Research
            <br />
            Scope.
          </motion.h2>
        </div>

        <div className="absolute inset-0 grid grid-cols-4">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.number}
              className="group relative h-full cursor-pointer border-r border-earth-900/10 last:border-r-0"
            >
              <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
                <div className="absolute inset-0 -translate-x-full transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0">
                  <Image
                    src={pillar.image}
                    alt=""
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-earth-900 via-earth-900/70 to-transparent" />
                </div>
              </div>

              <div className="absolute bottom-12 left-8 right-8 z-40">
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
                  <div className="font-heading text-2xl font-medium text-earth-900 transition-colors duration-500 group-hover:text-white">
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
    </div>
  );
}
