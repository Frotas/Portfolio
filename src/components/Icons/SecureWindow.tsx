import CN from "@app/helpers/ClassHelper";

const IconVariants = {
  outlined: "outline",
  filled: "filled",
  "filled-rad-full": "filled-rad-full",
} as const;
type IconVariants = keyof typeof IconVariants;
const IconColors = {
  standard: "standard",
  white: "white",
  black: "black",
};
type IconColors = keyof typeof IconColors;

export default ({
  color = "standard",
  variant = "filled",
}: {
  color?: IconColors;
  variant?: IconVariants;
}) => {
  const style = {
    SVGMask: `[mask-type:luminance]`,
    default: `w-16 h-16`,
  };
  const IconVariants = {
    filled: {
      standard: `
        fill-none
        rounded-[15%]
        bg-DeepDarkBlue
        [&_path]:stroke-white
      `,
      white: `
        bg-white
        fill-none
        rounded-[15%]
        [&_path]:stroke-black
        [&_path:nth-child(2)]:stroke-black
      `,
      black: `
        bg-black
        rounded-[15%]
        fill-none
        [&_path]:stroke-white
      `,
    },
    outlined: {
      standard: `
        fill-none
        bg-transparent
        [&_path]:stroke-white
      `,
      white: `
        fill-none
        bg-transparent
        [&_path]:stroke-white
      `,
      black: `
        fill-none
        bg-transparent
        [&_path]:stroke-white
      `,
    },
    "filled-rad-full": {
      standard: `
        fill-none
        rounded-full
        bg-DeepDarkBlue
        [&_path]:stroke-white
      `,
      white: `
        fill-none
        rounded-full
        bg-white
        [&_path]:stroke-black
      `,
      black: `
        fill-none
        rounded-full
        bg-black
        [&_path]:stroke-white
      `,
    },
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={CN(style.default, IconVariants[variant][color])}
        viewBox="0 0 64 64"
      >
        <path
          d="M34.5 50.7895H12C10.6739 50.7895 9.40215 50.3237 8.46447 49.4946C7.52678 48.6655 7 47.541 7 46.3684V15.4211C7 14.2485 7.52678 13.124 8.46447 12.2949C9.40215 11.4658 10.6739 11 12 11H52C53.3261 11 54.5979 11.4658 55.5355 12.2949C56.4732 13.124 57 14.2485 57 15.4211V30.8947"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <path
          d="M7 19.8423H57M14.5 15.4434L14.525 15.4191M22 15.4434L22.025 15.4191M29.5 15.4434L29.525 15.4191M49.48 35.5923L55.87 37.027C56.535 37.1773 57.0025 37.7122 56.9825 38.3179C56.5525 51.0461 48.25 53.0002 48.25 53.0002C48.25 53.0002 39.9475 51.0461 39.5175 38.3179C39.5098 38.023 39.6157 37.7346 39.8179 37.5C40.02 37.2654 40.3064 37.0986 40.63 37.027L47.02 35.5923C47.8275 35.4111 48.6725 35.4111 49.48 35.5923Z"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
