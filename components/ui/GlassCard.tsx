import { ReactNode } from "react";
import clsx from "clsx";

export function GlassCard({
  children,
  className,
  glow = false,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div className={clsx("glass-card card-hover p-8", glow && "hover:shadow-glow", className)}>
      {children}
    </div>
  );
}
