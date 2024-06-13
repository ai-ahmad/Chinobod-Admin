/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'admin-dash': "url('@/assets/img/Admin-dash.png')",
      },
    },
  },
  plugins: [],
}
