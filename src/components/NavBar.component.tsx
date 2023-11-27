import NavLink from "@app/components/NavLink.component";

type props = {
  device: 'mobile' | 'tablet' |'desktop',
}

export default function NavBar({device}: props) {
  return <>
    <nav
      className={`
        flex
        items-center
        justify-center
        bg-Cyprus/80
        w-screen
        p-8
      `}
    >
      <ul className={`
        flex
        flex-col
        items-center
        gap-4
        w-full
        
      `}>
        <NavLink href='#about' style='default min-w-[50%]' text='Sobre' />
        <NavLink href='#skill' style='default min-w-[50%]' text='Habilidades' />
        <NavLink href='#project' style='default min-w-[50%]' text='Projetos' />
        <NavLink href='#contact' style='styleOne min-w-[70%] mt-8' text='Contato' />
      </ul>
    </nav>
  </>
}
