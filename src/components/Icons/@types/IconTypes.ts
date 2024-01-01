export const IconVariants = {
  outlined: "outline",
  filled: "filled",
  "filled-rad-full": "filled-rad-full",
} as const;
export type IconVariants = keyof typeof IconVariants;

const IconColors = {
  standard: "standard",
  white: "white",
  black: "black",
};
export type IconColors = keyof typeof IconColors;

export type IconsProps = {
  color?: IconColors;
  variant?: IconVariants;
  className?: string;
};
