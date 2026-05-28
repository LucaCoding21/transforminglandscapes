"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnershipBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute inset-x-0 top-[5.75rem] z-30 flex justify-center px-4 md:top-[6.75rem]"
    >
      <div className="pointer-events-auto flex items-center gap-4 rounded-full bg-white/95 px-5 py-2 shadow-md shadow-earth-900/15 backdrop-blur-sm md:gap-5 md:px-6 md:py-2.5">
        <Image
          src="/images/reibc-logo.png"
          alt="Real Estate Institute of British Columbia"
          width={500}
          height={180}
          className="h-7 w-auto md:h-9"
        />
        <span className="block h-6 w-px bg-earth-200 md:h-8" aria-hidden />
        <Image
          src="/images/gvr-logo.png"
          alt="Greater Vancouver Realtors"
          width={1200}
          height={620}
          className="h-8 w-auto md:h-10"
        />
      </div>
    </motion.div>
  );
}
