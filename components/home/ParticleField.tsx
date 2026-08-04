"use client";

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
};

const COLORS = ["#4F8CFF", "#7C4DFF", "#00C48C"];

function makeParticles(count: number): Particle[] {
  // deterministic pseudo-random so SSR/CSR markup matches until hydration swap
  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: rand() * 100,
    top: rand() * 100,
    size: 2 + rand() * 3,
    duration: 8 + rand() * 10,
    delay: rand() * 8,
    color: COLORS[i % COLORS.length],
  }));
}

export function ParticleField({ count = 26 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(makeParticles(count));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-float-slow"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            opacity: 0.55,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
