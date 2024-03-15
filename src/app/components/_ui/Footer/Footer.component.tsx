"use client";
import Image, { ImageProps } from "next/image";
import CN from "@app/helpers/ClassHelper";
import { Menu, Close } from "@app/app/components/_ui/Assets";
import { Button } from "../Button";
import { HTMLAttributes, ReactNode, SyntheticEvent, useState } from "react";
import Link from "next/link";

type FooterComponentProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export default function FooterComponent({
  className,
  children,
  ...rest
}: FooterComponentProps) {
  const style = `
    h-28 font-display text-white bg-cyprus-500/70 flex flex-row flex-wrap
    justify-center items-center tracking-[.12rem]
  `;
  return (
    <footer {...rest} className={CN(style, className)}>
      {children}
    </footer>
  );
}
