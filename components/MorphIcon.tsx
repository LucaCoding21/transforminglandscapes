"use client";

import { useEffect, useMemo } from "react";
import { interpolate } from "flubber";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type Props = {
  pathA: string;
  pathB: string;
  hovered: boolean;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
};

export default function MorphIcon({
  pathA,
  pathB,
  hovered,
  stroke = "currentColor",
  strokeWidth = 1.5,
  fill = "none",
}: Props) {
  const progress = useMotionValue(0);
  const interpolator = useMemo(
    () => interpolate(pathA, pathB, { maxSegmentLength: 2 }),
    [pathA, pathB],
  );
  const d = useTransform(progress, (t) => interpolator(t));

  useEffect(() => {
    const controls = animate(progress, hovered ? 1 : 0, {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [hovered, progress]);

  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fill}
    />
  );
}
