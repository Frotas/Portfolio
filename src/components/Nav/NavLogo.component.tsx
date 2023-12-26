import { HTMLProps } from 'react';
import Image from 'next/image';

import CN from '@app/helpers/ClassHelper';


type NavLogoProps = {
  className?: string,
  width?: number,
  height?: number,
} & HTMLProps<HTMLImageElement | null>;

export default function NavLogo({className, width, height, ...props }: NavLogoProps) {
  const defaultStyle = '';
  return <>
    <Image
        className={CN(defaultStyle, className)}
        src={`${props.src}` || '/'}
        alt={`${props.alt}` || ' '}
        width={width || 120}
        height={height || 120}
    />
  </>;
}