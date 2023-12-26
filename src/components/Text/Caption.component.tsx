import { ReactNode } from "react";

import CN from "@app/helpers/ClassHelper";
import Text from ".";

export default function Caption({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const style = {
    default: `font-[16pt] font-[400] text-White `,
    darkMode: `dark:text-White`,
  };
  const { Subtitle } = Text;
  return (
    <>
      <figcaption className={CN(className)}>
        <Subtitle className={`${style.default} ${style.darkMode}`}>{children}</Subtitle>
      </figcaption>
    </>
  );
}
