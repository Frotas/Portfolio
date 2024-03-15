import CN from "@app/helpers/ClassHelper";
import { HTMLAttributes, HTMLProps, forwardRef } from "react";

type TextareaComponentProps = {
  err: boolean;
  errMessage: string;
  className?: string;
} & HTMLAttributes<HTMLTextAreaElement> &
  HTMLProps<HTMLTextAreaElement>;

const TextareaComponent = forwardRef<
  HTMLTextAreaElement,
  TextareaComponentProps
>(({ className, err, errMessage, ...rest }, ref) => {
  const style = {
    textarea: `w-full rounded-md pl-6 pr-3`,
    err: `text-red-500 font-display`,
  };
  return (
    <>
      <textarea
        {...rest}
        ref={ref}
        className={CN(style.textarea, className)}
      ></textarea>
      {err && <p className={style.err}>{errMessage}</p>}
    </>
  );
});

export default TextareaComponent;
