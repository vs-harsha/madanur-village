/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50:  '#faf6f0',
          100: '#f3ead8',
          200: '#e5d4b0',
          300: '#c8a87a',
          400: '#a07840',
          500: '#d97706',
          600: '#b45309',
          700: '#78350f',
          800: '#4a2003',
          900: '#2d1303',
          950: '#1a0a02',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Lato"', 'sans-serif'],
        telugu: ['"Noto Serif Telugu"', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-in': 'slideIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
