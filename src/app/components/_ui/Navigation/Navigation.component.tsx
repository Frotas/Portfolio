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
} & ImageProps;

export default function NavigationComponent({
  className,
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
    const body = document.querySelector("body") as HTMLElement;
    body.setAttribute("data-menu-open", `${!menuState}`);
  };

  const navTabHandleClick = (item: string) => {
    setActive(item!);
    const menuClose = document.querySelector(
      "button#btn-menu"
    ) as HTMLButtonElement;
    menuClose.click();
    setMenuState(!menuState);
  };

  const style = {
    wrapper: `
      wrapper-navigation
      w-full flex flex-row items-center justify-between gap-12 px-4 py-2 z-[100] bg-zinc-500/25
      backdrop-filter backdrop-blur-[10px] shadow shadow-black/20 sticky top-0
      md:!px-16 md:!py-4 
      [&_:nth-child(1)]:z-[101] [&_:nth-child(3)]:z-[101]
    `,
    nav: `
      navigation bg-darkBlue-600/90
      w-[100vw] h-[100vh] absolute top-0 right-0 transition-transform duration-1000 ease-in
      flex flex-col-reverse items-center justify-center gap-2
      md:!w-full md:!h-full md:!translate-x-0 md:!relative md:!bg-transparent
      md:!flex-row md:!gap-8
      
      data-[open=true]:[&_>*]:z-[100]
      data-[open=true]:translate-x-0
      data-[open=false]:translate-x-full
      `,
    list: `
      navigation-list
      w-full h-fit divide-y divide-darkSlateGray/35
      flex flex-col items-center justify-center
      
      md:!h-fit md:!flex-row md:justify-evenly md:!divide-y-0 md:divide-x-2
      md:border md:border-2 md:m-auto md:border-darkSlateGray/35 md:rounded-full
    `,
    item: `
      navigation-list-item
      w-[50%] text-center text-white py-4 hover:bg-rockBlue-500/70 hover:text-black
      hover:font-semibold hover:first:rounded-t-lg hover:last:rounded-b-lg 
      
      md:w-full md:last:!rounded-r-full md:first:!rounded-l-full md:!text-black md:hover:!text-white
      md:hover:last:!rounded-r-full md:hover:first:!rounded-l-full md:!py-2
      
      data-[selected=true]:bg-cyanBlue-500/70 data-[selected=true]:first:rounded-t-lg
      data-[selected=true]:last:rounded-b-lg data-[selected=true]:first:hover:rounded-t-lg
      data-[selected=true]:last:hover:rounded-b-lg data-[selected=true]:md:!last:rounded-r-full
      data-[selected=true]:md:!first:rounded-l-full data-[selected=true]:md:!text-white
    `,
    link: `navigation-list-item-link block w-full h-full py-4 md:!py-0`,
    button: `wrapper-navigation-btnMenu h-fit p-3 md:sr-only`,
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
    <li data-selected={active} {...rest} className={CN(style.item, className)}>
      {children}
    </li>
  );

  return (
    <header className={style.wrapper}>
      <div id="nav-brand">
        <Image {...image} alt="GS.DEV Logo" />
      </div>
      <nav data-open={menuState} id="navbar" className={style.nav}>
        <ul className={CN(style.list)}>
          <NavTab
            active={active === "about"}
            onClick={(e) => navTabHandleClick("about")}
          >
            <Link
              aria-label="Link de Navegação - Seção Sobre"
              className={style.link}
              href="#about"
              scroll={true}
            >
              Sobre
            </Link>
          </NavTab>
          <NavTab
            active={active === "services"}
            onClick={(e) => navTabHandleClick("services")}
          >
            <Link
              aria-label="Link de Navegação - Seção de Serviços"
              className={style.link}
              href="#services"
              scroll={true}
            >
              Serviços
            </Link>
          </NavTab>
          <NavTab
            active={active === "hardSkills"}
            onClick={(e) => navTabHandleClick("hardSkills")}
          >
            <Link
              aria-label="Link de Navegação - Seção de Habilidades Técnicas"
              className={style.link}
              href="#hardSkills"
              scroll={true}
            >
              Habilidades
            </Link>
          </NavTab>
          <NavTab
            active={active === "contact"}
            onClick={(e) => navTabHandleClick("contact")}
          >
            <Link
              aria-label="Link de Navegação - Seção de Contato"
              className={style.link}
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
        className={style.button}
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
