import { HTMLAttributes, HTMLProps, ReactNode } from "react";
import CN from "@app/helpers/ClassHelper";

type LabelComponentProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLLabelElement> &
  HTMLProps<HTMLLabelElement>;

export default function LabelComponent({
  className,
  children,
  ...rest
}: LabelComponentProps) {
  const style = `px-6 font-semibold`;
  return (
    <label {...rest} className={CN(style, className)}>
      {children}
    </label>
  );
}
