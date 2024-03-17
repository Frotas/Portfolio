"use client";
import reactParser, { DOMNode } from "html-react-parser";
import { Paragraph, Subtitle, Title } from "@app/app/components/_ui/Typography";
import CN from "@app/helpers/ClassHelper";
import { TypeAnimation } from "react-type-animation";
import { ReactNode } from "react";

type HeroHeaderProps = {
  className?: string;
  children: ReactNode;
};

export default function HeroHeader({ className, children }: HeroHeaderProps) {
  const style = `text-pretty py-4 text-center`;
  return <header className={CN(style, className)}>{children}</header>;
}
