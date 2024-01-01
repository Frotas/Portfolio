import { ReactNode } from "react";

import CN from "@app/helpers/ClassHelper";

export default function Quote({
  className,
  children,
  author,
  description,
}: {
  author: string;
  className?: string;
  children?: ReactNode;
  description?: string;
}) {
  const style = {
    text: `
      font-[12pt] font-light text-wrap-balance dark:text-White
      [&_:nth-child(n+1)]:text-[18pt] [&_:nth-child(n+1)]:font-bold
      [&_:nth-child(n+1)]:italic [&_:nth-child(1)]:pr-1
      [&_:nth-child(2)]:pl-1
    `,
    author: `
      font-[12pt] font-bold italic
    `,
  };
  return (
    <>
      <p
        className={CN(style.text, className)}
        aria-description={`${description} ${author}`}
      >
        <span>“</span>
        {children}
        <span>„</span>
      </p>
      <p className={style.author} aria-description="Author da Citação">
        — {author}
      </p>
    </>
  );
}
