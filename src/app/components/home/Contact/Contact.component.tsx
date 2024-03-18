"use client";

import { HTMLAttributes, ReactNode, forwardRef } from "react";
import CN from "@app/helpers/ClassHelper";

type FooterComponentProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

const FooterComponent = forwardRef<HTMLElement, FooterComponentProps>(
  ({ children, className, ...rest }, ref) => {
    const style = `flex flex-row flex-wrap gap-8 justify-center`;

    return (
      <>
        <section {...rest} ref={ref} className={CN(style, className)}>
          {children}
        </section>
      </>
    );
  }
);
export default FooterComponent;
