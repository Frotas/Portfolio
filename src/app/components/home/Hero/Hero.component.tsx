"use client";
import { HTMLAttributes, HTMLProps, forwardRef } from "react";
import { RxExternalLink } from "react-icons/rx";
import { TypeAnimation } from "react-type-animation";
import { Title, Subtitle, Paragraph } from "../../_ui/Typography";

import CN from "@app/helpers/ClassHelper";
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
      wrapper: `lg:flex lg:flex-col`,
      sections: {
        about: `
          lg:w-[80%] lg:m-auto lg:text-balance 
          lg:[&_.title]:text-[20pt]
          lg:[&_.subtitle]:text-[18pt]
          [&_.paragraphWrapper>.paragraph]:font-light
          lg:[&_.paragraphWrapper>.paragraph]:text-center
        `,
        profile: {
          wrapper: `md:my-4 lg:my-2`,
          image: `
            rounded-full outline outline-3 outline-offset-0 outline-white/30
            shadow shadow-md shadow-black/20
            lg:w-[200px] lg:h-[200px]
          `,
        },
        quoting: `
          inline-block 
          [&_q]:pr-4 md:text-[16pt]
          lg:w-[50%] lg:m-auto lg:my-2 lg:text-balance
          md:text-[13pt] lg:text-[16pt]
          [&_q]:font-light lg:[&_q]:pr-8
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
