"use client";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import CN from "@app/helpers/ClassHelper";
import { Menu, Close } from "@app/app/components/_ui/Assets";
import { Button } from "../Button";
import {
  HTMLAttributes,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { ThemeSwitch } from "../ThemeSwitch";

type NavigationComponentProps = {
  className?: string;
  options?: {
    style: {
      nav: string;
      navList: string;
      navItem: string;
      navLink: string;
      btnMenu: string;
    };
  };
} & HTMLAttributes<HTMLElement> &
  ImageProps;

export default function NavigationComponent({
  className,
  options,
  ...rest
}: NavigationComponentProps) {
  const { ...image } = rest;
  const [menuState, setMenuState] = useState<boolean>(false); // Mobile Menu State
  const [active, setActive] = useState<string | null>("about"); // Navigation Link Style State

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(
          anchor.getAttribute("href") as string
        ) as HTMLElement;
        const headerOffset = 188; // Ajuste este valor para o tamanho do seu cabeçalho
        const elementPosition = target ? target?.offsetTop : 0;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    });
  }, [active]);

  const openMenu = (e: SyntheticEvent) => {
    e.preventDefault;
    setMenuState(!menuState);
    const html = document.querySelector("html") as HTMLElement;
    html.setAttribute("data-menu-open", `${!menuState}`);
  };

  const navTabHandleClick = (item: string) => {
    const menuClose = document.querySelector(
      "button#btn-menu"
    ) as HTMLButtonElement;
    setMenuState(false);
    setActive(item!);
  };

  const style = {
    wrapper: `
      wrapper-navigation flex flex-row items-center justify-between gap-12 px-4 py-2 sticky
      top-0 w-full z-[100] bg-zinc-500/25 backdrop-filter backdrop-blur-[10px] shadow
      shadow-black/20
      [&_:nth-child(1)]:z-[101] [&_:nth-child(3)]:z-[101]
    `,
    nav: `
      navigation bg-darkBlue-600/90
      w-[100vw] h-[100vh] flex flex-col-reverse items-center justify-center gap-2 absolute
      top-0 right-[-100px] transition-transform duration-1000 ease-in

      data-[open=true]:[&_>*]:z-[100]
      data-[open=true]:right-0
      data-[open=true]:translate-x-0
      data-[open=false]:translate-x-full
    `,
    list: `
      navigation-list
      w-full h-fit divide-y divide-darkSlateGray/35
      flex flex-col items-center justify-center
    `,
    item: `
      navigation-list-item
      w-[50%] text-center text-white py-4 hover:bg-rockBlue-600/50
      hover:font-semibold hover:first:rounded-t-lg hover:last:rounded-b-lg 
      
      data-[selected=true]:bg-cyanBlue-600/70 data-[selected=true]:first:rounded-t-lg
      data-[selected=true]:last:rounded-b-lg data-[selected=true]:first:hover:rounded-t-lg
      data-[selected=true]:last:hover:rounded-b-lg
    `,
    link: `navigation-list-item-link block w-full h-full py-4`,
    button: `wrapper-navigation-btnMenu h-fit p-3`,
  };

  const NavTab = ({
    className,
    children,
    active,
    ...rest
  }: {
    className?: string;
    children: ReactNode;
    active: boolean | undefined;
  } & HTMLAttributes<HTMLLIElement>) => (
    <li {...rest} data-selected={active} className={CN(className)}>
      {children}
    </li>
  );

  return (
    <header {...rest} className={CN(style.wrapper, className)}>
      <div id="nav-brand">
        <Image {...image} alt="GS.DEV Logo" />
      </div>
      <nav
        data-open={menuState}
        id="navbar"
        className={CN(style.nav, options?.style.nav)}
      >
        <ul className={CN(style.list, options?.style.navList)}>
          <NavTab
            active={active === "about"}
            onClick={(e) => navTabHandleClick("about")}
            className={CN(style.item, options?.style.navItem)}
          >
            <Link
              aria-label="Link de Navegação - Seção Sobre"
              className={CN(style.link, options?.style.navLink)}
              href="#about"
              scroll={true}
            >
              Sobre
            </Link>
          </NavTab>
          <NavTab
            active={active === "services"}
            onClick={(e) => navTabHandleClick("services")}
            className={CN(style.item, options?.style.navItem)}
          >
            <Link
              aria-label="Link de Navegação - Seção de Serviços"
              className={CN(style.link, options?.style.navLink)}
              href="#services"
              scroll={true}
            >
              Serviços
            </Link>
          </NavTab>
          <NavTab
            active={active === "hardSkills"}
            onClick={(e) => navTabHandleClick("hardSkills")}
            className={CN(style.item, options?.style.navItem)}
          >
            <Link
              aria-label="Link de Navegação - Seção de Habilidades Técnicas"
              className={CN(style.link, options?.style.navLink)}
              href="#hardSkills"
              scroll={true}
            >
              Habilidades
            </Link>
          </NavTab>
          <NavTab
            active={active === "contact"}
            onClick={(e) => navTabHandleClick("contact")}
            className={CN(style.item, options?.style.navItem)}
          >
            <Link
              aria-label="Link de Navegação - Seção de Contato"
              className={CN(style.link, options?.style.navLink)}
              href="#contact"
              scroll={true}
            >
              Meios de Contato
            </Link>
          </NavTab>
        </ul>
        <ThemeSwitch />
      </nav>
      <Button
        type="button"
        id="btn-menu"
        className={CN(style.button, options?.style.btnMenu)}
        variant="outlined"
        color="blue"
        onClick={openMenu}
        title="Mobile menu button"
      >
        {!menuState && <Menu />}
        {menuState && <Close />}
      </Button>
    </header>
  );
}
