"use client";
import {
  HTMLAttributes,
  HTMLProps,
  ReactNode,
} from "react";

import CN from "@app/helpers/ClassHelper";

type MenuToggle = {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLButtonElement> &
  HTMLProps<HTMLButtonElement>;

export default function ButtonToggle({
  className,
  children,
  ...props
}: MenuToggle) {
  const style = `
    py-4 px-2
    rounded-lg
    bg-transparent
    hover:bg-RockBlue/30
    focus:outline-none
  `;
  return (
    <>
      <button onClick={props.onClick} className={CN(style, className)}>
        {children}
      </button>
    </>
  );
}
