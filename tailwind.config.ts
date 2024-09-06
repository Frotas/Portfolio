import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "bay-of-many": {
          50: "hsl(225, 100%, 96.86%)",
          100: "hsl(224.57, 94.59%, 92.75%)",
          200: "hsl(224.76, 96.92%, 87.25%)",
          300: "hsl(224.72, 96.36%, 78.43%)",
          400: "hsl(224.42, 93.9%, 67.84%)",
          500: "hsl(224.6, 91.22%, 59.8%)",
          600: "hsl(224.55, 83.19%, 53.33%)",
          700: "hsl(224.6, 76.33%, 48.04%)",
          800: "hsl(224.28, 70.73%, 40.2%)",
          900: "hsl(224.44, 64.29%, 32.94%)",
          950: "hsl(224.26, 57.01%, 20.98%)",
        },
        "wild-sand": {
          50: "hsl(220, 14.29%, 95.88%)",
          100: "hsl(225, 12.5%, 93.73%)",
          200: "hsl(213.33, 12.68%, 86.08%)",
          300: "hsl(214.74, 14.29%, 73.92%)",
          400: "hsl(214.29, 13.59%, 59.61%)",
          500: "hsl(214.84, 12.55%, 48.43%)",
          600: "hsl(217.24, 14.43%, 39.41%)",
          700: "hsl(218.18, 13.41%, 32.16%)",
          800: "hsl(216.67, 12.86%, 27.45%)",
          900: "hsl(218.57, 11.48%, 23.92%)",
          950: "hsl(220, 11.11%, 15.88%)",
        },
        "mountain-meadow": {
          50: "hsl(160, 86.67%, 95.88%)",
          100: "hsl(160, 80%, 91.76%)",
          200: "hsl(160, 73.33%, 83.53%)",
          300: "hsl(160, 65.71%, 72.55%)",
          400: "hsl(160, 57.14%, 64.31%)",
          500: "hsl(160, 75%, 47.06%)",
          600: "hsl(160, 90%, 38.43%)",
          700: "hsl(160, 94.29%, 29.41%)",
          800: "hsl(160, 88%, 22.35%)",
          900: "hsl(160, 87.5%, 17.65%)",
          950: "hsl(166.67, 83.33%, 12.55%)",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        "muted-card": {
          DEFAULT: "hsl(var(--muted-card))",
          foreground: "hsl(var(--muted-card-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        mono: "var(--font-mono)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
