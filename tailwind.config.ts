import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif', ...defaultTheme.fontFamily.sans],
        'outfit':['Outfit', 'sans-serif',...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      primary: '#dadbf1',
      black: '#000000',
      white: '#fff',
      accent: '#4c5fd5',
      gray: '#191a1b',
    },
    
  },
  plugins: [],
} satisfies Config

