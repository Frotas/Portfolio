import CN from "@app/helpers/ClassHelper";
import { ReactNode } from "react";

type CardProps = {
  className?: string,
  children?: ReactNode
}

export default function CardHeader({ className, children }: CardProps) {
  const cardHederStyle = `w-full
  flex flex-col items-center justify-center
  rounded-sm`;
  return <>
    <header className={CN(cardHederStyle, className)}>
      {children}
    </header>
  </>
}
