'use client'

import Image from "next/image";

import NavBar from '@app/components/NavBar.component'

import { TfiMenu, TfiClose } from 'react-icons/tfi'

type Props = {
  device: 'mobile' | 'tablet' | 'desktop'
}

function openMenu() {
  const iMenu = window.document.querySelector('#i-menu');
  iMenu?.addEventListener('click', (event) => {
     console.log(event.target);
     document.querySelector('#navbar')?.classList.remove('hidden','invisible')
     document.querySelector('#i-close')?.classList.remove('hidden','invisible')
     iMenu?.classList.add('hidden','invisible')
   })
   return true;
}

function closeMenu() {
   const iClose = window.document.querySelector('#i-close');
   iClose?.addEventListener(
    'click', (event) => {
      document.querySelector('#i-menu')?.classList.remove('hidden','invisible')
      document.querySelector('#navbar')?.classList.add('hidden','invisible')
      iClose?.classList.add('hidden','invisible')
    }
  )
  return false;
}

export default function Header({ device }: Props) {
  
  return <>
    <header className={`
      flex
      flex-col

      w-full
      h-fit

      items-center
      justify-center
      
      p-4
    `}>
      <div className={`
        flex
        flex-row

        w-full
        h-fit

        justify-between
        items-center
      `}>
        <Image alt="logo" src={''} width={64} height={64} />

        <TfiMenu id='i-menu' onClick={openMenu} />
        <TfiClose id='i-close' className='hidden invisible' onClick={closeMenu} />
      </div>
      <div
        id="navbar"
        className={`
          hidden invisible
          absolute right-0 top-20
          backdrop-blur-sm
          bg-White/20
        `}
      >
        <NavBar device="mobile" />
      </div>
    </header>
  </>
}
