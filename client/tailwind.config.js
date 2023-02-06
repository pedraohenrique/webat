/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5F6CAF',
        'primary-100': '#edf0f8',
        'primary-200': '#bec2df',
        'primary-500': '#7e88be',
        secondary: '#5BBFBA',
      },
    },
  },
  plugins: [],
};
