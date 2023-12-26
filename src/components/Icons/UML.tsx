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
    variant = 'filled',
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
        bg-DeepDarkBlue
        rounded-[15%]
        [&_path]:fill-zinc-100
      `,
      'white': `
        bg-white
        rounded-[15%]
        [&_path]:fill-black
      `,
      'black': `
        bg-DeepDarkBlue
        rounded-[15%]
        [&_path]:fill-white
      `,
    },
    'outlined': {
      'standard': `
        bg-transparent
        [&_path]:DeepDarkBlue
      `,
      'white': `
        bg-transparent
        [&_path]:fill-white
      `,
      'black': `
        bg-transparent
        [&_path]:fill-black
      `,
    },
    'filled-rad-full': {
      'standard': `
        bg-white
        rounded-full
        [&_path]:fill-DeepDarkBlue
      `,
      'white': `
        bg-white
        rounded-full
        [&_path]:fill-wite
      `,
      'black': `
        bg-DeepDarkBlue
        rounded-full
        [&_path]:fill-black
      `,
    },
  };
  return <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={CN(style.default, IconVariants[variant][color])}
    >
      <path
        d="M29.3423 7L21.6065 10.3417C21.6065 10.3417 34.8216 16.0083 36.3878 16.7062C37.941 17.4042 40.15 18.6792 37.6066 20.1C35.0611 21.5208 32.3797 21.0937 30.5762 20.2875C28.775 19.4875 15.4498 13.5021 15.4498 13.5021L7.55009 16.9521C7.55009 16.9521 21.3563 23.0667 23.5135 24.0708C25.6772 25.075 33.7668 27.7875 41.8067 24.075C49.8467 20.3646 48.8414 18.7063 48.8565 18.4C48.8694 18.0917 48.7788 16.4563 47.4931 15.3438C46.201 14.2312 42.3633 12.4792 40.7475 11.7396C39.1296 10.9917 29.3466 7 29.3466 7H29.3423ZM7 18.0396V45.5708L13.2646 48.4917V31.9021L16.6838 49.8187L22.2494 52.4083L25.8304 37.5042V53.8083L32.1208 56.6833V29.1729L22.5708 24.975L19.5442 38.0917L16.4982 22.2625L7 18.0396ZM43.155 24.5292L33.18 29.3521L33.2059 57L57 46.1146L56.9461 38.5875L43.155 44.6708V24.5292Z"
      />
    </svg>
  </>
}
