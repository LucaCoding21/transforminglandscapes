import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/TransitionLink";
import OtherScopePillars from "@/components/OtherScopePillars";
import InlineQuote from "@/components/InlineQuote";
import { libraryItems } from "@/lib/libraryItems";

export const metadata: Metadata = {
  title: "Truth, Reconciliation & Real Estate | Transforming Landscapes",
  description:
    "How Truth and Reconciliation principles are shaping real estate and development practice in British Columbia.",
};

export default function TruthReconciliationRealEstatePage() {
  const featured = libraryItems.find(
    (i) => i.slug === "nations-housing-affordability",
  );

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
            Truth, Reconciliation &amp; Real Estate
          </h1>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              In British Columbia, Truth and Reconciliation are increasingly
              woven into how many people live, work, and do business. For the
              real estate and development industry, the most meaningful way to
              integrate these principles into projects and practices is by
              listening to those with lived experience and learning from their
              perspectives. In preparing this report, we spoke with several
              Indigenous industry members to better understand how
              reconciliation can take shape in development, operations, and
              everyday practice.
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
              &ldquo;There have been many opportunities to build bridges
              between Indigenous communities and the broader real estate
              sector. Increasingly, we&rsquo;re seeing respectful partnerships
              take shape&mdash;grounded in shared goals, transparency, and
              mutual benefit. Real estate professionals are becoming more
              aware of the importance of Indigenous values, governance, and
              consent. This has opened up space for co-development models, new
              investment pathways, and joint ventures that prioritize
              Nation-building and long-term impact.&rdquo;
            </p>
          </InlineQuote>

          <h2 className="mt-16 font-heading text-2xl font-semibold text-earth-900 md:text-3xl">
            Truth and Reconciliation Commission Calls to Action
          </h2>

          <div className="mt-6 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              In 2015, the Truth and Reconciliation Commission of Canada
              released 94 Calls to Action to address the harms and ongoing
              impacts of residential schools. Several calls to action speak to
              issues of territorial rights, economic participation, legal
              recognition, and self-determination, all of which are central to
              ethical real estate development involving Indigenous communities.
            </p>
            <p>
              Below we highlight two Calls to Action that intersect with land
              use, development, housing, and relationships between industry,
              government, and Indigenous Nations. You can{" "}
              <a
                href="https://nctr.ca/about/truth-and-reconciliation-commission-of-canada-calls-to-action/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline decoration-blue-700/60 underline-offset-[3px] transition hover:text-blue-900 hover:decoration-blue-900"
              >
                review all 94 Truth and Reconciliation Commission Calls to
                Action here
              </a>
              .
            </p>
          </div>

          <div className="mt-10 border-l-2 border-earth-300 pl-6">
            <h3 className="font-heading text-xl font-semibold text-earth-900 md:text-2xl">
              #43
            </h3>
            <p className="mt-3 text-base leading-relaxed text-earth-800/90 md:text-lg">
              We call upon federal, provincial, territorial, and municipal
              governments to fully adopt and implement the United Nations
              Declaration on the Rights of Indigenous Peoples as the framework
              for reconciliation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-earth-800/90 md:text-lg">
              UNDRIP asserts Indigenous peoples&rsquo; rights to land,
              resources, and free, prior, and informed consent. BC passed the
              Declaration on the Rights of Indigenous Peoples Act (DRIPA) in
              2019. Real estate professionals must align their practices with
              UNDRIP principles, especially when operating in areas with
              unsettled land claims.
            </p>
          </div>

          <div className="mt-10 border-l-2 border-earth-300 pl-6">
            <h3 className="font-heading text-xl font-semibold text-earth-900 md:text-2xl">
              #92
            </h3>
            <p className="mt-3 text-base leading-relaxed text-earth-800/90 md:text-lg">
              We call upon the corporate sector in Canada to adopt the United
              Nations Declaration on the Rights of Indigenous Peoples as a
              reconciliation framework and to apply its principles, norms, and
              standards to corporate policy and core operational activities
              involving Indigenous peoples and their lands and resources. This
              would include, but not be limited to, the following:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-earth-800/90 md:text-lg">
              <li>
                Commit to meaningful consultation, building respectful
                relationships, and obtaining the free, prior, and informed
                consent of Indigenous peoples before proceeding with economic
                development projects.
              </li>
              <li>
                Ensure that Aboriginal peoples have equitable access to jobs,
                training, and education opportunities in the corporate sector,
                and that Aboriginal communities gain long-term sustainable
                benefits from economic development projects.
              </li>
              <li>
                Provide education for management and staff on the history of
                Aboriginal peoples, including the history and legacy of
                residential schools, the United Nations Declaration on the
                Rights of Indigenous Peoples, Treaties and Aboriginal rights,
                Indigenous law, and Aboriginal&ndash;Crown relations. This
                will require skills based training in intercultural
                competency, conflict resolution, human rights, and
                anti-racism.
              </li>
            </ul>
          </div>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              For developers, investors, urban planners, architects, and real
              estate professionals, this call to action requires meaningful
              consultation and relationships with Indigenous communities.
              Action includes ensuring equitable access to jobs, training, and
              education as well as promoting Indigenous economic development
              and self-determination. This call to action urges ethical
              collaboration, economic inclusion, and acknowledgement of
              Indigenous interests in business planning and execution.
            </p>
          </div>

          <h2 className="mt-16 font-heading text-2xl font-semibold text-earth-900 md:text-3xl">
            Indigenous Rights and Land Use Today
          </h2>

          <div className="mt-6 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              <a
                href="https://ltsa.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline decoration-blue-700/60 underline-offset-[3px] transition hover:text-blue-900 hover:decoration-blue-900"
              >
                The Land Title and Survey Authority of British Columbia
              </a>{" "}
              works alongside the{" "}
              <a
                href="https://labrc.com/fnlgr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline decoration-blue-700/60 underline-offset-[3px] transition hover:text-blue-900 hover:decoration-blue-900"
              >
                First Nations National Land Registry
              </a>{" "}
              to build a strong partnership and collaboration with the Lands
              Advisory Board to leverage LTSA knowledge and expertise to help
              develop a First Nations-owned and operated National Land
              Registry.
            </p>
          </div>

          {featured && (
            <div className="mt-16">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-earth-600">
                Further Reading
              </p>
              <Link
                href={`/library/${featured.slug}`}
                className="group mt-4 block overflow-hidden rounded-lg border border-earth-200 bg-earth-50 transition hover:border-earth-300"
              >
                <article className="flex flex-col sm:flex-row">
                  <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden bg-earth-200 sm:aspect-auto sm:h-auto sm:w-60 md:w-72">
                    {featured.image && (
                      <Image
                        src={featured.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 288px"
                        placeholder={featured.blurDataURL ? "blur" : undefined}
                        blurDataURL={featured.blurDataURL}
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-6 p-6 md:p-7">
                    <div>
                      <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-earth-500">
                        {featured.type} · {featured.readingTime}
                      </p>
                      <h3 className="mt-2 font-heading text-xl leading-tight text-earth-900 md:text-2xl">
                        {featured.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-earth-700">
                        {featured.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[0.7rem] font-medium uppercase tracking-[0.08em] text-earth-900">
                      <span className="group-hover:underline group-hover:underline-offset-4">
                        Read Now
                      </span>
                      <span
                        aria-hidden
                        className="inline-block -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </article>
              </Link>
            </div>
          )}

          <OtherScopePillars currentSlug="truth-reconciliation-real-estate" />
        </div>
      </section>
    </main>
  );
}
