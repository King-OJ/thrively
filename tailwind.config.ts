import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      redish: "#ED4A60",
      yellowish: "#FDDA79",
      grey: "#F7F6F1",
      greyShade: "#6A6A6A",
      greyShade2: "#E6E6E6",
      white: "#fff",
      black: "#000000",
    },

    extend: {
      fontFamily: {
        sans: ["var(--garnett-medium)"],
        pacifico: ["var(--pacifico)"],
        subheadingFont: ["var(--gtAmericaTrial)"],
      },
    },
  },
  plugins: [],
};
export default config;
