import { Slot } from "@radix-ui/react-slot";
import { FileTextIcon } from "lucide-react";
import { type HTMLAttributes, ReactElement, forwardRef } from "react";

import { Paragraph, Title } from "@app/components/ui";
import { cn, formatText } from "@app/lib/utils";

interface AboutProps extends HTMLAttributes<HTMLElement> {
  data: {
    icon?: ReactElement;
    title: string;
    text: string[];
  };
}

export const AboutSection = forwardRef<HTMLElement, AboutProps>(({ className, data, ...props }, ref) => {
  const { text, title, icon: Icon } = data;
  return (
    <section className={cn("my-5 w-80 md:m-0 md:w-fit", className)} ref={ref} {...props}>
      <header className="my-8 mt-12 inline-flex items-center gap-2 md:mb-12">
        {Icon && Icon}
        <Title>{title}</Title>
      </header>
      <footer className="flex flex-col gap-6">{formatText(text)}</footer>
    </section>
  );
});
AboutSection.displayName = "AboutSection";
