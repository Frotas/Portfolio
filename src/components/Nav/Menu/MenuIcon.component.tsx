import { ElementType } from "react";

import CN from "@app/helpers/ClassHelper";

const MenuLinkVariants = {
  plain: "plain",
  btnFilled: "btnFilled",
};
const MenuLinkColors = {
  Black: "Black",
  White: "White",
};

type MenuLinkVariants = {} & keyof typeof MenuLinkVariants;
type MenuLinkColors = {} & keyof typeof MenuLinkColors;

type IconProps = {
  className?: string;
};

export default function MenuIcon({ className }: IconProps) {
  const style = {
    menuDiv: `w-fit h-fit p-2`,
    menuCheckbox: `hover:bg-red-300 w-fit h-fit`,
    menuPath: `flex flex-col p-0 m-0`,
  };
  return (
    <>
      <div className={CN(style.menuDiv)}>
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox-menu"
          className={CN(style.menuCheckbox)}
        />
        <label
          id="checkbox-label"
          htmlFor="checkbox-menu"
          className={CN(style.menuPath)}
        >
          <span className="checkbox-item"></span>
          <span className="checkbox-item"></span>
          <span className="checkbox-item"></span>
        </label>
      </div>
    </>
  );
}
