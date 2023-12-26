import { HTMLProps, ReactNode } from "react";

import CN from "@app/helpers/ClassHelper";

const MenuItemVariants = {
  plain: "plain",
  filled: "filled",
} as const;
const MenuItemColors = {
  Black: "Black",
  White: "White",
  Cyprus: "Cyprus",
  RockBlue: "RockBlue",
  DarkGray: "DarkGray",
  DeepDark: "DeepDark",
} as const;

type MenuItemVariants = {} & keyof typeof MenuItemVariants;
type MenuItemColors = {} & keyof typeof MenuItemColors;

type MenuItemProps = {
  className?: string;
  color?: MenuItemColors;
  variant?: MenuItemVariants;
  children?: ReactNode;
} & HTMLProps<HTMLLIElement> &
  HTMLProps<HTMLAnchorElement>;

export default function MenuItem({
  color = "White",
  variant = "plain",
  className,
  children,
  ...props
}: MenuItemProps) {
  const ItemVariants = {
    filled: {
      Black: `
        rounded-md
        bg-Black
        text-White
        hover:text-White/35
      `,
      White: `
        rounded-md
        bg-White
        text-Black
        hover:text-Black/35
      `,
      Cyprus: `
        rounded-md
        bg-Cyprus
        text-Cyprus
        hover:text-Cyprus/35
      `,
      RockBlue: `
        rounded-md
        bg-RockBlue
        text-Cyprus
        hover:bg-RockBlue/35
      `,
      DarkGray: `
        rounded-md
        bg-DarkSlateGray
        text-DarSlateGray
        hover:text-DarkSlateGray/35
      `,
      DeepDark: `
        rounded-md
        bg-TrappedDarkness
        text-TappedDarkness
        hover:text-TrappedDarkness/35
      `,
    },
    plain: {
      Black: "bg-transparent text-White hover:text-White/35",
      White: "bg-transparent text-Black hover:text-Black/35",
      Cyprus: "bg-transparent text-Cyprus hover:text-Cyprus/35",
      RockBlue: "bg-transparent text-RockBlue hover:text-RockBlue/35",
      DarkGray: "bg-transparent text-DarkSlateGray hover:text-DarkSlateGray/35",
      DeepDark:
        "bg-transparent text-TrappedDarkness hover:text-TrappedDarkness/35",
    },
  } as const;
  const menuItemStyle = `
    flex
    text-center
    items-center  
    justify-center
    focus:outline-none
    [&:nth-child(4)]:w-[80%]
    [&:nth-child(-n+3)]:w-[50%]
    [&:nth-child(-n+3)]:text-zinc-300
    [&:nth-child(-n+3)]:hover:text-White
    
    md:[&:nth-child(4)]:w-[30%]
    md:[&:nth-child(-n+3)]:w-fit
  `;
  return (
    <li className={CN(menuItemStyle, ItemVariants[variant][color], className)}>
      {children}
    </li>
  );
}
