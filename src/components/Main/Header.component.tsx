import CN from "@app/helpers/ClassHelper";
import Button from "../Button";
import Header from "./Header";

type HeaderComponentProps = {
  className?: string;
  id?: string;
};

export default function HeaderContent(props: HeaderComponentProps) {
  const { className, id } = props;
  const { Profile, AboutMe, Citation } = Header;
  const { Theme } = Button;
  const style = {
    header: `
      w-full h-fit
      text-White
      flex flex-col items-center gap-8 
      md:grid md:grid-cols-2 md:grid-rows-1
      md:gap-12 md:items-center md:justify-items-center
    `,
    profile: `md:row-span-3`,
    about: `
      md:row-start-2 md:col-start-2 
      text-start text-wrap-balance
      [&_p]:text-justify
    `,
    citation: `
      text-wrap-balance
      md:col-start-2
      [&_h2]:text-center
      [&_cite]:text-justify
      md:[&_cite]:text-center
    `,
  };
  const typing = [
    "Desenvolvedor Back-End",
    2500,
    "Desenvolvedor Front-End",
    2500,
    "Hacker Ético",
    2000,
  ];
  return (
    <>
      <header id={id} className={CN(style.header, className)}>
        <Theme className="w-fit h-fit md:col-start-2 md:row-start-1" />
        <Profile className={style.profile} />
        <AboutMe className={style.about} wordList={typing}>
          👋, sou o Guilherme Augusto e tenho formação técnica em Analise em
          Desenvolvimento de Sistemas pelo Centro Educacional Paula Souza.
          Possuo experiencia com desenvolvimento front-end e back-end.
        </AboutMe>
        <Citation
          className={style.citation}
          author="Albert Einstein"
          about="Citação de Albert Einstein"
        >
          Uma mente que se abre a uma nova ideia, jamais voltará ao seu tamanho
          original
        </Citation>
      </header>
    </>
  );
}
