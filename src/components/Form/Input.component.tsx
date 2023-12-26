import CN from "@app/helpers/ClassHelper";
import { HTMLProps } from "react";

type InputComponentProps = {
  className?: string;
  placeholder?: string;
  id?: string;
  type?: string;
  cols?: number;
  rows?: number;
  name?: string;
  form?: string;
} & HTMLProps<HTMLInputElement> &
  HTMLProps<HTMLTextAreaElement>;

export default function InputComponent(props: InputComponentProps) {
  const { className, type } = props;
  const style = {
    input: `w-full h-fit rounded-lg bg-DeepDarkBlue text-White dark:text-Black dark:bg-zinc-300 pl-8 pr-2 py-2`,
    textarea: `w-full rounded-lg bg-DeepDarkBlue text-White dark:text-Black dark:bg-zinc-300 pl-8 pr-2 py-2`,
  };

  return (
    <>
      {type != "textarea" && (
        <input {...props} className={CN(style.input, className)} />
      )}
      {type == "textarea" && (
        <textarea {...props} className={CN(style.textarea, className)} />
      )}
    </>
  );
}
