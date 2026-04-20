import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Transforming Landscapes",
  description:
    "Get in touch with the Transforming Landscapes research team at REIBC and Greater Vancouver REALTORS®.",
};

export default function ContactPage() {
  return (
    <main className="pt-24 md:pt-32 lg:pt-40">
      <section className="mx-auto max-w-3xl px-6 pb-24 md:px-10 md:pb-32">
        <h1 className="font-heading text-display-lg leading-[0.95] text-earth-900">
          Get in touch.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-earth-700 md:text-lg">
          Whether you&rsquo;re a practitioner with a perspective to share, a
          researcher with a question, or a partner interested in the work, we&rsquo;d
          like to hear from you.
        </p>

        <div className="mt-16 border-t border-earth-900/15 pt-12">
          <ContactForm />
        </div>

        <div className="mt-20 border-t border-earth-900/15 pt-8">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-earth-500">
            Produced by
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-10">
            <a
              href="https://reibc.org"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/reibc-logo.png"
                alt="Real Estate Institute of British Columbia"
                className="h-11 w-auto opacity-70 transition hover:opacity-100"
              />
            </a>
            <a
              href="https://gvrealtors.ca"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gvr-logo.png"
                alt="Greater Vancouver REALTORS"
                className="h-[72px] w-auto opacity-70 transition hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
