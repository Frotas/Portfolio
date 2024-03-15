import CN from "@app/helpers/ClassHelper";
import { ElementType, HTMLAttributes } from "react";

type IconSkillProps = {
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

export default function IconSkillComponent({
  className,
  caption,
  icon: Icon,
  options,
  ...rest
}: IconSkillProps) {
  const style = `
    w-fit h-fit
    uppercase font-display font-regular text-[9pt] text-center text-white
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
