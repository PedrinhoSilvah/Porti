import React, { forwardRef } from "react";
import {
  Dev,
  DouParagra,
  HDou,
  Parag,
  Secao,
  Secti,
  Separetion,
  Span,
} from "./styles.ts";
import Texto from "../../components/Text/index.tsx";
import Box from "../../components/Box/index.tsx";

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Secao ref={ref}>
      <Dev>
        <Texto Text="SOBRE-MIM" />
        <Parag>
          Aqui você encontrará mais informações sobre mim, o que eu faço e
          minhas habilidades atuais,
          <br /> principalmente em termos de programação e tecnologia.
        </Parag>
      </Dev>

      <Secti>
        <div>
          <HDou>Venha me conhecer!</HDou>
          <DouParagra>
            Sou um <Span>Desenvolvedor Web Focado em Frontend</Span>, atualmente
            cursando Engenharia de Software. Comprometido em entregar soluções
            front-end de alta qualidade que não apenas atendem, mas superam as
            expectativas, construindo e gerenciando o Front-end de Sites e
            Aplicativos Web que levam ao sucesso do produto geral.
            <br />
            <br />
            Confira alguns dos meus trabalhos na seção <Span>Projetos</Span>.
            Sinta-se à vontade para se conectar ou me seguir no meu
            <br />
            <br />
            <a href="https://www.linkedin.com/in/pedro-miguel-754163212/">
              Linkedin
            </a>
            <br />
            e
            <br />
            <a href="https://github.com/PedrinhoSilvah">Gitghub</a>
            <br />
            <br />
            Estou aberto a oportunidades de trabalho onde eu possa contribuir,
            aprender e crescer. Se você tiver uma oportunidade que corresponda
            às minhas habilidades e experiência, não hesite em entrar em contato
            comigo.
          </DouParagra>
        </div>
        <div>
          <HDou>Minhas Habilidades</HDou>
          <Separetion>
            <Box name="Html5" />
            <Box name="css3" />
            <Box name="Javascript" />
            <Box name="React" />
            <Box name="React native" />
            <Box name="typescript" />
            <Box name="git" />
            <Box name="Jquery" />
            <Box name="Sass" />
            <Box name="gulp" />
            <Box name="less" />
            <Box name="grunt" />
            <Box name="vue js" />
            <Box name="redux" />
            <Box name="react testing library" />
            <Box name="cypress" />
            <Box name="bootstrap" />
            <Box name="parcel" />
            <Box name="babel" />
            <Box name="figman" />
          </Separetion>
        </div>
      </Secti>
    </Secao>
  );
});

export default About;
