/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0a0e1a',
        'dark-blue': '#1a2332',
        'accent-cyan': '#00d9ff',
        'accent-cyan-light': '#00fff2',
        'accent-red': '#ff3366',
        'accent-red-dark': '#ff0040',
      }
    },
  },
  plugins: [],
}
