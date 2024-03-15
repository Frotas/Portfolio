import { HTMLAttributes, HTMLProps, ReactNode } from "react";
import Profile from "./Profile";
import Header from "./Header";
import Quoting from "./Footer";
import Image from "next/image";
import CN from "@app/helpers/ClassHelper";

type HeroComponentProps = {
  className?: string;
} & HTMLAttributes<HTMLElement> &
  HTMLProps<HTMLElement>;

export default function HeroComponent({
  className,
  ...rest
}: HeroComponentProps) {
  const style = {
    wrapper: `md:flex md:flex-col`,
    sections: {
      about: `
        md:w-[50%] md:m-auto md:text-wrap-balance md:[&_.title]:text-[20pt] 
        md:[&_.title]:text-[22pt]
        md:[&_.subtitle]:text-[18pt]
        md:[&_.paragraph]:text-[14pt] md:[&_.paragraph]:font-light
        md:[&_.paragraph]:text-center`,
      profile: {
        wrapper: `md:my-2`,
        image: `
        rounded-full outline outline-3 outline-offset-0 outline-white/30
        shadow shadow-md shadow-black/20`,
      },
      quoting: `
        md:w-[50%] md:m-auto md:my-2 md:text-wrap-balance md:[&_q]:text-[14pt]
        md:[&_q]:font-light md:[&_q]:pb-2`,
    },
  };
  return (
    <section {...rest} className={CN(style.wrapper, className)}>
      <Header
        className={style.sections.about}
        title="Guilherme Augusto Frotas Sales"
        text="👋 sou o Guilherme, tenho formação técnica em Analise em
        Desenvolvimento de Sistemas pelo Centro Educacional Paula Souza.
        Atuo como desenvolvedor Back-End e Front-End e realizo serviços
        de Cyber Security para startups, pequenas e medias empresas."
        wordList={[
          "< Desenvolvedor_FrontEnd />",
          6000,
          "< Desenvolvedor_BackEnd />",
          9000,
          "< Técnico_Em_CyberSec />",
          10020,
        ]}
      />
      <Profile className={style.sections.profile.wrapper}>
        <Image
          className={style.sections.profile.image}
          width={152}
          height={152}
          src={`https://media.licdn.com/dms/image/D4D03AQElhivS7Oi73w/profile-displayphoto-shrink_400_400/0/1666029039079?e=1715817600&v=beta&t=m_O0BUOoslbDcGd26f8Fl_lOmYWIFw2oaGY8OvR5_-U`}
          alt="Imagem de Perfil."
        />
      </Profile>
      <Quoting
        className={style.sections.quoting}
        text="Uma mente que se abre a uma nova ideia, jamais voltará ao seu tamanho
        original."
        quote="Albert Einstein"
      />
    </section>
  );
}
