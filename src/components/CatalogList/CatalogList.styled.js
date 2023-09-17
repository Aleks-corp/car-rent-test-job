import styled from "styled-components";

export const CatalogContainer = styled.ul`
  display: flex;
  width: 320px;
  padding: 20px 23px 30px;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 50px 29px;

  @media (min-width: 768px) and (max-width: 1000px) {
    padding: 30px 84px 50px;
    width: 745px;
  }

  @media (min-width: 1000px) and (max-width: 1200px) {
    padding: 50px 55px 70px;
    width: 990px;
  }
  @media (min-width: 1200px) {
    padding: 50px 5px 100px;
    width: 1194px;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  border: 0;
  font-size: 16px;
  font-weight: 500;
  color: #3470ff;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
