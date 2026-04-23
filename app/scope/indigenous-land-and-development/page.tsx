import type { Metadata } from "next";
import Link from "@/components/TransitionLink";
import OtherScopePillars from "@/components/OtherScopePillars";
import InlineQuote from "@/components/InlineQuote";

export const metadata: Metadata = {
  title: "Indigenous Land & Development | Transforming Landscapes",
  description:
    "Existing resources that map and explain Indigenous territories, Indigenous-owned business designations, and land economics.",
};

const externalLinkClass =
  "text-blue-700 underline decoration-blue-700/60 underline-offset-[3px] transition hover:text-blue-900 hover:decoration-blue-900";

export default function IndigenousLandAndDevelopmentPage() {
  return (
    <main className="pt-24 md:pt-32 lg:pt-40">
      <section className="mx-auto max-w-content px-6 pb-24 md:px-10 md:pb-32">
        <div className="max-w-3xl">
          <Link
            href="/#scope"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-earth-700 transition hover:text-earth-900"
          >
            <span aria-hidden className="transition group-hover:-translate-x-1">
              ←
            </span>
            <span>Back</span>
          </Link>

          <h1 className="mt-10 font-heading text-display-lg leading-[1.05] text-earth-900">
            Indigenous Land &amp; Development
          </h1>

          <h2 className="mt-12 font-heading text-2xl font-semibold text-earth-900 md:text-3xl">
            Indigenous Territories and Designations
          </h2>

          <div className="mt-6 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              This section highlights existing resources that map and explain
              Indigenous territories and Indigenous-owned business designations.
              We encourage you to explore these materials for deeper context
              and understanding, and you&rsquo;ll find links throughout this
              report to help guide your learning.
            </p>
            <p>
              <a
                href="https://www.bcafn.ca/first-nations-bc"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLinkClass}
              >
                The British Columbia Assembly of First Nations
              </a>{" "}
              features an interactive map which shares the distinct languages
              and economic background of First Nations communities in regions
              where the REIBC and GVR operate.
            </p>
            <p>
              <a
                href="https://www.indigenousbc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLinkClass}
              >
                Indigenous Tourism BC
              </a>{" "}
              offers information about authentic Indigenous and
              Indigenous-owned designations. There are opportunities throughout
              BC to book exceptional cultural experiences and uplift Indigenous
              entrepreneurs and communities through supporting these
              designations.
            </p>
          </div>

          <InlineQuote
            avatar="/images/troy.jpeg"
            name={
              <>
                Troy MacBeth (Lex7em&rsquo;ken / Neq&rsquo;á-men (Nicamous))
                Abromaitis
              </>
            }
            role="Senior Development Manager at Musqueam Capital Corporation"
          >
            <p>
              &ldquo;Indigenous-led development is a powerful expression of
              self-determination, vision, and leadership. It is reshaping the
              real estate landscape in BC in exciting and meaningful
              ways.&rdquo;
            </p>
          </InlineQuote>

          <h2 className="mt-16 font-heading text-2xl font-semibold text-earth-900 md:text-3xl">
            Land Economics with Lambda Alpha International
          </h2>

          <div className="mt-6 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              <a
                href="https://lai.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLinkClass}
              >
                Lambda Alpha International (LAI)
              </a>{" "}
              is a society that connects land economics professionals from
              around the world. With over 2,000+ accomplished members across
              the U.S., and in Canada, Mexico, Europe, and Asia, they aim to
              share experience and showcase collective knowledge, along with
              education and research. With the Land Economics Foundation, LAI
              has created industry best practices that continue to shape the
              future of land use and development across the globe.
            </p>
          </div>

          <OtherScopePillars currentSlug="indigenous-land-and-development" />
        </div>
      </section>
    </main>
  );
}
