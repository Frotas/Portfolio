import Image, { ImageProps } from "next/image";
import Text from "../Text";
import CN from "@app/helpers/ClassHelper";
import { IconsProps } from "../Icons/@types/IconTypes";

const ComponentColor = {
  White: "White",
  Black: "Black",
  Cyprus: "Cyprus",
  RockBlue: "RockBlue",
  DeepDarkBlue: "DeepDarkGray",
  DarkSlateGray: "DarkSlateGray",
  TrappedDarkness: "TrappedDarkness",
} as const;
type ComponentColor = keyof typeof ComponentColor;

const ComponentVariant = {
  rounded: "rounded",
  standard: "standard",
} as const;
type ComponentVariant = keyof typeof ComponentVariant;

type ImageRenderComponentProps = {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ElementType<IconsProps>;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  iVariant?: ComponentVariant;
  iColor?: ComponentColor;
} & IconsProps;

export default function ImageRenderComponent(props: ImageRenderComponentProps) {
  const {
    className,
    children,
    icon: Icon,
    src = "",
    alt = "",
    width = 200,
    height = 200,
    iColor = "White",
    iVariant = "standard",
  } = props;

  const style = {
    root: `w-fit flex flex-col gap-2`,
    cap: `dark:text-White text-White font-semibold`,
    image: `w-[${width}px] h-[${height}px]`,
  };

  const ComponentVariant = {
    rounded: `rounded-full border-${iColor} border-2`,
    standard: `rounded-[15%] border-${iColor} border-2`,
  } as const;

  const { Cap } = Text;
  return (
    <>
      <figure className={CN(style.root, className)}>
        {!Boolean(Icon) && (
          <Image
            className={CN(style.image, ComponentVariant[iVariant], className)}
            width={width}
            height={height}
            src={src}
            alt={alt}
          />
        )}
        {!!Icon && <Icon {...props} className={CN(className)} />}
        {!!children && <Cap className={style.cap}>{children}</Cap>}
      </figure>
    </>
  );
}
