"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { label: "Land Cost", low: 43, mid: 38, high: 33 },
  { label: "Hard Costs", low: 25, mid: 30, high: 35 },
  { label: "Developers Profit", low: 15, mid: 15, high: 15 },
  { label: "Soft Costs", low: 6, mid: 7, high: 7 },
  { label: "Financing Costs", low: 7, mid: 6, high: 6 },
  { label: "Property Purchase Tax", low: 3, mid: 3, high: 3 },
  { label: "Property Taxes", low: 1, mid: 1, high: 1 },
];

const densities = [
  { key: "high" as const, label: "High", color: "#4a3f2f" },
  { key: "mid" as const, label: "Mid", color: "#8b7355" },
  { key: "low" as const, label: "Low", color: "#c4a882" },
];

const MAX = 50;

export default function CostBreakdownChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const bars = containerRef.current.querySelectorAll("[data-bar]");
    const pctLabels = containerRef.current.querySelectorAll("[data-pct]");

    gsap.set(bars, { scaleX: 0 });
    gsap.set(pctLabels, { opacity: 0, x: -4 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        once: true,
      },
    });

    tl.to(bars, {
      scaleX: 1,
      duration: 1,
      stagger: 0.03,
      ease: "power3.out",
    }).to(
      pctLabels,
      { opacity: 1, x: 0, duration: 0.3, stagger: 0.02, ease: "power2.out" },
      "-=0.5",
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="my-10 border-y border-earth-200 py-6">
      <p className="text-[0.6rem] uppercase tracking-[0.15em] text-earth-500">Figure</p>
      <h4 className="mt-1 font-heading text-base text-earth-900 sm:text-lg">
        Creation Cost Components of New Housing Development
      </h4>
      <p className="mt-0.5 text-[11px] text-earth-500 sm:text-[12px]">
        Breakdown by Density Format
      </p>

      {/* Legend */}
      <div className="mt-3 mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-earth-500">
        <span className="font-medium text-earth-700">Density Format</span>
        {densities.map((d) => (
          <span key={d.key} className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-4 rounded-[2px]" style={{ backgroundColor: d.color }} />
            {d.label}
          </span>
        ))}
      </div>

      {/* Rows */}
      <div className="space-y-2.5">
        {categories.map((cat) => (
          <div key={cat.label} className="grid grid-cols-[130px_1fr] items-center gap-3 sm:grid-cols-[160px_1fr]">
            <span className="text-[11px] text-earth-600 sm:text-[12px]">{cat.label}</span>
            <div className="flex flex-col gap-[3px]">
              {densities.map((d) => {
                const value = cat[d.key];
                const widthPct = (value / MAX) * 100;
                return (
                  <div key={d.key} className="flex items-center gap-2">
                    <div className="relative h-[8px] flex-1 rounded-[2px] bg-earth-100">
                      <div
                        data-bar
                        className="absolute inset-y-0 left-0 origin-left rounded-[2px]"
                        style={{ width: `${widthPct}%`, backgroundColor: d.color }}
                      />
                    </div>
                    <span data-pct className="w-6 text-right text-[10px] tabular-nums text-earth-400">
                      {value}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[10px] leading-relaxed text-earth-400">
        Note: Development cost charges are not included. These estimates are representative, based on a typical pro forma.
      </p>
      <p className="mt-1 text-right text-[10px] text-earth-400">
        Source: GVR Economics
      </p>
    </div>
  );
}
