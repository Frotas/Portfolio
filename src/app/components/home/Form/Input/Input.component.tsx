import { HTMLAttributes, HTMLProps, forwardRef } from "react";
import CN from "@app/helpers/ClassHelper";

type InputComponentProps = {
  err: boolean;
  errMessage: string;
  className?: string;
} & HTMLAttributes<HTMLInputElement> &
  HTMLProps<HTMLInputElement>;

const InputComponent = forwardRef<HTMLInputElement, InputComponentProps>(
  ({ className, err, errMessage, ...rest }, ref) => {
    const style = {
      input: `rounded-md w-full pl-6 pr-3 `,
      err: `text-red-500 font-display`,
    };
    return (
      <>
        <input {...rest} ref={ref} className={CN(style.input, className)} />
        {err && <p className={CN(style.err)}>{errMessage}</p>}
      </>
    );
  }
);

export default InputComponent;
