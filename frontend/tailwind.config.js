// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        finexa: {
          pinkPrimary: "#af1e9d",
          purplePrimary: "#9e1b97",
          purpleDark: "#461070",
          pinkAccent: "#fb2aab",
          grayDark: "#545454",
          grayLight: "#f1f1f1",
          grayMid: "#868686",
          grayMuted: "#b1b1b1",
          magenta: "#b11e9b",
          white: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
