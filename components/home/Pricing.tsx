"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { pricingPlans } from "@/lib/data";
import {
  CurrencyCode,
  SUPPORTED_CURRENCY_CODES,
  convertFromINR,
  detectLikelyCurrency,
  formatCurrency,
} from "@/lib/currency";
import { CheckIcon } from "../icons/Icons";
import { SectionHeading } from "../ui/SectionHeading";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { RevealGroup, revealItem } from "../ui/Reveal";

// Client-only preference, never sent anywhere - purely which currency
// this visitor's browser last chose to VIEW prices in (see lib/currency.ts).
const CURRENCY_STORAGE_KEY = "newzonix_display_currency";

export function Pricing() {
  // Starts at "INR" (the canonical, always-correct default) and is only
  // ever updated client-side after mount, so the first paint never
  // depends on anything unavailable during server rendering.
  const [currency, setCurrency] = useState<CurrencyCode>("INR");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CURRENCY_STORAGE_KEY) as CurrencyCode | null;
      if (stored && SUPPORTED_CURRENCY_CODES.includes(stored)) {
        setCurrency(stored);
        return;
      }
    } catch {
      // localStorage unavailable (private browsing, etc.) - detect instead.
    }
    setCurrency(detectLikelyCurrency());
  }, []);

  function handleCurrencyChange(next: CurrencyCode) {
    setCurrency(next);
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, next);
    } catch {
      // Best-effort only - a failed write must never break the selector.
    }
  }

  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that scale with your operations"
          description="Simple, transparent pricing - choose the plan that fits how you work, or try the 7-Day Offer first."
        />

        <div className="mt-8 flex flex-col items-center gap-2">
          <label className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[13px] text-ink-faint">
            Display prices in
            <select
              value={currency}
              onChange={(e) => handleCurrencyChange(e.target.value as CurrencyCode)}
              className="rounded-md bg-transparent text-[13px] font-medium text-white focus:outline-none"
            >
              {SUPPORTED_CURRENCY_CODES.map((code) => (
                <option key={code} value={code} className="bg-midnight-800 text-white">
                  {code}
                </option>
              ))}
            </select>
          </label>
          {currency !== "INR" && (
            <p className="max-w-md text-center text-[12px] text-ink-faint">
              Prices are billed in INR via Razorpay. The amount shown in {currency} is an
              approximate conversion for reference only.
            </p>
          )}
        </div>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const convertedAmount =
              currency !== "INR" ? convertFromINR(plan.priceINR, currency) : null;

            return (
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
                  <span className="font-display text-4xl font-bold text-white">
                    {formatCurrency(plan.priceINR, "INR")}
                  </span>
                  <span className="text-[15px] text-ink-faint">{plan.period}</span>
                </div>
                {convertedAmount !== null && (
                  <p className="mt-1 text-[13px] text-ink-faint">
                    &#8776; {formatCurrency(convertedAmount, currency)}
                  </p>
                )}

                <Button
                  href="https://app.newzonix.com/signup"
                  variant={plan.highlighted ? "gradient" : "ghost"}
                  className="mt-7 w-full"
                >
                  {plan.cta}
                </Button>

                {plan.features.length > 0 && (
                  <ul className="mt-8 flex flex-col gap-3.5 border-t border-white/[0.08] pt-7">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[14.5px] text-ink-soft">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
