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
  const style = `
    border border-zinc-900/20 rounded-[0.9rem] p-4 shadow-md shadow-black/25
    dark:shadow-white/25 dark:border-zinc-300/20
  `;
  return (
    <section {...rest} className={CN(style, className)}>
      {children}
    </section>
  );
}
