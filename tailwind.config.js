/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontSize: {
        "text-12": "12px",
      },
      colors: {
        "green": "#009900",
      },
    },
  },
  plugins: [],
}
