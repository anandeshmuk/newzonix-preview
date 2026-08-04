import Link from "next/link";
import { OrbitIcon, MailIcon, PinIcon } from "../icons/Icons";
import { Container } from "../ui/Container";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Solutions", href: "/solutions" },
      { label: "Pricing", href: "/pricing" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/contact" },
      { label: "Terms of service", href: "/contact" },
      { label: "Security", href: "/resources" },
      { label: "Data processing", href: "/resources" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-20">
      <Container>
        <div className="grid grid-cols-2 gap-12 pb-16 md:grid-cols-6">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-violet-500">
                <OrbitIcon className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                NEWZONIX
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ink-faint">
              The AI business platform for launching, automating, and scaling
              operations — with the controls enterprises require.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-[14px] text-ink-faint">
              <a href="mailto:hello@newzonix.com" className="flex items-center gap-2 transition-colors hover:text-white">
                <MailIcon className="h-4 w-4" /> hello@newzonix.com
              </a>
              <span className="flex items-center gap-2">
                <PinIcon className="h-4 w-4" /> San Francisco · Remote-first
              </span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="col-span-1 md:col-span-1">
              <h4 className="font-display text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-5 flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14.5px] text-ink-faint transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-8 text-[13.5px] text-ink-faint md:flex-row">
          <p>© {new Date().getFullYear()} NEWZONIX, Inc. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#00C48C]" />
            All systems operational
          </p>
        </div>
      </Container>
    </footer>
  );
}
