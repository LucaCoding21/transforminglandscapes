import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Contact — Transforming Landscapes",
  description:
    "Get in touch with the Transforming Landscapes research team at REIBC and Greater Vancouver REALTORS®.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 md:pt-40">
      <section className="mx-auto grid max-w-content gap-16 px-6 pb-32 md:grid-cols-[1fr_1.1fr] md:px-10 md:pb-48 md:gap-20">
        <div className="md:sticky md:top-32 md:self-start">
          <SectionLabel className="mb-6">Contact</SectionLabel>
          <h1 className="font-heading text-display-lg text-earth-900">
            Tell us what brought you here.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-earth-700 md:text-lg">
            Whether you&rsquo;re a practitioner with a perspective to share, a researcher
            with a question, or a partner interested in the work — we&rsquo;d like to hear from you.
          </p>

          <dl className="mt-12 space-y-6 border-t border-earth-300/60 pt-8 text-sm">
            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-earth-500">For</dt>
              <dd className="mt-1 text-earth-800">Research inquiries, partnerships, and media</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-earth-500">Produced by</dt>
              <dd className="mt-1 text-earth-800">
                The Real Estate Institute of British Columbia <br />
                and Greater Vancouver REALTORS<sup>®</sup>
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <div className="rounded-3xl border border-earth-200 bg-earth-100 p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
