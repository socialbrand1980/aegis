import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        aegis: {
          bg: "#0A1128",
          panel: "#1C2D5A",
          accent: "#2E4EFF",
          glow: "#3B82F6"
        }
      },
      boxShadow: {
        glass: "0 10px 40px -18px rgba(59,130,246,0.55)",
        glow: "0 0 22px rgba(59,130,246,0.4)"
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-in": "fade-in 700ms ease-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
