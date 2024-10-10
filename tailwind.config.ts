import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '370px',
        lg: '1025px',
      },
      colors: {
        'neutral-900': 'hsl(var(--neutral-900))',
        'neutral-600': 'hsl(var(--neutral-600))',
        'neutral-500': 'hsl(var(--neutral-500))',
        'neutral-300': 'hsl(var(--neutral-300))',
        'neutral-200': 'hsl(var(--neutral-200))',
        'neutral-100': 'hsl(var(--neutral-100))',
        'neutral-0': 'hsl(var(--neutral-0))',

        'brand-default-1': 'hsl(var(--brand-default-1))',
        'brand-default-2': 'hsl(var(--brand-default-2))',

        'brand-hover-1': 'hsl(var(--brand-hover-1))',
        'brand-hover-2': 'hsl(var(--brand-hover-2))',

        'brand-light': 'hsl(var(--brand-light))',
        'brand-light-2': 'hsl(var(--brand-light2))',

        'green-default': 'hsl(var(--green-default))',
        'green-light': 'hsl(var(--green-light))',

        'red-default': 'hsl(var(--red-default))',
        'red-light': 'hsl(var(--red-light))',

        'special-illustration-bg-1': 'hsl(var(--special-illustration-bg-1))',
        'special-illustration-bg-2': 'hsl(var(--special-illustration-bg-2))',

        'special-section-bg-opacity50-1':
          'hsl(var(--special-section-bg-opacity50-1))',
        'special-section-bg-opacity50-2':
          'hsl(var(--special-section-bg-opacity50-2))',

        'special-aerolab-1': 'hsl(var(--special-aerolab-1))',
        'special-aerolab-2': 'hsl(var(--special-aerolab-2))',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'hsl(var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), ],
};
export default config;
