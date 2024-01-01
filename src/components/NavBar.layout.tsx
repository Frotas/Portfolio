"use client";

import {
  ButtonHTMLAttributes,
  EventHandler,
  MouseEventHandler,
  TouchEventHandler,
  useState,
} from "react";
import { MdClose, MdMenu } from "react-icons/md";

import Navigation from "@app/components/Nav";
import Menu from "@app/components/Nav/Menu";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  function toggleMenu(event?: TouchEvent | MouseEvent | undefined): void {
    if (event?.type === "touchstart") event?.preventDefault();
    setOpen(!isOpen);
    const menuRoot = document.getElementById("menuRoot");
    const btn = document.querySelector("#ToggleMenu");
    btn?.setAttribute("aria-expanded", `${!btn.getAttribute("aria-expanded")}`);
    menuRoot?.classList.toggle("active");
  }
  const menuStyle = {
    transition: `
      transition-all
      ease-in-out
      duration-300
    `,
    nav: `
      w-full
      dark:bg-Cyprus
      bg-DarkSlateGray
    `,
    menuRoot: `flex flex-row items-center justify-center hidden`,
    menuList: ` 
    `,
    toggleButton: `md:hidden md:invisible`,
  };
  return (
    <Navigation.Root className={`${menuStyle.nav} ${menuStyle.transition}`}>
      <Navigation.Logo
        src=""
        alt="Logo"
        width={64}
        height={64}
        className={`${menuStyle.transition}`}
      />
      <Menu.Toggle onClick={() => toggleMenu} onTouchStart={() => toggleMenu}>
        - - -
      </Menu.Toggle>
      <Menu.Root id="menuRoot" className={menuStyle.menuRoot}>
        <Menu.List id="menuList" className={menuStyle.menuList}>
          <Menu.Item
            className={menuStyle.transition}
            variant="plain"
            color="RockBlue"
          >
            <Menu.Link href="#">Sobre</Menu.Link>
          </Menu.Item>
          <Menu.Item
            className={menuStyle.transition}
            variant="plain"
            color="RockBlue"
          >
            <Menu.Link href="#">Habilidades</Menu.Link>
          </Menu.Item>
          <Menu.Item
            className={menuStyle.transition}
            variant="plain"
            color="RockBlue"
          >
            <Menu.Link href="#">Projetos</Menu.Link>
          </Menu.Item>
          <Menu.Item
            className={menuStyle.transition}
            variant="filled"
            color="RockBlue"
          >
            <Menu.Link href="#">Solicitar Orçamento</Menu.Link>
          </Menu.Item>
        </Menu.List>
      </Menu.Root>
    </Navigation.Root>
  );
}
