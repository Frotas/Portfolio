"use client";

import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { DetailedHTMLProps, type HTMLAttributes, RefAttributes, forwardRef, useState } from "react";

import {
  Button,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(!menuState);
  };
  return (
    <NavigationMenu
      ref={ref}
      role="navigation"
      data-collapse={menuState}
      className={cn(
        "sticky top-0 flex h-fit w-full max-w-screen-2xl justify-evenly bg-background/35 py-4 text-black shadow-black/25 shadow-md backdrop-blur-sm dark:text-white",
        "md:top-2 md:left-12 md:w-max md:flex-col md:gap-12 md:bg-transparent md:px-6 md:py-12 md:shadow-none md:backdrop-blur-none",
        "transition-[all_300ms_ease-in-out]",
        className,
      )}
      {...props}
    >
      <header className="dark:text-white">
        <Link href={"/"}>
          <Image
            className="max-h-10 max-w-10 transition-all duration-500 ease-linear hover:scale-110 md:max-h-[62px] md:max-w-[62px] md:hover:scale-150"
            src={logo}
            alt={"Guilherme Sales Desenvolvedor - GS DEV"}
          />
        </Link>
        <Button
          aria-expanded={menuState}
          aria-controls="navigationBar"
          aria-label={menuState ? "Recolher menu de navegação" : "Expandir menu de navegação"}
          onClick={toggleMenu}
          size={"icon"}
          variant={"outline"}
          className={
            "md:-right-7 sr-only md:absolute md:top-2 md:h-8 md:w-8 md:bg-oxford-blue-600 md:transition-colors md:duration-500 md:ease-linear md:hover:bg-oxford-blue-500"
          }
        >
          {(!menuState && <DoubleArrowRightIcon aria-hidden />) || <DoubleArrowLeftIcon aria-hidden />}
        </Button>
      </header>
      <NavigationMenuList id="navigationMenuList" className="flex md:flex-col md:gap-4" role="menu">
        {linkTree.map(({ anchor, text, icon: Icon, tooltip }, index) => {
          return (
            <NavigationMenuItem
              key={index + 1}
              role="menuitem"
              className={cn(
                navigationMenuTriggerStyle(),
                "w-full bg-transparent hover:bg-bay-of-many-700 hover:text-white",
              )}
            >
              {tooltip?.show && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link href={anchor} legacyBehavior passHref>
                        <NavigationMenuLink className="flex flex-col items-center gap-3 font-serif text-[10pt]">
                          <i>{Icon}</i>
                          {menuState && text}
                        </NavigationMenuLink>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent role="tooltip" className="bg-[hsl(225_12%_94%)] font-serif text-black">
                      {tooltip?.text}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {!tooltip?.show && (
                <Link href={anchor} legacyBehavior passHref>
                  <NavigationMenuLink className="flex w-full gap-3 font-serif text-[10pt]">
                    <i>{Icon}</i>
                    {menuState && text}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
      <footer className="">
        <ThemeToggle
          classList={{
            button: "bg-oxford-blue-600/35",
            dropdown: "bg-black/35 backdrop-blur-md text-black",
            dropdownItem: "focus:bg-black/80 focus:text-white dark:focus:bg-white/80 dark:focus:text-black",
          }}
        />
      </footer>
    </NavigationMenu>
  );
});
