import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { libraryItems } from "@/lib/libraryItems";
import type { BodyBlock } from "@/lib/libraryItems";
import CostBreakdownChart from "@/components/CostBreakdownChart";
import PriceTrendChart from "@/components/PriceTrendChart";
import PriceComparisonChart from "@/components/PriceComparisonChart";
import ChartLightbox from "@/components/ChartLightbox";
import type { Metadata } from "next";

const chartComponents: Record<string, React.ComponentType> = {
  "cost-breakdown": CostBreakdownChart,
  "price-trend": PriceTrendChart,
  "price-comparison": PriceComparisonChart,
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return libraryItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = libraryItems.find((i) => i.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} | Transforming Landscapes`,
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
      <div className="sticky top-0 z-0 h-[35vh] min-h-[280px] w-full overflow-hidden bg-earth-200 md:h-[50vh] md:min-h-[400px]">
        {item.image && item.blurDataURL ? (
          <>
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL={item.blurDataURL}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 to-transparent" />
          </>
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-earth-300 via-earth-200 to-earth-100" />
        )}
      </div>

      {/* Article content — scrolls over the hero */}
      <div className="relative z-10 -mt-16 rounded-t-[2rem] bg-earth-50 pt-12">
      <article className="mx-auto max-w-4xl px-6 md:px-10">
        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/library"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-earth-300 transition hover:text-earth-500"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4L7 12L15 20" /></svg>
            <span>Back to Library</span>
          </Link>
          <Link
            href={`/library/${nextItem.slug}`}
            className="inline-flex min-w-0 items-center gap-2 text-sm font-medium text-earth-300 transition hover:text-earth-500"
          >
            <span className="truncate">Next: {nextItem.title}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M9 4L17 12L9 20" /></svg>
          </Link>
        </div>

        {/* Meta */}
        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-earth-500">
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

        {/* Author */}
        {item.author && (
          <div className="mt-6 flex items-center gap-3 text-sm text-earth-500">
            {item.authorAvatar && (
              <span className="relative block h-8 w-8 overflow-hidden rounded-full bg-earth-200">
                <Image
                  src={item.authorAvatar}
                  alt={item.author}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </span>
            )}
            <span>By {item.author}</span>
          </div>
        )}

        {/* Divider */}
        <hr className="mt-8 border-earth-200" />

        {/* PDF download */}
        {item.pdfUrl && (
          <div className="mt-10">
            <a
              href={item.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-earth-900 px-6 py-3 text-sm font-medium text-earth-50 transition hover:bg-sage-600"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span>Open full thesis (PDF)</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        )}

        {/* YouTube embed */}
        {item.youtubeId && (
          <div className="mt-10 aspect-video overflow-hidden rounded-lg bg-earth-900">
            <iframe
              src={`https://www.youtube.com/embed/${item.youtubeId}`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="h-full w-full"
            />
          </div>
        )}

        {/* Body */}
        {item.body && (
          <div className="mt-10 space-y-6">
            {(() => {
              const isParagraph = (b: BodyBlock) =>
                typeof b === "string" ||
                (typeof b === "object" && "content" in b);
              const firstParaIdx = item.body.findIndex(isParagraph);
              const paraClass = (i: number) =>
                `text-base leading-[1.8] text-earth-800 ${i === firstParaIdx ? "first-letter:float-left first-letter:mr-2 first-letter:font-heading first-letter:text-5xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-earth-900" : ""}`;

              return item.body.map((block: BodyBlock, i: number) => {
                if (typeof block === "string") {
                  return (
                    <p key={i} className={paraClass(i)}>
                      {block}
                    </p>
                  );
                }
                if ("heading" in block) {
                  return (
                    <h2
                      key={i}
                      className="mt-10 font-heading text-2xl font-semibold text-earth-900 md:text-3xl"
                    >
                      {block.heading}
                    </h2>
                  );
                }
                if ("content" in block) {
                  return (
                    <p key={i} className={paraClass(i)}>
                      {block.content.map((seg, j) =>
                        typeof seg === "string" ? (
                          <span key={j}>{seg}</span>
                        ) : (
                          <a
                            key={j}
                            href={seg.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sage-600 underline underline-offset-4 transition hover:text-earth-900"
                          >
                            {seg.text}
                          </a>
                        ),
                      )}
                    </p>
                  );
                }
                const Chart = chartComponents[block.figure];
                return Chart ? (
                  <ChartLightbox key={i}>
                    <Chart />
                  </ChartLightbox>
                ) : null;
              });
            })()}
          </div>
        )}

        {/* Bottom navigation — desktop */}
        <div className="mt-16 mb-32 hidden items-center justify-between gap-4 border-t border-earth-200 pt-8 md:flex">
          <Link
            href="/library"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-earth-300 transition hover:text-earth-500"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4L7 12L15 20" /></svg>
            <span>Back to Library</span>
          </Link>
          <Link
            href={`/library/${nextItem.slug}`}
            className="inline-flex min-w-0 items-center gap-2 text-sm font-medium text-earth-300 transition hover:text-earth-500"
          >
            <span className="truncate">Next: {nextItem.title}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M9 4L17 12L9 20" /></svg>
          </Link>
        </div>

        {/* Suggested articles — mobile */}
        <div className="mt-16 mb-24 border-t border-earth-200 pt-8 md:hidden">
          <h2 className="font-heading text-xl font-semibold text-earth-900">
            Read More
          </h2>
          <div className="mt-6 flex flex-col divide-y divide-earth-200">
            {libraryItems
              .filter((li) => li.slug !== slug)
              .slice(0, 3)
              .map((li) => (
                <Link
                  key={li.slug}
                  href={`/library/${li.slug}`}
                  className="flex gap-4 py-6"
                >
                  <div className="flex-1">
                    <p className="text-[0.6rem] font-medium uppercase tracking-[0.08em] text-earth-500">
                      {li.type}
                    </p>
                    <h3 className="mt-1 font-heading text-base font-semibold leading-snug text-earth-900">
                      {li.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-earth-600 line-clamp-2">
                      {li.description}
                    </p>
                  </div>
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded bg-earth-200">
                    {li.image && (
                      <Image
                        src={li.image}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    )}
                  </div>
                </Link>
              ))}
          </div>
          <Link
            href="/library"
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-earth-900"
          >
            View all articles
            <span>→</span>
          </Link>
        </div>
      </article>
      </div>
    </main>
  );
}
