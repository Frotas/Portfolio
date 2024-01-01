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
    header: `w-full flex flex-col items-center gap-8 py-8 text-White`,
    about: ` text-start text-wrap-balance`,
    profile: ``,
    citation: ` text-end text-wrap-balance`,
  };
  const typing = [
    "< Desenvolvedor Back-End />",
    2500,
    "< Desenvolvedor Front-End />",
    2000,
    "< Hacker Ético />",
    2500,
  ];
  return (
    <>
      <header id={id} className={CN(style.header, className)}>
        <Theme className="w-full" />
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
