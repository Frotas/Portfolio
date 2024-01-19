import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, HTMLProps, forwardRef } from "react";

type InputComponentProps = {
  id?: string;
  className?: string;
  label?: string | undefined;
  isLabel?: boolean | undefined;
};

const style = {
  input: `w-full h-fit rounded-lg bg-DeepDarkBlue text-White dark:text-Black dark:bg-zinc-300 pl-6 pr-2`,
  textarea: `w-full rounded-lg bg-DeepDarkBlue text-White dark:text-Black dark:bg-zinc-300 pl-6 pr-2 py-2`,
  label: `pl-6 text-white font-semibold`,
};
export const InputComponent = forwardRef<
  HTMLInputElement,
  InputComponentProps & HTMLProps<HTMLInputElement>
>((props, ref) => {
  const { className } = props;

  return <input {...props} ref={ref} className={CN(style.input, className)} />;
});

export const TextareaComponent = forwardRef<
  HTMLTextAreaElement,
  InputComponentProps & HTMLProps<HTMLTextAreaElement>
>((props, ref) => {
  const { className } = props;
  return (
    <textarea
      {...props}
      ref={ref}
      className={CN(style.textarea, className)}
    ></textarea>
  );
});
