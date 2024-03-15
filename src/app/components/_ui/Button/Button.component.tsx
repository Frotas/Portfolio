import {
  ButtonHTMLAttributes,
  ElementType,
  HTMLAttributes,
  HTMLProps,
  ReactNode,
} from "react";
import CN from "@app/helpers/ClassHelper";

const ButtonVariants = {
  outlined: "outlined",
  filled: "filled",
};
type ButtonVariants = keyof typeof ButtonVariants;
const ButtonColors = {
  white: "white",
  black: "black",
  blue: "blue",
  green: "green",
};
type ButtonColors = keyof typeof ButtonColors;

type ButtonComponentProps = {
  className?: string;
  variant?: ButtonVariants;
  color?: ButtonColors;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonComponent({
  variant = "filled",
  color = "green",
  className,
  children,
  type,
  ...rest
}: ButtonComponentProps) {
  const style = `
    w-fit rounded-md py-2 px-8
    shadow-md transition-colors
    font-display text-center
    text-sm md:text-md xl:text-xl
    hover:w-max uppercase
  `;
  const buttonVariants = {
    filled: {
      black: `
        bg-black text-white border border-transparent
        hover:bg-black-600/50 hover:font-semibold
        hover:border hover:border-solid hover:border-black
      `,
      white: `
        bg-white text-black border border-transparent
        hover:bg-white/50 hover:font-semibold
        hover:border hover:border-solid hover:border-white
      `,
      blue: `
        bg-blue-600 text-white border border-transparent
        hover:bg-blue-600/50 hover:font-semibold hover:text-blue-800
        hover:border hover:border-solid hover:border-blue-600
      `,
      green: `
        bg-green-600 text-white border border-transparent
        hover:bg-green-600/50 hover:font-semibold
        hover:border-green-600 hover:text-green-800
      `,
    },
    outlined: {
      black: `
        bg-black/25 hover:bg-black/50
        border border-solid border-black
        text-black hover:text-white hover:font-semibold
      `,
      white: `
        bg-white/25 hover:bg-white/50
        border border-solid border-white
        text-zinc-700 hover:text-black hover:font-semibold
      `,
      blue: `
        bg-blue-600/25 hover:bg-blue-600/50
        border border-solid border-blue-600
        text-blue hover:text-white hover:font-semibold
      `,
      green: `
        bg-green-600/25 hover:bg-green-600/50
        border border-solid border-green-600
        text-green hover:text-white hover:font-semibold
      `,
    },
  };
  return (
    <>
      <button
        {...rest}
        className={CN(style, buttonVariants[variant][color], className)}
      >
        {!!children && children}
      </button>
    </>
  );
}
