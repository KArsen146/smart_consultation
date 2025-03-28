import { COLORS } from '@/constants/color.constants';
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
        colors: COLORS,
        fontFamily:{
            header: ['Montserrat Alternates', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif']
        }
    },
  },
  plugins: [],
} satisfies Config;