import styled from "styled-components";

export const CardD = styled.div`
  width: 550px;
  height: 600px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  font-family: Montserrat, Montserrat-fallback, sans-serif;

  @media (max-width: 760px) {
    width: 350px;
    margin-top: 10%;
  }

  @media (max-width: 983px) {
    display: block;
  }

  @media (max-width: 1224px) {
    height: 700px;
  }
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  padding-left: 10px;

  @media (max-width: 760px) {
    font-size: 25px;
  }
`;

export const Imagem = styled.img`
  width: 100%;
  height: 300px;

  @media (max-width: 1224px) {
    width: 100%;
  }

  @media (max-width: 983px) {
    padding-left: 0;
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const Paragrafo = styled.p`
  font-size: 15px;
  display: flex;
  text-align: start;
  color: #555;
  width: 500px;
  line-height: 1.6;
  padding-left: 10px;

  @media (max-width: 1224px) {
    width: 300px;
    font-size: 17px;
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 760px) {
     width: 300px;
  }

`;

export const Separa = styled.div`
  display: flex;
  flex-direction: column;
  

  @media (max-width: 983px) {
    align-items: center;
    padding-left: 0;
  }
`;

export const DivButton = styled.div`
  display: flex;
  gap: 24px;
  padding-left: 10px;


  @media (max-width: 983px) {
    padding-right: 7%;
  }
`;
