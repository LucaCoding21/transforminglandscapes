import Image from "next/image";
import TransitionLink from "./TransitionLink";
import { pillars } from "@/lib/pillars";

function firstSentences(text: string, count: number) {
  const parts = text.match(/[^.!?]+[.!?]+\s*/g);
  if (!parts) return text;
  return parts.slice(0, count).join("").trim();
}

export default function OtherScopePillars({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const others = pillars.filter((p) => p.slug !== currentSlug);

  return (
    <div className="mt-16 border-t border-earth-200 pt-12">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-earth-600">
        Research Scope
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((pillar) => (
          <TransitionLink
            key={pillar.slug}
            href={pillar.href}
            className="group block overflow-hidden rounded-lg border border-earth-200 bg-earth-50 transition hover:border-earth-300"
          >
            <div className="relative aspect-[5/3] overflow-hidden bg-earth-200">
              <Image
                src={pillar.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-earth-500">
                {pillar.number}
              </p>
              <h3 className="font-heading text-lg leading-tight text-earth-900">
                {pillar.label}
              </h3>
              <p className="text-sm leading-relaxed text-earth-700">
                {firstSentences(pillar.description, 1)}
              </p>
            </div>
          </TransitionLink>
        ))}
      </div>
    </div>
  );
}
