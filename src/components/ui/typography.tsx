import { cn } from "@app/lib/utils";
import { Fragment, HTMLAttributes, forwardRef } from "react";

interface Heading extends HTMLAttributes<HTMLHeadingElement> {}

export const Title = ({ children, className, ...props }: Heading) => {
  return (
    <h2 className={cn("font-title", className)} {...props}>
      <Fragment>{children}</Fragment>
    </h2>
  );
};

export const Subtitle = ({ children, className, ...props }: Heading) => {
  return (
    <h3 className={cn("font-subtitle", className)} {...props}>
      <Fragment>{children}</Fragment>
    </h3>
  );
};

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({ children, className, ...props }, ref) => {
  return (
    <p ref={ref} className={cn("font-paragraph", className)} {...props}>
      <Fragment>{children}</Fragment>
    </p>
  );
});
