import ImageComponent from "@app/components/Image";
import CN from "@app/helpers/ClassHelper";
type HeaderProfileImageProps = {
  className?: string;
};
export default function ProfileImageComponent(props: HeaderProfileImageProps) {
  const { Image } = ImageComponent;
  const { className } = props;
  return (
    <section className={CN(className)}>
      <Image
        className={`
          border-White border-2
          rounded-full
        `}
        src="https://avatars.githubusercontent.com/u/89676387?v=4"
        alt="GitHub Profile Image"
        width={200}
        height={200}
      />
    </section>
  );
}
