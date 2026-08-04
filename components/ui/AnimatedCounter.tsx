"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setDisplay(
          decimals > 0
            ? latest.toFixed(decimals)
            : Math.round(latest).toLocaleString("en-US")
        );
      },
    });
    return () => controls.stop();
  }, [isInView, value, duration, decimals]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
