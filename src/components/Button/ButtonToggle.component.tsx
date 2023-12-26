"use client";
import {
  ElementType,
  HTMLAttributes,
  HTMLProps,
  ReactNode,
  useState,
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
    p-2
    rounded-lg
    bg-transparent
    hover:border-TrappedDarkness
    hover:bg-TrappedDarkness/30
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
