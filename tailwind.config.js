/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#191725",
        light: "#fffaf3",
        pine: "#286983",
        "main-secondary": "#575279",
        "accent-secondary": "#d7827e",
        accent: "#eb6f92",
        "comment-weak": "#403d52",
        "comment-highlight": "#908caa",
        purple: "#907aa9",
        comment: "#524f67",
        side: "#1f1d2e",
        main: "#fffaf3",
        "side-primary": "#e0def4",
        rose: "#ebbcba",
      },
    },
  },
  plugins: [],
};
