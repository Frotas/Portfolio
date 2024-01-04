"use client";

import CN from "@app/helpers/ClassHelper";
import MainComponents from "./Main";

type MainComponentProps = {
  className?: string;
};

export default function MainComponent({ className }: MainComponentProps) {
  const { Header, Service, Skill, Form } = MainComponents;
  const style = {
    main: `
      bg-DarkSlateGray dark:bg-DeepDarkBlue
    `,
    header: `px-8 py-10`,
    service: `
      justify-center items-center
      px-8 py-10
    `,
    section: {
      root: `
        flex flex-col gap-8 justify-center items-center`,
      skill: `w-fit md:w-fit`,
      form: `w-fit md:w-[50%]`,
    },
  };

  return (
    <>
      <main className={CN(style.main, className)}>
        
        <Header id="AboutMe" className={style.header} />

        <Service id="Services" className={style.service+'grid-cols-2 grid-rows-2'} />

        <section className={style.section.root}>
          <Skill id="Skills" className={style.section.skill} />

          <Form id="ContactForm" className={style.section.form} />
        </section>
      </main>
    </>
  );
}
