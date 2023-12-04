import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      spotify: '#1db954',
      white: '#ffffff',
      black: '#000000',
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['winter'],
          primary: '#38bdf8',
          secondary: '#f471b5',
          accent: '#eeaf3a',
          neutral: '#1f2937',
          'base-100': '#f3f4f6',
          'base-200': '#dbdbdb',
          'base-300': '#c5c5c5',
          '.btn-spotify': {
            'background-color': '#1db954',
            color: '#14040c',
          },
          '.text-black': {
            color: '#000000',
          },
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['night'],
          primary: '#38bdf8',
          secondary: '#f471b5',
          accent: '#ffe999',
          neutral: '#1f2937',
          '.btn-spotify': {
            'background-color': '#1db954',
            color: '#14040c',
          },
          '.text-black': {
            color: '#000000',
          },
        },
      },
    ],
  },
};
export default config;
