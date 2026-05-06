/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.18)",
        "glow-lime": "0 0 36px rgba(163, 230, 53, 0.16)",
      },
    },
  },
  plugins: [],
};
