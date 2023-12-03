import CN from '@app/helpers/ClassHelper';
import { ElementType, HTMLProps, ReactNode } from 'react';

const MenuLinkVariants = {
  'plain': 'plain',
  'btnFilled': 'btnFilled',
};
const MenuLinkColors = {
  'Black': 'Black',
  'White': 'White',
};

type MenuLinkVariants = {} & keyof typeof MenuLinkVariants; 
type MenuLinkColors = {} & keyof typeof MenuLinkColors;

type IconProps = {
  className?: string,
  icon: ElementType,
};

export default function MenuIcon(
  {
    className,
    icon : Icon,
  } : IconProps
) {

  return <>
    <Icon className={className}/>  
  </>;
}