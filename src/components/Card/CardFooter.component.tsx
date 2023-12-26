import CN from "@app/helpers/ClassHelper";
import { ReactNode } from "react";
import List, { type ToggleListProps } from "../List";

type CardProps = {
  className?: string;
  children?: ReactNode;
};

export default function CardFooter({ className, children }: CardProps) {
  const cardHederStyle = `w-full
  flex flex-col items-center justify-center
  rounded-sm`;
  return (
    <>
      <footer className={CN(cardHederStyle, className)}>{children}</footer>
    </>
  );
}
