"use client";

import Form from "../Form";
import Button from "../Button";
import Text from "../Text";

type ContactFormProps = {
  id?: string;
  className?: string;
};

export default function ContactForm(props: ContactFormProps) {
  const { Title, Subtitle } = Text;
  const { id, className } = props;
  const style = {
    section: `w-full flex flex-col gap-4`,
    title: `text-center text-White`,
    form: {
      root: `gap-8 md:justify-center md:items-center p-0`,
      input: `text-black`,
      textarea: `resize-y h-fit`,
    },
  };
  return (
    <>
      <Title className={style.title}>Formulário para Contato</Title>
      {/* <Subtitle></Subtitle> */}
      <Form.Root
        id={id}
        action="POST"
        className={`${style.form.root} ${className}`}
      >
        <section className={style.section}>
          <Form.Input
            id="email"
            name="email"
            type="email"
            form="ContactForm"
            className={style.form.input}
            placeholder="E-Mail"
            aria-required
            required
          />
          <Form.Input
            id="name"
            name="name"
            type="text"
            form="ContactForm"
            className={style.form.input}
            placeholder="Nome Completo"
            aria-required
            required
          />
          <Form.Input
            id="number"
            name="phone"
            type="tel"
            form="ContactForm"
            className={style.form.input}
            placeholder="+55 (DDD) 90000-0000"
          />
          <Form.Input
            id="subject"
            name="subject"
            type="text"
            form="ContactForm"
            className={style.form.input}
            placeholder="Assunto"
            aria-required
            spellCheck
            required
          />
        </section>
        <Form.Input
          id="message"
          name="message"
          type="textarea"
          form="ContactForm"
          className={style.form.textarea}
          placeholder="Mensagem"
          aria-required
          spellCheck
          required
          rows={5}
        />
        <Button.Root
          form="ContactForm"
          onSubmit={() => {}}
          className="text-White my-4"
        >
          Solicitar Orçamento
        </Button.Root>
      </Form.Root>
    </>
  );
}
