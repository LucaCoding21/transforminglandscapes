"use client";

import { useState } from "react";
import Link from "@/components/TransitionLink";

type Props = {
  label: string;
  href: string;
  renderIcon: (hovered: boolean) => React.ReactNode;
};

export default function HeroInfoCard({ label, href, renderIcon }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex h-full items-center justify-between gap-2 rounded-2xl border border-white/20 bg-earth-900/40 px-3 py-2.5 shadow-lg shadow-earth-900/20 transition-colors duration-500 hover:border-earth-50 hover:bg-earth-50"
    >
      <span className="flex items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors duration-500 group-hover:bg-earth-900 group-hover:text-earth-50">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            {renderIcon(hovered)}
          </svg>
        </span>
        <span className="text-xs font-medium tracking-tight text-white transition-colors duration-500 group-hover:text-earth-900 md:text-sm">
          {label}
        </span>
      </span>
    </Link>
  );
}
