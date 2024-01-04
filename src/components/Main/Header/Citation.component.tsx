import Text from "@app/components/Text";
import CN from "@app/helpers/ClassHelper";

type HeaderCitationProps = {
  className?: string;
  children: React.ReactNode;
  title?: string;
  author: string;
  about?: string;
};

export default function CitationComponent(props: HeaderCitationProps) {
  const { Title, Paragraph } = Text;
  const { className, children, title, author, about } = props;
  const style = {
    section: `text-end w-full h-fit`,
    title: `uppercase`,
    quote: `text-wrap-balance`,
    author: `font-bold italic pl-2`,
  };
  return (
    <section className={CN(style.section, className)}>
      <Title className={style.title}>{title || `Citação`}</Title>
      <cite about={about}>
        <Paragraph className={style.quote}>
          <q>{children}</q>
          <span className={style.author}>— {author}</span>
        </Paragraph>
      </cite>
    </section>
  );
}
