"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FREEHOLD = 780000;
const LEASEHOLD = 624000;
const SAVINGS = FREEHOLD - LEASEHOLD;
const Y_MAX = 850000;

const FREEHOLD_COLOR = "#5a7247";
const LEASEHOLD_COLOR = "#8b7355";

export default function PriceComparisonChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const freeholdBarRef = useRef<HTMLDivElement>(null);
  const leaseholdBarRef = useRef<HTMLDivElement>(null);
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !freeholdBarRef.current || !leaseholdBarRef.current) return;

    const fPct = (FREEHOLD / Y_MAX) * 100;
    const lPct = (LEASEHOLD / Y_MAX) * 100;

    gsap.set(freeholdBarRef.current, { height: 0 });
    gsap.set(leaseholdBarRef.current, { height: 0 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const tl = gsap.timeline();
        tl.to(freeholdBarRef.current, {
          height: `${fPct}%`,
          duration: 0.9,
          ease: "power3.out",
        })
          .to(
            leaseholdBarRef.current,
            { height: `${lPct}%`, duration: 0.9, ease: "power3.out" },
            0.1,
          )
          .call(() => setShowValues(true), [], 0.5);
      },
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="my-10 border-y border-earth-200 py-8">
      <p className="text-[0.6rem] uppercase tracking-[0.15em] text-earth-500">Figure</p>
      <h4 className="mt-1 font-heading text-base text-earth-900 sm:text-lg">
        Hypothetical Price Comparison: 600 sq.ft. Condominium
      </h4>
      <p className="mt-0.5 text-[11px] text-earth-500">
        Full market rate vs. 20% leasehold land discount
      </p>

      {/* Bars */}
      <div className="mx-auto mt-20 flex max-w-sm items-end justify-center gap-14 sm:gap-20" style={{ height: 240 }}>
        <div className="flex flex-col items-center gap-2.5">
          <span className={`text-[13px] font-medium tabular-nums text-earth-800 transition-opacity duration-400 ${showValues ? "opacity-100" : "opacity-0"}`}>
            $780,000
          </span>
          <div className="relative w-28 overflow-hidden sm:w-32" style={{ height: 240 }}>
            <div
              ref={freeholdBarRef}
              className="absolute bottom-0 w-full rounded-t-md"
              style={{ backgroundColor: FREEHOLD_COLOR, height: 0 }}
            />
          </div>
          <span className="text-[12px] text-earth-500">Freehold</span>
        </div>

        <div className="flex flex-col items-center gap-2.5">
          <span className={`text-[13px] font-medium tabular-nums text-earth-800 transition-opacity duration-400 ${showValues ? "opacity-100" : "opacity-0"}`}>
            $624,000
          </span>
          <div className="relative w-28 overflow-hidden sm:w-32" style={{ height: 240 }}>
            <div
              ref={leaseholdBarRef}
              className="absolute bottom-0 w-full rounded-t-md"
              style={{ backgroundColor: LEASEHOLD_COLOR, height: 0 }}
            />
          </div>
          <span className="text-[12px] text-earth-500">Leasehold</span>
        </div>
      </div>

      {/* Savings */}
      <p
        className={`mt-6 text-center text-[13px] text-earth-600 transition-opacity duration-500 ${showValues ? "opacity-100" : "opacity-0"}`}
      >
        Potential savings of <span className="font-medium text-earth-900">${SAVINGS.toLocaleString()}</span> per unit
      </p>

      <p className="mt-5 text-[10px] text-earth-300">
        Note: Assumes $1,300 per sq.ft. market rate end-unit price
      </p>
    </div>
  );
}
