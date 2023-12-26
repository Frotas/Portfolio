import { ReactNode } from "react";

import CN from "@app/helpers/ClassHelper";

const TitleVariants = {
  'default': 'default',
  'card': 'card',
  'popup': 'popup',
  'article': 'article',
} as const;
type TitleVariants = keyof typeof TitleVariants;

export default function Paragraph(
  {
    className,
    children,
    style = 'default'
  }: {
    className?: string,
    children?: ReactNode,
    style?: TitleVariants
  }
) {
  const TitleVariants = {
    'default': ` font-[18pt] font-semibold dark:text-White`,
    'card': ` font-[18pt] font-semibold `,
    'popup': ` font-[18pt] font-semibold `,
    'article': ` font-[18pt] font-semibold `,
  } as const;
  return <>
    <h3 className={CN(TitleVariants[style], className)}>
      {children}
    </h3>
  </>
}
