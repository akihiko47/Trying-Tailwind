/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Poppins',
        body: 'Poppins',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },

      colors: {
        'text': {
          50: '#f0f2f5',
          100: '#e0e6eb',
          200: '#c2ccd6',
          300: '#a3b3c2',
          400: '#8599ad',
          500: '#667f99',
          600: '#52667a',
          700: '#3d4c5c',
          800: '#29333d',
          900: '#14191f',
          950: '#0a0d0f',
        },
        'background': {
          50: '#f0f1f5',
          100: '#e0e4eb',
          200: '#c2c9d6',
          300: '#a3adc2',
          400: '#8592ad',
          500: '#667799',
          600: '#525f7a',
          700: '#3d475c',
          800: '#29303d',
          900: '#14181f',
          950: '#0a0c0f',
        },
        'primary': {
          50: '#f7f3ee',
          100: '#efe8dc',
          200: '#dfd0b9',
          300: '#cfb996',
          400: '#bfa273',
          500: '#af8b50',
          600: '#8c6f40',
          700: '#695330',
          800: '#463720',
          900: '#231c10',
          950: '#110e08',
        },
        'secondary': {
          50: '#f0f2f4',
          100: '#e1e4ea',
          200: '#c3cad5',
          300: '#a5afc0',
          400: '#8894aa',
          500: '#6a7a95',
          600: '#556177',
          700: '#3f495a',
          800: '#2a313c',
          900: '#15181e',
          950: '#0b0c0f',
        },
        'accent': {
          50: '#eef1f7',
          100: '#dce3ef',
          200: '#b9c8df',
          300: '#96accf',
          400: '#7390bf',
          500: '#5074af',
          600: '#405d8c',
          700: '#304669',
          800: '#202f46',
          900: '#101723',
          950: '#080c11',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
    // ...
  ],
}

