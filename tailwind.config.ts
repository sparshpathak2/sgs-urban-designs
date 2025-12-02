import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
      libre: ["var(--font-libre)", "serif"],
    },
    },
  },
  plugins: [],
};
export default config;
