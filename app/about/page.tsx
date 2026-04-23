import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/TransitionLink";

export const metadata: Metadata = {
  title: "About | Transforming Landscapes",
  description:
    "The Real Estate Institute of British Columbia (REIBC) and Greater Vancouver REALTORS (GVR) partnered to prepare this report.",
};

export default function AboutPage() {
  return (
    <main className="pt-24 md:pt-32 lg:pt-40">
      <section className="mx-auto max-w-content px-6 pb-24 md:px-10 md:pb-32">
        <div className="max-w-3xl">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-earth-700 transition hover:text-earth-900"
          >
            <span aria-hidden className="transition group-hover:-translate-x-1">
              ←
            </span>
            <span>Back</span>
          </Link>

          <h1 className="mt-10 font-heading text-display-lg leading-[1.05] text-earth-900">
            The REIBC and the GVR
          </h1>

          <div className="mt-8 flex items-center gap-5">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-earth-100 md:h-14 md:w-14">
              <Image
                src="/images/reibclogo.jpeg"
                alt="REIBC"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-earth-100 md:h-14 md:w-14">
              <Image
                src="/images/gvrlogo.jpeg"
                alt="Greater Vancouver REALTORS"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-earth-600">
              A partnership
            </p>
          </div>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              The Real Estate Institute of British Columbia (REIBC) and
              Greater Vancouver REALTORS (GVR) have partnered to prepare this
              report because we believe that collaboration and mutual
              understanding among all groups in the real estate sector are
              essential to creating meaningful, lasting progress.
            </p>
          </div>

          <figure className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-lg bg-earth-200">
            <Image
              src="/images/board-photo-about.webp"
              alt="REIBC and GVR board members"
              fill
              sizes="(max-width: 1280px) 100vw, 768px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAADQAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgADQAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAv/aAAwDAQACEQMRAD8A/NPwvcaBossKWF6sEl6/k3lu2dsicFQFP8Wc4OQO1fVfiW++H5+EVp4rtbVbeCwu7vTUujs3XF7GPOKuow+EXjI7149o3wk0eCHUbm4uWuri6hcRySIN0DDJDrgjLcj8q5PQ/hv5F2l3Pqcl1BiRmgkTKksrIDw3BAx0HOK82tkuHqPmmnf18rfP5+XZHrQzLERglTa/r+un6mhdfD/wf4yu5ta0i8n1UOVWe5uFCF5tiltiqcBACAo5PHNRf8KV0b/nmP1/xqfQPhpo0lpKZbm5ULIVVYpTGoAVc8c8k5P41u/8Kw0H/n6vf/Ag/wCFZxyuUUoxnov66NL7i5YyMneUNT//2Q=="
              className="object-cover"
            />
          </figure>

          <div className="mt-16 flex items-center gap-4">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-earth-100 md:h-12 md:w-12">
              <Image
                src="/images/reibclogo.jpeg"
                alt=""
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <h2 className="font-heading text-2xl font-semibold text-earth-900 md:text-3xl">
              About the REIBC
            </h2>
          </div>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              As a multi-disciplinary institute, the Real Estate Institute of
              British Columbia (REIBC) is home to a diverse community of real
              estate professionals who span the full spectrum of the industry,
              from appraisers and asset managers to developers, planners, and
              advisors. Each member has met the high professional and ethical
              standards required to earn the RI designation, a mark of
              excellence in BC&rsquo;s real estate sector.
            </p>
            <p>
              In an increasingly competitive and evolving landscape, the REIBC
              is committed to fostering professionalism, supporting continuous
              learning, and encouraging meaningful dialogue across sectors. By
              bringing together voices from all areas of real estate, the
              Institute plays a vital role in shaping thoughtful, informed,
              and future-focused conversations.
            </p>
          </div>

          <div className="mt-16 flex items-center gap-4">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-earth-100 md:h-12 md:w-12">
              <Image
                src="/images/gvrlogo.jpeg"
                alt=""
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <h2 className="font-heading text-2xl font-semibold text-earth-900 md:text-3xl">
              About GVR
            </h2>
          </div>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-earth-800/90 md:text-lg">
            <p>
              Greater Vancouver REALTORS&reg; (GVR) empowers real estate
              professionals, driving innovation, and championing transparency
              and excellence in the industry.
            </p>
            <p>
              For decades, we have been the trusted partner to our more than
              15,000 REALTOR&reg; members and their companies across Greater
              Vancouver, offering comprehensive tools, services, and support.
              As a recognized authority on housing market data, we are a vital
              resource for the public, media, government, and stakeholders,
              delivering trusted information and shaping the conversation
              around real estate.
            </p>
            <p>
              We are a proud and committed advocate for affordable,
              sustainable housing solutions and a fair, transparent, and
              secure real estate market for all participants. GVR provides
              everything our members need to thrive in a dynamic and evolving
              market.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
