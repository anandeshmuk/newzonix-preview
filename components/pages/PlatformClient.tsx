"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/home/CTA";
import { features } from "@/lib/data";
import { iconMap, CheckIcon } from "@/components/icons/Icons";
import { OrbitSystem } from "@/components/illustrations/OrbitSystem";

const pillars = [
  {
    title: "Build",
    heading: "Design workflows the way you already describe your business",
    description:
      "Use the visual builder or plain-language prompts to define triggers, conditions, and actions. Every workflow is versioned and reviewable before it goes live.",
    points: ["Visual workflow builder", "Plain-language configuration", "Version history on every change"],
  },
  {
    title: "Govern",
    heading: "Keep a human in the loop on anything that matters",
    description:
      "Set approval gates on high-impact actions, define who can approve what, and see a complete audit trail of every decision an agent made and why.",
    points: ["Role-based approval gates", "Full audit trail", "One-click rollback"],
  },
  {
    title: "Scale",
    heading: "Let automation absorb growth without adding headcount",
    description:
      "As transaction volume grows, agents scale with it automatically. Live forecasting keeps capacity planning ahead of demand instead of reacting to it.",
    points: ["Auto-scaling execution", "Live capacity forecasting", "Usage-based infrastructure"],
  },
];

const integrations = [
  "Salesforce", "HubSpot", "Stripe", "NetSuite", "Zendesk", "Slack",
  "QuickBooks", "Shopify", "Workday", "Snowflake", "Twilio", "DocuSign",
];

export function PlatformClient() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="One governed layer for how your business actually runs"
        description="NEWZONIX connects your data, defines your workflows, and puts AI agents to work executing them — with visibility and control at every step."
      >
        <Button href="/contact" variant="primary" arrow>
          Start free trial
        </Button>
        <Button href="/pricing" variant="ghost">
          View pricing
        </Button>
      </PageHero>

      <section className="section pt-0">
        <Container>
          <Reveal>
            <div className="glass-card grid grid-cols-1 items-center gap-10 p-8 md:grid-cols-2 md:p-14">
              <div>
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric-500 shadow-glow" />
                  The Orbit architecture
                </span>
                <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-white">
                  A central data core, with every function orbiting it
                </h2>
                <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft">
                  Sales, support, finance, and operations all read and write to
                  the same governed core — so agents acting on your behalf are
                  always working from the same truth your team sees, updated
                  in real time.
                </p>
              </div>
              <div className="mx-auto aspect-square w-full max-w-[420px]">
                <OrbitSystem className="h-full w-full" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Every layer of the platform, working together"
            description="From building your first workflow to governing thousands of automated actions a day."
          />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={feature.title}
                  variants={revealItem}
                  className="glass-card card-hover p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand-soft text-electric-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-faint">{feature.description}</p>
                </motion.div>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading eyebrow="Build, Govern, Scale" title="The lifecycle of an automated workflow" />
          <div className="mt-16 flex flex-col gap-6">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="glass-card card-hover grid grid-cols-1 gap-8 p-8 md:grid-cols-[140px_1fr] md:p-10">
                  <div className="flex md:flex-col md:items-start">
                    <span className="font-display text-2xl font-bold text-gradient-brand">{pillar.title}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{pillar.heading}</h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-faint">
                      {pillar.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2.5">
                      {pillar.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-[14px] text-ink-soft">
                          <CheckIcon className="h-4 w-4 text-emerald-500" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Integrations"
            title="Connect the tools you already run"
            description="Native connectors for the systems operations teams depend on, plus an open API for everything else."
          />
          <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {integrations.map((name) => (
              <motion.div
                key={name}
                variants={revealItem}
                className="glass-card card-hover flex items-center justify-center px-6 py-7 text-center"
              >
                <span className="font-display text-[15px] font-semibold text-white/80">{name}</span>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CTA />
    </>
  );
}
