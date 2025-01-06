/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { keyframes: {
      moveBackForth: {
        '0%, 100%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(7.5rem)' },
      },
    },
    animation: {
      moveBackForth: 'moveBackForth 2s linear infinite',
    },},
  },
  plugins: [],
}