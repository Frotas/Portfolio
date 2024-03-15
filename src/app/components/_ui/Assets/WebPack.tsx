"use client";
import { IconType } from ".";
import CN from "@app/helpers/ClassHelper";

export default function WebPack({ className, ...props }: IconType) {
  const IconVariants = {
    dark: "#242938",
    light: "#F4F2ED",
  };
  const style = `
    w-auto h-auto max-w-[64px] max-h-[64px]
    [&_:nth-child(1n)]:max-w-[64px]
    [&_:nth-child(1n)]:max-h-[64px]
    [&_:nth-child(1n)]:fill-[#F4F2ED]
    [&_:nth-child(2n)]:fill-[#F4F2ED]
    [&_:nth-child(3n)]:fill-[#8ED6FB]
    [&_:nth-child(4n)]:fill-[#1C78C0]
    [&_:nth-child(1n)]:dark:fill-[#242938]
    [&_:nth-child(2n)]:dark:fill-[#242938]
  `;
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={CN(style, className)}
      fill="none"
    >
      <path d="M49 0H15C6.716 0 0 6.716 0 15v34c0 8.284 6.716 15 15 15h34c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15Z" />
      <path d="M32.056 4.5 56.36 18.25v27.5L32.056 59.5 7.75 45.75v-27.5L32.056 4.5Z" />
      <path d="m52.02 44.801-19.163 10.84v-8.443l11.94-6.568 7.223 4.171Zm1.311-1.187V20.945l-7.012 4.047v14.57l7.012 4.052Zm-41.319 1.187 19.163 10.84v-8.443l-11.94-6.568-7.223 4.171Zm-1.31-1.187V20.945l7.012 4.047v14.57l-7.012 4.052Zm.82-24.136L31.175 8.36v8.163l-12.59 6.926-.096.055-6.967-4.025Zm40.989 0L32.857 8.36v8.163l12.59 6.926.097.055 6.967-4.025Z" />
      <path d="M31.175 45.278 19.396 38.8V25.968l11.78 6.802v12.508Zm1.683 0L44.636 38.8V25.968l-11.78 6.802v12.508ZM20.194 24.483l11.825-6.503 11.825 6.503-11.825 6.83-11.825-6.83Z" />
    </svg>
  );
}
