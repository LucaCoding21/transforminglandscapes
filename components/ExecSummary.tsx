"use client";

import Image from "next/image";
import Link from "@/components/TransitionLink";
import { motion } from "framer-motion";

export default function ExecSummary() {
  return (
    <section id="summary" className="relative bg-earth-50 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative z-10 flex flex-col">
            <h2 className="whitespace-nowrap pb-32 font-heading text-[clamp(2rem,5.5vw,5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-earth-900">
              <span className="block w-max overflow-hidden pb-[0.12em] -mb-[0.12em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  Executive Summary
                </motion.span>
              </span>
            </h2>

            <div className="mt-6 max-w-md space-y-4 text-[0.8rem] leading-[1.55] text-earth-800/90">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                There are already many thoughtful, well-researched resources
                that map and explain Indigenous territories and designations.
                Rather than recreate them, we aim to amplify those existing
                works. Throughout this report, you&rsquo;ll find links to
                trusted sources for deeper exploration and learning.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.9, delay: 0.27, ease: [0.22, 1, 0.36, 1] }}
              >
                This report is a first step in what we hope will be a long-term,
                evolving dialogue. It is not a conclusion, but a place to start
                and an opportunity to transform how we think about land,
                leadership, and what it means to build together.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6"
            >
              <Link
                href="/library/executive-summary"
                className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-earth-900 transition-colors hover:text-sage-600"
              >
                <span className="relative inline-grid overflow-hidden leading-5">
                  <span className="col-start-1 row-start-1 whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                    Read More
                  </span>
                  <span
                    aria-hidden
                    className="col-start-1 row-start-1 translate-y-full whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                  >
                    Read More
                  </span>
                </span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square overflow-hidden bg-earth-100"
          >
            <Image
              src="/images/88d981ca690449c6259d98c72767878a.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
