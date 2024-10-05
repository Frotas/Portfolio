import crypto from "node:crypto";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { DetailedHTMLProps, type HtmlHTMLAttributes, forwardRef } from "react";

import { Avatar, AvatarFallback, AvatarImage, Button, Paragraph, Title } from "@app/components/ui";
import { cn, formatText } from "@app/lib/utils";

interface RootProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement> {
  data?: {
    title: string;
    desc: string;
    avatar: {
      link: string | any;
    };
  };
}

export const HeroSection = forwardRef<HTMLElement, RootProps>(({ className, data, ...props }, ref) => {
  return (
    <section className={cn("flex w-80 flex-col justify-evenly md:w-fit", className)} {...props}>
      <header>
        <Avatar className="m-[0_auto] h-[200px] w-[200px] font-semibold font-serif text-2xl">
          <AvatarImage src={data?.avatar.link} />
          <AvatarFallback>GS</AvatarFallback>
        </Avatar>
        <Title className="mt-4 font-title">{data?.title}</Title>
      </header>
      <footer>
        <Paragraph>{formatText(data!.desc)}</Paragraph>
        <div className="mt-4 flex flex-row gap-2" role="group">
          <Button
            variant={"outline"}
            size={"icon"}
            className="bg-input font-semibold font-serif md:h-12 md:w-12 dark:text-black"
            asChild
          >
            <Link href={"https://linkedin.com/in/guilherme-af-sales"} aria-label="LinkedIn Profile Link" role="link">
              <LinkedinIcon className="h-4 w-4 stroke-1 md:h-8 md:w-8" aria-label="LinkedIn Icon" />
            </Link>
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className="bg-input font-semibold font-serif md:h-12 md:w-12 dark:text-black"
            asChild
          >
            <Link href={"https://github.com/frotas"} aria-label="GitHub Profile Link" role="link">
              <GitHubLogoIcon className="h-4 w-4 stroke-1 md:h-8 md:w-8" aria-label="GitHub Icon" />
            </Link>
          </Button>
          <Button
            variant={"default"}
            size={"default"}
            className="w-full max-w-40 bg-bay-of-many-500 font-semibold font-serif text-white hover:bg-bay-of-many-600 md:h-12"
            asChild
          >
            <Link
              className="md:text-[12pt]"
              href={"mailto:gs.dev.oficial@gmail.com"}
              aria-label="Email Link"
              role="link"
            >
              Entre em Contato
            </Link>
          </Button>
        </div>
      </footer>
    </section>
  );
});
HeroSection.displayName = "HeroSection";
