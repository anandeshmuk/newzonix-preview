import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#0B1020",
          950: "#050816",
          900: "#0B1020",
          800: "#10172D",
          700: "#161f3d",
          600: "#1c2650",
        },
        electric: {
          DEFAULT: "#4F8CFF",
          50: "#EAF1FF",
          400: "#7BA8FF",
          500: "#4F8CFF",
          600: "#2E6FE0",
        },
        violet: {
          DEFAULT: "#7C4DFF",
          400: "#9D77FF",
          500: "#7C4DFF",
          600: "#6635E8",
        },
        emerald: {
          DEFAULT: "#00C48C",
          400: "#2FE0AA",
          500: "#00C48C",
        },
        ink: {
          DEFAULT: "#FFFFFF",
          soft: "#AEB6CC",
          faint: "#7C87A6",
          line: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grad-app": "linear-gradient(180deg, #050816 0%, #10172D 100%)",
        "grad-glow": "radial-gradient(600px circle at var(--x) var(--y), rgba(79,140,255,0.15), transparent 40%)",
        "grad-brand": "linear-gradient(135deg, #4F8CFF 0%, #7C4DFF 100%)",
        "grad-brand-soft": "linear-gradient(135deg, rgba(79,140,255,0.15) 0%, rgba(124,77,255,0.15) 100%)",
        "noise": "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMDAnIGhlaWdodD0nMjAwJz48ZmlsdGVyIGlkPSduJz48ZmVUdXJidWxlbmNlIHR5cGU9J2ZyYWN0YWxOb2lzZScgYmFzZUZyZXF1ZW5jeT0nMC44JyBudW1PY3RhdmVzPScyJyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsdGVyPSd1cmwoI24pJyBvcGFjaXR5PScwLjAzJy8+PC9zdmc+')",
      },
      boxShadow: {
        glow: "0 0 40px rgba(79,140,255,0.25)",
        "glow-violet": "0 0 40px rgba(124,77,255,0.25)",
        card: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 8px 30px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-20px) translateX(10px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        pulse-glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        "spin-reverse": "spin-reverse 55s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 30s linear infinite",
        "gradient-x": "gradient-x 8s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
