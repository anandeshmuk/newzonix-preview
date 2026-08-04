import { SVGProps } from "react";

/**
 * NEWZONIX icon language: every glyph is built from the same visual grammar
 * as the brand's orbit motif -- circular nodes joined by connecting strokes --
 * so the icon set reads as one continuous system rather than a stock library.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function OrbitIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9.5" ry="4.2" />
      <ellipse cx="12" cy="12" rx="4.2" ry="9.5" transform="rotate(45 12 12)" />
      <circle cx="20.5" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="8.7" cy="19" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c.6 3.4 1.6 4.4 5 5-3.4.6-4.4 1.6-5 5-.6-3.4-1.6-4.4-5-5 3.4-.6 4.4-1.6 5-5Z" />
      <circle cx="18.5" cy="17.5" r="1.4" />
      <circle cx="5.2" cy="6.2" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.6 20.5 8 12 12.4 3.5 8 12 3.6Z" />
      <path d="M3.5 12.4 12 16.8l8.5-4.4" />
      <path d="M3.5 16.8 12 21.2l8.5-4.4" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 19.5 5.8v5.7c0 4.6-3.1 7.6-7.5 9.1-4.4-1.5-7.5-4.5-7.5-9.1V5.8L12 3Z" />
      <path d="m8.8 12.2 2.2 2.2 4.2-4.4" />
    </svg>
  );
}

export function PulseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M6 12h2.6l1.6-4.4 3 8.8 1.6-4.4H18" />
    </svg>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6" r="1.6" />
      <circle cx="18" cy="6" r="1.6" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="18" cy="18" r="1.6" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <path d="M7.4 7.4 10.6 10.6M16.6 7.4 13.4 10.6M7.4 16.6 10.6 13.4M16.6 16.6 13.4 13.4" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15" />
      <path d="M13.5 6 19.5 12 13.5 18" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="m8 12.3 2.6 2.6 5.4-5.8" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 8.5 12 15.5l6.5-7" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M10.2 8.6 15.6 12l-5.4 3.4V8.6Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} {...props} fill="currentColor" stroke="none">
      <path d="M12 3.4 14.4 9.6 21 10.2l-5 4.3 1.6 6.5L12 17.6 6.4 21l1.6-6.5-5-4.3 6.6-.6L12 3.4Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.2" y="5.5" width="17.6" height="13" rx="2.4" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-6.8-6.1-6.8-11A6.8 6.8 0 1 1 18.8 10c0 4.9-6.8 11-6.8 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M12 7v5.3l3.6 2.1" />
    </svg>
  );
}

export const iconMap = {
  orbit: OrbitIcon,
  spark: SparkIcon,
  layers: LayersIcon,
  shield: ShieldIcon,
  pulse: PulseIcon,
  grid: GridIcon,
};
