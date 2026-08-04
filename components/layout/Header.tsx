"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { nav } from "@/lib/data";
import { Button } from "../ui/Button";
import { MenuIcon, CloseIcon, OrbitIcon } from "../icons/Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container-xl">
        <div
          className={clsx(
            "flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500",
            scrolled
              ? "border-white/10 bg-midnight-950/70 shadow-card backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-violet-500 shadow-glow">
              <OrbitIcon className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              NEWZONIX
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "relative rounded-lg px-4 py-2 text-[14.5px] font-medium transition-colors duration-300",
                    active ? "text-white" : "text-ink-soft hover:text-white"
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-electric-400 to-violet-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="rounded-lg px-4 py-2 text-[14.5px] font-medium text-ink-soft transition-colors hover:text-white"
            >
              Sign in
            </Link>
            <Button href="/contact" variant="gradient" className="!px-5 !py-2.5 !text-[14px]">
              Start free trial
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="container-xl overflow-hidden lg:hidden"
          >
            <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-midnight-950/90 p-4 backdrop-blur-xl">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink-soft transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
                <Link href="/contact" className="rounded-lg px-3 py-2 text-[15px] font-medium text-ink-soft">
                  Sign in
                </Link>
                <Button href="/contact" variant="gradient" className="w-full">
                  Start free trial
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
