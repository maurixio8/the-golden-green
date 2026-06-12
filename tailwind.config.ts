import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#060906",
        surface: "#0a0e0a",
        brand: "#7ab52d",
        golden: "#ffc107",
        mist: "#e5e7eb",
        muted: "#9ca3af",
        line: "#1f2937",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      boxShadow: {
        glow: "0 0 32px rgba(255, 193, 7, 0.24)",
        green: "0 20px 70px rgba(122, 181, 45, 0.14)",
      },
      backgroundImage: {
        "premium-radial":
          "radial-gradient(circle at top right, rgba(122,181,45,0.18), transparent 34%), radial-gradient(circle at bottom left, rgba(255,193,7,0.09), transparent 32%)",
      },
    },
  },
  plugins: [],
};

export default config;
