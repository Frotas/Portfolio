import crypto from "node:crypto";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { DetailedHTMLProps, type HtmlHTMLAttributes, forwardRef, useMemo } from "react";

import { Avatar, AvatarFallback, AvatarImage, Button, Paragraph, Subtitle, Title } from "@app/components/ui";
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
    <section className={cn("flex flex-col gap-12 sm:flex-row md:w-fit md:flex-col", className)} {...props}>
      <Avatar className="h-[200px] w-[200px] font-semibold font-serif text-2xl">
        <AvatarImage src={data?.avatar.link} alt="Imagem de Perfil - Gravatar" role="image" />
        <AvatarFallback>GS</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center" role="contentinfo">
        <Subtitle>{data?.title.split(",")[0]},</Subtitle>
        <Title>{data?.title.split(",")[1]}</Title>
        <Paragraph className="mt-2 text-center">{formatText(data!.desc)}</Paragraph>
        <section className="mt-8 flex w-fit flex-row gap-4" role="group">
          <Button
            variant={"outline"}
            size={"icon"}
            className="aspect-square border-slate-500/15 font-semibold font-serif md:h-12 md:w-12"
            role="button"
            asChild
          >
            <Link
              href={"https://www.linkedin.com/in/guilherme-af-sales"}
              aria-label="LinkedIn Profile Link"
              role="link"
              target="_blank"
            >
              <LinkedinIcon className="h-4 w-4 stroke-1 md:h-8 md:w-8" aria-label="LinkedIn Icon" />
            </Link>
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className="aspect-square border-slate-500/15 font-semibold font-serif md:h-12 md:w-12"
            role="button"
            asChild
          >
            <Link href={"https://www.github.com/frotas"} aria-label="GitHub Profile Link" role="link" target="_blank">
              <GitHubLogoIcon className="h-4 w-4 stroke-1 md:h-8 md:w-8" aria-label="GitHub Icon" />
            </Link>
          </Button>
          <Button
            variant={"default"}
            size={"default"}
            className="w-full max-w-40 font-semibold font-serif text-white md:h-12"
            role="button"
            asChild
          >
            <Link
              className="md:text-[12pt]"
              href={"mailto:gs.dev.oficial@gmail.com"}
              aria-label="Email Link"
              role="link"
              target="_blank"
            >
              Entre em Contato
            </Link>
          </Button>
        </section>
      </div>
    </section>
  );
});
HeroSection.displayName = "HeroSection";
