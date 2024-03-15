import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, ReactNode } from "react";

type CaptionProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export default function CaptionComponent({
  className,
  children,
  ...rest
}: CaptionProps) {
  const style = `uppercase font-display font-semibold text-[12pt] text-white`;
  return (
    <>
      <p {...rest} className={CN(style, className)}>
        {children}
      </p>
    </>
  );
}
