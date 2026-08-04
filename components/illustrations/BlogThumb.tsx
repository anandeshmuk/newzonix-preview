/**
 * Shared decorative blog-post thumbnail — an abstract line-chart mark on a
 * soft brand-gradient tile. Used across the blog preview, blog index, and
 * article page so every article reads as part of the same visual system
 * without needing individually sourced photography.
 */
export function BlogThumb({ className }: { className?: string }) {
  return (
    <div className={className ?? "flex aspect-[16/10] items-center justify-center rounded-2xl bg-gradient-brand-soft"}>
      <svg viewBox="0 0 160 100" className="h-3/5 w-3/5 opacity-80" role="presentation" aria-hidden="true">
        <rect x="6" y="6" width="148" height="88" rx="14" fill="none" stroke="#4F8CFF" strokeWidth="1.5" />
        <circle cx="42" cy="52" r="14" fill="#4F8CFF" opacity="0.45" />
        <path d="M64 62 88 38 110 58 138 40" stroke="#7C4DFF" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
