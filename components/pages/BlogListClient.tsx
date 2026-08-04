"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealItem, Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/home/CTA";
import { blogPosts } from "@/lib/data";
import { ArrowRightIcon, ClockIcon } from "@/components/icons/Icons";
import { BlogThumb } from "@/components/illustrations/BlogThumb";

export function BlogListClient() {
  const [featured, ...rest] = blogPosts;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Ideas on running an AI-operated business"
        description="Notes from our team on governed automation, launching faster, and building operations that scale without adding headcount."
      />

      <section className="section pt-0">
        <Container>
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <article className="glass-card card-hover grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:items-center md:p-12">
                <BlogThumb className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-brand-soft" />
                <div>
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-electric-400">
                    {featured.category} · Featured
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-white transition-colors group-hover:text-electric-300 md:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-ink-faint">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center gap-4 text-[13.5px] text-ink-faint">
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1.5">
                      <ClockIcon className="h-3.5 w-3.5" /> {featured.readTime}
                    </span>
                  </div>
                  <span className="mt-6 flex items-center gap-2 text-[14.5px] font-medium text-electric-400">
                    Read article
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Link>
          </Reveal>

          <RevealGroup className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {rest.map((post) => (
              <motion.div key={post.slug} variants={revealItem}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="glass-card card-hover flex h-full flex-col p-8">
                    <span className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-electric-400">
                      {post.category}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-white transition-colors group-hover:text-electric-300">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-faint">{post.excerpt}</p>
                    <div className="mt-6 flex items-center gap-4 border-t border-white/[0.08] pt-4 text-[13px] text-ink-faint">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1.5">
                        <ClockIcon className="h-3.5 w-3.5" /> {post.readTime}
                      </span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CTA />
    </>
  );
}
