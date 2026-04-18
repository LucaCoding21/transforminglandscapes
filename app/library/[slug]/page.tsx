import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { libraryItems } from "@/lib/libraryItems";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return libraryItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = libraryItems.find((i) => i.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} — Transforming Landscapes`,
    description: item.description,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const itemIndex = libraryItems.findIndex((i) => i.slug === slug);
  const item = libraryItems[itemIndex];
  if (!item) notFound();
  const nextItem = libraryItems[(itemIndex + 1) % libraryItems.length];

  return (
    <main>
      {/* Hero image — sticky behind content */}
      <div className="sticky top-0 z-0 h-[50vh] min-h-[400px] w-full overflow-hidden bg-earth-200">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 to-transparent" />
      </div>

      {/* Article content — scrolls over the hero */}
      <div className="relative z-10 -mt-16 rounded-t-[2rem] bg-earth-50 pt-12">
      <article className="mx-auto max-w-4xl px-6 md:px-10">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/library"
            className="inline-flex items-center gap-2 text-sm font-medium text-earth-300 transition hover:text-earth-500"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4L7 12L15 20" /></svg>
            <span>Back to Library</span>
          </Link>
          <Link
            href={`/library/${nextItem.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-earth-300 transition hover:text-earth-500"
          >
            <span>Next: {nextItem.title}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4L17 12L9 20" /></svg>
          </Link>
        </div>

        {/* Meta */}
        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-earth-500">
          <span className="rounded-full bg-earth-100 px-3 py-1 text-[0.7rem] uppercase text-earth-700">
            {item.type}
          </span>
          <span>{item.readingTime}</span>
          {item.date && (
            <>
              <span className="text-earth-300">·</span>
              <span>{item.date}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h1 className="mt-6 font-heading text-display-lg text-earth-900">
          {item.title}
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg leading-relaxed text-earth-600">
          {item.description}
        </p>

        {/* Author */}
        {item.author && (
          <p className="mt-6 text-sm text-earth-500">
            By {item.author}
          </p>
        )}

        {/* Divider */}
        <hr className="mt-8 border-earth-200" />

        {/* Body */}
        {item.body && (
          <div className="mt-10 space-y-6">
            {item.body.map((paragraph, i) => (
              <p
                key={i}
                className={`text-base leading-[1.8] text-earth-800 ${i === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-heading first-letter:text-5xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-earth-900" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Bottom navigation */}
        <div className="mt-16 mb-32 flex items-center justify-between border-t border-earth-200 pt-8">
          <Link
            href="/library"
            className="inline-flex items-center gap-2 text-sm font-medium text-earth-300 transition hover:text-earth-500"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4L7 12L15 20" /></svg>
            <span>Back to Library</span>
          </Link>
          <Link
            href={`/library/${nextItem.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-earth-300 transition hover:text-earth-500"
          >
            <span>Next: {nextItem.title}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4L17 12L9 20" /></svg>
          </Link>
        </div>
      </article>
      </div>
    </main>
  );
}
