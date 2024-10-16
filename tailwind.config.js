/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey:"#f0f0f0",
        light:"#dcdddd"
      },
    },
  },
  plugins: [],
};
