"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MailIcon, PinIcon, ClockIcon, CheckIcon } from "@/components/icons/Icons";

const reasons = [
  "General inquiry",
  "Start a free trial",
  "Enterprise / sales",
  "Partnerships",
  "Press",
];

export function ContactClient() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!message) nextErrors.message = "Tell us a little about what you need.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 1100);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your operations"
        description="Tell us what you're trying to automate. Our team typically responds within one business day."
      />

      <section className="section pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <div className="flex flex-col gap-6">
                <div className="glass-card p-8">
                  <h3 className="font-display text-lg font-semibold text-white">Get in touch</h3>
                  <div className="mt-6 flex flex-col gap-5">
                    <a href="mailto:hello@newzonix.com" className="flex items-start gap-3 text-[14.5px] text-ink-soft transition-colors hover:text-white">
                      <MailIcon className="mt-0.5 h-5 w-5 text-electric-400" />
                      <span>
                        <span className="block font-medium text-white">Email</span>
                        hello@newzonix.com
                      </span>
                    </a>
                    <div className="flex items-start gap-3 text-[14.5px] text-ink-soft">
                      <PinIcon className="mt-0.5 h-5 w-5 text-electric-400" />
                      <span>
                        <span className="block font-medium text-white">Office</span>
                        San Francisco, CA · Remote-first team
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-[14.5px] text-ink-soft">
                      <ClockIcon className="mt-0.5 h-5 w-5 text-electric-400" />
                      <span>
                        <span className="block font-medium text-white">Response time</span>
                        Within 1 business day
                      </span>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-8">
                  <h3 className="font-display text-[15px] font-semibold text-white">Looking for support instead?</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-faint">
                    Existing customers get priority routing through the in-app
                    help center for the fastest response.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-card p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {status === "sent" ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="status"
                      aria-live="polite"
                      className="flex min-h-[360px] flex-col items-center justify-center text-center"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                        <CheckIcon className="h-7 w-7" />
                      </div>
                      <h3 className="mt-6 font-display text-xl font-semibold text-white">Message sent</h3>
                      <p className="mt-2 max-w-sm text-[14.5px] leading-relaxed text-ink-faint">
                        Thanks for reaching out. A member of our team will
                        reply to your email within one business day.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      noValidate
                      aria-busy={status === "submitting"}
                      className="flex flex-col gap-5"
                    >
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Field label="Full name" name="name" error={errors.name} placeholder="Jordan Lee" />
                        <Field label="Work email" name="email" type="email" error={errors.email} placeholder="jordan@company.com" />
                      </div>
                      <Field label="Company" name="company" placeholder="Company, Inc." />

                      <div>
                        <label htmlFor="reason" className="mb-2 block text-[13.5px] font-medium text-ink-soft">
                          Reason for contact
                        </label>
                        <select
                          id="reason"
                          name="reason"
                          defaultValue={reasons[0]}
                          className="w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-[14.5px] text-white outline-none transition-colors focus:border-electric-500"
                        >
                          {reasons.map((r) => (
                            <option key={r} value={r} className="bg-midnight-900">
                              {r}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block text-[13.5px] font-medium text-ink-soft">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Tell us about your operations and what you'd like to automate..."
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? "message-error" : undefined}
                          className="w-full resize-none rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-[14.5px] text-white outline-none transition-colors placeholder:text-ink-faint focus:border-electric-500"
                        />
                        {errors.message && (
                          <p id="message-error" role="alert" className="mt-1.5 text-[13px] text-red-400">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <button type="submit" disabled={status === "submitting"} className="btn-gradient mt-2 w-full disabled:opacity-70">
                        {status === "submitting" ? "Sending..." : "Send message"}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  placeholder?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label className="mb-2 block text-[13.5px] font-medium text-ink-soft" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-[14.5px] text-white outline-none transition-colors placeholder:text-ink-faint focus:border-electric-500"
      />
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-[13px] text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
