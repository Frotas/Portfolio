import crypto from "node:crypto";
import { AppWindowIcon, FileTextIcon, LayersIcon, ServerIcon, ShieldHalfIcon } from "lucide-react";

import { AboutSection, HeroSection, ServiceList, ServicesSection } from "@app/components/home";
import { cn } from "@app/lib/utils";

const servicesList: ServiceList[] = [
  {
    title: "Desenvolvimento de Sistemas Web",
    description: `
      Implementação de sistemas internos para aplicações web,
      utilizando as principais tecnologias amplamente reconhecidas pelo mercado.
    `,
    cta: "Contratar Serviço",
    icon: <ServerIcon aria-hidden className="h-14 w-14 rounded-md bg-slate-500/15 stroke-1 p-1 md:h-16 md:w-16" />,
  },
  {
    title: "Desenvolvimento de Websites e e-Commerce",
    description: `
      Implementação de interfaces visuais eficientes e modernas,
      utilizando as principais práticas e tecnologias reconhecidas pelo mercado.
    `,
    cta: "Contratar Serviço",
    icon: <AppWindowIcon aria-hidden className="h-14 w-14 rounded-md bg-slate-500/15 stroke-1 p-1 md:h-16 md:w-16" />,
  },
  {
    title: "Proteção e Segurança de Aplicações Web",
    description: `
      Realização de análises de vulnerabilidades e avaliações de segurança,
      com técnicas amplamente reconhecidas e aceitas pelo mercado e principais
      órgãos de segurança.
    `,
    cta: "Contratar Serviço",
    icon: <ShieldHalfIcon aria-hidden className="h-14 w-14 rounded-md bg-slate-500/15 stroke-1 p-1 md:h-16 md:w-16" />,
  },
];

const style = new Map<string, string[]>();
style.set("classMap", ["flex flex-col gap-4 px-4 sm:px-8 py-12 [grid-area:main]"]);

export default async function Home() {
  return (
    <main
      id="mainContent"
      className={cn(
        style.get("classMap"),
        `md:my-12 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-[8rem_1.13rem] md:py-2 md:[grid-template-areas:"hero_about"_"hero_about"_"services_services"]`,
      )}
    >
      <HeroSection
        id="heroSection"
        className="w-full items-center [grid-area:hero]"
        data={{
          title: `Olá, Sou o Guilherme!`,
          desc: "**Desenvolvedor Web Full Stack** com mais de 2 anos de experiência na criação de soluções web.",
          avatar: {
            link: `https://gravatar.com/avatar/${crypto.createHash("sha256").update(`gs.dev.oficial@gmail.com`).digest("hex")}`,
          },
        }}
      />
      <AboutSection
        id="aboutSection"
        className="w-full [grid-area:about]"
        data={{
          icon: <FileTextIcon aria-hidden className="stroke-1" size={32} />,
          title: `Sobre mim`,
          text: [
            `Meu interesse por tecnologia começou através dos jogos, onde dei meus primeiros passos criando macros para jogos online.
            Com o tempo, fui me aprofundando nos conceitos fundamentais da **Tecnologia da Informação**, o que me levou a cursar
            **técnico em Desenvolvimento de Sistemas**. Esse processo solidificou ainda mais minha conexão com a área.`,
            `Tive a oportunidade de participar de um **projeto social** através da ReCode, o que ampliou minha visão sobre o impacto positivo da tecnologia. Agora, estou empolgado para
            colaborar em projetos inovadores e desafiadores, buscando constantemente superar meus limites no
            **Desenvolvimento Web** e contribuir ativamente para a comunidade **Open Source**.`,
          ],
        }}
      />
      <ServicesSection
        id="servicesSection"
        className="w-full [grid-area:services]"
        data={{
          icon: <LayersIcon aria-hidden className="stroke-1" size={32} />,
          title: "Serviços",
          serviceList: servicesList,
        }}
      />
    </main>
  );
}
