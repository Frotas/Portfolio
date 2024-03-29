import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, HTMLProps, ReactNode } from "react";
import { Paragraph } from "../../Typography";

type CardParagraphComponentProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

export default function CardParagraphComponent({
  className,
  children,
  ...rest
}: CardParagraphComponentProps) {
  const style = `
    font-paragraph font-light text-center text-pretty text-[12pt]
    text-black dark:text-white lg:!text-[14pt]
  `;
  return (
    <Paragraph {...rest} className={CN(style, className)}>
      {children}
    </Paragraph>
  );
}
