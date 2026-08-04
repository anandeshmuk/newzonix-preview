"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Container } from "../ui/Container";
import { RevealGroup, revealItem } from "../ui/Reveal";

const pains = [
  {
    before: "Five tools, five sources of truth",
    after: "One governed data core",
    detail:
      "Your CRM says one thing, your billing tool says another, and reconciling them is someone's whole Tuesday.",
  },
  {
    before: "Growth means hiring ops headcount",
    after: "Growth means agents scale with volume",
    detail:
      "Every new customer, invoice, and ticket currently needs a human to move it to the next step by hand.",
  },
  {
    before: "Automation nobody trusts",
    after: "Automation with an audit trail",
    detail:
      "The scripts you've duct-taped together run in the dark — nobody can explain what they did or why.",
  },
];

export function Problem() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title="Most businesses run on tools that don't talk to each other"
          description="Operations teams spend more time reconciling systems than running the business. NEWZONIX replaces the patchwork with one governed layer."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pains.map((pain) => (
            <motion.div key={pain.before} variants={revealItem} className="glass-card card-hover p-8">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-white/25" />
                <p className="text-[14.5px] font-medium text-ink-faint line-through decoration-white/25">
                  {pain.before}
                </p>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_#00C48C]" />
                <p className="font-display text-[16px] font-semibold text-white">{pain.after}</p>
              </div>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-faint">{pain.detail}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
