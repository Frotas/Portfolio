import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, HTMLProps } from "react";
import { Title } from "../../Typography";

type CardTitleComponentProps = {
  className?: string;
  children: string;
} & HTMLAttributes<HTMLHeadingElement>;

export default function CardTitleComponent({
  className,
  children,
  ...rest
}: CardTitleComponentProps) {
  const style = `font-title uppercase text-[18pt] md:text-[20pt] text-black dark:text-black`;
  return (
    <Title {...rest} heading="h2" className={CN(style, className)}>
      {children}
    </Title>
  );
}
