import { ReactNode } from "react";

import CN from "@app/helpers/ClassHelper";

const TitleVariants = {
  'default': 'default',
  'card': 'card',
  'popup': 'popup',
  'article': 'article',
} as const;
type TitleVariants = keyof typeof TitleVariants;

export default function Title(
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
    'default': ` font-bold text-[20pt] dark:text-White`,
    'card': ` `,
    'popup': ` `,
    'article': ` `,
  } as const;
  return <>
    <h2 className={CN(TitleVariants[style], className)}>
      {children}
    </h2>
  </>
}
