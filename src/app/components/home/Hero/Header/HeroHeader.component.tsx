"use client";
import CN from "@app/helpers/ClassHelper";
import { ReactNode } from "react";

type HeroHeaderProps = {
  className?: string;
  children: ReactNode;
};

export default function HeroHeader({ className, children }: Readonly<HeroHeaderProps>) {
  const style = `text-pretty py-4 text-center`;
  return <header className={CN(style, className)}>{children}</header>;
}
