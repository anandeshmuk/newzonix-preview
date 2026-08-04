"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/home/CTA";
import { ArrowRightIcon, ClockIcon } from "@/components/icons/Icons";
import { ParticleField } from "@/components/home/ParticleField";
import { BlogThumb } from "@/components/illustrations/BlogThumb";

type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export function BlogPostClient({ post, paragraphs, related }: { post: Post; paragraphs: string[]; related: Post[] }) {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-48">
        <ParticleField count={12} />
        <Container>
          <Reveal>
            <Link href="/blog" className="mb-8 flex items-center gap-2 text-[14px] font-medium text-ink-faint transition-colors hover:text-white">
              <span className="rotate-180"><ArrowRightIcon className="h-4 w-4" /></span>
              Back to blog
            </Link>
          </Reveal>
          <div className="mx-auto max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[13px] font-semibold uppercase tracking-[0.14em] text-electric-400"
            >
              {post.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.75rem]"
            >
              {post.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 flex items-center gap-4 text-[13.5px] text-ink-faint"
            >
              <span>{post.date}</span>
              <span className="flex items-center gap-1.5">
                <ClockIcon className="h-3.5 w-3.5" /> {post.readTime}
              </span>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <BlogThumb className="mb-12 flex aspect-[21/9] items-center justify-center rounded-3xl bg-gradient-brand-soft" />
            </Reveal>
            <div className="flex flex-col gap-6">
              {paragraphs.map((para, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <p className="text-[17px] leading-[1.8] text-ink-soft">{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="section pt-0">
          <Container>
            <Reveal>
              <h3 className="font-display text-xl font-semibold text-white">More from the blog</h3>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.06}>
                  <Link href={`/blog/${r.slug}`} className="group block h-full">
                    <article className="glass-card card-hover flex h-full flex-col p-7">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-electric-400">
                        {r.category}
                      </span>
                      <h4 className="mt-2 font-display text-[16px] font-semibold leading-snug text-white transition-colors group-hover:text-electric-300">
                        {r.title}
                      </h4>
                      <p className="mt-2 text-[14px] leading-relaxed text-ink-faint">{r.excerpt}</p>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTA />
    </>
  );
}
