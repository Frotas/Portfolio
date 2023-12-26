import CN from "@app/helpers/ClassHelper";

const IconVariants = {
  'outlined': 'outline',
  'filled': 'filled',
  'filled-rad-full': 'filled-rad-full',
} as const;
type IconVariants = keyof typeof IconVariants;
const IconColors = {
  'standard': 'standard',
  'white': 'white',
  'black': 'black',
}
type IconColors = keyof typeof IconColors;
export default (
  {
    color = 'standard',
    variant = 'filled'
  }: {
    color?: IconColors,
    variant?: IconVariants
  }
) => {
  const style = {
    'SVGMask': `[mask-type:luminance]`,
    'default': `w-16 h-16`
  }
  const IconVariants = {
    'filled': {
      'standard': `
        bg-white
        rounded-[15%]
        [&_path:nth-child(1)]:fill-DeepDarkBlue
        [&_path:nth-child(2)]:fill-white
        [&_path:nth-child(3)]:fill-white
      `,
      'white': `
        bg-white
        rounded-[15%]
        [&_path:nth-child(1)]:fill-DeepDarkBlue
        [&_path:nth-child(2)]:fill-white
        [&_path:nth-child(3)]:fill-white
      `,
      'black': `
        bg-DeepDarkBlue
        rounded-[15%]
        [&_path:nth-child(1)]:fill-white
        [&_path:nth-child(2)]:fill-DeepDarkBlue
        [&_path:nth-child(3)]:fill-DeepDarkBlue
      `,
    },
    'outlined': {
      'standard': `
        bg-transparent
        [&_path:nth-child(1)]:fill-DeepDarkBlue
        [&_path:nth-child(2)]:fill-white
        [&_path:nth-child(3)]:fill-white
      `,
      'white': `
        bg-transparent
        [&_path:nth-child(1)]:fill-white
        [&_path:nth-child(2)]:fill-DeepDarkBlue
        [&_path:nth-child(3)]:fill-DeepDarkBlue
      `,
      'black': `
        bg-transparent
        [&_path:nth-child(1)]:fill-DeepDarkBlue
        [&_path:nth-child(2)]:fill-white
        [&_path:nth-child(3)]:fill-white
      `,
    },
    'filled-rad-full': {
      'standard': `
        bg-white
        rounded-full
        [&_path:nth-child(1)]:fill-DeepDarkBlue
        [&_path:nth-child(2)]:fill-white
        [&_path:nth-child(3)]:fill-white
      `,
      'white': `
        bg-white
        rounded-full
        [&_path:nth-child(1)]:fill-DeepDarkBlue
        [&_path:nth-child(2)]:fill-white
        [&_path:nth-child(3)]:fill-white
      `,
      'black': `
        bg-DeepDarkBlue
        rounded-full
        [&_path:nth-child(1)]:fill-white
        [&_path:nth-child(2)]:fill-DeepDarkBlue
        [&_path:nth-child(3)]:fill-DeepDarkBlue
      `,
    },
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className={CN(style.default, IconVariants[variant][color])}
      >
        <g>
          <path
            d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z"
            fill="current"
          />
          <path
            d="M47.8689 50.0053L26.4378 22.4H22.4V41.592H25.6303V26.5025L45.3331 51.9586C46.2208 51.3645 47.0679 50.7119 47.8689 50.0053Z"
            fill="current"
          />
          <path
            d="M38.6669 22.4H41.8669V41.6H38.6669V22.4Z"
            fill="current"
          />
        </g>
        <defs>
          <linearGradient id="paint0_linear_89_519" x1="1439.31" y1="1689.06" x2="2289.82" y2="2743.23" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear_89_519" x1="198.67" y1="22.4" x2="193.256" y2="1432.39" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
  //   return (
  //     <>
  //       <svg className={CN(`w-16 h-16`, size)} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <g mask="url(#mask0_89_518)">
  //           <path d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z" fill="black" />
  //           <path d="M47.8688 50.0052L26.4377 22.3999H22.3999V41.5918H25.6302V26.5024L45.333 51.9585C46.2207 51.3644 47.0678 50.7118 47.8688 50.0052Z" fill="url(#paint0_linear_89_518)" />
  //           <path d="M38.6667 22.3999H41.8668V41.5999H38.6667V22.3999Z" fill="url(#paint1_linear_89_518)" />
  //         </g>
  //         <defs>
  //           <linearGradient id="paint0_linear_89_518" x1="1439.31" y1="1689.06" x2="2289.82" y2="2743.23" gradientUnits="userSpaceOnUse">
  //             <stop stop-color="white" />
  //             <stop offset="1" stop-color="white" stop-opacity="0" />
  //           </linearGradient>
  //           <linearGradient id="paint1_linear_89_518" x1="198.67" y1="22.3999" x2="193.256" y2="1432.39" gradientUnits="userSpaceOnUse">
  //             <stop stop-color="white" />
  //             <stop offset="1" stop-color="white" stop-opacity="0" />
  //           </linearGradient>
  //         </defs>
  //       </svg>
  //     </>
  //   )
  // }
}
