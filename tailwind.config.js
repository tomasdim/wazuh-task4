/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        LightestShade: '#EBF2FB',
        Primary: '#256BD1',
        Accent: '#FEDD0B',
        Warning: '#FF7A2F',
        danger: '#BD271E',
        teal: '#2DA4AA',
        EmptyShade: '#FFFFFF',
        DarkestShade: '#292929',
        LightShade: '#B7C6D7',
        MediumShade: '#657C97',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
