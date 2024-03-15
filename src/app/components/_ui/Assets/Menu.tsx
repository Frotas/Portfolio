"use client";
import CN from "@app/helpers/ClassHelper";
import { IconType } from ".";

export default function MenuIcon({ className, ...props }: IconType) {
  const style = `
    w-auto h-auto max-w-[32px] max-h-[32px]
    [&_:nth-child(n)]:stroke-[7px]
    [&_:nth-child(n)]:stroke-[#F4F2ED]
    [&_:nth-child(n)]:dark:stroke-DeepDarkBlue
  `;
  const spacing = (gap: number, lines: number): number[] => {
    const axy_y: number[] = [];

    for (let index = 0; index < lines; index++) {
      const calc = index * gap;
      axy_y.push(calc + ((lines - 1.8) * gap) / 2);
    }
    return axy_y;
  };

  const spacingCalc = spacing(10, 3);

  return (
    <>
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        className={CN(style, className)}
        id="svgClose"
      >
        <line
          x1="4"
          y1={spacingCalc[0]}
          x2="28"
          y2={spacingCalc[0]}
          strokeLinecap="round"
          id="line1"
        />
        <line
          x1="4"
          y1={spacingCalc[1]}
          x2="28"
          y2={spacingCalc[1]}
          strokeLinecap="round"
          id="line2"
        />
        <line
          x1="4"
          y1={spacingCalc[2]}
          x2="28"
          y2={spacingCalc[2]}
          strokeLinecap="round"
          id="line3"
        />
      </svg>
    </>
  );
}
