"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FREEHOLD = 780000;
const LEASEHOLD = 624000;
const Y_MAX = 800000;
const Y_TICKS = [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000];

const FREEHOLD_COLOR = "#5a7247";
const LEASEHOLD_COLOR = "#8b7355";

const CHART_W = 640;
const CHART_H = 360;
const PAD = { top: 16, right: 24, bottom: 40, left: 110 };
const W = CHART_W - PAD.left - PAD.right;
const H = CHART_H - PAD.top - PAD.bottom;

function yPos(v: number) {
  return PAD.top + H - (v / Y_MAX) * H;
}

const BAR_SLOTS = [
  { label: "Freehold", value: FREEHOLD, color: FREEHOLD_COLOR },
  { label: "Leasehold", value: LEASEHOLD, color: LEASEHOLD_COLOR },
];
const BAR_WIDTH = 120;

export default function PriceComparisonChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(SVGRectElement | null)[]>([]);
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const rects = barRefs.current.filter(Boolean) as SVGRectElement[];
    if (!rects.length) return;

    rects.forEach((r) => {
      gsap.set(r, { attr: { y: yPos(0), height: 0 } });
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const tl = gsap.timeline();
        rects.forEach((r, i) => {
          const v = BAR_SLOTS[i].value;
          const targetY = yPos(v);
          const targetH = yPos(0) - targetY;
          tl.to(
            r,
            {
              attr: { y: targetY, height: targetH },
              duration: 0.9,
              ease: "power3.out",
            },
            i * 0.1,
          );
        });
        tl.call(() => setShowValues(true), [], 0.6);
      },
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Slot x-centers across the plot area
  const slotCenterX = (i: number) =>
    PAD.left + (W / BAR_SLOTS.length) * (i + 0.5);

  return (
    <div ref={containerRef} className="my-10 border-y border-earth-200 py-8">
      <p className="text-[0.6rem] uppercase tracking-[0.15em] text-earth-500">Figure</p>
      <h4 className="mt-1 font-heading text-base text-earth-900 sm:text-lg">
        Hypothetical Price Comparison: 600 sq.ft. New Condominium
      </h4>
      <p className="mt-0.5 text-[11px] text-earth-500 sm:text-[12px]">
        Full Market Rate on Freehold Land vs. 20% Discount on Leasehold Land
      </p>

      <div className="mt-4 overflow-x-auto">
        <svg
          viewBox={`0 0 ${CHART_W} ${CHART_H}`}
          className="mx-auto w-full max-w-[640px]"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Y-axis title */}
          <text
            transform={`translate(24, ${PAD.top + H / 2}) rotate(-90)`}
            textAnchor="middle"
            fill="#6b5d47"
            fontSize="11"
            fontFamily="var(--font-body)"
          >
            End-Unit Purchase Price
          </text>

          {/* Gridlines */}
          {Y_TICKS.map((t) => (
            <line
              key={t}
              x1={PAD.left}
              x2={CHART_W - PAD.right}
              y1={yPos(t)}
              y2={yPos(t)}
              stroke="#e8e2da"
              strokeWidth={0.6}
              strokeDasharray={t === 0 ? "none" : "3,3"}
            />
          ))}

          {/* Y labels */}
          {Y_TICKS.map((t) => (
            <text
              key={`yl-${t}`}
              x={PAD.left - 10}
              y={yPos(t) + 4}
              textAnchor="end"
              fill="#8b7355"
              fontSize="10"
              fontFamily="var(--font-body)"
            >
              ${t.toLocaleString()}
            </text>
          ))}

          {/* Bars */}
          {BAR_SLOTS.map((slot, i) => {
            const cx = slotCenterX(i);
            const x = cx - BAR_WIDTH / 2;
            return (
              <g key={slot.label}>
                <rect
                  ref={(el) => {
                    barRefs.current[i] = el;
                  }}
                  x={x}
                  y={yPos(0)}
                  width={BAR_WIDTH}
                  height={0}
                  fill={slot.color}
                />
                {/* Value label inside bar */}
                <text
                  x={cx}
                  y={yPos(slot.value) + (yPos(0) - yPos(slot.value)) * 0.5 + 4}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="13"
                  fontWeight="600"
                  fontFamily="var(--font-body)"
                  opacity={showValues ? 1 : 0}
                  style={{ transition: "opacity 400ms" }}
                >
                  ${slot.value.toLocaleString()}
                </text>
                {/* X-axis label */}
                <text
                  x={cx}
                  y={PAD.top + H + 20}
                  textAnchor="middle"
                  fill="#6b5d47"
                  fontSize="12"
                  fontFamily="var(--font-body)"
                >
                  {slot.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <p className="mt-2 text-right text-[10px] text-earth-400">
        Note: Assumes $1,300 per square foot market rate end-unit price.
      </p>
    </div>
  );
}
