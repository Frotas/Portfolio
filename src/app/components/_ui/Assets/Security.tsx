"use client";
import { IconType } from ".";
import CN from "@app/helpers/ClassHelper";

export default function Security({ className, ...props }: IconType) {
  const style = `
    w-auto h-auto max-w-[64px] max-h-[64px]
    [&_:nth-child(1n)]:max-w-[64px]
    [&_:nth-child(1n)]:max-h-[64px]
    [&_:nth-child(1n)]:fill-[#F4F2ED]
    [&_:nth-child(2n)]:fill-[#242938]
    [&_:nth-child(1n)]:dark:fill-[#242938]
    [&_:nth-child(2n)]:dark:fill-[#F4F2ED]
  `;
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={CN(style, className)}
    >
      <rect width={64} height={64} rx={15} />
      <path d="m32 8-19.25 8.727v13.091C12.75 41.928 20.963 53.251 32 56c11.037-2.75 19.25-14.073 19.25-26.182v-13.09L32 8Zm0 13.09c2.994 0 5.989 2.4 5.989 5.456v3.272c1.283 0 2.567 1.31 2.567 2.836v7.637c0 1.309-1.284 2.618-2.781 2.618H26.011c-1.283 0-2.567-1.309-2.567-2.836v-7.637c0-1.309 1.284-2.618 2.567-2.618v-3.273c0-3.054 2.995-5.454 5.989-5.454Zm0 2.62c-1.711 0-3.208 1.09-3.208 2.835v3.273h6.416v-3.273c0-1.745-1.497-2.836-3.208-2.836Z" />
    </svg>
  );
}
