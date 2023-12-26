import { ButtonHTMLAttributes, ReactNode } from 'react';

import CN from '@app/helpers/ClassHelper';


type ButtonProps = {
  children?: ReactNode,
  className?: string,
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonRoot(
  { children, className, ...props } : ButtonProps
) {
  const defaultStyle = 'w-full bg-Cyprus dark:bg-DarkSlateGray rounded-full py-2 px-8';
  return (
    <button {...props} className={CN(defaultStyle, className)}>
      {children}
    </button>
  )
}