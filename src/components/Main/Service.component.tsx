import Icons from "@app/components/Icons";
import CN from "@app/helpers/ClassHelper";
import Card from "../Card";
import Text from "../Text";
import Link from "next/link";
import List from "../List";
import Image from "../Image";

type ServicesProps = {
  className?: string;
  id?: string;
};

export default function ServicesComponent(props: ServicesProps) {
  const style = {
    section: `
        w-full h-full
        flex flex-col gap-10
        md:flex-wrap md:flex-row
        text-White bg-DeepDarkBlue dark:bg-DarkSlateGray
        py-14 shadow-[inset_0_0_5px_5px_rgba(0,0,0,0.4)]
      `,
    cards: {
      root: `
        gap-8 p-6 bg-DarkSlateGray dark:bg-DeepDarkBlue
        transition-all duration-[800ms] ease-in-out
        shadow-md shadow-TrappedDarkness hover:shadow-inner
        dark:shadow-lg dark:shadow-TrappedDarkness dark:hover:shadow-inner 
      `,
      header: `
        gap-1 dark:text-White
        transition duration-[800ms] ease-in-out
      `,
      footer: `
        gap-4 dark:text-White
        transition duration-[800ms] ease-in-out
      `,
      title: `dark:text-White`,
      paragraph: `dark:text-White`,
      subtitle: `dark:text-White`,
      list: `dark:text-White`,
    },
    title: `text-center w-full dark:text-White
      z-10 bg-clip-text`,
  };
  
  const { className } = props;
  const { Figure: Icon } = Image;
  const { Toggle: ToggleList } = List;
  const { WebCode, Sec, Web } = Icons;
  const { Title, Subtitle, Paragraph } = Text;
  const { Root, Header, Footer } = Card;
  return (
    <>
      <section id={props.id} className={CN(style.section, className)}>
        <Title className={style.title}> Meus Serviços </Title>
        <Root className={style.cards.root}>
          <Header className={style.cards.header}>
            <Icon icon={WebCode}></Icon>
            <Title className={style.cards.title}>Lorem ipsum</Title>
          </Header>
          <Footer className={style.cards.footer}>
            <Paragraph className={style.cards.paragraph}>
              Construção de sistemas robustos e escaláveis no lado do servidor,
              empregando linguagens como Node.js, Python, Ruby, PHP, juntamente
              com frameworks como Express, Django, Flask ou Laravel.
            </Paragraph>
            <ToggleList
              title="Serviços"
              tip="Lista Suspensa"
              listItems={["Desenvolvimento de APIs Seguras"]}
            />
          </Footer>
        </Root>
        <Root className={style.cards.root}>
          <Header className={style.cards.header}>
            <Icon icon={Web}></Icon>
            <Title className={style.cards.title}>Lorem ipsum</Title>
          </Header>
          <Footer className={style.cards.footer}>
            <Paragraph className={style.cards.paragraph}>
              Criação de interfaces de usuário atraentes e responsivas,
              utilizando tecnologias modernas como HTML, CSS, JavaScript, e
              frameworks como React, Vue.js ou Angular
            </Paragraph>
          </Footer>
        </Root>
        <Root className={style.cards.root}>
          <Header className={style.cards.header}>
            <Icon icon={Sec}></Icon>
            <Title className={style.cards.title}>Cybersecurity</Title>
          </Header>
          <Footer className={style.cards.footer}>
            <Paragraph className={style.cards.paragraph}>
              Integração de sistemas e implementação de técnicas seguindo os
              padrões de segurança e proteção de dados da
              <Link
                href="#"
                className="px-1 text-blue-500 font-semibold hover:text-blue-700 hover:font-bold italic"
              >
                OWASP Foundation
              </Link>
              e do órgão publico
              <Link
                href="#"
                className="px-1 text-blue-500 font-semibold hover:text-blue-700 hover:font-bold italic"
              >
                Autoridade Nacional de Proteção de Dados.
              </Link>
            </Paragraph>
            <ToggleList
              title="Serviços"
              tip="Lista Suspensa"
              listItems={[
                "Consultoria em Segurança da Informação",
                "Auditoria de Segurança de Aplicativos Web",
                "Implementação de Medidas de Proteção de Dados",
              ]}
            />
          </Footer>
        </Root>
      </section>
    </>
  );
}
