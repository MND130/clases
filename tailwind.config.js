/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        udesa: {
          blue: '#00529B',
          sigedu: '#3C8DBC',
          dark: '#1D294D',
        },
        ink: { DEFAULT: '#1f2933', soft: '#52606d' },
        rule: '#e2e8f0',
        bgsoft: '#f5f8fb',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 40px rgba(29,41,77,0.16)',
        soft: '0 2px 14px rgba(29,41,77,0.10)',
      },
      backgroundImage: {
        'udesa-acento': 'linear-gradient(90deg, #3C8DBC 0%, #1D294D 100%)',
        'udesa-dark': 'linear-gradient(135deg, #1D294D 0%, #0f1830 100%)',
        'udesa-seccion': 'linear-gradient(135deg, #00529B 0%, #1D294D 100%)',
      },
    },
  },
  plugins: [],
}
