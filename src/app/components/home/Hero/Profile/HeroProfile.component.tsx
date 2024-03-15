import CN from "@app/helpers/ClassHelper";
import { ReactNode } from "react";

type HeroProfileProps = {
  className?: string;
  children: ReactNode;
};

export default function HeroProfile({ className, children }: HeroProfileProps) {
  const style = `[&_*]:m-auto`;
  return <div className={CN(style, className)}>{children}</div>;
}
