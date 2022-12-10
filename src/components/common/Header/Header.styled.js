import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavListStyled = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  padding: 30px 15px;
  font-size: 20px;
  color: black;
  text-decoration: none;

  &.active {
    color: blue;
  }
`;
