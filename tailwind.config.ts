import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#1a0b2e"
        },
        neon: {
          pink: "#ff3ea5",
          purple: "#8b5cf6",
          blue: "#3b82f6",
          cyan: "#22d3ee"
        },
        canvas: {
          DEFAULT: "#0a0414",
          soft: "#120726",
          surface: "#1a0b2e"
        }
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #1a0b2e 0%, #4c1d95 40%, #7c3aed 70%, #ff3ea5 100%)",
        "brand-gradient":
          "linear-gradient(90deg, #8b5cf6 0%, #ff3ea5 50%, #3b82f6 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(139, 92, 246, 0.12) 0%, rgba(255, 62, 165, 0.08) 100%)",
        "glow-gradient":
          "radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.35) 0%, transparent 55%), radial-gradient(circle at 75% 70%, rgba(255, 62, 165, 0.25) 0%, transparent 55%)"
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Pretendard",
          "sans-serif"
        ],
        display: ["var(--font-display)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(139, 92, 246, 0.55)",
        "glow-pink": "0 0 40px -10px rgba(255, 62, 165, 0.65)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
