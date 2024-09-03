/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'; //ESM

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
