import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, HTMLProps, ReactNode } from "react";

type CardWrapperComponentProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement> &
  HTMLProps<HTMLElement>;

export default function CardWrapperComponent({
  className,
  children,
  ...rest
}: CardWrapperComponentProps) {
  const style = ``;
  return (
    <section {...rest} className={CN(style, className)}>
      {children}
    </section>
  );
}
