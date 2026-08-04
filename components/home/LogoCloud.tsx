import { logos } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";

export function LogoCloud() {
  const doubled = [...logos, ...logos];
  return (
    <section className="relative border-y border-white/[0.06] py-12">
      <Container>
        <Reveal>
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.18em] text-ink-faint">
            Trusted by operations teams at growing companies
          </p>
        </Reveal>
      </Container>
      <div className="mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee gap-16">
          {doubled.map((logo, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-xl font-semibold tracking-tight text-white/25"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
