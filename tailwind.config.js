/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'courier-prime': ['Courier Prime', 'monospace'],
      },
      colors: {
        'accent-red': '#FF4151',
        'secondary-red': '#FFE1E1',
        'primary-black': '#0F111A',
        'secondary-black': '#00010A',
        'tertiary-black': '#1B1E29',
      },
      backgroundImage: {
        'bg-waves': "url('../assets/images/bg-waves.svg')",
        'waves': "url('../assets/images/waves.png')",
      }
    },
  },
  plugins: [],
}
