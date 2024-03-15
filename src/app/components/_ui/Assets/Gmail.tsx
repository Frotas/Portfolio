import CN from "@app/helpers/ClassHelper";
import { IconType } from ".";

export default function GMail({ className, ...props }: IconType) {
  const style = `
    w-auto h-auto max-w-[64px] max-h-[64px]
    [&_:nth-child(1)]:w-[64px] [&_:nth-child(1)]:h-[64px]
    [&_:nth-child(1)]:fill-[#F4F2ED]
    [&_:nth-child(1)]:dark:fill-[#242938]
    [&_:nth-child(2)]:fill-[#4285F4]
    [&_:nth-child(3)]:fill-[#34A853]
    [&_:nth-child(4)]:fill-[#EA4335]
    [&_:nth-child(5)]:fill-[#FBBC04]
    [&_:nth-child(6)]:fill-[#C5221F]
  `;
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={CN(style, className)}
    >
      <rect rx={15} />
      <path d="M18.91 52V31.4l-5.752-5.846L8 22.311v26.053C8 50.377 9.467 52 11.273 52h7.636Z" />
      <path d="M45.09 52h7.637C54.538 52 56 50.37 56 48.364V22.311l-5.842 3.715-5.067 5.373V52Z" />
      <path d="m18.91 31.4-.784-8.05.783-7.704L32 26.552l13.09-10.906.876 7.288-.875 8.465L32 42.305 18.91 31.4Z" />
      <path d="M45.09 15.646v15.753L56 22.311v-4.848c0-4.495-4.62-7.058-7.854-4.362l-3.055 2.545Z" />
      <path d="m8 22.31 10.91 9.09V15.645L15.853 13.1C12.614 10.405 8 12.968 8 17.463v4.848Z" />
    </svg>
  );
}
