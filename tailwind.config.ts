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
        ink: "#0f1b2d",
        sky: {
          50: "#f3f9ff",
          100: "#e3f1fd",
          200: "#c6e3fb",
          300: "#9dcff7",
          500: "#3b9be6",
          700: "#1d5f99",
        },
      },
      keyframes: {
        wave: {
          "0%, 60%, 100%": { transform: "rotate(0deg)" },
          "10%, 30%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        wave: "wave 2.5s ease-in-out 0.5s 2",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
