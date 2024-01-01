"use client";

import { useState } from "react";

import CN from "@app/helpers/ClassHelper";
import Text from "@app/components/Text";
import Button from "../Button";

export type ListProps = {
  title?: String;
  tip?: string;
  listItems?: Array<String>;
  className?: string;
};

function LiHandler({
  items,
  className,
}: {
  items: Array<String>;
  className?: string;
}) {
  return items?.map((item, key) => {
    return (
      <li className={className} key={key + 1}>
        <span>»</span>
        <p>{item}</p>
      </li>
    );
  });
}

export default function ToggleList(props: ListProps) {
  const {
    title = "title",
    tip = "help info",
    listItems = [],
    className,
  } = props;

  const [checked, setChecked] = useState<Boolean>(false);
  const style = {
    ul: `w-full h-fit flex flex-col item-center pl-4`,
    btn: `
      w-full h-4
      flex justify-between items-center
    `,
    title: `
      font-bold text-[12pt]
      [&_:nth-child(1)]:pr-2
    `,
    tip: `font-light text-[10pt]`,
    li: `
      flex flex-row items-center justify-start w-fit
      [&_:nth-child(1)]:font-bold [&_:nth-child(1)]:text-[18pt] [&_:nth-child(1)]:pr-2
      [&_:nth-child(2)]:font-light [&_:nth-child(2)]:text-[12pt] [&_:nth-child(2)]:w-fit
       [&_:nth-child(2)]:pt-1
    `,
    listSection: `w-full h-fit`,
  };
  return (
    <>
      <section className={CN(style.listSection, className)}>
        <Button.Toggle
          onClick={() => {
            setChecked(!checked);
            console.warn(checked);
          }}
          className={style.btn}
        >
          <p className={style.title}>
            <span>
              {!checked && `▶`}
              {checked && `▼`}
            </span>
            {title}
          </p>
          <p className={style.tip}>{tip}</p>
        </Button.Toggle>
        {checked && (
          <ul className={style.ul}>
            {<LiHandler className={style.li} items={listItems} />}
          </ul>
        )}
      </section>
    </>
  );
}
