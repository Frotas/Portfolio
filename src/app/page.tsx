"use client";

import Link from "next/link";
import { ReactNode } from "react";

import Skill from "./components/home/Skill";
import { Hero } from "./components/home/Hero";
import { Service } from "./components/home/Service";
import { Contact } from "@app/app/components/home/Contact";
import {
  Java,
  JavaScript,
  TypeScript,
  NodeJS,
  SpringBoot,
  Python,
  LinkedIn,
  GMail,
  WhatsApp,
  GitHub,
} from "./components/_ui/Assets";
import { Title } from "./components/_ui/Typography";
import { Icon } from "./components/_ui/Icon";

export default function Home(): ReactNode {
  return (
    <main
      id="content"
      className={`
        px-4 pb-16 lg:!pb-12 lg:!px-16 animate-opacity transition-opacity
      `}
    >
      <Hero id="about" />
      <Title className="text-center" heading="h2">
        Serviços
      </Title>
      <Service
        id="services"
        options={[
          {
            hidden: {
              icon: false,
              title: false,
              text: false,
              button: true,
            },
          },
        ]}
        className="pageSection"
      />
      <Title className="text-center" heading="h2">
        Hard Skills
      </Title>
      <Skill.Root id="hardSkills" className="pageSection">
        <Icon icon={Java} caption="Java" />
        <Icon icon={JavaScript} caption="JavaScript" />
        <Icon icon={TypeScript} caption="TypeScript" />
        <Icon icon={Python} caption="Python" />
        <Icon icon={NodeJS} caption="Node JS" />
        <Icon icon={SpringBoot} caption="SpringBoot" />
      </Skill.Root>
    </main>
  );
}
