import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${p => p.theme.colors.darkGray};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: ${p => p.theme.space[2]}px;
  transition: color var(--animation);
  &:hover,
  &:focus,
  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;
