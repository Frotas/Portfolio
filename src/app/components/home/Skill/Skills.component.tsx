import CN from "@app/helpers/ClassHelper";
import { ElementType, HTMLAttributes, ReactNode } from "react";

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
export default function SkillComponent({
  title,
  className,
  children,
  options,
  ...rest
}: SkillComponentProps) {
  const style = `
    w-full flex flex-row flex-wrap gap-8 justify-center
  `;
  return (
    <section {...rest} className={CN(style, className)}>
      {children}
    </section>
  );
}
