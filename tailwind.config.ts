import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // 단일 브랜드 컬러 — 위버스 물색(aqua/sky)
        brand: {
          50: "#eaf7fb",
          100: "#d0ecf4",
          200: "#a5d9e9",
          300: "#72bfd8",
          400: "#45a3c5",
          500: "#1f86ad",
          600: "#156c91",
          700: "#0f5473",
          800: "#0b3d55",
          900: "#082a3b"
        },
        ink: {
          50: "#f7f9fb",
          100: "#eef2f6",
          200: "#dde4ec",
          300: "#b9c5d2",
          400: "#8596a8",
          500: "#5a6b7d",
          600: "#3d4b5c",
          700: "#273140",
          800: "#172030",
          900: "#0c141f"
        },
        canvas: {
          DEFAULT: "#ffffff",
          soft: "#f5f8fa",
          band: "#eef4f7"
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
        card: "0 1px 2px rgba(12, 20, 31, 0.04), 0 4px 12px rgba(12, 20, 31, 0.06)",
        hover: "0 2px 4px rgba(12, 20, 31, 0.06), 0 10px 30px rgba(31, 134, 173, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
