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
    variant = 'filled',
    color = 'standard'
  }: {
    variant?: IconVariants,
    color?: IconColors
  }
) => {
  const style = {
    'SVGMask': `[mask-type:luminance]`,
    'default': `w-16 h-16`
  }
  const IconVariants = {
    'filled': {
      'standard': 'bg-[#c69] fill-white rounded-[15%]',
      'white': 'bg-white fill-DeepDarkBlue rounded-[15%]',
      'black': 'bg-DeepDarkBlue fill-white rounded-[15%]',
    },
    'outlined': {
      'standard': 'fill-[#c69]',
      'white': 'fill-white',
      'black': 'fill-DeepDarkBlue',
    },
    'filled-rad-full': {
      'standard': 'bg-[#c69] fill-white rounded-full',
      'white': 'bg-white fill-DeepDarkBlue rounded-full',
      'black': 'bg-DeepDarkBlue fill-white rounded-full',
    },
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Sass"
        role="img"
        viewBox="0 0 512 512"
        className={CN( style.default, IconVariants[variant][color])}
      >
         <path
          d="M258,88c-96,33-158,100-152,140s66,72,93,93h0c-35,18-79,45-78,80,2,48,54,33,76,19s44-53,30-94c31-8,58,2,66,8,31,22,15,47,4,51s-4,6,3,4,22-12,22-29c0-43-46-63-103-48-33-35-78-51-76-89,1-14,6-50,95-95s152-27,144,14c-12,62-120,104-158,68-2-4-9-7-5,4,20,50,182,27,189-79C410,79,329,64,258,88ZM172,408c-25,8-24-8-23-14,3-17,17-38,59-59C220,373,193,402,172,408Z"
          fill="current"
        />
      </svg>
    </>
  )
}
