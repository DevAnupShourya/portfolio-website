import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // v1
      // colors: {
      //   'text-primary': '#ffffff',
      //   'text-secondary': '#828794',
      //   'bg-primary': '#080808',
      //   'bg-secondary': '#0f0f0f',
      //   'bg-highlight': '#212121',
      //   'accent': '#ff3c00',
      //   'highlight': '#c8f500',
      //   'divider': '#222222',
      // }
      // v2
      colors: {
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-highlight': 'var(--bg-highlight)',
        'accent': 'var(--accent)',
        'highlight': 'var(--highlight)',
        'divider': 'var(--divider)',
      }
    },
  },
  plugins: [],
};
export default config;
