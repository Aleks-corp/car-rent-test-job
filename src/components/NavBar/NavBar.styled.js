import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  width: 210px;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 250px;
  }
`;

export const Item = styled.li``;

export const NavLink = styled(BaseNavLink)`
  text-decoration: none;
  color: #3470ff;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  &.active {
    color: #0b44cd;
    text-decoration: underline;
  }
`;
