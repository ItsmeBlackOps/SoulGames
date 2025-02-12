/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        squid: {
          pink: '#ed1b76',
          lightPink: '#f44786',
          teal: '#249f9c',
          darkTeal: '#037a76',
        }
      },
      boxShadow: {
        'neon': '0 0 20px rgba(237, 27, 118, 0.5)',
      },
      fontFamily: {
        'squid': ['"Black Han Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};