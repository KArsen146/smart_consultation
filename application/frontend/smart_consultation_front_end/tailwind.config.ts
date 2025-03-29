import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
        fontFamily:{
            header: ['Montserrat Alternates', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif']
        },
        colors:{
          'main': 'rgb(63, 157, 249)',
          'important': 'rgb(255, 165, 0)',
          'secondary': 'rgb(211, 233, 255)',
          'bg': 'rgb(245, 245, 245)',
          'error-input': 'rgb(255, 217, 211)',
          'error-text': 'rgb(255, 0, 0)'
        },
    },
  },
  plugins: [],
} satisfies Config;
