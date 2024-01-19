import CN from "@app/helpers/ClassHelper";
import { HTMLProps, ReactNode, forwardRef } from "react";

type FormComponentProps = {
  className?: string;
  children: ReactNode;
};

const FormRoot = forwardRef<
  HTMLFormElement,
  FormComponentProps & HTMLProps<HTMLFormElement>
>((props, ref) => {
  const { className, children, onSubmit } = props;
  const style = `flex flex-col gap-4 py-8`;
  return (
    <>
      <form
        {...props}
        ref={ref}
        onSubmit={onSubmit}
        className={CN(style, className)}
      >
       {children}
      </form>
    </>
  );
});

export default FormRoot;
