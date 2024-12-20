import { screen } from "@testing-library/react";
import styled from "styled-components";

export const CardD = styled.div`
  width: 1200px;
  height: 600px;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;

  @media (max-width: 760px) {
    margin-top: 10%;
  }

  @media (max-width: 983px) {
    display: block;
  }
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: bold;

  @media (max-width: 760px) {
    font-size: 25px;
  }
`;

export const Imagem = styled.img`
  width: 500px;
  height: 400px;
  padding-left: 10%;

  @media (max-width: 1224px) {
    width: 300px;
    height: 200px;
  }

  @media (max-width: 983px) {
    padding-left: 0;
  }
`;

export const Paragrafo = styled.p`
  font-size: 20px;
  display: flex;
  text-align: start;
  color: #555;

  @media (max-width: 1224px) {
    width: 300px;
    font-size: 17px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Separa = styled.div`
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 983px) {
    align-items: center;
    padding-left: 0;
  }
`;

export const DivButton = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 760px) {
    padding-top: 50px;
    padding-left: 80px;
  }

  @media (max-width: 983px) {
    padding-right: 7%;
  }
`;
