"use client";

import CN from "@app/helpers/ClassHelper";
import MainComponents from "./Main";

type MainComponentProps = {
  className?: string;
};

export default function MainComponent({ className }: MainComponentProps) {
  const { Header, Service, Skill, Form } = MainComponents;
  const style = `
    bg-DarkSlateGray dark:bg-DeepDarkBlue
    flex flex-col gap-12
  `;

  return (
    <>
      <main className={CN(style, className)}>
        <Header id="AboutMe" className="px-8 md:px-60" />

        <Service id="Services" className={`px-8 md:px-60`} />

        <Skill id="Skills" className="px-8 md:px-60" />

        <Form id="ContactForm" className="px-8 md:px-60" />
      </main>
    </>
  );
}
