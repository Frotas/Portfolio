import { HTMLProps, ReactNode } from "react";

import CN from "@app/helpers/ClassHelper";

export default function Paragraph({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
} & HTMLProps<HTMLParagraphElement>) {
  const style = ` font-[18pt] font-[300] text-wrap-pretty dark:text-White`;
  return (
    <>
      <p className={CN(style, className)}>{children}</p>
    </>
  );
}
