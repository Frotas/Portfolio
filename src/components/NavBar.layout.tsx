'use client'

import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';

import Navigation from '@app/components/Nav';
import Menu from '@app/components/Nav/Menu';
import Button from '@app/components/Button'

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  }
  return (
    <Navigation.Root className={
      `bg-Cyprus md:flex md:flex-row md:justify-center md:items-center md:px-8 md:py-4
        ${!isOpen ? 'grid-rows-1' : 'grid-rows-[2_minmax(0, 1fr)]'}`
    }>
      <Navigation.Logo src='' alt='Logo' width={64} height={64} />
      <div className='flex justify-end'>
        <Button.Toggle
          type='button'
          className={
            `transition duration-900 ease-in-out
            rounded-md p-2
            focus:outline-none focus:bg-DarkSlateGray/30
            md:hidden md:invisible`
          }
          onClick={toggleMenu}
          aria-label='Menu'
          aria-expanded='false'
        >
          {isOpen ?
            (<MdClose className='text-DarkSlateGray' />)
            : (<MdMenu className='text-DarkSlateGray' />)}
        </Button.Toggle>
      </div>
      <Menu.Root
        className='hidden invisible md:visible md:block'>
        <Menu.List id='menu' className='md:flex md:justify-end md:items-center'>
          <Menu.Link className='transition duration-900 ease-in-out no-underline hover:bg-slate-600/30 md:w-[15%] md:flex md:justify-center md:items-center' variant='plain' color='RockBlue'>
            Sobre
          </Menu.Link>
          <Menu.Link className='transition duration-900 ease-in-out no-underline hover:bg-slate-600/30 md:w-[15%] md:flex md:justify-center md:items-center' variant='plain' color='RockBlue'>
            Habilidades
          </Menu.Link>
          <Menu.Link className='transition duration-900 ease-in-out no-underline hover:bg-slate-600/30 md:w-[15%] md:flex md:justify-center md:items-center' variant='plain' color='RockBlue'>
            Projetos
          </Menu.Link>
          <Menu.Link className='transition duration-900 ease-in-out md:w-[15%] md:flex md:justify-center md:items-center' variant='btnFilled' color='RockBlue'>
            Solicitar Orçamento
          </Menu.Link>
        </Menu.List>
      </Menu.Root>
      {isOpen && (
        <Menu.Root className={`md:hidden md:invisible col-span-2`}>
          <Menu.List id='menu' className='justify-center items-center py-8'>
            <Menu.Link className='transition duration-900 ease-in-out w-[50%] no-underline hover:bg-slate-600/30' variant='plain' color='RockBlue'>
              Sobre
            </Menu.Link>
            <Menu.Link className='transition duration-900 ease-in-out w-[50%] no-underline hover:bg-slate-600/30' variant='plain' color='RockBlue'>
              Habilidades
            </Menu.Link>
            <Menu.Link className='transition duration-900 ease-in-out w-[50%] no-underline hover:bg-slate-600/30' variant='plain' color='RockBlue'>
              Projetos
            </Menu.Link>
            <div className='pt-8 w-[70%]'>
              <Menu.Link className='transition duration-900 ease-in-out ' variant='btnFilled' color='RockBlue'>
                Solicitação de Orçamento
              </Menu.Link>
            </div>
          </Menu.List>
        </Menu.Root>
      )}
    </Navigation.Root>
  )
}