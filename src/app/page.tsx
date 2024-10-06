import { FileTextIcon, LayersIcon, SquareStackIcon, UserIcon } from "lucide-react";

import { FooterSection, LinkTree, Main, Navigation } from "@app/components/home";
import { cn } from "@app/lib/utils";

export default async function Home() {
  const linkTree: LinkTree[] = [
    {
      anchor: "#about",
      icon: <FileTextIcon size={20} aria-hidden />,
      text: "Sobre mim",
      tooltip: {
        show: true,
        text: "Sobre mim",
      },
    },
    {
      anchor: "#services",
      icon: <LayersIcon size={20} aria-hidden />,
      text: "Serviços",
      tooltip: {
        show: true,
        text: "Serviços",
      },
    },
    {
      anchor: "#skills",
      icon: <SquareStackIcon size={20} aria-hidden />,
      text: "Habilidades Técnicas",
      tooltip: {
        show: true,
        text: "Habilidades Técnicas",
      },
    },
    {
      anchor: "#projects",
      icon: <UserIcon size={20} aria-hidden />,
      text: "Projetos",
      tooltip: {
        show: true,
        text: "Projetos",
      },
    },
  ];
  return (
    <section
      className={cn(
        "grid w-full grid-cols-2 grid-rows-[0fr_1fr] gap-[1rem_0rem] [grid-template-areas:'Nav_Nav'_'Main_Main'_'Footer_Footer';]",
        "md:grid-cols-[0fr_1fr] md:grid-rows-2 md:gap-[1rem_0rem] md:[grid-template-areas:'Nav_Main'_'Nav_Main'_'Footer_Footer';]",
      )}
    >
      <Navigation linkTree={linkTree} className="[grid-area:Nav;]" />
      <Main className="[grid-area:Main;] md:mx-28 md:my-12" />
      <FooterSection
        className="[grid-area:Footer;]"
        data={{
          author: {
            name: "Guilherme Augusto Frotas Sales",
            email: "gs.dev.oficial@gmail.com",
            phone: "+55 (11) 98102-8442",
            wa: {
              show: false,
              message: "",
            },
          },
          copy: {
            text: "Created by GS.DEV",
            license: "MIT License",
          },
        }}
      />
    </section>
  );
}
