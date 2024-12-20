import React, { forwardRef } from "react";
import Texto from "../../components/Text/index.tsx";
import { Division, Parag, Secao } from "./style.ts";
import Card from "../../components/Card/index.tsx";

const Project = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Secao ref={ref} >
      <Division>
        <Texto Text="Projetos" />
        <Parag>
          Aqui você encontrará alguns dos projetos pessoais que criei
        </Parag>
      </Division>
      <div>
        <Card
          title="Clone Disney"
          paragraph="

        Criação de página web responsiva Clone da Disney;
        
        Desenvolvimento web utilizando HTML, SASS, Gulp, Javascript construir uma página totalmente responsiva

        utilizando o modelo da disney recriei seu front-end com suas funcionalidades"
          img="https://portifolio-go.vercel.app/projects/Disney.png"
          NewLInk="https://clone-disney-dfj5.vercel.app/"
          visit="Visite-me"
          github="Github"
          git="https://github.com/PedrinhoSilvah/Clone_Disney"
        />
        <Card
          title="Projeto Restaurante"
          paragraph="
          
        Construímos uma página sobre um Restaurante onde existe funcionalidades como um menu para navegação, seção cardápio, eventos e contatos;

        Utilização de tecnologias html, css, bootstrap e jquery

        Construímos uma página sobre um Restaurante onde existe funcionalidades como um menu para navegação, seção cardápio, eventos e contatos; Utilização de tecnologias html, css, bootstrap e jquery

        Competências: Bootstrap · HTML · JQuery · CSS
          "
          img="https://portifolio-go.vercel.app/projects/Restaurante.png"
          NewLInk="https://projeto-restaurante-tau.vercel.app/"
           visit="Visite-me"
            github="Github"
            git="https://github.com/PedrinhoSilvah/projeto-restaurante"
        />
        <Card
          title="Clone Star+"
          paragraph="Criação de página web responsiva Clone da Star; Desenvolvimento web utilizando HTML, SASS, Gulp, Javascript
           construir uma página totalmente responsiva utilizando o modelo da Star recriei seu front-end com suas funcionalidades"
          img="https://portifolio-go.vercel.app/projects/Star+.png"
          NewLInk="https://clone-star.vercel.app/"
           visit="Visite-me"
            github="Github"
            git="https://github.com/PedrinhoSilvah/Clone_star-"
        />
      </div>
    </Secao>
  );
}
)

export default Project;
