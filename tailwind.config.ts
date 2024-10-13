import fluid, { extract, screens, fontSize } from 'fluid-tailwind';
import { transform } from 'next/dist/build/swc';

/** @type {import('fluid-tailwind').FluidThemeConfig} */
module.exports = {
  darkMode: ['class'],
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    extend: {
      screens: {
        xs: '370px',
        lg: '1025px',
        xxl: '1490px',
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
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        'zoom-in': {
          from: { opacity: 0, transform: 'scale(0.5)' },
          to: { transform: 'scale(1)' },
        },
        'floating-1': {
          '0%, 100%': {
            transform: 'translateY(1%)',
          },
          '50%': {
            transform: 'translateY(-1%)',
          },
        },
        'floating-2': {
          '0%, 100%': {
            transform: 'translateY(-0.5%)',
          },
          '50%': {
            transform: 'translateY(1%)',
          },
        },
        'floating-3': {
          '0%, 100%': {
            transform: 'translateY(0.5%)',
          },
          '50%': {
            transform: 'translateY(-1%)',
          },
        },
        'floating-4': {
          '0%, 100%': {
            transform: 'translateY(-1%)',
          },
          '50%': {
            transform: 'translateY(1%)',
          },
        },
      },
      animation: {
        fade: 'fade 1s ease-out',
        'zoom-in': 'zoom-in 0.5s ease-out',
        'floating-1': 'floating-1 3s ease-in-out infinite',
        'floating-2': 'floating-2 2.5s ease-in-out infinite',
        'floating-3': 'floating-3 2.5s ease-in-out infinite',
        'floating-4': 'floating-4 4s ease-in-out infinite',
      },
    },
    screens,
    fontSize,
  },
  plugins: [require('tailwindcss-animate'), fluid],
};
