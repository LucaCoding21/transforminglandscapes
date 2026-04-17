"use client";

import Link from "@/components/TransitionLink";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function ViewAllButton({ href = "/library" }: { href?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 220,
    damping: 14,
    mass: 0.4,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), {
    stiffness: 220,
    damping: 14,
    mass: 0.4,
  });

  const handleMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 500 }} className="inline-block">
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <Link
          href={href}
          className="group inline-flex items-center rounded-full bg-sage-600 px-6 py-3 text-[0.95rem] font-medium text-white transition-colors duration-300 hover:bg-earth-900"
        >
          <span className="relative inline-grid overflow-hidden leading-5">
            <span className="col-start-1 row-start-1 whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
              View all
            </span>
            <span
              aria-hidden
              className="col-start-1 row-start-1 translate-y-full whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
            >
              View all
            </span>
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
