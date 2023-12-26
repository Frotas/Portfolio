import MainComponents from "./Main";

type MainComponentProps = {};

export default function MainComponent({}: MainComponentProps) {
  const { Header, Service, Skill, Form } = MainComponents;
  const style = `
    bg-DarkSlateGray dark:bg-DeepDarkBlue
    w-full h-full
    flex flex-col gap-12
    `;

  return (
    <>
      <main className={style}>
        <Header id="AboutMe" className="px-8 md:px-60" />

        <Service id="Services" className={`px-8 md:px-60`} />

        <Skill id="Skills" className="px-8 md:px-60" />

        <Form id="ContactForm" className="px-8 md:px-60" />
      </main>
    </>
  );
}
