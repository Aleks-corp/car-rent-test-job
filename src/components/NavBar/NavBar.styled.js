import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  width: 250px;
  justify-content: space-between;
`;

export const Item = styled.li``;

export const NavLink = styled(BaseNavLink)`
  text-decoration: none;
  color: rgba(11, 68, 205, 1);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  &.active {
    color: rgba(52, 112, 255, 1);
    text-decoration: underline;
  }
`;
