import Container from 'components/Container/Container';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
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
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default SharedLayout;
