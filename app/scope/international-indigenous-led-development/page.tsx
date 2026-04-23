import type { Metadata } from "next";
import Link from "@/components/TransitionLink";
import OtherScopePillars from "@/components/OtherScopePillars";
import InlineQuote from "@/components/InlineQuote";

export const metadata: Metadata = {
  title:
    "Collaborative Approaches and Emerging Models: International Indigenous-Led Development | Transforming Landscapes",
  description:
    "Around the world, there are powerful examples of Indigenous-led and collaborative real estate and land development projects that honour culture, history, and community.",
};

export default function InternationalIndigenousLedDevelopmentPage() {
  return (
    <main className="pt-24 md:pt-32 lg:pt-40">
      <section className="mx-auto max-w-content px-6 pb-24 md:px-10 md:pb-32">
        <div className="max-w-5xl">
          <Link
            href="/#scope"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-earth-700 transition hover:text-earth-900"
          >
            <span aria-hidden className="transition group-hover:-translate-x-1">
              ←
            </span>
            <span>Back</span>
          </Link>

          <h1 className="mt-10 font-heading text-4xl font-medium leading-[1.05] tracking-tight text-earth-900 md:text-5xl lg:text-6xl">
            Collaborative Approaches and Emerging Models: International
            Indigenous-Led Development
          </h1>
        </div>

        <div className="max-w-3xl">
          <div className="mt-12 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              Around the world, there are powerful examples of Indigenous-led
              and collaborative real estate and land development projects that
              honour culture, history, and community. These initiatives
              demonstrate how development can move forward while respecting
              tradition and place. British Columbia and Canada can learn from
              these international models as we continue to shape more
              inclusive and respectful practices.
            </p>
            <p>
              New Zealand&rsquo;s Māori Housing framework and Hawaii&rsquo;s
              Office of Hawaiian Affairs (OHA) initiatives demonstrate the
              importance of Indigenous-led development:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                In New Zealand, the Papakainga Housing department focuses on
                building small-scale intentional Indigenous communities by
                Māori, for Māori, on Māori land.
              </li>
              <li>
                Hawaii&rsquo;s OHA has invested significantly in housing
                programs, helping Native Hawaiian households obtain rentals,
                purchase homes, and prevent foreclosures.
              </li>
            </ul>
          </div>

          <h2 className="mt-16 font-heading text-2xl font-semibold text-earth-900 md:text-3xl">
            Collaborative Governance Models
          </h2>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              New Zealand&rsquo;s approach to governance offers valuable
              lessons:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                The country now has two ministries &ndash; Crown and Iwi
                &ndash; creating a circular structure of accountability
                between both government systems.
              </li>
              <li>
                This model promotes equality while presenting new challenges
                in communication and due diligence.
              </li>
            </ul>
          </div>

          <h2 className="mt-16 font-heading text-2xl font-semibold text-earth-900 md:text-3xl">
            Cultural Integration in Planning
          </h2>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              Both regions emphasize the importance of cultural values in
              housing and land use:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                New Zealand&rsquo;s Living Standards Framework evaluates
                cultural, social, and environmental benefits of projects,
                prioritizing non-tangible benefits such as cultural elements
                and traditional practices.
              </li>
              <li>
                Hawaii focuses on enabling Native Hawaiians to live and raise
                their ʻohana in their own kulāiwa (homeland).
              </li>
            </ul>
          </div>

          <h2 className="mt-16 font-heading text-2xl font-semibold text-earth-900 md:text-3xl">
            Comprehensive Strategies
          </h2>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              New Zealand and Hawaii have developed comprehensive strategies
              for Indigenous housing:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                New Zealand&rsquo;s MAIHI Ka Ora strategy identifies six
                priorities, including Māori/Crown partnerships, Māori-led
                local solutions, and Māori housing supply.
              </li>
              <li>
                Hawaii&rsquo;s approach includes leveraging partnerships to
                ensure Native Hawaiians can obtain affordable rentals and
                homeownership.
              </li>
            </ul>
          </div>

          <h2 className="mt-16 font-heading text-2xl font-semibold text-earth-900 md:text-3xl">
            Knowledge Sharing and Capacity Building
          </h2>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              New Zealand&rsquo;s approach to knowledge sharing is
              particularly noteworthy:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                The country holds a biennial National Māori Housing
                Conference, featuring workshops, field trips, and case
                studies.
              </li>
            </ul>
          </div>

          <h2 className="mt-16 font-heading text-2xl font-semibold text-earth-900 md:text-3xl">
            Financial Support and Education
          </h2>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>Both regions emphasize financial support and education:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                Hawaii&rsquo;s OHA focuses on helping Native Hawaiians become
                creditworthy and better at managing finances.
              </li>
              <li>
                New Zealand&rsquo;s housing continuum aims to move people from
                homelessness to renting to becoming landlords.
              </li>
            </ul>
          </div>

          <h2 className="mt-16 font-heading text-2xl font-semibold text-earth-900 md:text-3xl">
            Policy Alignment
          </h2>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              New Zealand ensures alignment between Indigenous-specific
              strategies and broader housing policies:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                The MAIHI Ka Ora strategy is developed alongside the
                Government Policy Statement on Housing and Urban Development.
              </li>
            </ul>
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
              &ldquo;It&rsquo;s a time of innovation, leadership, and
              momentum.&rdquo;
            </p>
          </InlineQuote>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              By learning from these approaches, British Columbia can work
              towards a more collaborative and inclusive real estate industry
              and land use policy framework that better serves Indigenous
              peoples.
            </p>
          </div>

          <OtherScopePillars currentSlug="international-indigenous-led-development" />
        </div>
      </section>
    </main>
  );
}
