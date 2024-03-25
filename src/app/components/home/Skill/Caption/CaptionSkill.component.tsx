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
  const style = `
    font-display font-semibold tracking-[.012rem] text-[12pt]
    md:!text-[14pt] 
  `;
  return (
    <>
      <p {...rest} className={CN(style, className)}>
        {children}
      </p>
    </>
  );
}
