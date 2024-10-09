import { Paragraph } from "@app/components/ui";
import { Fragment } from "react";

export function formatText(text: string | string[]) {
  try {
    const regex = /(\*\*(.+?)\*\*)|(__(.+?)__)|(~~(.+?)~~)/gm;
    const formattedParagraphs: JSX.Element[] = [];

    // Função para processar texto e formatá-lo
    const format = (t: string) => {
      const parts: JSX.Element[] = [];
      let lastIndex = 0;

      t.replace(regex, (match, boldMatch, boldText, italicMatch, italicText, strikeMatch, strikeText, offset) => {
        // Adiciona texto normal antes do match
        if (offset > lastIndex) {
          parts.push(<Fragment key={lastIndex}>{t.slice(lastIndex, offset)}</Fragment>);
        }

        // Adiciona texto formatado
        if (boldMatch) {
          parts.push(
            <b key={offset} className="text-accent">
              {boldText}
            </b>,
          );
        } else if (italicMatch) {
          parts.push(
            <i key={offset} className="text-accent">
              {italicText}
            </i>,
          );
        } else if (strikeMatch) {
          parts.push(<s key={offset}>{strikeText}</s>);
        }

        lastIndex = offset + match.length;
        return match;
      });

      // Adiciona o restante do texto
      if (lastIndex < t.length) {
        parts.push(<Fragment key={lastIndex}>{t.slice(lastIndex)}</Fragment>);
      }

      return parts;
    };

    // Se text for um array, processa cada elemento e envolve em um Paragrafo
    if (Array.isArray(text)) {
      text.forEach((t, index) => {
        const formattedText = format(t);
        formattedParagraphs.push(<Paragraph key={index}>{formattedText}</Paragraph>);
      });
    } else {
      // Se text for uma string, processa diretamente
      const formattedText = format(text);
      formattedParagraphs.push(<Fragment key={0}>{formattedText}</Fragment>);
    }

    return formattedParagraphs;
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Unknown error occurred");
    return <>{text}</>; // Retorna o texto original em caso de erro
  }
}
