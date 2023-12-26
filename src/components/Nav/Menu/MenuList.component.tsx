import CN from '@app/helpers/ClassHelper';
import { HTMLAttributes, ReactNode } from 'react';

type MenuListProps = {
  className?: string,
  children?: ReactNode,
} & HTMLAttributes<HTMLUListElement>;

export default function MenuList({className, children, ...props}: MenuListProps) {
  const defaultStyle: string = 'w-full flex flex-col gap-4 md:flex-row md:gap-2';

  return (
    <ul 
      {...props}
      className={CN(defaultStyle, className)
    }>
      {children}
    </ul>
  );

}