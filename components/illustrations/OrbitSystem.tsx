"use client";

import { motion } from "framer-motion";

/**
 * Signature illustration: the "Orbit System" — NEWZONIX's core visual metaphor.
 * A central AI core with business functions (Sales, Ops, Finance, Support, Growth)
 * orbiting on independent rings, connected by pulsing data lines. This motif recurs
 * across the site (hero, platform architecture) as the brand's one distinctive mark.
 */

const nodes = [
  { label: "Sales", angle: 0, ring: 1 },
  { label: "Support", angle: 144, ring: 1 },
  { label: "Finance", angle: 288, ring: 1 },
  { label: "Ops", angle: 72, ring: 2 },
  { label: "Growth", angle: 216, ring: 2 },
];

export function OrbitSystem({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 560 560" className="h-full w-full" role="img" aria-label="NEWZONIX orbit system illustration">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8FB6FF" />
            <stop offset="45%" stopColor="#4F8CFF" />
            <stop offset="100%" stopColor="#7C4DFF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ringStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7C4DFF" stopOpacity="0.15" />
          </linearGradient>
          <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        {/* outer static rings */}
        <circle cx="280" cy="280" r="230" stroke="url(#ringStroke)" strokeWidth="1" fill="none" opacity="0.4" />
        <circle cx="280" cy="280" r="170" stroke="url(#ringStroke)" strokeWidth="1" fill="none" opacity="0.55" />

        {/* rotating ring group 1 */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "280px 280px" }}
        >
          <circle cx="280" cy="280" r="170" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" strokeDasharray="2 8" />
        </motion.g>

        {/* rotating ring group 2, reverse */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "280px 280px" }}
        >
          <circle cx="280" cy="280" r="230" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" strokeDasharray="1 10" />
        </motion.g>

        {/* core */}
        <circle cx="280" cy="280" r="90" fill="url(#coreGlow)" opacity="0.5" filter="url(#softBlur)" />
        <motion.circle
          cx="280"
          cy="280"
          r="34"
          fill="#0B1020"
          stroke="#4F8CFF"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="280" cy="280" r="10" fill="#4F8CFF" />

        {/* orbit nodes */}
        {nodes.map((n, i) => {
          const radius = n.ring === 1 ? 170 : 230;
          const rad = (n.angle * Math.PI) / 180;
          const x = 280 + radius * Math.cos(rad);
          const y = 280 + radius * Math.sin(rad);
          return (
            <g key={n.label}>
              <motion.line
                x1="280"
                y1="280"
                x2={x}
                y2={y}
                stroke="#4F8CFF"
                strokeWidth="1"
                strokeDasharray="4 5"
                initial={{ opacity: 0.15 }}
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
              />
              <motion.g
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              >
                <circle cx={x} cy={y} r="22" fill="#0B1020" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx={x} cy={y} r="4" fill={i % 2 === 0 ? "#4F8CFF" : "#7C4DFF"} />
                <text
                  x={x}
                  y={y + 38}
                  textAnchor="middle"
                  fontSize="13"
                  fontFamily="var(--font-inter), sans-serif"
                  fill="#AEB6CC"
                >
                  {n.label}
                </text>
              </motion.g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
