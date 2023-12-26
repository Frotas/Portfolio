import { ReactNode } from 'react';

import CN from '@app/helpers/ClassHelper';


type ButtonActionsProps = {
 children?: ReactNode,
 className?: string
};

export default function ButtonActions({ className, children } : ButtonActionsProps) {
  const defaultStyle = '';
  return (
    <section className={CN(defaultStyle, className)}>
      {children}
    </section>
  )
}