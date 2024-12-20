import React from "react";
import {
  Cabecalho,
  Imagem,
  List,
  Navegation,
  NickName,
  Paragrafo,
  Secao,
} from "./style.ts";
import Button from "../../components/Button/index.tsx";

const Header = ({
  onFirstButtonClick, 
  onSecondButtonClick, 
}: {
  onFirstButtonClick: () => void;
  onSecondButtonClick: () => void;
}) => {
  return (
    <>
      <Cabecalho>
        <NickName>
          <Imagem
            src="https://cdn0.iconfinder.com/data/icons/occupation-002/64/programmer-programming-occupation-avatar-512.png"
            alt=""
          />
          <h1>Pedro Miguel</h1>
        </NickName>

        <nav>
          <Navegation>
            <List>Home</List>
            <List onClick={onFirstButtonClick} >Sobre</List>
            <List onClick={onSecondButtonClick} >Projetos</List>
          </Navegation>
        </nav>
      </Cabecalho>
      <Secao>
        <h2>Olá, Eu Sou Pedro Miguel</h2>
        <Paragrafo>
          Um desenvolvedor Front-End orientado a resultados que cria e gerencia
          sites e aplicativos da web que levam ao sucesso do produto geral
        </Paragrafo>
        <Button name="Projetos"/>
      </Secao>
    </>
  );
};

export default Header;
