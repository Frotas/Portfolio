import { ReactNode } from 'react';
import CN from '@app/helpers/ClassHelper';

type NavBarProps = {
  className?: string,
  children: ReactNode
};

export default function NavRoot( { className, children } : NavBarProps ) {
  const defaultStyle = `
    w-full
    grid grid-cols-2 grid-rows-2
    justify-between items-center
    px-4 py-2
  `;
  return (
    <header className={CN(defaultStyle, className)}>
      {children}
    </header>
  )
}
