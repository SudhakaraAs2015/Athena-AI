// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#a8edea',
        'gradient-end': '#fed6e3',
      },
    },
  },
  plugins: [],
};