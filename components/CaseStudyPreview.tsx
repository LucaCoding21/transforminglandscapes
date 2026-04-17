"use client";

import Image from "next/image";
import Link from "@/components/TransitionLink";
import ViewAllButton from "@/components/ViewAllButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { caseStudies } from "@/lib/caseStudies";

export default function CaseStudyPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const topperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: topperRef,
    offset: ["start 85%", "end 15%"],
  });
  const lightY = useTransform(scrollYProgress, [0, 1], ["-10%", "35%"]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-card]");
    const stride = firstCard ? firstCard.offsetWidth + 24 : 400;
    el.scrollBy({ left: direction * stride, behavior: "smooth" });
  };

  return (
    <section id="case-studies" className="relative overflow-hidden bg-earth-50 pt-24 pb-[60vw] md:pt-32 md:pb-[46vw] lg:pb-[36vw]">
      <div className="px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-12">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-semibold leading-[0.95] tracking-[-0.03em] text-earth-900"
              style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)" }}
            >
              Case Studies.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-md text-sm leading-relaxed text-earth-700 md:text-base"
            >
              Reading the decisions shaping the next decade of real estate,
              land, and governance in British Columbia.
            </motion.p>
          </div>

          <div className="flex items-center gap-3 md:translate-y-10">
            <ViewAllButton href="/library" />
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-earth-900/20 text-earth-900 transition-colors duration-300 hover:border-sage-600 hover:bg-sage-600 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M9 2L4 7L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-earth-900/20 text-earth-900 transition-colors duration-300 hover:border-sage-600 hover:bg-sage-600 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M5 2L10 7L5 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-14 flex gap-6 overflow-x-auto overflow-y-hidden pb-4 pl-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mt-20 md:pl-10 lg:pl-16 xl:pl-20"
      >
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.slug}
              data-card
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.9,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex w-[85vw] shrink-0 flex-col sm:w-[60vw] md:w-[44%] lg:w-[32%]"
            >
              <Link href={`/library#${study.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-earth-200">
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 88vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.1]"
                  />
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-[0.7rem] leading-none text-earth-700">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-200 px-2.5 py-[3px] text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="ml-2 text-earth-600">{study.date}</span>
                </div>

                <h3 className="mt-3 font-heading text-xl leading-[1.2] text-earth-900 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 group-hover:text-sage-600 md:text-2xl lg:text-[1.6rem]">
                  {study.title}
                </h3>

              </Link>
            </motion.article>
          ))}
      </div>

      <div
        ref={topperRef}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
      >
        <div className="relative w-full">
          {/* Light trees — parallax layer (moves with scroll) */}
          <motion.img
            src="/images/topper-light.svg"
            alt=""
            aria-hidden
            style={{ y: lightY }}
            className="absolute inset-x-0 bottom-0 block w-full max-w-none select-none"
          />
          {/* Dark trees — static foreground */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/topper-dark.svg"
            alt=""
            aria-hidden
            className="relative block w-full max-w-none select-none"
          />
        </div>
      </div>
    </section>
  );
}
