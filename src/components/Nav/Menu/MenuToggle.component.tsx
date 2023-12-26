'use client'
import { HTMLAttributes, ReactNode } from 'react'

import CN from '@app/helpers/ClassHelper';


type MenuToggle = {
  className?: string,
  children?: ReactNode,
} & HTMLAttributes<HTMLButtonElement>;

export default function MenuToggle({className, children, ...props} : MenuToggle) {
  const defaultStyle = 'bg-white p-2 rounded-lg text-center';
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