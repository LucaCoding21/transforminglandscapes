"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { libraryItems, type LibraryItem } from "@/lib/libraryItems";
import { cn } from "@/lib/cn";

type Filter = "All" | LibraryItem["type"];

const filters: Filter[] = ["All", "Case Study", "Interview"];

const counts: Record<Filter, number> = libraryItems.reduce(
  (acc, item) => {
    acc[item.type]++;
    acc.All++;
    return acc;
  },
  {
    All: 0,
    "Case Study": 0,
    Interview: 0,
    Resource: 0,
  } as Record<Filter, number>,
);

function getItems(filter: Filter) {
  if (filter === "All") return libraryItems;
  return libraryItems.filter((item) => item.type === filter);
}

export default function LibraryGrid() {
  const [active, setActive] = useState<Filter>("All");

  const items = getItems(active);

  const handleFilter = (filter: Filter) => {
    if (filter !== active) setActive(filter);
  };

  return (
    <div className="grid gap-12 lg:grid-cols-[28rem_1fr] lg:gap-16">
      {/* Left column — sticky sidebar */}
      <div className="lg:sticky lg:top-32 lg:self-start">
        <h1 className="font-heading text-display-lg text-earth-900">
          The Library
        </h1>
        <p className="mt-6 text-base leading-relaxed text-earth-700 md:text-lg">
          Case studies, leadership interviews, and practitioner resources built
          as a living collection for the professionals shaping the next era of
          real estate in British Columbia.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilter(filter)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition md:px-4 md:py-2",
                  isActive
                    ? "border-earth-900 bg-earth-900 text-white"
                    : "border-earth-300 bg-earth-50 text-earth-800 hover:border-earth-500",
                )}
              >
                <span>{filter}</span>
                <span
                  className={cn(
                    "text-xs tabular-nums",
                    isActive ? "text-white/60" : "text-earth-500",
                  )}
                >
                  {counts[filter]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right column — article grid */}
      <div>
        {/* Mobile: list layout */}
        <div className="flex flex-col divide-y divide-earth-200 md:hidden">
          {items.map((item, i) => (
            <article key={item.slug} data-card className="group py-8 first:pt-0">
              <Link href={`/library/${item.slug}`} className="block">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.08em] text-earth-500">
                  {item.type}
                </p>
                <div className="mt-2 flex gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold leading-snug text-earth-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-earth-600">
                      {item.description}
                    </p>
                    <p className="mt-2 text-[0.65rem] text-earth-400">
                      {item.readingTime}
                    </p>
                  </div>
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded bg-earth-200">
                    {item.image && item.blurDataURL && (
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        priority={i < 4}
                        sizes="96px"
                        placeholder="blur"
                        blurDataURL={item.blurDataURL}
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Desktop: 2-col grid */}
        <div className="hidden gap-6 sm:grid-cols-2 md:grid">
          {items.map((item, i) => (
            <article
              key={item.slug}
              data-card
              className="group overflow-hidden rounded-lg border border-earth-200 bg-earth-50 transition hover:border-earth-300"
            >
              <Link href={`/library/${item.slug}`} className="block">
                <div className="relative aspect-[5/3] overflow-hidden bg-earth-200">
                  {item.image && item.blurDataURL ? (
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      priority={i < 4}
                      sizes="(max-width: 1024px) 50vw, 540px"
                      placeholder="blur"
                      blurDataURL={item.blurDataURL}
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-earth-200 to-earth-300 p-8 text-center">
                      <p className="font-heading text-sm uppercase tracking-[0.16em] text-earth-700">
                        {item.type}
                      </p>
                    </div>
                  )}
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
            </article>
          ))}
        </div>
      </div>

      {items.length === 0 && (
        <p className="mt-16 text-center text-earth-700 lg:col-start-2">
          No items match this filter yet.
        </p>
      )}
    </div>
  );
}
