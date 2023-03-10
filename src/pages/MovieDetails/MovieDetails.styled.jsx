import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { space, typography } from 'styled-system';

export const LinkStyled = styled(Link)`
  display: inline-block;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.secondary};
  text-transform: capitalize;

  font-weight: ${p => p.theme.fontWeights.bold};

  transition: color var(--animation);
  ${typography}
  ${space}

  &:hover {
    color: ${p => p.theme.colors.primary};
  }
`;
