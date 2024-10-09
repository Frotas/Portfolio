"use client";

import Image from "next/image";
import Link from "next/link";
import { DetailedHTMLProps, type HTMLAttributes, RefAttributes, forwardRef, useState } from "react";

import {
  Button,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Paragraph,
  ThemeToggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  navigationMenuTriggerStyle,
} from "@app/components/ui";
import { cn } from "@app/lib/utils";
import logo from "@app/resources/images/logo-160x160.png";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";

export type LinkTree = {
  text: string;
  anchor: string;
  icon?: JSX.Element;
  tooltip?: {
    show: boolean;
    text: string;
  };
};

type NavigationBarProps = {
  linkTree: LinkTree[];
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Navigation = forwardRef<
  HTMLElement,
  Omit<NavigationBarProps & NavigationMenuProps & RefAttributes<HTMLElement>, "ref">
>(({ className, linkTree, ...props }, ref) => {
  return (
    <NavigationMenu
      ref={ref}
      role="navigation"
      className={cn(
        "sticky top-0 flex w-full max-w-screen-2xl justify-between bg-background/35 p-4 text-black shadow-black/25 shadow-md backdrop-blur-sm dark:text-white",
        "md:top-5 md:left-0 md:w-max md:flex-col md:gap-12 md:bg-transparent md:px-6 md:py-12 md:shadow-none md:backdrop-blur-none",
        "transition-[all_300ms_ease-in-out]",
        className,
      )}
      {...props}
    >
      <header className="dark:text-white">
        <Link href={"/"} role="link">
          <Image
            className="max-h-10 max-w-10 transition-all duration-500 ease-linear hover:scale-110 md:max-h-[62px] md:max-w-[62px] md:hover:scale-150"
            src={logo}
            alt={"Guilherme Sales Desenvolvedor - GS DEV Logo"}
            role="img"
            placeholder="blur"
          />
        </Link>
      </header>
      <NavigationMenuList id="navigationMenuList" className="flex md:flex-col md:gap-4" role="menu">
        {linkTree.map(({ anchor, text, icon: Icon, tooltip }, index) => {
          return (
            <NavigationMenuItem
              key={index + 1}
              role="menuitem"
              className={cn(navigationMenuTriggerStyle(), "w-full bg-transparent hover:text-white")}
            >
              {tooltip?.show && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link href={anchor} aria-label={text} role="link" legacyBehavior passHref>
                        <NavigationMenuLink
                          role="link"
                          className="flex flex-col items-center gap-3 font-serif text-[10pt]"
                        >
                          <i>{Icon}</i>
                          <Paragraph className="sr-only text-md">{text}</Paragraph>
                        </NavigationMenuLink>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent role="tooltip" className="font-serif text-black">
                      {tooltip?.text}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {!tooltip?.show && (
                <Link href={anchor} legacyBehavior passHref>
                  <NavigationMenuLink aria-label={text} className="flex w-full gap-3 font-serif text-[10pt]">
                    <i>{Icon}</i>
                    <Paragraph className="sr-only text-md">{text}</Paragraph>
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
      <footer className="">
        <ThemeToggle />
      </footer>
    </NavigationMenu>
  );
});
