import { Reveal } from "./Reveal";
import clsx from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-500 shadow-glow" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
