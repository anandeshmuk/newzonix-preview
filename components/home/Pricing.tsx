"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { pricingPlans } from "@/lib/data";
import { CheckIcon } from "../icons/Icons";
import { SectionHeading } from "../ui/SectionHeading";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { RevealGroup, revealItem } from "../ui/Reveal";

export function Pricing() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that scale with your operations"
          description="Start free for 14 days. Upgrade as your automated workflows grow — no surprise usage fees."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={revealItem}
              className={clsx(
                "relative flex flex-col rounded-3xl border p-8 transition-all duration-500",
                plan.highlighted
                  ? "border-electric-500/40 bg-gradient-to-b from-electric-500/[0.08] to-violet-500/[0.04] shadow-glow lg:-translate-y-4"
                  : "border-white/[0.08] bg-white/[0.03] card-hover backdrop-blur-xl"
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1 text-[12px] font-semibold text-white shadow-glow">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-[14.5px] text-ink-faint">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-[15px] text-ink-faint">{plan.period}</span>
              </div>

              <Button
                href="/contact"
                variant={plan.highlighted ? "gradient" : "ghost"}
                className="mt-7 w-full"
              >
                {plan.cta}
              </Button>

              <ul className="mt-8 flex flex-col gap-3.5 border-t border-white/[0.08] pt-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14.5px] text-ink-soft">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
