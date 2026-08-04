import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { ArrowRightIcon } from "../icons/Icons";

type Variant = "primary" | "gradient" | "ghost";

export function Button({
  href,
  children,
  variant = "gradient",
  arrow = false,
  className,
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = clsx(
    variant === "primary" && "btn-primary",
    variant === "gradient" && "btn-gradient",
    variant === "ghost" && "btn-ghost",
    "group",
    className
  );

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
