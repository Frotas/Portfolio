import CN from "@app/helpers/ClassHelper";
import Text from "@app/components/Text";
import { TypeAnimation } from "react-type-animation";

type HeaderAboutMeProps = {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  wordList?: Array<
    string | number | ((element: HTMLElement | null) => void | Promise<void>)
  >;
  name?: string;
};

export default function AboutMeComponent(props: HeaderAboutMeProps) {
  const { Title, Paragraph, Subtitle } = Text;
  const { className, children, title, name, wordList = [] } = props;
  const style = {
    section: `text-start`,
    title: `
      w-full
      uppercase
      text-start
      py-1
    `,
    subtitle: `
      w-full
      text-[14pt]
      sm:text-[16pt]
      md:text-[18pt]
      lg:text-[20pt]
      text-center
      py-1
    `,
    paragraph: `
      w-full
      text-[12pt]
      text-wrap
      py-1
    `,
  };

  return (
    <section
      className={CN(style.section, className)}
      aria-description="Seção Sobre Mim"
    >
      {wordList.length !== 0 && (
        <Subtitle className={style.subtitle}>
          <span>{`<`}</span>
          <TypeAnimation sequence={wordList} repeat={Infinity} />
          <span>{`/>`}</span>
        </Subtitle>
      )}
      {!!title && <Title className={style.title}>{title}</Title>}
      {!!name && <Title className={style.title}>{name}</Title>}
      {!!children && (
        <Paragraph className={style.paragraph}>{children}</Paragraph>
      )}
    </section>
  );
}
