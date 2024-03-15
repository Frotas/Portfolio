import CN from "@app/helpers/ClassHelper";
import { IconType } from ".";

function PythonIcon({ className, ...rest }: IconType) {
  const style = `
    w-auto h-auto max-w-[64px] max-h-[64px]
    [&_rect]:w-[64px] [&_rect]:h-[64px]
    [&_rect]:fill-[#F4F2ED] [&_rect]:dark:fill-[#242938]
  `;
  return (
    <svg
      {...rest}
      className={CN(style, className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect rx={10} />
      <g clipPath="url(#a)">
        <path
          fill="url(#b)"
          d="M32.118 10.012c-11.297 0-10.592 4.889-10.592 4.889l.013 5.064h10.78v1.52H17.257s-7.229-.818-7.229 10.555c0 11.374 6.31 10.97 6.31 10.97h3.765v-5.277s-.203-6.296 6.21-6.296h10.691s6.008.097 6.008-5.793v-9.738s.912-5.894-10.894-5.894Zm-5.944 3.406a1.941 1.941 0 0 1 1.792 1.194 1.93 1.93 0 0 1 0 1.482 1.934 1.934 0 0 1-1.792 1.194 1.941 1.941 0 0 1-1.793-1.194 1.93 1.93 0 0 1 0-1.482 1.934 1.934 0 0 1 1.793-1.194Z"
        />
        <path
          fill="url(#c)"
          d="M32.28 54.099c11.297 0 10.592-4.889 10.592-4.889l-.013-5.064H32.08v-1.52H47.14s7.23.818 7.23-10.556c0-11.373-6.31-10.97-6.31-10.97h-3.766v5.278s.203 6.295-6.209 6.295H27.394s-6.007-.096-6.007 5.794v9.738S20.474 54.1 32.28 54.1m5.945-3.406a1.94 1.94 0 0 1-1.94-1.935 1.93 1.93 0 0 1 1.197-1.788 1.94 1.94 0 0 1 1.485 0 1.938 1.938 0 0 1 1.197 1.788 1.932 1.932 0 0 1-1.94 1.935Z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1={437.675}
          x2={2638.12}
          y1={407.299}
          y2={2590.65}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#387EB8" />
          <stop offset={1} stopColor="#366994" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={652.594}
          x2={3015.86}
          y1={700.206}
          y2={2939.26}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE052" />
          <stop offset={1} stopColor="#FFC331" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M10 10h44v44H10z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default PythonIcon;
