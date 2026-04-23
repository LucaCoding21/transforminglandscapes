"use client";

import Image from "next/image";
import Link from "@/components/TransitionLink";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExecSummaryVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const link = linkRef.current;
    if (!section || !link) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1025px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions as {
          isDesktop: boolean;
          reduceMotion: boolean;
        };
        if (!isDesktop || reduceMotion) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.8,
          },
        });

        tl.fromTo(
          link,
          { width: "72vw", borderRadius: "1rem" },
          { width: "86vw", borderRadius: "0.75rem", ease: "power2.inOut" },
        );
        tl.to(link, {
          width: "58vw",
          borderRadius: "1rem",
          ease: "power2.inOut",
        });
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-earth-50 pb-24 md:pb-32">
      <div className="lg:flex lg:h-[43vw] lg:items-center lg:justify-center">
        <Link
          ref={linkRef}
          href="/library/executive-summary"
          className="group relative mx-auto block aspect-[3/2] w-[96%] max-w-[1500px] overflow-hidden rounded-2xl bg-earth-900 shadow-xl shadow-earth-900/10 sm:aspect-[16/9] md:aspect-[16/9] lg:aspect-[2/1] lg:w-[72vw] lg:max-w-none"
        >
        {/* Background video */}
        <video
          src="/images/demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark gradient for text contrast */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-black/45 via-black/15 to-black/50"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 via-black/20 to-transparent"
        />

        {/* Partnership logos — top left */}
        <div className="absolute left-6 top-6 flex items-center gap-2 md:left-10 md:top-10">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-white/90 ring-1 ring-white/40 md:h-9 md:w-9">
            <Image
              src="/images/reibclogo.jpeg"
              alt=""
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-white/90 ring-1 ring-white/40 md:h-9 md:w-9">
            <Image
              src="/images/gvrlogo.jpeg"
              alt=""
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Big title — top left area */}
        <div className="absolute left-6 top-24 right-28 md:left-10 md:top-28 md:right-40 lg:right-56">
          <h2
            className="font-heading font-semibold leading-[0.95] tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            <span className="block">Executive</span>
            <span className="block -translate-y-1 pl-6 italic md:pl-10">
              Summary
            </span>
          </h2>
        </div>

        {/* Date stack — top right */}
        <div className="absolute right-6 top-6 text-right md:right-10 md:top-10">
          <div
            className="font-heading font-semibold uppercase leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            <span className="block">20</span>
            <span className="block">26</span>
          </div>
        </div>

        {/* Description — bottom left */}
        <div className="absolute bottom-6 left-6 right-20 max-w-md md:bottom-10 md:left-10 md:right-28">
          <p className="text-xs leading-relaxed text-white/90 md:text-sm">
            This report is a first step in what we hope will be a long-term,
            evolving dialogue.
          </p>
        </div>

        {/* Arrow CTA — bottom right, huge */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
          <svg
            aria-hidden
            viewBox="0 0 32 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-12 w-16 text-white transition duration-500 group-hover:translate-x-1 md:h-16 md:w-20 lg:h-20 lg:w-24"
          >
            <path d="M3 12h24" />
            <path d="m19 4 8 8-8 8" />
          </svg>
          <span className="sr-only">Read the executive summary</span>
        </div>
        </Link>
      </div>
    </section>
  );
}
