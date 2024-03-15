import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, HTMLProps, ReactNode } from "react";

type CardComponentProps = {
  className?: string;
} & HTMLAttributes<HTMLElement>;

export default function CardComponent({
  className,
  ...rest
}: CardComponentProps) {
  const style = ``;
  return <div {...rest} className={CN(style, className)}></div>;
}
