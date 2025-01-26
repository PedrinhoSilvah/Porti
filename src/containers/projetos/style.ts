import styled from "styled-components";

export const Secao = styled.section`
  height: 200%;
  background-color: #dcdde1;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 760px) {
    padding-top: 10%;
  }
`;

export const Parag = styled.p`
  font-size: 20px;
  text-align: center;
  color: #555;

  @media (max-width: 760px) {
    font-size: 16px;
    width: 95%;
  }
`;

export const Division = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AddProject = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
`;
