import CN from "@app/helpers/ClassHelper";
import Text from "../Text";
import Image from "../Image";
import Icons from "../Icons";

type SkillComponent = {
  className?: string;
  id?: string;
};

export default function SkillComponent(props: SkillComponent) {
  const { className } = props;
  const { Figure } = Image;
  const { Java, JS, NodeJS, Spring, NextJS, TS } = Icons;
  const { Title, Subtitle } = Text;

  const style = {
    section: `flex flex-col gap-12 justify-center`,
    figure: `flex flex-col items-center justify-center dark:text-White`,
    header: {
      root: ``,
      title: `text-center py-2 text-White`,
      subtitle: `text-center pt-1 text-White`,
    },
    footer: `w-full flex flex-wrap gap-4 justify-center md:flex-nowrap md:gap-[4rem]`,
  };
  return (
    <>
      <section id={props.id} className={CN(style.section, className)}>
        <header className={style.header.root}>
          <Title className={style.header.title}> Minhas Habilidades </Title>
          <Subtitle className={style.header.subtitle}>
            Softwares/Frameworks
          </Subtitle>
        </header>
        <footer className={CN(style.footer, className)}>
          <Figure
            className={style.figure}
            icon={NodeJS}
            color="standard"
            variant="filled"
          >
            Node.JS
          </Figure>
          <Figure className={style.figure} icon={JS}>
            JavaScript
          </Figure>
          <Figure className={style.figure} icon={TS}>
            TypeScript
          </Figure>
          <Figure
            className={style.figure}
            icon={NextJS}
            color="standard"
            variant="filled"
          >
            Next.JS
          </Figure>
          <Figure
            className={style.figure}
            icon={Spring}
            color="standard"
            variant="filled"
          >
            SpringBoot
          </Figure>
          <Figure
            className={style.figure}
            icon={Java}
            color="standard"
            variant="filled"
          >
            Java
          </Figure>
        </footer>
      </section>
    </>
  );
}
