"use client";
import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, ReactElement } from "react";

type FooterComponentProps = {
  className?: string;
  children: ReactElement;
} & HTMLAttributes<HTMLElement>;

export default function FooterComponent({
  className,
  children,
  ...rest
}: FooterComponentProps) {
  const style = `
    h-28 font-display text-white bg-cyprus-500/90 dark:bg-cyprus-500/70 flex flex-row flex-wrap
    justify-center items-center tracking-[.12rem] shadow shadow-black/35
  `;
  return (
    <footer {...rest} className={CN(style, className)}>
      {children}
    </footer>
  );
}
