import CN from "@app/helpers/ClassHelper";

type HeroFooterProps = {
  className?: string;
  text: string;
  quote: string;
};

export default function HeroFooter({
  className,
  text,
  quote,
}: Readonly<HeroFooterProps>) {
  const style = `
    [&_q]:pb-4 [&_strong]:pb-4 text-pretty flex flex-col
    font-paragraph py-4 text-center text-black dark:text-white
  `;
  return (
    <footer className={CN(style, className)}>
      <q>{text}</q>
      <strong>— {quote}</strong>
    </footer>
  );
}
