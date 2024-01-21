import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Black: "#000",
        White: "#fff",
        Cyprus: "#0A192F",
        RockBlue: "#95A3BF",
        DeepDarkBlue: "#242938",
        DarkSlateGray: "#1E5359",
        TrappedDarkness: "#081526",
      },
      screens: {
        mobile: { min: "320px" },
        tablet: { min: "744px" },
        desktop: { min: "1280px" },
      },
    },
  },
  plugins: [
    require("./lib/tailwindcss/plugin/TextWrapUtility.plugin"),
    require("./lib/tailwindcss/plugin/Stroke-LineJoin.plugin"),
    require("./lib/tailwindcss/plugin/Stroke-LineCap.plugin"),
    require("./lib/tailwindcss/plugin/OrphansUtility.plugin"),
    require("./lib/tailwindcss/plugin/StopColor.plugin"),
    require("./lib/tailwindcss/plugin/WordBreak.plugin"),
    require("./lib/tailwindcss/plugin/ClipPath.plugin"),
    require("autoprefixer"),
  ],
};
export default config;
