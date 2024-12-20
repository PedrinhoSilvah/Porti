import styled from "styled-components";

export const NickName = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #353b48;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: #6c5ce7;
  }

  @media (max-width: 760px) {
    display: flex;
    font-size: 9px;
  }
`;

export const Imagem = styled.img`
  width: 50px;
  padding-left: 40px;

  @media (max-width: 760px) {
    padding-left: 20px;
  }
`;

export const Cabecalho = styled.header`
  max-width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 45%;
  box-shadow: 2px 2px 5px #f5f6fa;
  border-bottom: 2px solid #f5f6fa;

  @media (max-width: 938px) {
    gap: 30%;
}
`;

export const Navegation = styled.ul`
  display: flex;
  align-items: center;
  gap: 70px;
  list-style: none;
  font-size: 20px;
  font-weight: bold;
  color: #353b48;
  padding-left: 70%;
  @media (max-width: 760px) {
    display: none;
  }

  @media (max-width: 1415px) {
    padding-left: 0;
  }
`;

export const List = styled.li`
  cursor: pointer;
  &:hover {
    color: #6c5ce7;
  }
`;

export const Secao = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f1f2f6;
  font-size: 26px;

  @media (max-width: 760px) {
    font-size: 20px;
  }
`;

export const Paragrafo = styled.p`
  font-size: 20px;

  @media (max-width: 760px) {
    font-size: 16px;
    text-align: center;
  }

  @media (max-width: 1131px) {
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    font-size: 17px;
  }
`;
