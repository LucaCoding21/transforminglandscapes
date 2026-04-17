"use client";

import Image from "next/image";
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
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
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

      <motion.div
        layout
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.article
              key={item.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-3xl border border-earth-200 bg-earth-50 transition hover:border-earth-300"
            >
              <div className="relative aspect-[5/3] overflow-hidden bg-earth-200">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-earth-900/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  {item.type}
                </span>
              </div>
              <div className="p-6">
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-earth-500">
                  {item.readingTime}
                </p>
                <h3 className="mt-3 font-heading text-xl leading-tight text-earth-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-earth-700">
                  {item.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sage-600">
                  <span className="border-b border-sage-600/40 pb-0.5">Read</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {items.length === 0 && (
        <p className="mt-16 text-center text-earth-700">
          No items match this filter yet.
        </p>
      )}
    </div>
  );
}
