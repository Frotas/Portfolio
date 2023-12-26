import { ReactNode } from "react";

import CN from "@app/helpers/ClassHelper";

const QuoteVariants = {
  default: "default",
  card: "card",
  popup: "popup",
  article: "article",
} as const;
type QuoteVariants = keyof typeof QuoteVariants;

export default function Quote({
  className,
  children,
  author,
  style = "default",
}: {
  author: string;
  className?: string;
  children?: ReactNode;
  style?: QuoteVariants;
}) {
  const QuoteVariants = {
    default: `font-[18pt] font-[300] text-wrap-pretty dark:text-White`,
    card: ` `,
    popup: ` `,
    article: ` `,
  } as const;
  return (
    <>
      <p
        className={CN(QuoteVariants[style], className)}
        aria-description="Citação da fala ou de um trecho de um livro"
      >
        <span className="font-bold italic">‟</span>
        {children}
        <span className="font-bold italic">„</span>
      </p>
      <p className="font-bold italic" aria-description="Author da Citação">
        — {author}
      </p>
    </>
  );
}
