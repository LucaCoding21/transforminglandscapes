import type { Metadata } from "next";
import Link from "@/components/TransitionLink";

export const metadata: Metadata = {
  title: "Executive Summary | Transforming Landscapes",
  description:
    "The full executive summary of Transforming Landscapes: Advancing Understanding and Collaboration with Indigenous Partners in BC Real Estate.",
};

export default function ExecutiveSummaryPage() {
  return (
    <main className="pt-24 md:pt-32 lg:pt-40">
      <section className="mx-auto max-w-content px-6 pb-24 md:px-10 md:pb-32">
        <div className="max-w-3xl">
          <Link
            href="/#summary"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-earth-700 transition hover:text-earth-900"
          >
            <span aria-hidden className="transition group-hover:-translate-x-1">←</span>
            <span>Back</span>
          </Link>

          <h1 className="mt-10 font-heading text-display-lg leading-[1.05] text-earth-900">
            Transforming Landscapes: Executive Summary
          </h1>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p className="drop-cap">
              This report, <em>Transforming Landscapes: Advancing Understanding
              and Collaboration with Indigenous Partners in BC Real Estate</em>,
              is designed to support developers, planners, and real estate
              professionals across British Columbia in building stronger,
              informed, collaborative, long-term and respectful relationships
              with Indigenous communities, partners and organisations. As
              Indigenous-led development continues to grow and reshape the
              landscape of real estate in BC, there is a clear desire for
              greater understanding, open dialogue, and meaningful collaboration
              from both Indigenous and non-Indigenous people. This report,
              research and collection of interviews offers insights, case
              studies, and guidance that will support real estate professionals
              to ask informed questions, access relevant information, and
              approach partnerships with cultural awareness and understanding.
            </p>
            <p>
              Our intention is to create a platform that honours Indigenous
              voices, shares their leadership stories, and encourages others in
              the industry to listen, learn, and build relationships rooted in
              trust and shared values. This work is part of a broader movement
              toward reconciliation, acknowledging the past, being present in
              the conversation, and working together toward an inclusive future
              that honours Indigenous self-determination. We believe that
              collaboration is not only possible, but essential.
            </p>
            <p>
              There are already many thoughtful, well-researched resources that
              map and explain Indigenous territories and designations. Rather
              than recreate them, we aim to amplify those existing works.
              Throughout this report, you&rsquo;ll find links to trusted
              sources for deeper exploration and learning.
            </p>
            <p>
              This report is a first step in what we hope will be a long-term,
              evolving dialogue. It is not a conclusion, but a place to start
              and an opportunity to transform how we think about land,
              leadership, and what it means to build together.
            </p>
          </div>

          <div className="mt-16 border-t border-earth-200 pt-10">
            <Link
              href="/library"
              className="group inline-flex items-center gap-2 text-sm font-medium text-earth-900 transition hover:text-sage-600"
            >
              <span className="border-b border-earth-900/40 pb-0.5 transition group-hover:border-sage-600">
                Back to the Library
              </span>
              <span aria-hidden className="transition group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
