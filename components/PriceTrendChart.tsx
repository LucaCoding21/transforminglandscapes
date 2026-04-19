"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data: [number, number, number][] = [
  [1987, 370000, 340000],
  [1988, 380000, 350000],
  [1989, 370000, 330000],
  [1990, 350000, 310000],
  [1991, 330000, 290000],
  [1992, 310000, 280000],
  [1993, 300000, 275000],
  [1994, 290000, 270000],
  [1995, 300000, 280000],
  [1996, 310000, 290000],
  [1997, 320000, 295000],
  [1998, 310000, 290000],
  [1999, 300000, 285000],
  [2000, 310000, 295000],
  [2001, 320000, 300000],
  [2002, 340000, 310000],
  [2003, 370000, 325000],
  [2004, 410000, 340000],
  [2005, 460000, 370000],
  [2006, 520000, 400000],
  [2007, 580000, 430000],
  [2008, 630000, 450000],
  [2009, 680000, 470000],
  [2010, 750000, 510000],
  [2011, 810000, 540000],
  [2012, 860000, 560000],
  [2013, 850000, 570000],
  [2014, 870000, 580000],
  [2015, 950000, 600000],
  [2016, 1050000, 620000],
  [2017, 1100000, 650000],
  [2018, 1050000, 630000],
  [2019, 1000000, 610000],
  [2020, 1050000, 650000],
  [2021, 1300000, 800000],
  [2022, 1600000, 950000],
  [2023, 1800000, 1100000],
  [2024, 2050000, 1250000],
];

const CHART_W = 680;
const CHART_H = 280;
const PAD = { top: 16, right: 60, bottom: 36, left: 80 };
const W = CHART_W - PAD.left - PAD.right;
const H = CHART_H - PAD.top - PAD.bottom;

const Y_MAX = 2200000;
const Y_TICKS = [0, 500000, 1000000, 1500000, 2000000];
const X_MIN = 1987;
const X_MAX = 2024;

function xPos(year: number) {
  return PAD.left + ((year - X_MIN) / (X_MAX - X_MIN)) * W;
}

function yPos(val: number) {
  return PAD.top + H - (val / Y_MAX) * H;
}

// Build smooth cubic bezier path
function buildSmoothPath(col: 1 | 2) {
  const points = data.map((d) => ({ x: xPos(d[0]), y: yPos(d[col]) }));
  if (points.length < 2) return "";

  let path = `M${points[0].x.toFixed(1)},${points[0].y.toFixed(1)}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];

    const tension = 0.3;
    const cp1x = p1.x + (p2.x - p0.x) * tension;
    const cp1y = p1.y + (p2.y - p0.y) * tension;
    const cp2x = p2.x - (p3.x - p1.x) * tension;
    const cp2y = p2.y - (p3.y - p1.y) * tension;

    path += ` C${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }

  return path;
}

// Build area path (line path + close to bottom)
function buildAreaPath(col: 1 | 2) {
  const linePath = buildSmoothPath(col);
  const firstX = xPos(data[0][0]);
  const lastX = xPos(data[data.length - 1][0]);
  const bottom = PAD.top + H;
  return `${linePath} L${lastX.toFixed(1)},${bottom} L${firstX.toFixed(1)},${bottom} Z`;
}

function formatPrice(v: number) {
  if (v === 0) return "$0";
  if (v >= 1000000) return `$${(v / 1000000).toFixed(0)}M`;
  return `$${(v / 1000).toFixed(0)}K`;
}

const FREEHOLD_COLOR = "#5a7247";
const LEASEHOLD_COLOR = "#8b7355";

