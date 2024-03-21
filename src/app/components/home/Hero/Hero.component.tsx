"use client";
import { HTMLAttributes, HTMLProps, ReactNode, forwardRef } from "react";
import { RxExternalLink } from "react-icons/rx";
import { TypeAnimation } from "react-type-animation";
import { Title, Subtitle, Paragraph } from "../../_ui/Typography";

import Image from "next/image";
import CN from "@app/helpers/ClassHelper";
import Profile from "./Profile";
import Header from "./Header";
import Quoting from "./Footer";
import Link from "next/link";

type HeroComponentProps = {
  className?: string;
} & HTMLAttributes<HTMLElement> &
  HTMLProps<HTMLElement>;

const HeroComponent = forwardRef<HTMLElement, HeroComponentProps>(
  ({ className, ...rest }, ref) => {
    const style = {
      wrapper: `md:flex md:flex-col`,
      sections: {
        about: `
          md:w-[50%] md:m-auto md:text-balance md:[&_.title]:text-[20pt] 
          md:[&_.title]:text-[22pt]
          md:[&_.subtitle]:text-[18pt]
          md:[&_.paragraphWrapper>.paragraph]:text-[13pt] md:[&_.paragraphWrapper>.paragraph]:font-light
          md:[&_.paragraphWrapper>.paragraph]:text-center
          [&_.link>sup]:z-[-100] [&_.linkIcon]:text-[9pt] [&_.linkIcon]:inline-block
        `,
        profile: {
          wrapper: `md:my-2`,
          image: `
        rounded-full outline outline-3 outline-offset-0 outline-white/30
        shadow shadow-md shadow-black/20`,
        },
        quoting: `
        inline-block 
        [&_q]:pr-4
        md:w-[50%] md:m-auto md:my-2 md:text-balance md:[&_q]:text-[13pt]
        md:[&_q]:font-light md:[&_q]:pr-8
      `,
      },
    };
    return (
      <section {...rest} ref={ref} className={CN(style.wrapper, className)}>
        <Header className={style.sections.about}>
          <Title
            heading="h2"
            className="title font-title font-semibold uppercase text-[18pt] pb-4 "
          >
            Guilherme Augusto Frotas Sales
          </Title>
          <Subtitle className="subtitle font-subtitle text-[16pt] pb-4 pt-1">
            <TypeAnimation
              className="typeAnimation"
              sequence={[
                "< Desenvolvedor_FrontEnd />",
                6000,
                "< Desenvolvedor_BackEnd />",
                9000,
                "< Técnico_Em_CyberSec />",
                10020,
              ]}
              repeat={Infinity}
            />
          </Subtitle>
          <div className="paragraphWrapper">
            <Paragraph className="paragraph font-paragraph text-[12pt] pb-2 pt-0">
              👋 Oi, sou o Guilherme, desenvolvedor full-stack com formação
              técnica em Análise e Desenvolvimento de Sistemas pelo Centro
              Educacional Paula Souza.
            </Paragraph>
            <Paragraph className="paragraph font-paragraph text-[12pt] pb-2 pt-0">
              Minha experiência abrange desenvolvimento tanto front-end quanto
              back-end, utilizando linguagens como{" "}
              <Link
                aria-label="Alura Artigos - O que é JavaScript?"
                className="link"
                href={`https://www.alura.com.br/artigos/javascript`}
                target="_blank"
              >
                JavaScript{" "}
                <sup>
                  <RxExternalLink className={`linkIcon`} />
                </sup>
              </Link>
              ,{" "}
              <Link
                aria-label="Alura Artigos - O que é Python?"
                className="link"
                href={`https://www.alura.com.br/artigos/python`}
                target="_blank"
              >
                Python{" "}
                <sup>
                  <RxExternalLink className={`linkIcon`} />
                </sup>
              </Link>{" "}
              e{" "}
              <Link
                aria-label="Alura Artigos - O que é Java?"
                className="link"
                href={`https://www.alura.com.br/artigos/java`}
                target="_blank"
              >
                Java{" "}
                <sup>
                  <RxExternalLink className={`linkIcon`} />
                </sup>
              </Link>
              , junto com frameworks como{" "}
              <Link
                aria-label="Alura Artigos - O que é ReactJS?"
                className="link"
                href={`https://www.alura.com.br/artigos/react-js`}
                target="_blank"
              >
                React.js{" "}
                <sup>
                  <RxExternalLink className={`linkIcon`} />
                </sup>
              </Link>
              ,{" "}
              <Link
                aria-label="Alura Artigos - O que é NextJS?"
                className="link"
                href={`https://www.alura.com.br/artigos/next-js`}
                target="_blank"
              >
                Next.js{" "}
                <sup>
                  <RxExternalLink className={`linkIcon`} />
                </sup>
              </Link>
              ,{" "}
              <Link
                aria-label="Alura Artigos - O que é NodeJS?"
                className="link"
                href={`https://www.alura.com.br/artigos/node-js`}
                target="_blank"
              >
                Node.js{" "}
                <sup>
                  <RxExternalLink className={`linkIcon`} />
                </sup>
              </Link>{" "}
              e{" "}
              <Link
                aria-label="Alura Artigos - O que é Spring Framework?"
                className="link"
                href={`https://www.alura.com.br/artigos/spring-conheca-esse-framework-java`}
                target="_blank"
              >
                JavaSpring{" "}
                <sup>
                  <RxExternalLink className={`linkIcon`} />
                </sup>
              </Link>
              .
            </Paragraph>
            <Paragraph className="paragraph font-paragraph text-[12pt] pb-2 pt-0">
              Estou comprometido em combinar minhas habilidades técnicas com uma
              compreensão sólida de práticas de{" "}
              <Link
                aria-label="Kaspersky Artigos - O que é Segurança Cibernética?"
                href={`https://www.kaspersky.com.br/resource-center/definitions/what-is-cyber-security`}
                className="link"
              >
                CyberSec{" "}
                <sup>
                  <RxExternalLink className={`linkIcon`} />
                </sup>
              </Link>{" "}
              para criar soluções robustas e protegidas.
            </Paragraph>
          </div>
        </Header>
        <Profile className={style.sections.profile.wrapper}>
          <Image
            className={style.sections.profile.image}
            width={152}
            height={152}
            src={`https://media.licdn.com/dms/image/D4D03AQElhivS7Oi73w/profile-displayphoto-shrink_400_400/0/1666029039079?e=1715817600&v=beta&t=m_O0BUOoslbDcGd26f8Fl_lOmYWIFw2oaGY8OvR5_-U`}
            alt="Imagem de perfil do LinkedIn."
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
);
export default HeroComponent;
