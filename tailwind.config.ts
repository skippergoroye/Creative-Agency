import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
        quicksand: ['var(--font-quicksand)'],
      },
      colors: {
        "primary": "#377DFF",
        "dark": "#1D1D1D",
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
      }
    },
  },
  plugins: [],
};
export default config;
