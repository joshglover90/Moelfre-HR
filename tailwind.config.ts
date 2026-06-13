import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#102a43",
          950: "#0a1929",
        },
        ocean: {
          50: "#eff8ff",
          100: "#dbeffe",
          200: "#bfe3fe",
          300: "#93d0fd",
          400: "#60b4fa",
          500: "#3b93f6",
          600: "#2575eb",
          700: "#1d5fd8",
          800: "#1e4caf",
          900: "#1e428a",
          950: "#162954",
        },
        sand: {
          50: "#faf8f4",
          100: "#f5f0e8",
          200: "#ebe0d0",
          300: "#ddc9b0",
          400: "#ccad8c",
          500: "#be9470",
          600: "#b07d5c",
          700: "#93654d",
          800: "#785344",
          900: "#62453a",
        },
        coastal: {
          50: "#f0faf4",
          100: "#dcf4e6",
          200: "#bbe8ce",
          300: "#8dd5af",
          400: "#58bc8a",
          500: "#35a06c",
          600: "#268257",
          700: "#1f6847",
          800: "#1c5239",
          900: "#194430",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
