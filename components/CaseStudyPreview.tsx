"use client";

import Image from "next/image";
import Link from "@/components/TransitionLink";
import ViewAllButton from "@/components/ViewAllButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { caseStudies } from "@/lib/caseStudies";

export default function CaseStudyPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const topperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = caseStudies.length + 1; // articles + view all

  const onMobileScroll = useCallback(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    const progress = el.scrollLeft / maxScroll;
    const index = Math.round(progress * (totalSlides - 1));
    setActiveIndex(Math.min(index, totalSlides - 1));
  }, [totalSlides]);

  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", onMobileScroll, { passive: true });
    return () => el.removeEventListener("scroll", onMobileScroll);
  }, [onMobileScroll]);

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
    <section id="case-studies" className="relative overflow-hidden bg-earth-50 pt-12 pb-[40vw] md:pt-32 md:pb-[46vw] lg:pb-[36vw]">
      <div className="px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-12">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-semibold uppercase leading-[0.95] text-earth-900"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
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
              className="hidden h-12 w-12 items-center justify-center rounded-full border border-earth-900/20 text-earth-900 transition-colors duration-300 hover:border-sage-600 hover:bg-sage-600 hover:text-white md:flex"
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
              className="hidden h-12 w-12 items-center justify-center rounded-full border border-earth-900/20 text-earth-900 transition-colors duration-300 hover:border-sage-600 hover:bg-sage-600 hover:text-white md:flex"
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

      {/* Mobile: swipeable carousel */}
      <div className="mt-14 md:hidden">
        <div ref={mobileScrollRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pl-6 pr-6 pb-4 [scroll-padding-left:1.5rem] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/library/${study.slug}`}
              className="w-[82vw] shrink-0 snap-start"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={study.image}
                  alt=""
                  fill
                  sizes="80vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-baseline gap-2 text-[0.65rem] leading-none">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-earth-200 px-3 py-1.5 text-earth-600"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-earth-400">{study.date}</span>
              </div>
              <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-earth-900">
                {study.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-earth-600">
                {study.teaser}
              </p>
            </Link>
          ))}
          <Link
            href="/library"
            className="group w-[82vw] shrink-0 snap-start"
          >
            <div className="flex aspect-[5/4] flex-col justify-end rounded-lg bg-earth-100 p-6">
              <p className="text-sm text-earth-500">
                Explore the full library
              </p>
              <span className="mt-2 flex items-center gap-2 font-heading text-2xl font-semibold text-earth-900">
                View all
                <svg width="20" height="20" viewBox="0 0 14 14" fill="none" aria-hidden className="transition-transform duration-300 group-active:translate-x-1">
                  <path
                    d="M5 2L10 7L5 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Link>
        </div>
        <div className="mt-5 flex justify-center gap-3">
          {[...caseStudies, null].map((item, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "scale-110 bg-earth-900"
                  : "bg-earth-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: horizontal scroll */}
      <div
        ref={scrollRef}
        className="mt-20 hidden snap-x gap-6 overflow-x-auto overflow-y-hidden pb-4 pl-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:flex lg:pl-16 xl:pl-20"
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
            className="group relative flex w-[44%] shrink-0 flex-col lg:w-[32%]"
          >
            <Link href={`/library/${study.slug}`} className="block">
              <div className="relative aspect-[4/3] overflow-hidden bg-earth-200">
                <Image
                  src={study.image}
                  alt=""
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.1]"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-[0.7rem] leading-none text-earth-700">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-200 px-4 py-1.5 text-neutral-600"
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
