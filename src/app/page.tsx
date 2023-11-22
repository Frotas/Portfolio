import Image from 'next/image'
import { ReactNode } from 'react'

export default function Home(): ReactNode {
  return (
    <section className='w-full px-4'>
      <header className='flex flex-col w-full'>
        
        <section className='w-full flex mb-2 justify-start items-start'>
          <div className='w-[70%] flex gap-2 flex-col justify-end items-start text-justify'>
            <h1 className='mb-2 font-title font-normal text-[18pt] uppercase'>Olá,</h1>
            <p className='font-body font-extralight text-[12pt]'>
              sou o Guilherme Augusto, Desenvolvedor Full Stack e
              entusiasta de Segurança da Informação.
            </p>
            <p className="font-body font-extralight text-[12pt]">
              Formado e Desenvolvimento de Sistemas no Centro
              Educacional Paula Souza.
            </p>
          </div>
        </section>
        <div className='m-auto'>
          <Image
              className={
                `border border-RockBlue  rounded-full `
              }
              alt='Foto de Perfil do GitHub'
              src={'https://avatars.githubusercontent.com/u/89676387?v=4'}
              width={160}
              height={160}
            />
        </div>
        <section className='w-full flex mt-2 justify-end items-end'>
          <div className='w-[70%] flex gap-2 flex-col justify-start items-end text-justify'>
          <h1 className='mb-2 font-title font-normal text-[18pt] uppercase'>Citação</h1>
            <p className='font-body font-extralight text-[12pt]'>
              <span className='font-extrabold text-[13pt] text-DarkSlateGray'>“</span>
              Uma mente que se abre a uma nova ideia,
              jamais voltará ao seu tamanho original
              <span className='font-extrabold text-[13pt] text-DarkSlateGray'>„</span>
              <span className='italic font-semibold'> — Albert Einstein </span>
            </p>
          </div>
        </section>
      </header>
      <main>
        <p>MAIN</p>
      </main>
      <footer>
        <p>FOOTER</p>
      </footer>
    </section>
  ) 
}
