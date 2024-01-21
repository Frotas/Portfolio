import plugin from "tailwindcss/plugin";

const ClipPath = plugin(
  ({ matchUtilities, theme }) => {
    matchUtilities(
      {
        clipPath: (value) => ({
          clipPath: value,
        }),
      },
      {
        values: theme("clipPath"),
      }
    );
  },
  {
    theme: {
      clipPath: {
        "shape-inset": `inset(100px 50px)`,
        "shape-circle": `circle(50px at 0 100px)`,
        "shape-ellipse": `ellipse(50px 60px at 0 10% 20%)`,
        "shape-polygon": `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
        "shape-rect": `rect(5px 5px 160px 145px round 20%)`,
        "shape-xywh": `xywh(0 5px 100% 75% round 15% 0)`,
        "geometry-margin": `margin-box`,
        "geometry-border": `border-box`,
        "geometry-padding": `padding-box`,
        "geometry-content": `content-box`,
        "geometry-fill": `fill-box`,
        "geometry-stroke": `stroke-box`,
        "geometry-view": `view-box`,
      },
    },
  }
);

export default ClipPath;
