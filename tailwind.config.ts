import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: "var(--color-earth-50)",
          100: "var(--color-earth-100)",
          200: "var(--color-earth-200)",
          300: "var(--color-earth-300)",
          500: "var(--color-earth-500)",
          700: "var(--color-earth-700)",
          800: "var(--color-earth-800)",
          900: "var(--color-earth-900)",
        },
        sage: {
          400: "var(--color-sage-400)",
          600: "var(--color-sage-600)",
        },
        cloud: "var(--color-cloud)",
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "1250px",
      },
      transitionTimingFunction: {
        "editorial": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
        "pulse-soft": "pulseSoft 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        kenBurns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.08) translate(-1%, -1%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
