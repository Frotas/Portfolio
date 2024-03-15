import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, ReactNode } from "react";

type TitleComponentProps = {
  className?: string;
  children?: ReactNode;
  heading?: "h1" | "h2";
} & HTMLAttributes<HTMLHeadingElement>;

export default function TitleComponent({
  className,
  children,
  heading = "h1",
  ...rest
}: TitleComponentProps) {
  const style = {
    h1: `font-title font-bold text-[20pt] text-black dark:text-white py-8`,
    h2: `font-title font-semibold text-[18pt] text-black dark:text-white py-8`,
  };
  return (
    <>
      {heading === "h1" && (
        <h1 {...rest} className={CN(style.h1, className)}>
          {children}
        </h1>
      )}
      {heading === "h2" && (
        <h2 {...rest} className={CN(style.h2, className)}>
          {children}
        </h2>
      )}
    </>
  );
}
