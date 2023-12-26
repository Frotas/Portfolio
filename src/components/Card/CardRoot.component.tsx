import CN from "@app/helpers/ClassHelper";
import { ReactNode } from "react";

type CardProps = {
  className?: string;
  children?: ReactNode;
};

export default function CardRoot({ className, children }: CardProps) {
  const style = {
    default: `
    w-fit h-max
    flex flex-col gap-4
    rounded-md p-4
    
  `,
    darkMode: `
      dark:bg-RockBlue
      dark:drop-shadow-lg
      dark:shadow-White
    `,
  };
  return (
    <>
      <section className={CN(style.default, style.darkMode, className)}>{children}</section>
    </>
  );
}
