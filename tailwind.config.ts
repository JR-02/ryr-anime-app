import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      primary100: '#0085ff',
      primary200: '#69b4ff',
      primary300: '#e0ffff',
      accent100: '#006fff',
      accent200: '#e1ffff',
      tx100: '#FFFFFF',
      tx200: '#9e9e9e',
      fill100: '#FFFFFF',
      fill200: '#9e9e9e',
      bg100: '#1E1E1E',
      bg200: '#2d2d2d',
      bg300: '#454545',
    },
    extend: {
      fontFamily: {
        filmotype: ['Filmotype Austin', 'Arial'],
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [],
};
export default config;
