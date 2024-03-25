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
  const style = `
    font-paragraph text-[12pt] text-black dark:text-white
    md:!text-[14pt] lg:!text-[14pt]
  `;
  return (
    <p {...rest} className={CN(style, className)}>
      {children}
    </p>
  );
}
