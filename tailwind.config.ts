import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", "[data-theme=dark]"],
  theme: {
    extend: {
      colors: {
        cyprus: {
          100: "#202E42",
          200: "#152439",
          300: "#101F34",
          400: "#0D1C32",
          500: "#0A192F",
          600: "#0A192F",
          700: "#0A192E",
          800: "#0A182D",
          900: "#09172B",
        },
        rockBlue: {
          100: "#9FABC5",
          200: "#9AA7C2",
          300: "#98A5C1",
          400: "#97A4C0",
          500: "#95A3BF",
          600: "#94A2BD",
          700: "#92A0BB",
          800: "#8E9CB7",
          900: "#8794AE",
        },
        darkBlue: {
          100: "#383C4A",
          200: "#2E3341",
          300: "#292E3D",
          400: "#272C3B",
          500: "#242938",
          600: "#242938",
          700: "#242837",
          800: "#232736",
          900: "#212533",
        },
        darkSlateGray: {
          100: "#326368",
          200: "#285B61",
          300: "#23575D",
          400: "#21555B",
          500: "#1E5359",
          600: "#1E5258",
          700: "#1E5157",
          800: "#1D4F55",
          900: "#1B4B51",
        },
        trappedDarkness: {
          100: "#1E2A3A",
          200: "#132030",
          300: "#0E1B2B",
          400: "#0B1829",
          500: "#081526",
          600: "#081425",
          700: "#071323",
          800: "#061120",
          900: "#050F1D",
        },
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        subtitle: ["Lato", "Montserrat", "sans-serif"],
        paragraph: ["Open Sans", "sans-serif"],
        display: ["Playfair Display", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    require("./lib/tailwindcss/plugin/OrphansUtility.plugin"),
    require("./lib/tailwindcss/plugin/WordBreak.plugin"),
    require("autoprefixer"),
  ],
};
export default config;
