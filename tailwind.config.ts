import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-900': "var(--neutral-900)",
        'neutral-600': "var(--neutral-600)",
        'neutral-500': "var(--neutral-500)",
        'neutral-300': "var(--neutral-300)",
        'neutral-200': "var(--neutral-200)",
        'neutral-100': "var(--neutral-100)",
        'neutral-0': "var(--neutral-0)",

        'brand-default': "var(--brand-default)",
        'brand-hover': "var(--brand-hover)",
        'brand-light': "var(--brand-light)",
        'brand-light2': "var(--brand-light2)",

        'green-default': "var(--green-default)",
        'green-light': "var(--green-light)",

        'red-default': "var(--red-default)",
        'red-light': "var(--red-light)",

        'special-illustration-bg': "var(--special-illustration-bg)",
        'special-section-bg': "var(--special-section-bg)",
        'special-section-bg-opacity': "var(--special-section-bg-opacity)",
        'special-aerolab': "var(--special-aerolab)",
        
      },
    },
  },
  plugins: [],
};
export default config;
