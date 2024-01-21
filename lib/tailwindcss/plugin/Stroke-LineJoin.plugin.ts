import plugin from "tailwindcss/plugin";

const LineJoin = plugin(({ addUtilities }) => {
  addUtilities({
    ".stroke-linejoin": {
      "stroke-linejoin": "miter",
    },
    ".stroke-linejoin-miter": {
      "stroke-linejoin": "miter",
    },
    ".stroke-linejoin-crop": {
      "stroke-linejoin": "crop",
    },
    ".stroke-linejoin-arcs": {
      "stroke-linejoin": "arcs",
    },
    ".stroke-linejoin-bevel": {
      "stroke-linejoin": "bevel",
    },
    ".stroke-linejoin-round": {
      "stroke-linejoin": "round",
    },
    ".stroke-linejoin-stupid": {
      "stroke-linejoin": "stupid",
    },
  });
});

export default LineJoin;
