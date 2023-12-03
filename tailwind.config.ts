import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', 'data-theme="dark"'],
  theme: {
    extend: {
      colors: {
        Black: '#000',
        White: '#fff',
        Cyprus: '#0A192F',
        RockBlue: '#95A3BF',
        DarkSlateGray: '#1E5359',
        TrappedDarkness: '#081526',
      },
    },
    screens: {
      'sm': {'min': '320px'},
      'md': {'min': '744px'},
      'lg': {'min': '1280px'},

      'mobile': {'min': '320px', 'max': '744px'},
      'tablet': {'min': '744px', 'max': '1280px'},
      'desktop': {'min': '1280px'},
    },

  },
  plugins: [],
}
export default config
