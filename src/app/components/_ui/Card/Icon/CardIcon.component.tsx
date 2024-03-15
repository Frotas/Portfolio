import CN from "@app/helpers/ClassHelper";
import { ElementType, HTMLAttributes, HTMLProps, ReactNode } from "react";

type CardIconComponentProps = {
  className?: string;
  icon: ElementType;
} & HTMLAttributes<HTMLElement>;

export default function CardIconComponent({
  className,
  icon: Icon,
  ...rest
}: CardIconComponentProps) {
  const style = {
    root: `w-fit h-fit`,
    icon: ``,
  };
  return (
    <div className={CN(style.root, className)}>
      <Icon {...rest} className={CN(style)} />
    </div>
  );
}
