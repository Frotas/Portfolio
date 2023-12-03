'use client'
import CN from '@app/helpers/ClassHelper';

import { HTMLAttributes, ReactNode } from 'react'

type MenuToggle = {
  className?: string,
  children?: ReactNode,
} & HTMLAttributes<HTMLButtonElement>;

export default function MenuToggle({className, children, ...props} : MenuToggle) {
  const defaultStyle = '';
  return <>
    <button
      {...props}
      onClick={props.onClick}
      className={CN(defaultStyle, className)}
    >
      {children}
    </button>
  </>
}