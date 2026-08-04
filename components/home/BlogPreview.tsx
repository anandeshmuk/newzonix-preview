import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ArrowRightIcon, ClockIcon } from "../icons/Icons";
import { BlogThumb } from "../illustrations/BlogThumb";

export function BlogPreview() {
  return (
    <section className="section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="From the blog"
            title="Ideas on running an AI-operated business"
          />
          <Reveal delay={0.1}>
            <Link
              href="/blog"
              className="group flex shrink-0 items-center gap-2 text-[14.5px] font-medium text-electric-400"
            >
              View all articles
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="glass-card card-hover flex h-full flex-col p-7">
                  <BlogThumb className="mb-5 flex h-36 items-center justify-center overflow-hidden rounded-2xl bg-gradient-brand-soft" />
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-electric-400">
                    {post.category}
                  </span>
                  <h3 className="mt-3 font-display text-[17px] font-semibold leading-snug text-white transition-colors group-hover:text-electric-300">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-faint">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 border-t border-white/[0.08] pt-4 text-[13px] text-ink-faint">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1.5">
                      <ClockIcon className="h-3.5 w-3.5" /> {post.readTime}
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
