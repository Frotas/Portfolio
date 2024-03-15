"use client";
import CN from "@app/helpers/ClassHelper";
import { IconType } from ".";

export default function WebLayout({ className }: IconType) {
  const style = `
    w-auto h-auto max-w-[64px] max-h-[64px]
    [&_:nth-child(1n)]:w-[64px]
    [&_:nth-child(1n)]:h-[64px]
    [&_:nth-child(1n)]:fill-[#F4F2ED]
    [&_:nth-child(2n)]:fill-[#242938]
    [&_:nth-child(1n)]:dark:fill-[#242938]
    [&_:nth-child(2n)]:dark:fill-[#F4F2ED]
  `;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={CN(style, className)}
      fill="none"
    >
      <rect rx={15} />
      <path d="M12 52c-1.375 0-2.552-.49-3.53-1.468C7.492 49.554 7.002 48.377 7 47V17c0-1.375.49-2.552 1.47-3.53.98-.978 2.157-1.468 3.53-1.47h40c1.375 0 2.553.49 3.532 1.47.98.98 1.47 2.157 1.468 3.53v30c0 1.375-.49 2.553-1.468 3.532-.978.98-2.155 1.47-3.532 1.468H12Zm0-5h26.25v-8.75H12V47Zm31.25 0H52V24.5h-8.75V47ZM12 33.25h26.25V24.5H12v8.75Z" />
    </svg>
  );
}
