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
            <NavLinkStyled to="/movies" state="888">
              Movies
            </NavLinkStyled>
          </NavStyled>
        </Container>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
