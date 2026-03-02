import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#0F172A",
        accent: "#22D3EE",
        dark: "#020617",
        glow: "#A78BFA",
      },
      fontFamily: {
        hero: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top, #7c3aed33, transparent 70%)",
        "mesh-gradient": "radial-gradient(at 40% 20%, #7c3aed 0px, transparent 50%), radial-gradient(at 80% 0%, #22d3ee33 0px, transparent 50%), radial-gradient(at 0% 50%, #7c3aed33 0px, transparent 50%)",
        "gradient-border": "linear-gradient(135deg, #7C3AED, #22D3EE, #7C3AED)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.9", filter: "brightness(1.2)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow": "0 0 40px rgba(124, 58, 237, 0.4)",
        "glow-accent": "0 0 40px rgba(34, 211, 238, 0.3)",
        "inner-glow": "inset 0 0 60px rgba(124, 58, 237, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;