import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, ReactNode } from "react";

type InputRootProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;
export default function InputRoot({
  className,
  children,
  ...rest
}: InputRootProps) {
  return (
    <section {...rest} className={CN(className)}>
      {children}
    </section>
  );
}
