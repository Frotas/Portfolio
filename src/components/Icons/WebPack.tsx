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
  }:
    {
      color?: IconColors,
      variant?: IconVariants
    }
) => {
  const style = {
    'SVGMask': `[mask-type:luminance]`,
    'default': `
      w-16 h-16
      [&_path:nth-child(1)]:fill-white
      [&_path:nth-child(2)]:fill-[#8ED6FB]
      [&_path:nth-child(3)]:fill-[#1C78C0]
    `
  }
  const IconVariants = {
    'filled': {
      'standard': `
        bg-white
        rounded-[15%]
      `,
      'white': `
        bg-white
        rounded-[15%]
      `,
      'black': `
        bg-DeepDarkBlue
        rounded-[15%]
      `,
    },
    'outlined': {
      'standard': `
        bg-transparent
      `,
      'white': `
        bg-transparent
      `,
      'black': `
        bg-transparent
      `,
    },
    'filled-rad-full': {
      'standard': `
        bg-white
        rounded-full
      `,
      'white': `
        bg-white
        rounded-full
      `,
      'black': `
        bg-DeepDarkBlue
        rounded-full
      `,
    },
    'none': {
      'none': ''
    }
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={CN(style.default, IconVariants[variant][color])}
        viewBox="0 0 64 64"
      >
        <g>
          <path
            d="M32.0555 4.5L56.3607 18.25V45.75L32.0555 59.5L7.75 45.75V18.25L32.0555 4.5Z"
            fill="current"
          />
          <path
            d="M52.0205 44.8013L32.8575 55.6408V47.1983L44.797 40.6305L52.0205 44.8013ZM53.3313 43.6143V20.945L46.3188 24.992V39.5625L53.3313 43.6143ZM12.0125 44.8013L31.1755 55.6408V47.1983L19.2358 40.6305L12.0125 44.8013ZM10.7018 43.6143V20.945L17.7143 24.992V39.5625L10.7018 43.6143ZM11.522 19.4783L31.1755 8.35925V16.522L18.585 23.4475L18.4888 23.5025L11.522 19.4783ZM52.5108 19.4783L32.8575 8.35925V16.522L45.448 23.4475L45.5443 23.5025L52.5108 19.4783Z"
            fill="current"
          />
          <path
            d="M31.1755 45.2777L19.3962 38.8015V25.9682L31.1755 32.77V45.2777ZM32.8575 45.2777L44.6367 38.8015V25.9682L32.8575 32.77V45.2777ZM20.1937 24.4832L32.0187 17.9795L43.8437 24.4832L32.0187 31.3125L20.1937 24.4832Z"
            fill="current"
          />
        </g>
      </svg>
    </>
  )

}
