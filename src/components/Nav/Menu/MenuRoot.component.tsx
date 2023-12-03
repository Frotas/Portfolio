import CN from '@app/helpers/ClassHelper';
import { HTMLAttributes, ReactNode } from 'react';

type MenuProps = {
  children?: ReactNode,
  className?: string,
} & HTMLAttributes<HTMLElement>;

export default function MenuRoot({ className, children, ...props } : MenuProps) {
  const defaultStyle = 'w-full flex';

  return (
    <nav {...props} className={CN(defaultStyle, className)}>
      {children}
    </nav>
  );
}