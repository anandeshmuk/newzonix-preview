export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grad-app" />
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
      <div className="absolute left-0 top-0 h-full w-full grid-fade" />

      {/* Aurora blobs */}
      <div
        className="absolute -left-[10%] -top-[10%] h-[560px] w-[560px] rounded-full opacity-40 blur-[120px] animate-float-slow"
        style={{ background: "radial-gradient(circle, #4F8CFF 0%, transparent 70%)" }}
      />
      <div
        className="absolute -right-[15%] top-[8%] h-[620px] w-[620px] rounded-full opacity-30 blur-[130px] animate-float-slow"
        style={{ background: "radial-gradient(circle, #7C4DFF 0%, transparent 70%)", animationDelay: "-4s" }}
      />
      <div
        className="absolute bottom-[-15%] left-[20%] h-[480px] w-[480px] rounded-full opacity-20 blur-[110px] animate-float-slow"
        style={{ background: "radial-gradient(circle, #00C48C 0%, transparent 70%)", animationDelay: "-8s" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight-950" />
    </div>
  );
}
