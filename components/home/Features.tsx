"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/data";
import { iconMap } from "../icons/Icons";
import { RevealGroup, revealItem } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Container } from "../ui/Container";
import { MouseGlow } from "./MouseGlow";

export function Features() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="The solution"
          title="Everything your business needs to run itself"
          description="One governed layer connects your data, your workflows, and your team — so automation is powerful without being a black box."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div key={feature.title} variants={revealItem} className="group">
                <MouseGlow className="glass-card card-hover relative h-full overflow-hidden p-8">
                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand-soft text-electric-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-faint">
                      {feature.description}
                    </p>
                  </div>
                </MouseGlow>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
