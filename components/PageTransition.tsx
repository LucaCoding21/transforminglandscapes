"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

type Phase = "idle" | "covering" | "uncovering";

type Ctx = { navigate: (href: string) => void };

const TransitionCtx = createContext<Ctx>({ navigate: () => {} });

export const usePageTransition = () => useContext(TransitionCtx);

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const pendingRef = useRef<string | null>(null);

  const navigate = useCallback(
    (href: string) => {
      const [path, hash] = href.split("#");
      const targetPath = path || pathname;
      const samePath = targetPath === pathname;

      if (samePath) {
        if (hash) {
          const el = document.getElementById(hash);
          el?.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      if (phase !== "idle") return;
      pendingRef.current = href;
      setPhase("covering");
    },
    [pathname, phase],
  );

  useEffect(() => {
    if (phase !== "covering" || !pendingRef.current) return;
    const [targetPath] = pendingRef.current.split("#");
    if (pathname === targetPath) {
      pendingRef.current = null;
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setPhase("uncovering"));
      });
      return () => cancelAnimationFrame(id);
    }
  }, [pathname, phase]);

  const handleAnimationComplete = () => {
    if (phase === "covering") {
      if (pendingRef.current) router.push(pendingRef.current);
    } else if (phase === "uncovering") {
      setPhase("idle");
    }
  };

  const animate =
    phase === "covering"
      ? { x: "0%" }
      : phase === "uncovering"
        ? { x: "-101%" }
        : { x: "100%" };

  return (
    <TransitionCtx.Provider value={{ navigate }}>
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[200] bg-[#1f1f1f]"
        initial={{ x: "100%" }}
        animate={animate}
        transition={
          phase === "idle"
            ? { duration: 0 }
            : { duration: 0.7, ease: [0.77, 0, 0.175, 1] }
        }
        onAnimationComplete={handleAnimationComplete}
        style={{ willChange: "transform" }}
      />
    </TransitionCtx.Provider>
  );
}
