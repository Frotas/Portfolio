import CN from "@app/helpers/ClassHelper";
import { IconsProps } from "./@types/IconTypes";

export default ({ color = "standard", variant = "filled" }: IconsProps) => {
  const style = {
    SVGMask: `[mask-type:luminance]`,
    default: `w-16 h-16 p-1`,
  };
  const IconVariants = {
    filled: {
      standard: "bg-DeepDarkBlue fill-white rounded-[15%]",
      white: "bg-white fill-DeepDarkBlue rounded-[15%]",
      black: "bg-DeepDarkBlue fill-white rounded-[15%]",
    },
    outlined: {
      standard: "bg-transparent fill-DeepDarkBlue",
      white: "bg-transparent fill-white",
      black: "bg-transparent fill-DeepDarkBlue",
    },
    "filled-rad-full": {
      standard: "bg-DeepDarkBlue fill-white rounded-full",
      white: "bg-white fill-DeepDarkBlue rounded-full",
      black: "bg-DeepDarkBlue fill-white rounded-full",
    },
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className={CN(style.default, IconVariants[variant][color])}
      >
        <rect rx="10" fill="#242938" />
        <path
          d="M12 52C10.625 52 9.44833 51.5108 8.47 50.5325C7.49167 49.5542 7.00167 48.3767 7 47V17C7 15.625 7.49 14.4483 8.47 13.47C9.45 12.4917 10.6267 12.0017 12 12H52C53.375 12 54.5525 12.49 55.5325 13.47C56.5125 14.45 57.0017 15.6267 57 17V47C57 48.375 56.5108 49.5525 55.5325 50.5325C54.5542 51.5125 53.3767 52.0017 52 52H12ZM12 47H38.25V38.25H12V47ZM43.25 47H52V24.5H43.25V47ZM12 33.25H38.25V24.5H12V33.25Z"
          fill="#F4F2ED"
        />
      </svg>
    </>
  );
};
