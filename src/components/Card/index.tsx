import React from "react";
import { CardD, DivButton, Imagem, Paragrafo, Separa, Title } from "./style.ts";
import ButtonLink from "../ButtonLink/indx.tsx";

const Card = (props) => {
  return (
    <CardD>
      <Imagem src={props.img} />
      <Separa>
        <Title>{props.title}</Title>
        <Paragrafo>{props.paragraph}</Paragrafo>
        <DivButton>
          <ButtonLink name={props.visit} Link={props.NewLInk} />
          <ButtonLink name={props.github} Link={props.git} />
        </DivButton>
      </Separa>
    </CardD>
  );
};

export default Card;
