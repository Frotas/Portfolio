import plugin from "tailwindcss/plugin";

const LineCap = plugin(({ addUtilities }) => {
  addUtilities({
    ".stroke-linecap": {
      "stroke-linecap": "butt",
    },
    ".stroke-linecap-butt": {
      "stroke-linecap": "butt",
    },
    ".stroke-linecap-round": {
      "stroke-linecap": "round",
    },
    ".stroke-linecap-square": {
      "stroke-linecap": "square",
    },
  });
});

export default LineCap;
