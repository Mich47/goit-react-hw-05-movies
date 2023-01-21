import Container from 'components/Container/Container';
import { NavLink, Outlet } from 'react-router-dom';
import { NavLinkStyled, NavStyled } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <header style={{ borderBottom: '1px solid' }}>
        <Container>
          <NavStyled>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </NavStyled>
        </Container>
      </header>
      <Outlet />
    </>
  );
};
export default SharedLayout;
