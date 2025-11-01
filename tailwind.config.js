/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          brown: '#8B4513',
          sand: '#D2B48C',
          coffee: '#654321',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        crimson: ['"Crimson Text"', 'serif'],
      },
      boxShadow: {
        vintage: '0 20px 60px rgba(0,0,0,0.8), inset 0 1px 3px rgba(255,255,255,0.3), inset 0 -1px 3px rgba(0,0,0,0.3)'
      }
    },
  },
  plugins: [],
}
