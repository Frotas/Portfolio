"use client";

import Link from "next/link";
import { ReactNode, useEffect } from "react";

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
      <Title className="text-center" heading="h2">
        Meios de Contatos
      </Title>
      <Contact id="contact" className="contactSection">
        <Link
          className="link"
          aria-label="GMail"
          href={"mailto:gs.dev.oficial@gmail.com"}
          target="_blank"
        >
          <Icon icon={GMail} caption="GMail" />
        </Link>
        <Link
          className="link"
          aria-label="Github"
          href={"https://www.github.com/frotas/"}
          target="_blank"
        >
          <Icon icon={GitHub} caption="GitHub" />
        </Link>
        <Link
          className="link"
          aria-label="LinkedIn"
          href={"https://www.linkedin.com/in/guilherme-af-sales/"}
          target="_blank"
        >
          <Icon icon={LinkedIn} caption="LinkedIn" />
        </Link>
        <Link
          className="link"
          aria-label="WhatsApp"
          href={
            "https://wa.me/5511981028442?Tenho%20interesse%20em%20contratar%20os%20seus%20serviços"
          }
        >
          <Icon icon={WhatsApp} caption="WhatsApp" />
        </Link>
      </Contact>
    </main>
  );
}
