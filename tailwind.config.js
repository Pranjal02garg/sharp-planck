/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["var(--font-kanit)", "sans-serif"],
        sans: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
