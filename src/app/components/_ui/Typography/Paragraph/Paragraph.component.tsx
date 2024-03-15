import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, ReactNode } from "react";

type ParagraphComponentProps = {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

export default function ParagraphComponent({
  className,
  children,
  ...rest
}: ParagraphComponentProps) {
  const style = `font-paragraph font-regular text-[12pt] text-black dark:text-white`;
  return (
    <p {...rest} className={CN(style, className)}>
      {children}
    </p>
  );
}
