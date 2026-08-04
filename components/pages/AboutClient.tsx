"use client";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { CTA } from "@/components/home/CTA";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Avatar } from "@/components/ui/Avatar";
import { aboutValues, leadership, companyStats } from "@/lib/data";

export function AboutClient() {
  return (
    <>
      <PageHero
        eyebrow="About NEWZONIX"
        title="We think automation should be trusted, not just fast"
        description="NEWZONIX was founded on a simple belief: AI should run your operations in the open, with the same visibility and control your team already expects from itself."
      />

      <section className="section pt-0">
        <Container>
          <RevealGroup className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {companyStats.map((stat) => (
              <motion.div key={stat.label} variants={revealItem} className="glass-card card-hover px-4 py-9 text-center">
                <span className="font-display text-3xl font-bold text-gradient md:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-2 block text-[13.5px] text-ink-faint">{stat.label}</span>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-electric-500 shadow-glow" />
                Our story
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                Built by operators who were tired of duct-taped tools
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-ink-soft">
                NEWZONIX started in 2021 after our founders spent years
                building internal automation for enterprise operations teams
                — and watched smaller companies get priced out of the same
                capabilities. Every workflow was custom-built, undocumented,
                and impossible to hand off.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
                We set out to build the platform we wished we’d had: one
                place to launch a business, automate the operational grind,
                and scale — without losing sight of what the AI is actually
                doing on your behalf.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-card p-10">
                <svg viewBox="0 0 400 300" className="h-full w-full">
                  <defs>
                    <linearGradient id="aboutGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#4F8CFF" />
                      <stop offset="100%" stopColor="#7C4DFF" />
                    </linearGradient>
                  </defs>
                  <rect x="20" y="30" width="360" height="240" rx="20" fill="none" stroke="rgba(255,255,255,0.1)" />
                  <circle cx="120" cy="90" r="26" fill="url(#aboutGrad)" opacity="0.85" />
                  <circle cx="280" cy="90" r="16" fill="none" stroke="#4F8CFF" strokeWidth="2" />
                  <path d="M120 116 L120 180 Q120 200 150 200 L250 200 Q280 200 280 170 L280 106" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
                  <rect x="130" y="215" width="140" height="34" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
                  <circle cx="150" cy="232" r="4" fill="#00C48C" />
                  <text x="164" y="236" fontSize="11" fill="#AEB6CC" fontFamily="var(--font-inter)">Workflow active</text>
                </svg>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="Principles that shape every product decision"
          />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {aboutValues.map((value, i) => (
              <motion.div key={value.title} variants={revealItem} className="glass-card card-hover p-8">
                <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-electric-400">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-faint">{value.description}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading eyebrow="Leadership" title="The team building NEWZONIX" />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person) => (
              <motion.div key={person.name} variants={revealItem} className="glass-card card-hover p-7 text-center">
                <div className="mx-auto">
                  <Avatar name={person.name} size="lg" />
                </div>
                <h3 className="mt-5 font-display text-[15.5px] font-semibold text-white">
                  {person.name}
                </h3>
                <p className="mt-1 text-[13px] text-electric-400">{person.role}</p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-faint">{person.bio}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CTA />
    </>
  );
}
