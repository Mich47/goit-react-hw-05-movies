import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.bold};
  transition: color var(--animation);
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.darkGray};
  }
`;
