"use client";
import CN from "@app/helpers/ClassHelper";
import { useState } from "react";

type ToggleThemeComponent = {
  className?: string;
};

export default function ToggleThemeComponent(props: ToggleThemeComponent) {
  const [theme, setTheme] = useState<boolean>(false);
  
  const ToggleTheme = () => {
    const html = document.querySelector<HTMLHtmlElement>("html");
    const toggle = document.querySelector<HTMLInputElement>("#ToggleTheme");

    if (html?.classList?.contains("dark") && theme) {
      html?.classList?.remove("dark");
      toggle!.checked = !theme;
    } else {
      html?.classList?.add("dark");
      toggle!.checked = !theme;
    }
    setTheme(!theme);
  };

  const style = {
    root: `flex relative items-center justify-center`,
    switch: `sr-only peer`,
    toggle: `
      w-11 h-6 bg-gray-200 peer-focus:outline-none
      peer-focus:ring-4 peer-focus:ring-blue-300
      dark:peer-focus:ring-blue-800 rounded-full peer
      dark:bg-gray-700 peer-checked:after:translate-x-full
      rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white
      after:content-[''] after:absolute after:top-[2px] after:end-[22px]
      after:bg-white after:border-gray-300 after:border after:rounded-full
      after:h-5 after:w-5 after:transition-all dark:border-gray-600
      peer-checked:bg-blue-600 cursor-pointer
    `,
    textLabel: `transition-all ms-3 text-sm font-medium text-gray-100 dark:text-gray-300`,
  };

  const { className } = props;

  return (
    <>
      <div className={CN(style.root, className)}>
        <label
          htmlFor="ToggleTheme"
          id="ToggleThemeLabel"
          className={style.textLabel}
        >
          {!theme && "Light Theme"}
          {theme && "Dark Theme"}
        </label>
        <input
          type="checkbox"
          id="ToggleTheme"
          name="ToggleTheme"
          onChange={ToggleTheme}
          className={CN(style.switch)}
          readOnly
        />
        <div
          id="ToggleThemeSwitch"
          className={style.toggle}
          onClick={ToggleTheme}
        ></div>
      </div>
    </>
  );
}
