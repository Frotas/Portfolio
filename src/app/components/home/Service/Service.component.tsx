import Link from "next/link";
import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, HTMLProps, ReactNode } from "react";
import {
  Card,
  CardWrapper,
  CardIcon,
  CardTitle,
  CardParagraph,
} from "../../_ui/Card";
import { Security, Server, WebLayout } from "../../_ui/Assets";

type ServiceComponentProps = {
  className?: string;
  options?: Array<{
    hidden?: {
      icon: boolean;
      title: boolean;
      text: boolean;
      button: boolean;
    };
  }>;
} & HTMLAttributes<HTMLElement> &
  HTMLProps<HTMLElement>;

export default function ServiceComponent({
  className,
  options,
  ...rest
}: ServiceComponentProps) {
  const style = {
    root: `
      flex flex-col gap-8
      md:!flex-row md:flex-wrap lg:flex-nowrap
      [&_div:nth-child(1n)]:m-auto
    `,
    wrapper: `bg-rockBlue-500 rounded-md p-4 md:max-h-[29em] md:w-[50%]`,
    card: `h-fit flex flex-col p-2`,
    icon: ``,
    title: `w-auto font-title font-semibold text-center text-[16pt] md:text-[20pt] pt-4 pb-2`,
    paragraph: `font-paragraph text-center text-wrap-pretty md:text-justify`,
    link: `italic text-blue-600 hover:underline px-1 `,
    button: `
      uppercase text-center text-white font-display font-semibold
      mx-auto my-4 px-4 py-2 rounded-md bg-blue-600 w-[60%]
      md:w-[80%]
      hover:bg-blue-600/10 hover:text-blue-600 hover:border-blue-600 hover:border
      hover:no-underline
    `,
  };
  return (
    <section {...rest} className={CN(style.root, className)}>
      {!options![0].hidden?.title && !options![0].hidden?.text && (
        <CardWrapper className={style.wrapper}>
          <Card className={style.card}>
            {!options![0].hidden?.icon && (
              <CardIcon className={style.icon} icon={Server} />
            )}
            <CardTitle className={style.title}>
              Desenvolvimento Back-End
            </CardTitle>
            <CardParagraph className={style.paragraph}>
              Construção de sistemas robustos e escaláveis no lado do servidor,
              empregando linguagens como Node.js e Java, juntamente com
              frameworks como Express e Spring Boot.
            </CardParagraph>
            {!options![0].hidden?.button && (
              <Link
                className={CN(style.link)}
                href="#contactForm"
                scroll={true}
              >
                Contratar Serviço
              </Link>
            )}
          </Card>
        </CardWrapper>
      )}
      {!options![0].hidden?.title && !options![0].hidden?.text && (
        <CardWrapper className={style.wrapper}>
          <Card className={style.card}>
            {!options![0].hidden?.icon && (
              <CardIcon className={style.icon} icon={WebLayout} />
            )}
            <CardTitle className={style.title}>
              Desenvolvimento Front-End
            </CardTitle>
            <CardParagraph className={style.paragraph}>
              Criação de interfaces de usuário responsivas, utilizando
              tecnologias modernas como HTML5, CSS, JavaScript, e frameworks
              como React, Vue.js ou Angular.
            </CardParagraph>
            {!options![0].hidden?.button && (
              <Link
                className={CN(style.link)}
                href="#contactForm"
                scroll={true}
              >
                Contratar Serviço
              </Link>
            )}
          </Card>
        </CardWrapper>
      )}
      {!options![0].hidden?.title && !options![0].hidden?.text && (
        <CardWrapper className={style.wrapper}>
          <Card className={style.card}>
            {!options![0].hidden?.icon && (
              <CardIcon className={style.icon} icon={Security} />
            )}
            <CardTitle className={style.title}>Cybersecurity</CardTitle>
            <CardParagraph className={style.paragraph}>
              Integração de sistemas e implementação de técnicas seguindo os
              padrões de segurança e proteção de dados da{" "}
              <Link
                className={style.link}
                href={"https://www.owasp.org/"}
                target="_blank"
              >
                OWASP Foundation
              </Link>{" "}
              da
              <Link
                className={style.link}
                href={"https://www.gov.br/anpd/pt-br"}
                target="_blank"
              >
                Autoridade Nacional de Proteção de Dados
              </Link>
              .
            </CardParagraph>
            {!options![0].hidden?.button && (
              <Link
                className={CN(style.button)}
                href="#contactForm"
                scroll={true}
              >
                Contratar Serviço
              </Link>
            )}
          </Card>
        </CardWrapper>
      )}
    </section>
  );
}
