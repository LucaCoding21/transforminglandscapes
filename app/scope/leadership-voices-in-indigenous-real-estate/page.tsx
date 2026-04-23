import type { Metadata } from "next";
import Link from "@/components/TransitionLink";
import OtherScopePillars from "@/components/OtherScopePillars";
import InlineQuote from "@/components/InlineQuote";
import { libraryItems } from "@/lib/libraryItems";

export const metadata: Metadata = {
  title: "Leadership Voices in Indigenous Real Estate | Transforming Landscapes",
  description:
    "We grow and improve our practices by engaging in open conversations, listening deeply, and sharing diverse perspectives.",
};

const videoSlugs = [
  "andrew-hungerford-interview",
  "komal-shaikh-interview",
  "irea-mcdonald-rose-interview",
];

export default function LeadershipVoicesPage() {
  const videos = videoSlugs
    .map((slug) => libraryItems.find((i) => i.slug === slug))
    .filter((i): i is NonNullable<typeof i> => Boolean(i && i.youtubeId));

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
            Leadership Voices in Indigenous Real Estate
          </h1>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              We grow and improve our practices by engaging in open
              conversations, listening deeply, and sharing diverse
              perspectives. In the creation of this report, we spoke with
              several Indigenous leaders in the BC and Canadian real estate
              industry to better understand their experiences, priorities,
              approaches and challenges. These conversations are ongoing and
              we invite you to be part of them. The insights shared here
              reflect the themes and ideas we are hearing so far.
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
              &ldquo;There&rsquo;s growing recognition of Indigenous rights,
              shifts in policy through UNDRIP implementation, and a broader
              understanding of the value Indigenous leadership brings to
              development. More Indigenous professionals are entering real
              estate, finance, and governance&mdash;bringing new skills and
              perspectives that are transforming the landscape. Above all,
              it&rsquo;s the deep commitment to community well-being and
              self-determination that&rsquo;s leading this movement.&rdquo;
            </p>
            <p>
              &ldquo;The future is incredibly bright. We&rsquo;ll see even
              more Indigenous communities leading large-scale, innovative
              developments that reflect their cultural values and economic
              priorities. Nations will play a central role in shaping urban
              and rural growth&mdash;on reserve and off. Indigenous design,
              sustainability, and placemaking will become standard across
              projects. We&rsquo;ll also see increased leadership from
              Indigenous professionals in planning, real estate, finance, and
              architecture. This next decade will mark a new era of excellence
              and innovation led by Indigenous Nations.&rdquo;
            </p>
          </InlineQuote>

          <div className="mt-16 border-t border-earth-200 pt-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-earth-600">
              Interviews
            </p>
            <div className="mt-8 space-y-14">
              {videos.map((video) => (
                <article key={video.slug}>
                  <div className="aspect-video overflow-hidden rounded-lg bg-earth-900">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-earth-500">
                        {video.type}
                      </p>
                      <h3 className="mt-1 font-heading text-lg leading-tight text-earth-900 md:text-xl">
                        {video.title}
                      </h3>
                    </div>
                    <Link
                      href={`/library/${video.slug}`}
                      className="group inline-flex items-center gap-1 self-start whitespace-nowrap text-[0.7rem] font-medium uppercase tracking-[0.08em] text-earth-900 transition hover:text-sage-600 sm:self-auto"
                    >
                      <span className="border-b border-earth-900/40 pb-0.5 transition group-hover:border-sage-600">
                        Full interview
                      </span>
                      <span
                        aria-hidden
                        className="transition group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                  <div className="mt-5">
                    <p className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-earth-500">
                      Placeholder &middot; Summary pending
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-earth-800/90 md:text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum. Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque
                      laudantium, totam rem aperiam, eaque ipsa quae ab illo
                      inventore veritatis et quasi architecto beatae vitae
                      dicta sunt.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <OtherScopePillars currentSlug="leadership-voices-in-indigenous-real-estate" />
        </div>
      </section>
    </main>
  );
}
