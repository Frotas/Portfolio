"use client";
import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, ReactElement } from "react";

type FooterComponentProps = {
  className?: string;
  children: ReactElement[] | ReactElement;
} & HTMLAttributes<HTMLElement>;

export default function FooterComponent({
  className,
  children,
  ...rest
}: FooterComponentProps) {
  const style = `
    h-fit bg-cyprus-500/90 dark:bg-cyprus-500/70 flex flex-col flex-wrap 
    inverter shadow-xl shadow-black/35 px-4 p-2 lg:px-16 lg:py-4
  `;
  return (
    <footer {...rest} className={CN(style, className)}>
      {children}
    </footer>
  );
}
