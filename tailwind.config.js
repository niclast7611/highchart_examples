/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 0.998258px 5px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
