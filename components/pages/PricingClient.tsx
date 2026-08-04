"use client";

import { PageHero } from "@/components/ui/PageHero";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const comparisons = [
  { label: "Automated workflows", launch: "Up to 3", scale: "Unlimited", enterprise: "Unlimited" },
  { label: "Data workspaces", launch: "1", scale: "Unlimited", enterprise: "Unlimited" },
  { label: "Approval gates & audit trail", launch: "—", scale: "Included", enterprise: "Included" },
  { label: "Live forecasting", launch: "—", scale: "Included", enterprise: "Included" },
  { label: "SSO & SCIM", launch: "—", scale: "—", enterprise: "Included" },
  { label: "Dedicated infrastructure", launch: "—", scale: "—", enterprise: "Included" },
  { label: "Support", launch: "Email", scale: "Priority", enterprise: "Dedicated engineer" },
];

export function PricingClient() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing that scales with your operations"
        description="Every plan includes a 14-day free trial. No hidden usage fees — upgrade only when your team is ready."
      />
      <div className="pt-0">
        <Pricing />
      </div>

      <section className="section pt-0">
        <Container>
          <SectionHeading eyebrow="Compare plans" title="What's included at each level" />
          <Reveal delay={0.1}>
            <div className="mt-14 overflow-x-auto rounded-3xl border border-white/[0.08]">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                    <th className="px-6 py-5 text-[14px] font-medium text-ink-faint">Feature</th>
                    <th className="px-6 py-5 text-[14px] font-semibold text-white">Launch</th>
                    <th className="px-6 py-5 text-[14px] font-semibold text-electric-400">Scale</th>
                    <th className="px-6 py-5 text-[14px] font-semibold text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white/[0.01]" : ""}>
                      <td className="px-6 py-4 text-[14.5px] text-ink-soft">{row.label}</td>
                      <td className="px-6 py-4 text-[14.5px] text-ink-faint">{row.launch}</td>
                      <td className="px-6 py-4 text-[14.5px] font-medium text-white">{row.scale}</td>
                      <td className="px-6 py-4 text-[14.5px] text-ink-faint">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