export default function PriceTrendChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const freeholdLineRef = useRef<SVGPathElement>(null);
  const leaseholdLineRef = useRef<SVGPathElement>(null);
  const freeholdAreaRef = useRef<SVGPathElement>(null);
  const leaseholdAreaRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!containerRef.current || !freeholdLineRef.current || !leaseholdLineRef.current) return;

    const fLine = freeholdLineRef.current;
    const lLine = leaseholdLineRef.current;
    const fArea = freeholdAreaRef.current;
    const lArea = leaseholdAreaRef.current;

    const fLen = fLine.getTotalLength();
    const lLen = lLine.getTotalLength();

    gsap.set(fLine, { strokeDasharray: fLen, strokeDashoffset: fLen });
    gsap.set(lLine, { strokeDasharray: lLen, strokeDashoffset: lLen });
    gsap.set([fArea, lArea], { opacity: 0 });

    const endDots = containerRef.current.querySelectorAll("[data-dot]");
    gsap.set(endDots, { scale: 0, transformOrigin: "center" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
      },
    });

    tl.to([fLine, lLine], {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut",
    })
      .to(
        [fArea, lArea],
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=1",
      )
      .to(
        endDots,
        {
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(2)",
        },
        "-=0.4",
      );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const lastFreehold = data[data.length - 1];
  const lastLeasehold = data[data.length - 1];

  return (
    <div ref={containerRef} className="my-10 rounded-sm border-y border-earth-200 py-8">
      {/* Header */}
      <p className="text-[0.6rem] uppercase tracking-[0.15em] text-earth-500">Figure</p>
      <h4 className="mt-1 font-heading text-lg text-earth-900">
        Comparison of Median Price Trend
      </h4>
      <p className="mt-0.5 text-[13px] text-earth-500">
        Detached homes with land &mdash; Leaseholds on Nation Lands vs. Freeholds
      </p>

      {/* Legend */}
      <div className="mt-4 mb-4 flex items-center gap-5 text-[11px] text-earth-600">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-[3px] w-3.5 rounded-full" style={{ backgroundColor: FREEHOLD_COLOR }} />
          Freehold
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-[3px] w-3.5 rounded-full" style={{ backgroundColor: LEASEHOLD_COLOR }} />
          Leasehold
        </span>
      </div>

      {/* SVG */}
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${CHART_W} ${CHART_H}`}
          className="mx-auto w-full max-w-[680px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="freehold-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={FREEHOLD_COLOR} stopOpacity="0.15" />
              <stop offset="100%" stopColor={FREEHOLD_COLOR} stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="leasehold-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={LEASEHOLD_COLOR} stopOpacity="0.12" />
              <stop offset="100%" stopColor={LEASEHOLD_COLOR} stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {/* Grid */}
          {Y_TICKS.map((tick) => (
            <line
              key={tick}
              x1={PAD.left}
              x2={CHART_W - PAD.right}
              y1={yPos(tick)}
              y2={yPos(tick)}
              stroke="#e8e2da"
              strokeWidth={0.6}
              strokeDasharray={tick === 0 ? "none" : "3,3"}
            />
          ))}

          {/* Y labels */}
          {Y_TICKS.map((tick) => (
            <text
              key={`yl-${tick}`}
              x={PAD.left - 10}
              y={yPos(tick) + 4}
              textAnchor="end"
              fill="#8b7355"
              fontSize="10"
              fontFamily="var(--font-body)"
            >
              {formatPrice(tick)}
            </text>
          ))}

          {/* X labels */}
          {[1990, 2000, 2010, 2020].map((yr) => (
            <text
              key={yr}
              x={xPos(yr)}
              y={CHART_H - 12}
              textAnchor="middle"
              fill="#8b7355"
              fontSize="10"
              fontFamily="var(--font-body)"
            >
              {yr}
            </text>
          ))}

          {/* Area fills */}
          <path ref={freeholdAreaRef} d={buildAreaPath(1)} fill="url(#freehold-fill)" />
          <path ref={leaseholdAreaRef} d={buildAreaPath(2)} fill="url(#leasehold-fill)" />

          {/* Lines */}
          <path
            ref={freeholdLineRef}
            d={buildSmoothPath(1)}
            fill="none"
            stroke={FREEHOLD_COLOR}
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            ref={leaseholdLineRef}
            d={buildSmoothPath(2)}
            fill="none"
            stroke={LEASEHOLD_COLOR}
            strokeWidth={2}
            strokeLinecap="round"
          />

          {/* End dots */}
          <circle
            data-dot
            cx={xPos(lastFreehold[0])}
            cy={yPos(lastFreehold[1])}
            r={4}
            fill={FREEHOLD_COLOR}
          />
          <circle
            data-dot
            cx={xPos(lastLeasehold[0])}
            cy={yPos(lastLeasehold[2])}
            r={4}
            fill={LEASEHOLD_COLOR}
          />

          {/* End labels */}
          <text
            x={xPos(lastFreehold[0]) + 6}
            y={yPos(lastFreehold[1]) - 8}
            fill={FREEHOLD_COLOR}
            fontSize="11"
            fontWeight="500"
            fontFamily="var(--font-body)"
          >
            $2.05M
          </text>
          <text
            x={xPos(lastLeasehold[0]) + 6}
            y={yPos(lastLeasehold[2]) + 16}
            fill={LEASEHOLD_COLOR}
            fontSize="11"
            fontWeight="500"
            fontFamily="var(--font-body)"
          >
            $1.25M
          </text>
        </svg>
      </div>

      {/* Source */}
      <p className="mt-4 text-[10px] leading-relaxed text-earth-300">
        Source Data: GVR MLS | GVR Economics
      </p>
    </div>
  );
}
