import Link from "next/link";
import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, HTMLProps, ReactNode, forwardRef } from "react";
import {
  Card,
  CardWrapper,
  CardIcon,
  CardTitle,
  CardParagraph,
} from "../../_ui/Card";
import { Security, Server, WebLayout } from "../../_ui/Assets";
import { RxExternalLink } from "react-icons/rx";

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

const ServiceComponent = forwardRef<HTMLElement, ServiceComponentProps>(
  ({ className, options, ...rest }, ref) => {
    const style = {
      root: `
      flex flex-col gap-4
      [&_div:nth-child(1)]:m-auto
      md:!grid md:grid-cols-2 md:grid-rows-2 md:justify-center
      md:[&_.cardRoot:nth-child(1)]:col-span-1
      md:[&_.cardRoot:nth-child(2)]:col-span-1
      md:[&_.cardRoot:nth-child(3)]:col-span-2
      md:[&_.cardRoot:nth-child(3)]:row-span-2
      md:[&_.cardRoot:nth-child(3)]:!h-fit
    `,
      wrapper: `cardRoot md:shadow-2xl`,
      card: ``,
      icon: ``,
      title: `md:text-[20pt] pt-4 pb-2`,
      paragraph: `
      md:text-justify text-wrap
    `,
      link: `max-w-fit link inline-flex items-baseline whitespace-nowrap px-1
      [&_.externalLinkIcon]:ml-1
    `,
      button: `
      uppercase text-center text-white font-display font-semibold
      mx-auto my-4 px-4 py-2 rounded-md bg-blue-600 w-[60%]
      hover:bg-blue-600/10 hover:text-blue-600 hover:border-blue-600 hover:border
      hover:no-underline
      md:w-[80%]
    `,
    };
    return (
      <section {...rest} ref={ref} className={CN(style.root, className)}>
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
                Construção de sistemas robustos e escaláveis, empregando
                linguagens como Node.js, Java, juntamente com frameworks como
                Express e JavaSpring.
              </CardParagraph>
              {!options![0].hidden?.button && (
                <Link
                  aria-label="Contratar Serviço de Back-End"
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
                tecnologias modernas como React.js, Next.js, Angular e
                JavaSpring.
              </CardParagraph>
              {!options![0].hidden?.button && (
                <Link
                  aria-label="Contratar Serviço de Front-End"
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
        {!options![0].hidden?.title && !options![0].hidden?.text && (
          <CardWrapper className={style.wrapper}>
            <Card className={style.card}>
              {!options![0].hidden?.icon && (
                <CardIcon className={style.icon} icon={Security} />
              )}
              <CardTitle className={style.title}>Cybersecurity</CardTitle>
              <CardParagraph className={style.paragraph}>
                Integração de sistemas e implementação de técnicas seguindo os
                padrões de segurança e proteção de dados da
                <Link
                  aria-label="Redirecionamento para o site da Fundação OWASP."
                  className={style.link}
                  href={"https://www.owasp.org/"}
                  target="_blank"
                >
                  OWASP Foundation
                  <sup>
                    <RxExternalLink className="externalLinkIcon" />
                  </sup>
                </Link>
                e da
                <Link
                  aria-label="Redirecionamento para o site da ANPD."
                  className={style.link}
                  href={"https://www.gov.br/anpd/pt-br"}
                  target="_blank"
                >
                  Autoridade Nacional de Proteção de Dados
                  <sup>
                    <RxExternalLink className="externalLinkIcon" />
                  </sup>
                </Link>
                .
              </CardParagraph>
              {!options![0].hidden?.button && (
                <Link
                  aria-label="Contratar Serviço de Cybersecurity"
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
);

export default ServiceComponent;
