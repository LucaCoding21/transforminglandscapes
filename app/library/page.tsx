import type { Metadata } from "next";
import LibraryGrid from "@/components/LibraryGrid";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Library — Transforming Landscapes",
  description:
    "Case studies, leadership interviews, economic analysis, and resources on the future of real estate in British Columbia.",
};

export default function LibraryPage() {
  return (
    <main className="pt-32 md:pt-40">
      <section className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-24">
        <div className="max-w-3xl">
          <SectionLabel className="mb-6">The Library</SectionLabel>
          <h1 className="font-heading text-display-lg text-earth-900">
            A growing reference for the decade ahead.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-earth-700 md:text-lg">
            Case studies, leadership interviews, economic analysis, and practitioner resources —
            built as a living collection for the professionals shaping the next era of real estate in British Columbia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-32 md:px-10 md:pb-48">
        <LibraryGrid />
      </section>
    </main>
  );
}
