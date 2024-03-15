"use client";

import { HTMLAttributes, ReactNode } from "react";
import CN from "@app/helpers/ClassHelper";

type FooterComponentProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export default function FooterComponent({
  className,
  children,
  ...rest
}: FooterComponentProps) {
  const style = `flex flex-row flex-wrap gap-8 justify-center`;

  return (
    <>
      <section {...rest} className={CN(style, className)}>
        {children}
      </section>
    </>
  );
}
