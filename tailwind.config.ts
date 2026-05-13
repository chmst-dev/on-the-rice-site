import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rice: {
          50: "#FCFCFA",
          100: "#F8F6F0",
          200: "#EFEBE0",
        },
        ink: {
          light: "#5A554F",
          DEFAULT: "#33312E",
          dark: "#1A1918",
        },
        soy: "#4A3525",
        crimson: "#8C2727",
        gold: "#D4B872",
      },
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          'Arial',
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          'Meiryo',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
