/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          500: '#A020F0',
          600: '#9333ea',
          700: '#7e22ce',
        },
        'gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
      maxWidth: {
        '7xl': '80rem',
        '6xl': '72rem',
        '4xl': '56rem',
        '2xl': '42rem',
        'xl': '36rem',
      },
      minHeight: {
        '600': '600px',
      },
      zIndex: {
        '50': '50',
        '1000': '1000',
      }
    },
  },
  plugins: [],
} 