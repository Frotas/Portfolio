import CN from "@app/helpers/ClassHelper";
import { forwardRef, HTMLAttributes, ReactNode } from "react";

type SkillComponentProps = {
  className?: string;
  children: ReactNode;
  title?: string;
  options?: {
    title?: {
      hidden: boolean;
      style?: string;
    };
  };
} & HTMLAttributes<HTMLElement>;
const SkillComponent = forwardRef<HTMLElement, SkillComponentProps>(
  ({ children, className, ...rest }, ref) => {
    const style = `
    w-full flex flex-row flex-wrap gap-8 justify-center
  `;
    return (
      <section {...rest} ref={ref} className={CN(style, className)}>
        {children}
      </section>
    );
  }
);
export default SkillComponent;
