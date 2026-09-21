"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { ParticleField } from "./ParticleField";

export function CTA() {
  return (
    <section className="section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-4xl border border-white/10 px-8 py-20 text-center md:px-16"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 0%, rgba(79,140,255,0.18) 0%, rgba(124,77,255,0.12) 45%, rgba(11,16,32,0) 100%)",
          }}
        >
          <ParticleField count={16} />
          <div className="relative z-10">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-glow" />
              Ready when you are
            </span>
            <h2 className="mx-auto mt-7 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Put your operations on autopilot — without losing control
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
              Start with the 7-Day Offer for ₹49, or talk to our team about a
              guided enterprise pilot built around your stack.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="https://app.newzonix.com/signup" variant="primary" arrow>
                Start Here
              </Button>
              <Button href="/contact" variant="ghost">
                Talk to sales
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
