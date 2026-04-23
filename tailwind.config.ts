import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // 단일 브랜드 컬러 — 옐로우 (warm yellow)
        brand: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#facc15", // main — hero / CTA 배경
          600: "#eab308",
          700: "#ca8a04",
          800: "#a16207",
          900: "#713f12"
        },
        ink: {
          50: "#f7f8f9",
          100: "#eef0f3",
          200: "#dde1e7",
          300: "#b9c0ca",
          400: "#858d9a",
          500: "#5a6370",
          600: "#3d4552",
          700: "#272d38",
          800: "#171c25",
          900: "#0b1019"
        },
        canvas: {
          DEFAULT: "#ffffff",
          soft: "#fafaf7",
          band: "#fff8e1"
        }
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Pretendard",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif"
        ],
        display: [
          "var(--font-display)",
          "Pretendard",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 16, 25, 0.04), 0 4px 12px rgba(11, 16, 25, 0.06)",
        hover: "0 2px 4px rgba(11, 16, 25, 0.06), 0 10px 30px rgba(250, 204, 21, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
