import { HTMLProps, ReactNode } from "react";

import CN from "@app/helpers/ClassHelper";

type TextTitleProps = {
  className?: string;
  children: ReactNode;
} & HTMLProps<HTMLHeadingElement> ;

export default function Title({
  className,
  children,
}: TextTitleProps) {
  const style = ` font-bold text-[20pt] dark:text-White`;
  return (
    <>
      <h2 className={CN(style, className)}>{children}</h2>
    </>
  );
}
