import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import CN from "@app/helpers/ClassHelper";

type SubtitleComponentProps = {
  className?: string;
  children?: ReactNode;
};

export default function Paragraph(props: SubtitleComponentProps) {
  const { className, children } = props;
  const style = `font-[18pt] font-semibold dark:text-White`;
  return (
    <>
      <h3 className={CN(style, className)}>{children}</h3>
    </>
  );
}
