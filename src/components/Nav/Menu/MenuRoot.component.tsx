import { HTMLAttributes, ReactNode } from "react";

import CN from "@app/helpers/ClassHelper";

type MenuProps = {
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export default function MenuRoot({ className, children, ...props }: MenuProps) {
  const menuNavStyle = ``;
  return (
    <nav {...props} className={CN(menuNavStyle, className)}>
      {children}
    </nav>
  );
}
