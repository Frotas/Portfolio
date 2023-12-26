import { ElementType } from "react";

import CN from "@app/helpers/ClassHelper";

type ButtonProps = {
  icon: ElementType;
  className?: string;
};

export default function ButtonIcon({ icon: Icon, className }: ButtonProps) {
  const defaultStyle = "w-8 h-8 text-black";
  return (
    <>
      <Icon className={CN(defaultStyle, className)} />
    </>
  );
}
