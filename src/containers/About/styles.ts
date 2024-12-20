import styled from "styled-components";

export const Secao = styled.section`
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 760px) {
    padding-top: 60%;
    padding-bottom: 60%;
  }

`;

export const Parag = styled.p`
  font-size: 20px;
  text-align: center;
  color: #555;

  @media (max-width: 760px) {
    font-size: 16px;
    width: 90%;
  }
`;

export const Dev = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -10%;
`;

export const Secti = styled.div`
  width: 100%;
  display: flex;
  gap: 25%;
  justify-content: center;
  padding-top: 50px;
  padding-left: 5%;

  @media (max-width: 760px) {
    display: block;
  }
`;

export const HDou = styled.h2`
  font-size: 26px;

  @media (max-width: 760px) {
    padding-top: 10%;
    padding-bottom: 5%;
  }
`;

export const Separetion = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 760px) {
    width: 95%;
  }
  @media (max-width: 1131px) {
      width: 80%;
    
  }
`;

export const DouParagra = styled.p`
  color: #555;
  font-size: 20px;
  @media (max-width: 760px) {
    width: 90%;
    font-size: 16px;
  }
`;

export const Span = styled.span`
  color: #1e272e;
  font-weight: bold;
`;
