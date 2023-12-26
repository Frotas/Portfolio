'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react';
import CN from '@app/helpers/ClassHelper';



type ButtonActionProps = {
  className?: string,
  children?: ReactNode,
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonAction({children, className, ...props}: ButtonActionProps) {
  const defaultStyle = '';
  return (
    <button {...props} className={CN(defaultStyle, className)}>
      {children}
    </button>
  );
}