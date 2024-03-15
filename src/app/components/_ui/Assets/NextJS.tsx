"use client";
import { IconType } from ".";
import CN from "@app/helpers/ClassHelper";

export default function NextJS({ className }: IconType) {
  const style = `
    w-auto h-auto max-w-[64px] max-h-[64px]
    [&_:nth-child(1n)]:max-w-[64px]
    [&_:nth-child(1n)]:max-h-[64px]
    [&_:nth-child(1n)]:fill-[#F4F2ED]
    [&_:nth-child(1n)]:dark:fill-[#242938]
  `;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={CN(style, className)}
      fill="none"
    >
      <rect rx={15} />
      <mask
        id="a"
        width={48}
        height={48}
        x={8}
        y={8}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="M32 56c13.255 0 24-10.745 24-24S45.255 8 32 8 8 18.745 8 32s10.745 24 24 24Z"
        />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#000"
          d="M32 56c13.255 0 24-10.745 24-24S45.255 8 32 8 8 18.745 8 32s10.745 24 24 24Z"
        />
        <path
          fill="url(#b)"
          d="M47.869 50.005 26.438 22.4H22.4v19.192h3.23v-15.09L45.333 51.96a24.082 24.082 0 0 0 2.536-1.954Z"
        />
        <path fill="url(#c)" d="M38.667 22.4h3.2v19.2h-3.2V22.4Z" />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1={1439.31}
          x2={2289.82}
          y1={1689.06}
          y2={2743.23}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="c"
          x1={198.67}
          x2={193.256}
          y1={22.4}
          y2={1432.39}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}
