/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '160': '40rem',
        '180': '42rem',
        '200': '44rem'
      }
    },
  },
  plugins: [],
}
