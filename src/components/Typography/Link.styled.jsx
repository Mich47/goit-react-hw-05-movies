import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { space, typography } from 'styled-system';

export const LinkStyled = styled(Link)`
  display: inline-block;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.black};

  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: underline;

  transition: color var(--animation);
  ${typography}
  ${space}

  &:hover {
    color: ${p => p.theme.colors.primary};
  }
`;
