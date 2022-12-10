import { NavLinkStyled, NavListStyled } from './Header.styled';

export default function Header() {
  return (
    <header>
      <NavListStyled>
        <li>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="movies">Movies</NavLinkStyled>
        </li>
      </NavListStyled>
    </header>
  );
}
