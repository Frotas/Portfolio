import Image from "next/image";
import Text from "../Text";
import CN from "@app/helpers/ClassHelper";
import { IconsProps } from "../Icons";

type ImageRenderComponentProps = {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ComponentType<IconsProps>;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
} & IconsProps;

export default function ImageRenderComponent(
  props: ImageRenderComponentProps
) {
  const {
    className,
    children,
    icon: Icon,
    src = "",
    alt = "",
    width = 200,
    height = 200,
  } = props;
  const style = {
    root: `w-fit flex flex-col gap-2`,
    icon: ``,
    image: ``,
    cap: `dark:text-White text-White font-semibold`,
  };
  const { Cap } = Text;
  return (
    <>
      <figure className={CN(style.root, className)}>
        {src != "" && alt != "" && (
          <Image
            className={CN(style.image, className)}
            width={width}
            height={height}
            src={src}
            alt={alt}
          />
        )}
        {!!Icon && (
          <Icon {...props} className={CN(style.icon)} />
        )}
        <Cap className={style.cap}>{children}</Cap>
      </figure>
    </>
  );
}
