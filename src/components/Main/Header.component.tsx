import Text from "@app/components/Text";
import CN from "@app/helpers/ClassHelper";
import Images from "../Image";
import Button from "../Button";

type HeaderComponentProps = {
  className?: string;
  id?: string;
};

export default function Header(props: HeaderComponentProps) {
  const { className, id } = props;
  const { Title, Paragraph, Quote } = Text;
  const { Theme } = Button;
  const { Image } = Images;
  const style = `flex flex-col items-center gap-8 py-8 text-White`;
  return (
    <>
      <header id={id} className={CN(style, className)}>
        <div className="w-full flex items-end">
          <Theme />
        </div>
        <section className="text-start" aria-description="Seção Sobre Mim">
          <Title className="uppercase">Olá!,</Title>
          <Paragraph className="font-[15pt]">
            sou o Guilherme Augusto, Desenvolvedor Full Stack e entusiasta de
            Segurança da Informação. Formado e Desenvolvimento de Sistemas no
            Centro Educacional Paula Souza.
          </Paragraph>
        </section>
        <section className="rounded-full border-2 border-Cyprus/25 drop-shadow-lg shadow-Cyprus">
          <Image
            className="rounded-full border-RockBlue"
            src="https://avatars.githubusercontent.com/u/89676387?v=4"
            alt="GitHub Profile Image"
            width={200}
            height={200}
          />
        </section>
        <section className="text-end">
          <Title className="uppercase">Citação</Title>
          <Quote className="" author="Albert Einstein">
            Uma mente que se abre a uma nova ideia, jamais voltará ao seu
            tamanho original
          </Quote>
        </section>
      </header>
    </>
  );
}
