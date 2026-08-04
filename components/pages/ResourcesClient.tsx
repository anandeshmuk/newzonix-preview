"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem, Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/home/CTA";
import { resources } from "@/lib/data";
import { iconMap, ArrowRightIcon } from "@/components/icons/Icons";

export function ResourcesClient() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Everything you need to build with NEWZONIX"
        description="Documentation, integration guides, security reports, and playbooks for teams putting automation into production."
      />

      <section className="section pt-0">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => {
              const Icon = iconMap[resource.icon as keyof typeof iconMap];
              return (
                <motion.div key={resource.title} variants={revealItem}>
                  <Link href={resource.href} className="group block h-full">
                    <div className="glass-card card-hover flex h-full flex-col p-8">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand-soft text-electric-400">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 font-display text-lg font-semibold text-white">
                        {resource.title}
                      </h3>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-faint">
                        {resource.description}
                      </p>
                      <span className="mt-6 flex items-center gap-2 text-[14px] font-medium text-electric-400">
                        Explore
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Reveal>
            <div className="glass-card grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:p-14">
              <div>
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-glow" />
                  Trust center
                </span>
                <h2 className="mt-6 font-display text-2xl font-semibold text-white md:text-3xl">
                  Security and compliance, transparently documented
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  Access our SOC 2 Type II report, data processing agreement,
                  and architecture overview directly — no sales call required
                  to start your review.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4">
                {["SOC 2 Type II report", "ISO 27001 certification", "Data processing agreement", "Sub-processor list"].map(
                  (doc) => (
                    <a
                      key={doc}
                      href="#"
                      className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 text-[14.5px] text-ink-soft transition-colors hover:border-white/20 hover:text-white"
                    >
                      {doc}
                      <ArrowRightIcon className="h-4 w-4" />
                    </a>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTA />
    </>
  );
}
