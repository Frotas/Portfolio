import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, ReactNode } from "react";

type SubtitleComponentProps = {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>;

export default function SubtitleComponent({
  className,
  children,
  ...rest
}: SubtitleComponentProps) {
  const style = `font-subtitle font-semibold text-[18pt] text-black dark:text-white`;
  return (
    <h3 {...rest} className={CN(style, className)}>
      {children}
    </h3>
  );
}
