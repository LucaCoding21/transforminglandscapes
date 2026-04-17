"use client";

import Link from "@/components/TransitionLink";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * 0.35, y: y * 0.5 });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={offset}
      transition={{ type: "spring", stiffness: 180, damping: 14, mass: 0.5 }}
      className="hidden md:block"
    >
      <Link
        href="/contact"
        className="group flex items-center gap-2 rounded-full bg-earth-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-sage-600"
      >
        <span className="relative inline-grid overflow-hidden leading-5">
          <span className="col-start-1 row-start-1 whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
            Contact
          </span>
          <span
            aria-hidden
            className="col-start-1 row-start-1 translate-y-full whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
          >
            Let&rsquo;s Talk
          </span>
        </span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-earth-900 transition group-hover:translate-x-0.5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path
              d="M3 9L9 3M9 3H4M9 3V8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
}
