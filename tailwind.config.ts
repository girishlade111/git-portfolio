import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1a1a1a",
        foreground: "#FFFFFF",
        accent: "#FFFFFF",
        "accent-light": "#e8e8e8",
        "accent-dark": "#b0b0b0",
        muted: "#777777",
        "neu-highlight": "rgba(255,255,255,0.06)",
        "neu-shadow": "rgba(0,0,0,0.4)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
