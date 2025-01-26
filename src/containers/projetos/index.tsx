import React, { forwardRef } from "react";
import Texto from "../../components/Text/index.tsx";
import { Division, Parag, Secao, AddProject } from "./style.ts";
import Card from "../../components/Card/index.tsx";

const Project = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Secao ref={ref}>
      <Division>
        <Texto Text="Projetos" />
        <Parag>
          Aqui você encontrará alguns dos projetos pessoais que criei
        </Parag>
      </Division>
      <AddProject>
        <Card
          title="Rick and Morty"
          paragraph="criei uma pagina sobre o desenho rick e morty ultilizando rotas para caminhar suavemente pelas outras seções consumindo a api publica do rick ulitizei para exibir informações sobre episodios e personagens relacionados"
          img="https://helios-i.mashable.com/imagery/articles/02ECFkvX2rDslH0mE5qXQGn/images-1.fill.size_2000x1125.v1662140047.png"
          NewLInk="https://rick-and-morty-tau-ten.vercel.app/"
          visit="Visite-me"
          github="Github"
          git="https://github.com/PedrinhoSilvah/rick-and-morty"
        />
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

        Utilização de tecnologias html, css, bootstrap e jquery, bem otimizado

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
      </AddProject>
    </Secao>
  );
});

export default Project;
