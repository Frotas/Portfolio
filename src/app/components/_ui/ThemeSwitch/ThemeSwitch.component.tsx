import { ThemeContext } from "@app/app/context/Theme.context";
import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, useContext, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { HiOutlineMoon } from "react-icons/hi";

type ThemeSwitchProps = {
  className?: string;
  active?: boolean;
} & HTMLAttributes<HTMLInputElement>;

export default function ThemeSwitchComponent({
  className,
  active,
  ...rest
}: ThemeSwitchProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    wrapper: `
      switchWrapper
      table-cell align-middle text-center flex flex-row items-center gap-2
      data-[theme=dark]:[&_.icon]:color-white data-[theme=light]:[&_.icon]:color-black

      [&_:nth-child(2n)]:inline-block [&_:nth-child(2n)]:m-0 [&_:nth-child(2n)]:relative
      
      [&_input[type='checkbox']:checked+.innerLabel]:bg-zinc-600
      [&_input[type='checkbox']:checked+.innerLabel]:text-white
      
      [&_input[type='checkbox']:checked+.innerLabel]:after:content-[attr(data-on)]
      [&_input[type='checkbox']:checked+.innerLabel]:after:left-[4.125rem]
      [&_input[type='checkbox']:checked+.innerLabel]:after:bg-cyprus-900
      [&_input[type='checkbox']:checked+.innerLabel]:after:text-white
      [&_input[type='checkbox']:checked+.innerLabel]:before:content-[attr(data-off)]
      [&_input[type='checkbox']:checked+.innerLabel]:before:left-[1.125rem]
      [&_input[type='checkbox']:checked+.innerLabel]:before:right-auto
    `,
    input: `
      switch w-[3.125rem] h-[1.5625rem] cursor-pointer sr-only z-1
    `,
    label: {
      wrapper: `
        label font-display text-[13pt] text-center
      `,
      innerLabel: `
        innerLabel border border-black/50
        cursor-pointer font-[500]
        block w-[8.57rem] h-[1.87rem] bg-slate-300 text-black rounded-[1.625rem]
        overflow-hidden relative transition-all duration-[.3s] ease-in
        
        after:w-[4.375rem] after:h-[1rem]
        after:content-[attr(data-off)] after:absolute after:top-[.125rem] after:left-[.125rem]
        after:rounded-[2.625rem] after:transition-all after:duration-[.3s] after:ease-out
        after:px-[.125rem] after:w-[4.375rem] after:h-fit after:bg-white after:text-black

        before:content-[attr(data-on)] before:absolute before:top-[.125rem]
        before:right-[1.25rem] before:px-[.125rem]
      `,
    },
    icon: {
      wrapper: `icon inline-block relative top-[-.2rem] text-[14pt]`,
      sun: `sun text-yellow-400 dark:text-black/80`,
      moon: `moon text-black/80 dark:text-[#F0F0F0]`,
    },
  };

  return (
    <>
      <div className={CN(style.wrapper)} data-theme={theme}>
        <i
          className={CN(style.icon.sun, style.icon.wrapper)}
          aria-hidden={true}
        >
          <MdOutlineWbSunny />
        </i>
        <label htmlFor="#themeSwitch" className={CN(style.label.wrapper)}>
          <input
            {...rest}
            id="themeSwitch"
            type="checkbox"
            name="themeSwitch"
            placeholder="Theme Switch"
            className={style.input}
            onChange={toggleTheme}
            value={1}
          />
          <label
            htmlFor="themeSwitch"
            className={CN(style.label.innerLabel)}
            data-on={"Dark"}
            data-off={"Light"}
          ></label>
        </label>
        <i
          className={CN(style.icon.moon, style.icon.wrapper)}
          aria-hidden={true}
        >
          <HiOutlineMoon />
        </i>
      </div>
    </>
  );
}
