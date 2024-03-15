import CN from "@app/helpers/ClassHelper";
import { IconType } from ".";

export default function Close({ className, ...props }: IconType) {
  const style = `
    w-auto h-auto max-w-[32px] max-h-[32px]
    [&_:nth-child(n)]:stroke-[7px]
    [&_:nth-child(n)]:stroke-[#F4F2ED]
    [&_:nth-child(n)]:dark:stroke-DeepDarkBlue
  `;
  return (
    <>
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        className={CN(style, className)}
      >
        <line x1="4" y1="28" x2="28" y2="4" strokeLinecap="round" />
        <line x1="4" y1="4" x2="28" y2="28" strokeLinecap="round" />
      </svg>
    </>
  );
}
