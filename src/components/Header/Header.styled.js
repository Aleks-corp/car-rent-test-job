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
  background-color: rgba(11, 68, 205, 1);

  &:hover,
  &:focus {
    background-color: rgba(52, 112, 255, 1);
  }
`;
