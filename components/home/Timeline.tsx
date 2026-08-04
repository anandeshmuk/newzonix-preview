"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function Timeline() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From connected data to a business that runs itself"
          description="Four stages take you from your current stack to fully governed automation — in weeks, not quarters."
        />

        <div className="relative mt-20">
          <div className="absolute left-[22px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-electric-500/60 via-violet-500/40 to-transparent md:block" />
          <div className="flex flex-col gap-10 md:gap-14">
            {timeline.map((step, i) => (
              <Reveal key={step.stage} delay={i * 0.06}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:items-start">
                  <div className="flex items-center gap-4 md:flex-col md:items-center">
                    <motion.div
                      whileInView={{ scale: [0.6, 1.08, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                      className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-midnight-900 text-[13px] font-semibold text-electric-400 shadow-glow"
                    >
                      0{i + 1}
                    </motion.div>
                  </div>
                  <div className="glass-card card-hover p-7 md:p-8">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-electric-400">
                      {step.stage}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-faint">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
