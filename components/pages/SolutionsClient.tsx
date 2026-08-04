"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/home/CTA";
import { solutions } from "@/lib/data";
import { iconMap, CheckIcon } from "@/components/icons/Icons";

export function SolutionsClient() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Built for how your team actually operates"
        description="Whether you're launching your first product or governing automation across a regulated enterprise, NEWZONIX adapts to how your business runs."
      >
        <Button href="/contact" variant="primary" arrow>
          Talk to sales
        </Button>
        <Button href="/pricing" variant="ghost">
          View pricing
        </Button>
      </PageHero>

      <section className="section pt-0">
        <Container>
          <div className="flex flex-col gap-6">
            {solutions.map((solution, i) => {
              const Icon = iconMap[solution.icon as keyof typeof iconMap];
              const reversed = i % 2 === 1;
              return (
                <Reveal key={solution.name} delay={i * 0.05}>
                  <div className="glass-card card-hover grid grid-cols-1 gap-10 p-8 md:grid-cols-2 md:items-center md:p-12">
                    <div className={reversed ? "md:order-2" : ""}>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand-soft text-electric-400">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="mt-6 font-display text-2xl font-semibold text-white">
                        {solution.name}
                      </h2>
                      <p className="mt-2 text-[15.5px] font-medium text-electric-400">
                        {solution.tagline}
                      </p>
                      <p className="mt-4 text-[15px] leading-relaxed text-ink-faint">
                        {solution.description}
                      </p>
                      <ul className="mt-6 flex flex-col gap-3">
                        {solution.points.map((point) => (
                          <li key={point} className="flex items-center gap-2.5 text-[14.5px] text-ink-soft">
                            <CheckIcon className="h-4 w-4 shrink-0 text-emerald-500" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={reversed ? "md:order-1" : ""}>
                      <SolutionGraphic seed={i} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

function SolutionGraphic({ seed }: { seed: number }) {
  const colors = ["#4F8CFF", "#7C4DFF", "#00C48C", "#4F8CFF"];
  const color = colors[seed % colors.length];
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-white/[0.08] bg-white/[0.02]">
      <svg viewBox="0 0 300 220" className="h-3/4 w-3/4">
        <rect x="20" y="20" width="260" height="180" rx="16" fill="none" stroke="rgba(255,255,255,0.1)" />
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.rect
            key={i}
            x={40 + i * 58}
            y={140 - i * 18}
            width="42"
            height={40 + i * 18}
            rx="8"
            fill={color}
            opacity={0.15 + i * 0.15}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "bottom" }}
          />
        ))}
        <circle cx="240" cy="60" r="20" fill="none" stroke={color} strokeWidth="2" opacity="0.6" />
        <circle cx="240" cy="60" r="5" fill={color} />
      </svg>
    </div>
  );
}
