import CN from "@app/helpers/ClassHelper";
import { IconsProps } from "./@types/IconTypes";

export default ({ color = "standard", variant = "filled" }: IconsProps) => {
  const style = {
    SVGMask: `[mask-type:luminance]`,
    default: `
      w-16 h-16 p-2 flex justify-center items-center
      [&_#bs-background_stop[offset="0"]:nth-child(1n)]:stopColor-[#6610F2]
      [&_#bs-background_stop[offset='1']:nth-child(2n)]:stopColor-[#6610F2]
      [&_#bs-text_stop[offset="0"]:nth-child(1n)]:stopColor-[#FFFFFF]
      [&_#bs-text_stop[offset='1']:nth-child(2n)]:stopColor-[#F1E5FC]
    `,
  };
  const IconVariants = {
    filled: {
      standard: `
        bg-white
        rounded-[15%]
        [&_path:nth-child(1)]:fill-[url(#bs-background)]
        [&_path:nth-child(2)]:fill-[url(#bs-text)]
        [&_path:nth-child(2)]:filter-[url(#bs-filter)]
        [&_path:nth-child(2)]:stroke-zinc-200
      `,
      white: `
        bg-white
        rounded-[15%]
        [&_path:nth-child(1)]:fill-DeepDarkBlue
        [&_path:nth-child(2)]:fill-[url(#bs-text)]
        [&_path:nth-child(2)]:filter-[url(#bs-filter)]
        [&_path:nth-child(2)]:stroke-zinc-200
      `,
      black: `
        bg-DeepDarkBlue
        rounded-[15%]
        [&_path:nth-child(1)]:fill-white
        [&_path:nth-child(2)]:fill-DeepDarkBlue
        [&_path:nth-child(2)]:filter-[url(#bs-filter)]
        [&_path:nth-child(2)]:stroke-zinc-800
      `,
    },
    outlined: {
      standard: `
        bg-transparent
        [&_path:nth-child(1)]:fill-[url(#bs-background)]
        [&_path:nth-child(2)]:fill-[url(#bs-text)]
        [&_path:nth-child(2)]:filter-[url(#bs-filter)]
        [&_path:nth-child(2)]:stroke-zinc-200
      `,
      white: `
        bg-transparent
        [&_path:nth-child(1)]:fill-white
        [&_path:nth-child(2)]:fill-DeepDarkBlue
        [&_path:nth-child(2)]:filter-[url(#bs-filter)]
        [&_path:nth-child(2)]:stroke-zinc-800
      `,
      black: `
        bg-transparent
        [&_path:nth-child(1)]:fill-DeepDarkBlue
        [&_path:nth-child(2)]:fill-white
        [&_path:nth-child(2)]:filter-[url(#bs-filter)]
        [&_path:nth-child(2)]:stroke-zinc-200
      `,
    },
    "filled-rad-full": {
      standard: `
        bg-white
        rounded-full
        [&_path:nth-child(1)]:fill-[url(#bs-background)]
        [&_path:nth-child(2)]:fill-[url(#bs-text)]
        [&_path:nth-child(2)]:filter-[url(#bs-filter)]
        [&_path:nth-child(2)]:stroke-zinc-200
      `,
      white: `
        bg-white
        rounded-full
        [&_path:nth-child(1)]:fill-DeepDarkBlue
        [&_path:nth-child(2)]:fill-[url(#bs-text)]
        [&_path:nth-child(2)]:filter-[url(#bs-filter)]
        [&_path:nth-child(2)]:stroke-zinc-200
      `,
      black: `
        bg-DeepDarkBlue
        rounded-full
        [&_path:nth-child(1)]:fill-white
        [&_path:nth-child(2)]:fill-DeepDarkBlue
        [&_path:nth-child(2)]:filter-[url(#bs-filter)]
        [&_path:nth-child(2)]:stroke-zinc-800
      `,
    },
  };
  return (
    <>
      <div className={CN(style.default, IconVariants[variant][color])}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 40">
          <path d="M9.96975 0C7.23094 0 5.20425 2.5077 5.295 5.22723C5.38219 7.83987 5.26894 11.2239 4.45462 13.9835C3.63787 16.7511 2.25638 18.5042 0 18.7294V21.2706C2.25638 21.4958 3.63787 23.2489 4.45462 26.0167C5.26894 28.7763 5.38219 32.1599 5.295 34.7728C5.20425 37.4919 7.23094 40 9.97012 40H38.0338C40.7728 40 42.7989 37.4923 42.7082 34.7728C42.6212 32.1601 42.7343 28.7763 43.5486 26.0167C44.3659 23.2491 45.7436 21.4956 48 21.2706V18.7294C45.7436 18.5042 44.3659 16.7511 43.5487 13.9835C42.7342 11.2243 42.6212 7.84006 42.7082 5.22723C42.7989 2.50809 40.7728 0 38.0338 0H9.96937H9.96975ZM32.5425 24.6225C32.5425 28.3673 29.8725 30.6383 25.4415 30.6383H17.8984C17.6826 30.6382 17.4758 30.5485 17.3232 30.3889C17.1707 30.2293 17.085 30.0129 17.085 29.7872V10.2128C17.085 10.101 17.106 9.99034 17.1469 9.88707C17.1877 9.78379 17.2477 9.68994 17.3232 9.61089C17.3988 9.53184 17.4885 9.46914 17.5872 9.42635C17.6859 9.38357 17.7917 9.36155 17.8986 9.36155H25.3984C29.0931 9.36155 31.5178 11.4554 31.5178 14.6698C31.5178 16.926 29.8866 18.9459 27.8085 19.2996V19.4175C30.6377 19.7421 32.5425 21.7916 32.5425 24.6225ZM24.6188 12.0595H20.3181V18.4146H23.9406C26.7407 18.4146 28.2849 17.235 28.2849 15.1264C28.2849 13.1507 26.9569 12.0595 24.6188 12.0595ZM20.3182 20.9362V27.9395H24.7774C27.6926 27.9395 29.2373 26.7158 29.2373 24.4158C29.2373 22.1154 27.6497 20.9358 24.5899 20.9358H20.3182V20.9362Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.5425 24.6225C32.5425 28.3673 29.8725 30.6383 25.4415 30.6383H17.8984C17.6826 30.6382 17.4758 30.5485 17.3232 30.3889C17.1707 30.2293 17.085 30.0129 17.085 29.7872V10.2128C17.085 10.101 17.106 9.99034 17.1469 9.88707C17.1877 9.78379 17.2477 9.68994 17.3232 9.61089C17.3988 9.53184 17.4885 9.46914 17.5872 9.42635C17.6859 9.38357 17.7917 9.36155 17.8986 9.36155H25.3984C29.0931 9.36155 31.5178 11.4554 31.5178 14.6698C31.5178 16.926 29.8866 18.9459 27.8085 19.2996V19.4175C30.6377 19.7421 32.5425 21.7916 32.5425 24.6225ZM20.3181 12.0595H24.6188C26.9569 12.0595 28.2849 13.1507 28.2849 15.1264C28.2849 17.235 26.7407 18.4146 23.9406 18.4146H20.3181V12.0595ZM20.3182 27.9395V20.9362L24.5899 20.9358C27.6497 20.9358 29.2373 22.1154 29.2373 24.4158C29.2373 26.7158 27.6926 27.9395 24.7774 27.9395H20.3182Z"
          />

          <defs>
            <linearGradient
              id="bs-background"
              x1="76.079"
              x2="523.48"
              y1="10.798"
              y2="365.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="bs-text"
              x1="193.508"
              x2="293.514"
              y1="109.74"
              y2="278.872"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" />
              <stop offset="1" />
            </linearGradient>
            <filter
              id="bs-filter"
              x="161.901"
              y="83.457"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              width="197"
              hanging="249"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="8" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
};
