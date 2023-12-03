import CN from '@app/helpers/ClassHelper';
import { HTMLProps, ReactNode } from 'react';

const MenuLinkVariants = {
  'plain': 'plain',
  'btnFilled': 'btnFilled',
  'btnOutlined': 'btnOutlined',
} as const;
const MenuLinkColors = {
  'Black': 'Black',
  'White': 'White',
  'Cyprus': 'Cyprus',
  'RockBlue': 'RockBlue',
  'DarkGray': 'DarkGray',
  'DeepDark': 'DeepDark',
} as const;

type MenuLinkVariants = {} & keyof typeof MenuLinkVariants; 
type MenuLinkColors = {} & keyof typeof MenuLinkColors;

type LiProps = {
  className?: string,
  color?: MenuLinkColors,
  variant?: MenuLinkVariants,
  children?: ReactNode,
} & HTMLProps<HTMLLIElement> & HTMLProps<HTMLAnchorElement>;

export default function MenuLink(
  {
    color = 'White',
    variant = 'plain',
    className,
    children,
    ...props
  } : LiProps
) {
  const defaultStyleList = `
    flex
    px-4 py-2
    rounded-full
    focus:outline-none
    focus:bg-slate-600/30`;
  const defaultStyleLink = `
    w-full
    flex gap-2
    bg-transparent
    focus:outline-none
    text-center items-center justify-center`;
  const ListVariants = {
    'btnFilled': {
      'White': 'bg-White hover:!bg-white/25 text-black hover:text-white',
      'Black': 'bg-Black hover:!bg-black/25 text-white hover:text-black',
      'Cyprus': 'bg-Cyprus hover:!bg-Cyprus/35 text-white hover:text-black',
      'RockBlue': 'bg-RockBlue hover:!bg-RockBlue/25 text-white hover:text-black',
      'DarkGray': 'bg-DarkSlateGray hover:!bg-DarkSlateGray/60 text-white hover:text-black',
      'DeepDark': 'bg-TrappedDarkness hover:!bg-TrappedDarkness/25 text-white hover:text-black',
    },
    'btnOutlined': {
      'Black': 'bg-transparent border-2 border-White hover:bg-black/25 text-White hover:text-black',
      'White': 'bg-transparent border-2 border-Black hover:bg-white/25 text-Black hover:text-white',
      'Cyprus': 'bg-transparent border-2 border-Cyprus hover:bg-Cyprus/35 text-Cyprus hover:text-TrappedDarkness',
      'RockBlue': 'bg-transparent border-2 border-RockBlue hover:border-none hover:bg-RockBlue/30 text-RockBlue hover:text-DarkSlateGray',
      'DarkGray': 'bg-transparent border-2 border-DarkSlateGray hover:bg-DarkSlateGray/60 text-DarkSlateGray hover:text-TrappedDarkness',
      'DeepDark': 'bg-transparent border-2 border-TrappedDarkness hover:bg-TrappedDarkness/60 text-TrappedDarkness hover:text-white',
    },
    'plain': {
      'Black': 'bg-transparent text-White underline hover:text-White/35',
      'White': 'bg-transparent text-Black underline hover:text-Black/35',
      'Cyprus': 'bg-transparent text-Cyprus underline hover:text-Cyprus/35',
      'RockBlue': 'bg-transparent text-RockBlue underline hover:text-RockBlue/35',
      'DarkGray': 'bg-transparent text-DarkSlateGray underline hover:text-DarkSlateGray/35',
      'DeepDark': 'bg-transparent text-TrappedDarkness underline hover:text-TrappedDarkness/35',
    }
  } as const;

  return (
    <li className={CN(defaultStyleList, ListVariants[variant][color], className)}>
      <a className={CN(defaultStyleLink)} href={props.href || '#'}>
        {children}
      </a>
    </li>
  );
}