import CN from "@app/helpers/ClassHelper";
import { HTMLProps } from "react";

type FormComponentProps = {
  className?: string;
} & HTMLProps<HTMLFormElement>;

export default function FormRoot(props: FormComponentProps) {
  const { className, children } = props;
  const style = `flex flex-col gap-4 py-8`;
  return (
    <>
      <form {...props} className={CN(style, className)}>
        {children}
      </form>
    </>
  );
}
