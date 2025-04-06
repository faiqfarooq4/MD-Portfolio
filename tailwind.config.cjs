/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'bg-dark': 'var(--bg-dark)',
        'bg-light': 'var(--bg-light)',
        highlight: 'var(--highlight)',
        'text-muted': 'var(--text-muted)',
      },
    },
  },
  plugins: [],
};