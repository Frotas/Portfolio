import { HTMLAttributes, ReactNode } from "react";

import CN from "@app/helpers/ClassHelper";

type MenuListProps = {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLUListElement>;

export default function MenuList({
  className,
  children,
  ...props
}: MenuListProps) {
  const menuListStyle = `
    block absolute w-full
    top-[70px] right-0
    bg-DarkSlateGray
    transition-[visibility] duration-[0.6s] ease-in-out
    overflow-y-hidden
    sm:invisible z-50
  `;

  return (
    <ul {...props} className={CN(menuListStyle, className)}>
      {children}
    </ul>
  );
}
