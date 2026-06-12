import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E0E0E",
        surface: "#1A1A1A",
        forest: "#1F3D1F",
        brand: "#5A6B2F",
        golden: "#C8A33A",
        "gold-light": "#D4B84C",
        mist: "#FFFFFF",
        muted: "#B0B0B0",
        "muted-dark": "#707070",
        line: "#2A2A2A",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 32px rgba(200, 163, 58, 0.24)",
        green: "0 20px 70px rgba(90, 107, 47, 0.14)",
      },
      backgroundImage: {
        "premium-radial":
          "radial-gradient(circle at top right, rgba(90,107,47,0.18), transparent 34%), radial-gradient(circle at bottom left, rgba(200,163,58,0.09), transparent 32%)",
      },
    },
  },
  plugins: [],
};

export default config;
