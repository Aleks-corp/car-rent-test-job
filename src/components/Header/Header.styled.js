import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #212121;
  justify-content: space-evenly;
  align-items: center;
`;

export const CallLink = styled.a`
  border-radius: 12px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background-color: #3470ff;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
