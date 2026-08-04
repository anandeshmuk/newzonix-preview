import clsx from "clsx";

/**
 * Shared initials avatar used for testimonials and team bios — keeps the
 * gradient-circle treatment consistent everywhere a person is represented
 * without a photo.
 */
export function Avatar({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const sizes = {
    sm: "h-9 w-9 text-[13px]",
    md: "h-10 w-10 text-[14px]",
    lg: "h-16 w-16 text-[16px]",
  };

  return (
    <div
      className={clsx(
        "flex shrink-0 items-center justify-center rounded-full bg-gradient-brand font-semibold text-white",
        sizes[size]
      )}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
