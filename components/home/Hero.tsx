"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { OrbitSystem } from "../illustrations/OrbitSystem";
import { ParticleField } from "./ParticleField";
import { CheckIcon } from "../icons/Icons";

const trustPoints = ["SOC 2 Type II", "99.98% uptime", "7-Day Offer from ₹49"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <ParticleField count={22} />
      <div className="container-xl relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-electric-500 shadow-glow" />
            The AI Business Platform
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 font-display text-[2.75rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-[3.75rem]"
          >
            Launch, automate, and{" "}
            <span className="text-gradient-brand">scale your business</span>{" "}
            with AI that runs it
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            NEWZONIX turns your operations into governed, autonomous
            workflows — from onboarding to billing to forecasting — so your
            business runs itself while your team focuses on what’s next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="https://app.newzonix.com/signup" variant="primary" arrow>
              Start Here
            </Button>
            <Button href="/platform" variant="ghost">
              Explore the platform
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            {trustPoints.map((point) => (
              <span key={point} className="flex items-center gap-2 text-[14px] text-ink-faint">
                <CheckIcon className="h-4 w-4 text-emerald-500" />
                {point}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[560px]"
        >
          <OrbitSystem className="h-full w-full" />
        </motion.div>
      </div>
    </section>
  );
}
