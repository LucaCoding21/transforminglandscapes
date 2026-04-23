"use client";

import Link from "@/components/TransitionLink";
import ContactCTA from "@/components/ContactCTA";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

const links = [
  { href: "/#summary", label: "Executive Summary" },
  { href: "/#scope", label: "Research Scope" },
  { href: "/library", label: "Library" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (y < 80) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{
        opacity: 1,
        y: hidden ? -120 : 0,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6"
    >
      <nav className="flex w-full max-w-content items-center justify-between gap-4 rounded-2xl bg-white px-5 py-3 shadow-lg shadow-earth-900/5 md:px-5 md:py-3">
        <Link
          href="/"
          className="flex items-center rounded-full px-4 py-2 text-earth-900 transition hover:bg-earth-100"
        >
          <span className="flex flex-col font-heading text-[0.7rem] font-semibold uppercase leading-[1.05] tracking-[0.18em]">
            <span>Transforming</span>
            <span>Landscapes</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group rounded-full px-4 py-2 text-sm text-earth-800 transition-colors hover:text-earth-900"
              >
                <span className="relative inline-grid overflow-hidden leading-5">
                  <span className="col-start-1 row-start-1 whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                    {link.label}
                  </span>
                  <span
                    aria-hidden
                    className="col-start-1 row-start-1 translate-y-full whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                  >
                    {link.label}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <ContactCTA />

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-earth-900 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="relative h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0.5 block h-[1.5px] w-5 bg-earth-900 transition",
                mobileOpen && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[13px] block h-[1.5px] w-5 bg-earth-900 transition",
                mobileOpen && "-translate-y-[6px] -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-4 right-4 top-[88px] rounded-3xl bg-white p-4 shadow-lg shadow-earth-900/5 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-full px-4 py-3 text-sm text-earth-800 transition hover:bg-earth-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
