import React from "react";
import { Botao } from "./styles.ts";
const Button = (props) => {
  return <Botao>{props.name}</Botao>;
};

export default Button;
