"use client";

import { stats } from "@/lib/data";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { RevealGroup, revealItem } from "../ui/Reveal";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export function Stats() {
  return (
    <section className="section">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={revealItem}
              className="glass-card card-hover flex flex-col items-center px-4 py-10 text-center"
            >
              <span className="font-display text-4xl font-bold text-gradient md:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 !== 0 ? 2 : 0}
                />
              </span>
              <span className="mt-3 text-[14.5px] text-ink-faint">{stat.label}</span>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
