import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
  },
  plugins: [],
}
export default config
