"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { libraryItems, type LibraryItem } from "@/lib/libraryItems";
import { cn } from "@/lib/cn";

type Filter = "All" | LibraryItem["type"];

const filters: Filter[] = ["All", "Case Study", "Interview", "Economic Analysis", "Resource"];

export default function LibraryGrid() {
  const [active, setActive] = useState<Filter>("All");

  const items = useMemo(() => {
    if (active === "All") return libraryItems;
    return libraryItems.filter((item) => item.type === active);
  }, [active]);

  return (
    <div className="grid gap-12 lg:grid-cols-[28rem_1fr] lg:gap-16">
      {/* Left column — sticky sidebar */}
      <div className="lg:sticky lg:top-32 lg:self-start">
        <h1 className="font-heading text-display-lg text-earth-900">
          The Library
        </h1>
        <p className="mt-6 text-base leading-relaxed text-earth-700 md:text-lg">
          Case studies, leadership interviews, economic analysis, and practitioner resources
          built as a living collection for the professionals shaping the next era of real estate in British Columbia.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  isActive
                    ? "border-earth-900 bg-earth-900 text-white"
                    : "border-earth-300 bg-earth-50 text-earth-800 hover:border-earth-500",
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right column — 2-col article grid */}
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.article
              key={item.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-lg border border-earth-200 bg-earth-50 transition hover:border-earth-300"
            >
            <Link href={`/library/${item.slug}`} className="block">
              <div className="relative aspect-[5/3] overflow-hidden bg-earth-200">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  priority={i < 4}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-between p-6">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.06em] text-earth-500">
                    {item.readingTime}
                  </p>
                  <h3 className="mt-2 font-heading text-xl leading-tight text-earth-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-earth-700">
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 flex justify-end">
                  <span className="inline-flex items-center gap-1 text-[0.7rem] font-medium uppercase text-earth-900">
                    <span className="group-hover:underline group-hover:underline-offset-4">Read Now</span>
                    <span className="inline-block -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {items.length === 0 && (
        <p className="mt-16 text-center text-earth-700 lg:col-start-2">
          No items match this filter yet.
        </p>
      )}
    </div>
  );
}
