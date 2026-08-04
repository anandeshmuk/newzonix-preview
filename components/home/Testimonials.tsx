"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { StarIcon } from "../icons/Icons";
import { SectionHeading } from "../ui/SectionHeading";
import { Container } from "../ui/Container";
import { RevealGroup, revealItem } from "../ui/Reveal";
import { Avatar } from "../ui/Avatar";

export function Testimonials() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Customer stories"
          title="Operations teams that stopped babysitting their tools"
          description="Founders and operators run their businesses on NEWZONIX so their teams can focus on the work that actually needs a human."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={revealItem}
              className="glass-card card-hover flex flex-col justify-between p-8"
            >
              <div>
                <div className="flex gap-1 text-electric-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-5 text-[16.5px] leading-relaxed text-white/90">
                  “{t.quote}”
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <p className="text-[14.5px] font-semibold text-white">{t.name}</p>
                  <p className="text-[13px] text-ink-faint">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
