import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#ffffff',
        'text-secondary': '#828794',
        'bg-primary': '#080808',
        'bg-secondary': '#0f0f0f',
        'bg-highlight': '#212121',
        'accent': '#ff3c00',
        'highlight': '#c8f500',
      }
    },
  },
  plugins: [],
};
export default config;
