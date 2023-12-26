import { HTMLProps, ReactNode } from 'react';

import CN from '@app/helpers/ClassHelper';

type MenuLinkProps = {
  className?: string,
  children?: ReactNode,
} & HTMLProps<HTMLLIElement> & HTMLProps<HTMLAnchorElement>;

export default function MenuLink(
  {
    className,
    children,
    ...props
  }: MenuLinkProps
) {
  const menuLinkStyle = `
    py-2
    px-4
    w-max
  `;
  return (
    <a className={CN(menuLinkStyle, className)} href={props.href || '#'}>
      {children}
    </a>
  );
}