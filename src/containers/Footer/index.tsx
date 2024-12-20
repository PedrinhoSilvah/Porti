import React from "react";
import { FooterSection, Hdou, Pag, Separar } from "./styles.ts";

const Footer = () => {
  return (
    <FooterSection>
      <Separar>
        <Hdou>Pedro Miguel</Hdou>
        <Pag>
          Um desenvolvedor web focado em frontend que constrói o frontend de
          sites
          <br /> e aplicativos da web que leva ao sucesso do produto geral
        </Pag>
      </Separar>
    </FooterSection>
  );
};

export default Footer;
