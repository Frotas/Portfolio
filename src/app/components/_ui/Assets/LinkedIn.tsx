import CN from "@app/helpers/ClassHelper";
import { IconType } from ".";
export default function LinkedIn({ className, ...props }: IconType) {
  const style = `
    w-auto h-auto max-w-[64px] max-h-[64px]
    [&_:nth-child(1n)]:w-[64px] [&_:nth-child(1n)]:h-[64px]
    [&_:nth-child(1n)]:fill-[#F4F2ED]
    [&_:nth-child(2n)]:fill-[#0072B1]
    [&_:nth-child(1n)]:dark:fill-[#242938]
    [&_:nth-child(2n)]:dark:fill-[#4789FE]
  `;
  return (
    <>
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className={CN(style, className)}
      >
        <rect rx={15} />
        <path d="M19.5 14.5c0 2.655-1.775 4.94-5.002 4.94-3.038 0-4.998-2.155-4.998-4.81 0-2.725 1.9-5.13 5-5.13s4.94 2.275 5 5Zm-10 40V22h10v32.5h-10Zm15-21.39c0-3.863-.128-7.09-.255-9.877h8.985l.445 4.307h.19c1.265-2.027 4.365-5 9.555-5 6.33 0 11.08 4.238 11.08 13.355V54.5h-10V37.347c0-3.985-1.517-7.024-5-7.024-2.655 0-3.985 2.15-4.682 3.922-.255.635-.318 1.52-.318 2.408V54.5h-10V33.11Z" />
      </svg>
    </>
  );
}
