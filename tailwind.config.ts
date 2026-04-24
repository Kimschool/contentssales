import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Pink accent — Sorajima 블루 대비 브랜드 시그니처
        brand: {
          50: "#fff0f5",
          100: "#ffdae8",
          200: "#ffb0cf",
          300: "#ff7fb0",
          400: "#ff4d94",
          500: "#ff1f6a",
          600: "#e60e56",
          700: "#b8084a",
          800: "#8e0638",
          900: "#5d0424"
        },
        ink: {
          50: "#f6f6f7",
          100: "#ececed",
          200: "#d9d9dc",
          300: "#b3b4b8",
          400: "#828388",
          500: "#5a5b61",
          600: "#3c3d44",
          700: "#25262c",
          800: "#141518",
          900: "#000000"
        },
        canvas: {
          DEFAULT: "#ffffff",
          soft: "#f6f6f3",
          band: "#ededea"
        }
      },
      fontFamily: {
        sans: ["var(--font-stack)"],
        display: ["var(--font-stack)"]
      },
      letterSpacing: {
        tightest: "-0.04em",
        display: "-0.03em"
      }
    }
  },
  plugins: []
};

export default config;
