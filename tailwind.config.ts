import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			screens: {
        xs: '400px',
				lg: '1025px',
      },
  		colors: {
  			'neutral-900': 'var(--neutral-900)',
  			'neutral-600': 'var(--neutral-600)',
  			'neutral-500': 'var(--neutral-500)',
  			'neutral-300': 'var(--neutral-300)',
  			'neutral-200': 'var(--neutral-200)',
  			'neutral-100': 'var(--neutral-100)',
  			'neutral-0': 'var(--neutral-0)',
  			'brand-default': 'var(--brand-default)',
				'brand-default-1': 'var(--brand-default-1)',
				'brand-default-2': 'var(--brand-default-2)',
  			'brand-hover': 'var(--brand-hover)',
				'brand-hover-1': 'var(--brand-hover-1)',
				'brand-hover-2': 'var(--brand-hover-2)',
  			'brand-light': 'var(--brand-light)',
  			'brand-light2': 'var(--brand-light2)',
  			'green-default': 'var(--green-default)',
  			'green-light': 'var(--green-light)',
  			'red-default': 'var(--red-default)',
  			'red-light': 'var(--red-light)',
  			'special-illustration-bg': 'var(--special-illustration-bg)',
				'special-illustration-bg-1': 'var(--special-illustration-bg-1)',
				'special-illustration-bg-2': 'var(--special-illustration-bg-2)',
  			'special-section-bg': 'var(--special-section-bg)',
				'special-section-bg-1': 'var(--special-section-bg-1)',
				'special-section-bg-2': 'var(--special-section-bg-2)',
  			'special-section-bg-opacity': 'var(--special-section-bg-opacity)',
				'special-section-bg-opacity-1': 'var(--special-section-bg-opacity-1)',
				'special-section-bg-opacity-2': 'var(--special-section-bg-opacity-2)',
  			'special-aerolab': 'var(--special-aerolab)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
