import CN from "@app/helpers/ClassHelper";
import { ElementType, HTMLAttributes } from "react";

type IconProps = {
  className?: string;
  icon: ElementType;
  caption?: string;
  options?: {
    icon?: {
      hidden?: boolean;
      style: string;
    };
    caption?: {
      hidden?: boolean;
      style: string;
    };
  };
} & HTMLAttributes<HTMLElement>;

export default function IconComponent({
  className,
  caption,
  icon: Icon,
  options,
  ...rest
}: IconProps) {
  const style = `
    uppercase font-display font-regular text-[10pt] text-black dark:text-white
    flex flex-col items-center gap-2 
  `;
  return (
    <div {...rest} className={CN(style, className)}>
      {!!!options?.icon?.hidden && <Icon className="icon" />}
      {(!!caption || !options?.caption?.hidden) && (
        <p className="caption">{caption}</p>
      )}
    </div>
  );
}
