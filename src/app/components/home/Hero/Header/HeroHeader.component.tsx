"use client";
import { Paragraph, Subtitle, Title } from "@app/app/components/_ui/Typography";
import CN from "@app/helpers/ClassHelper";
import { TypeAnimation } from "react-type-animation";

type HeroHeaderProps = {
  wordList?: Array<any>;
  className?: string;
  title: string;
  text: string;
};

export default function HeroHeader({
  className,
  title,
  text,
  wordList,
}: HeroHeaderProps) {
  const style = `text-wrap-pretty py-4 text-center`;
  return (
    <header className={CN(style, className)}>
      <Title
        heading="h2"
        className="font-title font-semibold uppercase text-[18pt] pb-4 "
      >
        {title}
      </Title>
      {!!wordList && (
        <Subtitle className="font-subtitle text-[16pt] pb-4 pt-1">
          <TypeAnimation
            className="typeAnimation"
            sequence={wordList}
            repeat={Infinity}
          />
        </Subtitle>
      )}
      <Paragraph className="font-paragraph text-[12pt] pb-4 pt-1">
        {text}
      </Paragraph>
    </header>
  );
}
