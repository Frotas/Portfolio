
import CN from "@app/helpers/ClassHelper";
import Image from "next/image";
type HeaderProfileImageProps = {
  className?: string;
};
export default function ProfileImageComponent(props: HeaderProfileImageProps) {
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
        priority={true}
      />
    </section>
  );
}
