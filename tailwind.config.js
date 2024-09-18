/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, css}"],
  theme: {
    extend: {
      //exemplo
      height: {
        'card-tail': '677px',
      },
    },
    plugins: [],
  }
}