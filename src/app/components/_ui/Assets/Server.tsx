"use client";
import CN from "@app/helpers/ClassHelper";
import { IconType } from ".";

export default function Server({ className, ...props }: IconType) {
  const IconVariants = {
    dark: "#242938",
    light: "#F4F2ED",
  };
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
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={CN(style, className)}
    >
      <rect rx={15} />
      <path d="M52 39.667v10.222c0 1.29-.476 2.531-1.334 3.477a4.958 4.958 0 0 1-3.291 1.621L47 55H17a4.941 4.941 0 0 1-3.401-1.363 5.156 5.156 0 0 1-1.587-3.365L12 49.89V39.667h40Zm-15 5.11c-.663 0-1.299.27-1.768.75a2.585 2.585 0 0 0-.732 1.806c0 .678.263 1.328.732 1.807.47.48 1.105.749 1.768.749s1.299-.27 1.768-.749c.469-.479.732-1.129.732-1.807 0-.677-.263-1.328-.732-1.807A2.473 2.473 0 0 0 37 44.778Zm7.5 0c-.663 0-1.299.27-1.768.75A2.585 2.585 0 0 0 42 47.332c0 .678.263 1.328.732 1.807.47.48 1.105.749 1.768.749s1.299-.27 1.768-.749c.469-.479.732-1.129.732-1.807 0-.677-.263-1.328-.732-1.807a2.473 2.473 0 0 0-1.768-.748ZM52 24.334v10.223H12V24.333h40ZM47 9c1.326 0 2.598.538 3.535 1.497A5.17 5.17 0 0 1 52 14.111v5.111H12v-5.11a5.17 5.17 0 0 1 1.464-3.615A4.945 4.945 0 0 1 17 9h30Z" />
    </svg>
  );
}
