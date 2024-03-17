import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, HTMLProps, ReactNode } from "react";

type CardComponentProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export default function CardComponent({
  className,
  children,
  ...rest
}: CardComponentProps) {
  const style = `h-fit flex flex-col p-2`;
  return (
    <div {...rest} className={CN(style, className)}>
      {children}
    </div>
  );
}
