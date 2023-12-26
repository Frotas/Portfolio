import { ReactNode } from 'react';
import CN from '@app/helpers/ClassHelper';


type NavBarProps = {
  className?: string,
  children: ReactNode
};

export default function NavRoot( { className, children } : NavBarProps ) {
  const headerStyle = `
    w-screen
    flex flex-wrap
    justify-between items-center
    md:justify-center md:flex-nowrap
    px-4 py-2 md:px-8 md:py-4
  `;
  return (
    <header className={`${CN(headerStyle, className)}`}>
      {children}
    </header>
  )
}
