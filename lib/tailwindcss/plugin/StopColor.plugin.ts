import plugin from "tailwindcss/plugin";

const StopColor = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      stopColor: (value) => ({
        stopColor: value,
      }),
    },
    {
      values: theme("colors"),
    }
  );
});

export default StopColor;
