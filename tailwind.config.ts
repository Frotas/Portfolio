import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: 'Dosis, sans-serif',
        title: 'Dosis, sans-serif',
        subtitle: 'Lato, Exo, sans-serif',
        display: 'Lato, Exo, sans-serif',
        body: 'Lato, Exo, sans-serif',
        label: 'Lato, Exo, sans-serif',
        caption: 'Lato, Exo, sans-serif',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    colors: {
      'Cyprus': '#0A192F',
      'RockBlue': '#95A3BF',
      'TrappedDarkness': '#081526',
      'DarkSlateGray': '#1E5359',
      'Black': '#0e0e0e',
      'White': '#fefefe'
    }
  },
  plugins: [],
}

export default config
